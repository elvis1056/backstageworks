import React, { useState, useEffect, useCallback } from 'react';

// ^ Material-ui Componets(Functions)
import Icon from '@material-ui/core/Icon';
import { Refresh } from '@material-ui/icons';

// ? Self-packed Components || Functions
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import BasePanel from 'components/BasePanel';
import ClusterOverview from './ClusterOverview';
import UseRate from './UseRate';
import CycleBar from './CycleBar'
import { computeVgOverviewData, computeVgOverviewDataForExportCsv, exportCsv } from './utils';
import { parseNormalFormat, parseGBFormat, parseKBFormat, computeDayRange } from '../../utils';
import { getVg, getHardwareInfoRange, getHivedResourceUnit, getResource } from 'utils/api';
import { useCheckPrivilege } from 'utils/hooks/useCheckPrivilege';

// % styles
import tabStyles from './index.module.scss';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  marginRight10: {
    marginRight: 10
  },
  heightAuto: {
    height: 'auto'
  }
}))

// ^ plugins
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import { fakeVgData, fakeResource, fakeResourceUnit } from './fakeData';
import { fakeCpu, fakeMemoryUsed, fakeMemoryTotal, fakeMemoryBuffer, fakeGpu, fakeGpuMemory, fakeNetworkReceive, fakeNetworkTransmit, fakeDiskRead, fakeDiskWritten } from './fakePrometheus';

