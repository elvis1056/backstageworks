import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import { Refresh } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import BasePanel from 'components/BasePanel';
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import CycleBar from './CycleBar';
import UseRate from './UseRate';
import GpuInfo from './GpuInfo';
import { exportCsv } from './utils';


import { parseNormalFormat, computeDayRange, parseGBFormat, parseKBFormat, parseNormalFormatGreaterthan0 } from '../../../../utils';
import { getTotalHostInfo, getHardwareInfoRange, getHardwareInfo } from 'utils/api';

import tabStyles from './index.module.scss';

import {
  fakeHostInfo,
  fakenode_cpu_seconds_total,
  fakenode_memory_MemTotal_bytes,
  fakenode_memory_MemFree_bytes,
  fakenode_memory_Buffers_bytes,
  fakenvidiasmi_utilization_gpu,
  fakenvidiasmi_utilization_memory,
  fakenode_disk_read_bytes_total,
  fakenode_disk_written_bytes_total,
  fakenode_network_receive_bytes_total,
  fakenode_network_transmit_bytes_total,
  fakeconfigured_gpu_count,
  fakenvidiasmi_utilization_gpuminor_number,
  fakenvidiasmi_utilization_memoryminor_number
} from './fakePrometheus';
// fakeTotalGpuCount, fakeUnameInfo

const useStyles = makeStyles(() => ({
  marginRight10: {
    marginRight: 10
  },
  heightAuto: {
    height: 'auto'
  }
}))