/**
 * @author elvis
 * @level views/ClusterReport/Cluster
 * @component Cluster
 * @description Cluster content component
*/
const ClusterTab = ({ duration }) => {

  // $ init data
  const { t } = useTranslation();
  const permission = useCheckPrivilege('ADMIN');
  const history = useHistory();


  // = styles
  const classes = useStyles();

  // # states
  const [vgInfo, setVgInfo] = useState({});
  const [vgRawData, setVgRawData] = useState([]);
  const [useRate, setUseRate] = useState();
  const [cycle, setCycle] = useState({ key: 'today' });

  // - methods
  const getVgInfo = (param = 'system') => {

    setVgInfo(computeVgOverviewData(fakeVgData, fakeResource, fakeResourceUnit, t))
    setVgRawData(computeVgOverviewDataForExportCsv(fakeVgData, fakeResourceUnit))

    const close = true;
    if (close) return;

    Promise.all([getVg(), getHivedResourceUnit(), getResource(param)])
      .then(([vgData, resourceUnits, resource]) => {
        setVgInfo(computeVgOverviewData(vgData, resource, resourceUnits, t))
        setVgRawData(computeVgOverviewDataForExportCsv(vgData, resourceUnits));
      })
      .catch(err => {
        toast.error(err.data ? err.data.message : err.toString())
      })
  }

  const getUseRate = useCallback(() => {
    const query = computeDayRange(cycle);

    const cpu = !isEmpty(fakeCpu.data.result[0]) ? fakeCpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
    const memoryTotal = !isEmpty(fakeMemoryTotal.data.result[0]) ? fakeMemoryTotal.data.result[0].values.map(value => value.map(parseGBFormat)) : []
    const memoryUsed = !isEmpty(fakeMemoryUsed.data.result[0]) ? fakeMemoryUsed.data.result[0].values.map(value => value.map(parseGBFormat)) : []
    const memoryBuffer = !isEmpty(fakeMemoryBuffer.data.result[0]) ? fakeMemoryBuffer.data.result[0].values.map(value => value.map(parseGBFormat)) : []
    const gpu = !isEmpty(fakeGpu.data.result[0]) ? fakeGpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
    const gpuMemory = !isEmpty(fakeGpuMemory.data.result[0]) ? fakeGpuMemory.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
    const networkReceive = !isEmpty(fakeNetworkReceive.data.result[0]) ? fakeNetworkReceive.data.result[0].values.map(value => value.map(parseKBFormat)) : []
    const networkTransmit = !isEmpty(fakeNetworkTransmit.data.result[0]) ? fakeNetworkTransmit.data.result[0].values.map(value => value.map(parseKBFormat)) : []
    const diskRead = !isEmpty(fakeDiskRead.data.result[0]) ? fakeDiskRead.data.result[0].values.map(value => value.map(parseKBFormat)) : []
    const diskWritten = !isEmpty(fakeDiskWritten.data.result[0]) ? fakeDiskWritten.data.result[0].values.map(value => value.map(parseKBFormat)) : []

    setUseRate({ cpu, memoryTotal, memoryUsed, memoryBuffer, gpu, gpuMemory, networkReceive, networkTransmit, diskRead, diskWritten })

    const close = true;
    if (close) return

    Promise.all([
      getHardwareInfoRange({
        query: '100 - avg (irate(node_cpu_seconds_total{mode="idle"}[300s])) * 100',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(node_memory_MemTotal_bytes) - sum(node_memory_MemFree_bytes) - sum(node_memory_Buffers_bytes) - sum(node_memory_Cached_bytes)',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(node_memory_MemFree_bytes)',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(node_memory_Buffers_bytes) + sum(node_memory_Cached_bytes)',
        ...query
      }),
      getHardwareInfoRange({
        query: 'avg(gpu_mem_utilization)',
        ...query
      }),
      getHardwareInfoRange({
        query: 'avg(gpu_utilization)',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(rate(node_network_receive_bytes_total{device!~"lo"}[300s]))',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(rate(node_network_transmit_bytes_total{device!~"lo"}[300s]))',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(rate(node_disk_read_bytes_total[300s]))',
        ...query
      }),
      getHardwareInfoRange({
        query: 'sum(rate(node_disk_written_bytes_total[300s]))',
        ...query
      })
    ]).then(([cpu, memoryUsed, memoryTotal, memoryBuffer, gpu, gpuMemory, networkReceive, networkTransmit, diskRead, diskWritten]) => {
      cpu = !isEmpty(cpu.data.result[0]) ? cpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
      memoryTotal = !isEmpty(memoryTotal.data.result[0]) ? memoryTotal.data.result[0].values.map(value => value.map(parseGBFormat)) : []
      memoryUsed = !isEmpty(memoryUsed.data.result[0]) ? memoryUsed.data.result[0].values.map(value => value.map(parseGBFormat)) : []
      memoryBuffer = !isEmpty(memoryBuffer.data.result[0]) ? memoryBuffer.data.result[0].values.map(value => value.map(parseGBFormat)) : []
      gpu = !isEmpty(gpu.data.result[0]) ? gpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
      gpuMemory = !isEmpty(gpuMemory.data.result[0]) ? gpuMemory.data.result[0].values.map(value => value.map(parseNormalFormat)) : []
      networkReceive = !isEmpty(networkReceive.data.result[0]) ? networkReceive.data.result[0].values.map(value => value.map(parseKBFormat)) : []
      networkTransmit = !isEmpty(networkTransmit.data.result[0]) ? networkTransmit.data.result[0].values.map(value => value.map(parseKBFormat)) : []
      diskRead = !isEmpty(diskRead.data.result[0]) ? diskRead.data.result[0].values.map(value => value.map(parseKBFormat)) : []
      diskWritten = !isEmpty(diskWritten.data.result[0]) ? diskWritten.data.result[0].values.map(value => value.map(parseKBFormat)) : []

      setUseRate({ cpu, memoryTotal, memoryUsed, memoryBuffer, gpu, gpuMemory, networkReceive, networkTransmit, diskRead, diskWritten })
    })
  }, [cycle])

  // * hook
  useEffect(() => {
    getVgInfo()
    getUseRate()

    // ???????????????????????????
    if (cycle.key !== 'custom') {
      const timer = setInterval(() => {
        getVgInfo()
        getUseRate()
      }, 30000);

      return () => clearInterval(timer)
    }

  }, [cycle])

  useEffect(() => {
    if (permission === null) return;
    if (!permission) {
      history.push('entry')
    }
  }, [permission])

  /**
   * @author odin
   * @description ??????duration??? props ???????????????????????????????????? duration ???cycle????????????????????????????????????
  */
  useEffect(() => {
    if (duration && duration !== ''){
      setCycle({ key: duration });
    }
  }, [duration])

  return (
    <>
      <div>
        <PrimaryButton
          children={`${t('Export')}${t('enSpace')}Excel`}
          classes={{
            root: classes.marginRight10,
            startIcon: classes.iconClearMarginLeft
          }}
          onClick={() => exportCsv(vgRawData, useRate)}
          startIcon={<Icon>file_download</Icon>}
        />
        <DefaultButton
          children={t('refresh')}
          onClick={() => {
            getVgInfo()
            getUseRate()
          }}
          startIcon={<Refresh />}
        />
      </div>
      <div className={tabStyles.pt20}>
        <BasePanel
          title={`${t('resource')}${t('enSpace')}${t('status')}`}
        >
          <ClusterOverview
            data={vgInfo}
          />
        </BasePanel>
        <BasePanel
          style={{ paddingTop: 20 }}
          title={t('Utilization')}
        >
          <CycleBar
            duration={duration}
            onChange={setCycle}
          />
          <UseRate
            data={useRate}
          />
        </BasePanel>
      </div>
    </>
  );
};

export default ClusterTab;

ClusterTab.propTypes = {
  duration: PropTypes.string
}