const SingleNodeTab = (props) => {
  const queryUrlParam = new URLSearchParams(window.location.search);
  const history = useHistory();
  const { setIsIndexPage, isIndexPage } = props
  const { t } = useTranslation();
  const classes = useStyles();
  const [cycle, setCycle] = useState({ key: 'today', step: 30 });
  const [totalHost, setTotalHost] = useState([]);
  const [useRate, setUseRate] = useState();
  const [gpuInfo, setGpuInfo] = useState();
  const [gpuCount, setGpuCount] = useState('0');
  const [activeInstance, setActiveInstance] = useState(null);

  const getHostname = host => host.split(':', 1)[0];

  const getHostInfo = (activeInstance) => {
    const query = computeDayRange(cycle)

    const getTotaleHost = fakeHostInfo.data.map(host => {
      return (
        {
          key: getHostname(host.instance),
          text: getHostname(host.instance)
        }
      )
    })
    setTotalHost(getTotaleHost)

    if (activeInstance) {
      getUseRate(activeInstance)
      getTotalGpuCount(activeInstance)
      setIsIndexPage({
        index: true,
        host: activeInstance
      })
      setActiveInstance(activeInstance)
    } else {
      const instance = getHostname(fakeHostInfo.data[0].instance)
      getUseRate(instance)
      getTotalGpuCount(instance)
      setIsIndexPage({
        index: true,
        host: instance
      })
    }

    const close = true;
    if (close) return;

    getTotalHostInfo({
      'match[]': 'node_uname_info',
      ...query
    })
      .then(hostInfo => {
        const getTotaleHost = hostInfo.data.map(host => {
          return (
            {
              key: getHostname(host.instance),
              text: getHostname(host.instance)
            }
          )
        })
        setTotalHost(getTotaleHost)

        if (activeInstance) {
          getUseRate(activeInstance)
          getTotalGpuCount(activeInstance)
          setIsIndexPage({
            index: true,
            host: activeInstance
          })
          setActiveInstance(activeInstance)
        } else {
          const instance = getHostname(hostInfo.data[0].instance)
          getUseRate(instance)
          getTotalGpuCount(instance)
          setIsIndexPage({
            index: true,
            host: instance
          })
        }
      })
      .catch(err => {
        toast.error('Error: ' + err.message)
      })
  }

  const getTotalGpuCount = (hostInstance) => {
    const query = computeDayRange(cycle);

    const instance = (fakeconfigured_gpu_count.data.result[0] !== undefined) ? fakeconfigured_gpu_count.data.result[0].metric.instance : '';
    const gpuCount = (fakeconfigured_gpu_count.data.result[0] !== undefined) ? fakeconfigured_gpu_count.data.result[0].value[1] : 0;
    setGpuCount(gpuCount)
    getTotalGpu(instance, gpuCount)

    const close = true;
    if (close) return;

    getHardwareInfo({
      query: `configured_gpu_count{instance=~"${hostInstance}(:[0-9]*)?$"}`,
      time: query.end
    }).then((gpuCountInfo) => {
      const instance = (gpuCountInfo.data.result[0] !== undefined) ? gpuCountInfo.data.result[0].metric.instance : '';
      const gpuCount = (gpuCountInfo.data.result[0] !== undefined) ? gpuCountInfo.data.result[0].value[1] : 0;
      setGpuCount(gpuCount)
      getTotalGpu(instance, gpuCount)
    })
  }

  const getTotalGpu = async(instance, gpuCount) => {
    // const query = computeDayRange(cycle);
    const result = [];
    for (let i = 0; i < gpuCount; i++) {

      const gpuName = `GPU Utilization ${!isEmpty(fakenvidiasmi_utilization_gpuminor_number.data.result) && fakenvidiasmi_utilization_gpuminor_number.data.result[0].metric.minor_number}`
      const memoryName = `GPU Memory Utilization ${!isEmpty(fakenvidiasmi_utilization_memoryminor_number.data.result) && fakenvidiasmi_utilization_memoryminor_number.data.result[0].metric.minor_number}`
      const gpu = !isEmpty(fakenvidiasmi_utilization_gpuminor_number.data.result) && fakenvidiasmi_utilization_gpuminor_number.data.result[0].values.map(value => value.map(parseNormalFormat))
      const memory =  !isEmpty(fakenvidiasmi_utilization_memoryminor_number.data.result) && fakenvidiasmi_utilization_memoryminor_number.data.result[0].values.map(value => value.map(parseNormalFormatGreaterthan0))
      result.push({ gpu, memory, gpuName, memoryName })

      const close = true;
      if (close) return

      // let [gpu, memory, gpuName, memoryName] = await Promise.all([
      //   getHardwareInfoRange({
      //     query: `nvidiasmi_utilization_gpu{instance="${instance}",minor_number="${i}"}`,
      //     ...query
      //   }),
      //   getHardwareInfoRange({
      //     query: `nvidiasmi_utilization_memory{instance="${instance}",minor_number="${i}"}`,
      //     ...query
      //   })
      // ])
      // gpuName = `GPU Utilization ${!isEmpty(gpu.data.result) && gpu.data.result[0].metric.minor_number}`
      // memoryName = `GPU Memory Utilization ${!isEmpty(gpu.data.result) && gpu.data.result[0].metric.minor_number}`
      // gpu = !isEmpty(gpu.data.result) && gpu.data.result[0].values.map(value => value.map(parseNormalFormat))
      // memory =  !isEmpty(memory.data.result) && memory.data.result[0].values.map(value => value.map(parseNormalFormatGreaterthan0))
      // result.push({ gpu, memory, gpuName, memoryName })
    }
    setGpuInfo(result)
  }

  const getUseRate = (hostInstance) => {
    const query = computeDayRange(cycle)

    const cpu = (fakenode_cpu_seconds_total.data.result[0] !== undefined) ? fakenode_cpu_seconds_total.data.result[0].values.map(value => value.map(parseNormalFormat)) : [];
    const memoryTotal = (fakenode_memory_MemTotal_bytes.data.result[0] !== undefined) ? fakenode_memory_MemTotal_bytes.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
    const memoryUsed = (fakenode_memory_MemFree_bytes.data.result[0] !== undefined) ? fakenode_memory_MemFree_bytes.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
    const memoryBuffer = (fakenode_memory_Buffers_bytes.data.result[0] !== undefined) ? fakenode_memory_Buffers_bytes.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
    const gpu = (fakenvidiasmi_utilization_gpu.data.result[0] !== undefined) ? fakenvidiasmi_utilization_gpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : [];
    const gpuMemory = (fakenvidiasmi_utilization_memory.data.result[0] !== undefined) ? fakenvidiasmi_utilization_memory.data.result[0].values.map(value => value.map(parseNormalFormatGreaterthan0)) : [];
    const diskRead = (fakenode_disk_read_bytes_total.data.result[0] !== undefined) ? fakenode_disk_read_bytes_total.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
    const diskWritten = (fakenode_disk_written_bytes_total.data.result[0] !== undefined) ? fakenode_disk_written_bytes_total.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
    const networkReceive = (fakenode_network_receive_bytes_total.data.result[0] !== undefined) ? fakenode_network_receive_bytes_total.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
    const networkTransmit = (fakenode_network_transmit_bytes_total.data.result[0] !== undefined) ? fakenode_network_transmit_bytes_total.data.result[0].values.map(value => value.map(parseKBFormat)) : [];

    setUseRate({ fakeHostInfo, cpu, memoryTotal, memoryUsed, memoryBuffer, gpu, gpuMemory, diskRead, diskWritten, networkReceive, networkTransmit })

    const close = true;
    if (close) return;

    Promise.all([
      getTotalHostInfo({
        'match[]': 'node_uname_info',
        ...query
      }),
      getHardwareInfoRange({
        query: `100 - (avg by (instance)(irate(node_cpu_seconds_total{mode="idle",instance=~"${hostInstance}(:[0-9]*)?$"}[300s])) * 100)`,
        ...query
      }),
      getHardwareInfoRange({
        query: `node_memory_MemTotal_bytes{instance=~'${hostInstance}(:[0-9]*)?$'} - node_memory_MemFree_bytes - node_memory_Buffers_bytes - node_memory_Cached_bytes`,
        ...query
      }),
      getHardwareInfoRange({
        query: `node_memory_MemFree_bytes{instance=~'${hostInstance}(:[0-9]*)?$'}`,
        ...query
      }),
      getHardwareInfoRange({
        query: `node_memory_Buffers_bytes{instance=~'${hostInstance}(:[0-9]*)?$'} + node_memory_Cached_bytes`,
        ...query
      }),
      getHardwareInfoRange({
        query: `avg(nvidiasmi_utilization_gpu{instance=~"${hostInstance}(:[0-9]*)?$"})`,
        ...query
      }),
      getHardwareInfoRange({
        query: `avg(nvidiasmi_utilization_memory{instance=~"${hostInstance}(:[0-9]*)?$"})`,
        ...query
      }),
      getHardwareInfoRange({
        query: `sum(rate(node_disk_read_bytes_total{instance=~"${hostInstance}(:[0-9]*)?$"}[300s]))`,
        ...query
      }),
      getHardwareInfoRange({
        query: `sum(rate(node_disk_written_bytes_total{instance=~"${hostInstance}(:[0-9]*)?$"}[300s]))`,
        ...query
      }),
      getHardwareInfoRange({
        query: `sum(rate(node_network_receive_bytes_total{instance=~"${hostInstance}(:[0-9]*)?$"}[300s]))`,
        ...query
      }),
      getHardwareInfoRange({
        query: `sum(rate(node_network_transmit_bytes_total{instance=~"${hostInstance}(:[0-9]*)?$"}[300s]))`,
        ...query
      })
    ]).then(([host, cpu, memoryUsed, memoryTotal, memoryBuffer, gpu, gpuMemory, diskRead, diskWritten, networkReceive, networkTransmit]) => {
      cpu = (cpu.data.result[0] !== undefined) ? cpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : [];
      memoryTotal = (memoryTotal.data.result[0] !== undefined) ? memoryTotal.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
      memoryUsed = (memoryUsed.data.result[0] !== undefined) ? memoryUsed.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
      memoryBuffer = (memoryBuffer.data.result[0] !== undefined) ? memoryBuffer.data.result[0].values.map(value => value.map(parseGBFormat)) : [];
      gpu = (gpu.data.result[0] !== undefined) ? gpu.data.result[0].values.map(value => value.map(parseNormalFormat)) : [];
      gpuMemory = (gpuMemory.data.result[0] !== undefined) ? gpuMemory.data.result[0].values.map(value => value.map(parseNormalFormatGreaterthan0)) : [];
      diskRead = (diskRead.data.result[0] !== undefined) ? diskRead.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
      diskWritten = (diskWritten.data.result[0] !== undefined) ? diskWritten.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
      networkReceive = (networkReceive.data.result[0] !== undefined) ? networkReceive.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
      networkTransmit = (networkTransmit.data.result[0] !== undefined) ? networkTransmit.data.result[0].values.map(value => value.map(parseKBFormat)) : [];
      setUseRate({ host, cpu, memoryTotal, memoryUsed, memoryBuffer, gpu, gpuMemory, diskRead, diskWritten, networkReceive, networkTransmit })
    })
  }

  useEffect(() => {
    const instance = queryUrlParam.get('instance');
    getHostInfo(instance)
  }, [])

  return (
    <div>
      <div>
        <CycleBar
          activeInstance={activeInstance}
          getTotalGpuCount={getTotalGpuCount}
          getUseRate={getUseRate}
          isIndexPage={isIndexPage}
          setActiveInstance={setActiveInstance}
          setCycle={setCycle}
          setIsIndexPage={setIsIndexPage}
          totalHost={totalHost}
        />
      </div>
      <div>
        <PrimaryButton
          children={`${t('Export')}${t('enSpace')}Excel`}
          classes={{
            root: classes.marginRight10,
            startIcon: classes.iconClearMarginLeft
          }}
          onClick={() => exportCsv({ gpuInfo, useRate, hostName: isIndexPage.host })}
          startIcon={<Icon>file_download</Icon>}
        />
        <DefaultButton
          children={`${t('view')}${t('enSpace')}${t('Jobs')}`}
          classes={{
            root: classes.marginRight10,
            startIcon: classes.iconClearMarginLeft
          }}
          disabled
          onClick={() => {
            setIsIndexPage({
              index: false,
              host: isIndexPage.host
            })
            if (activeInstance) {
              history.push({ search: `?tab=singleNode&instance=${activeInstance}` })
            }
          }}
          startIcon={<Icon>visibility</Icon>}
        />
        <DefaultButton
          children={t('refresh')}
          onClick={() => {
            getUseRate(isIndexPage.host)
            getTotalGpuCount(isIndexPage.host)
          }}
          startIcon={<Refresh />}
        />
      </div>
      {
        gpuInfo && gpuInfo[0] && gpuInfo[0].gpu &&
        <div>
          <BasePanel
            style={{ paddingTop: 20 }}
            title={`${t('GPU')}${t('enSpace')}${t('info')}`}
          >
            <GpuInfo
              data={gpuInfo}
              gpuCount={gpuCount}
            />
          </BasePanel>
        </div>
      }
      <div className={tabStyles.pt20}>
        <BasePanel
          style={{ paddingTop: 20 }}
          title={t('Utilization')}
        >
          <UseRate
            data={useRate}
          />
        </BasePanel>
      </div>
    </div>
  );
};

SingleNodeTab.propTypes = {
  setIsIndexPage: PropTypes.func,
  isIndexPage: PropTypes.object
}

export default SingleNodeTab;
