import React, {
  useState,
  useEffect,
  useContext
} from 'react'

// # API
import {
// # 取得子資源的資源分佈以及使用狀況
// getVg
// # 取得根資源的總資源分佈
// getResource
// # 取得資源對照表
// getHivedResourceUnit
} from 'utils/api';

import { fakeResourceUnitReq, fakeRootResourceReq, fakeSubResourceReq } from './fakeDetails';

// ^ Material-ui Componets(Functions)
import Typography from '@material-ui/core/Typography';

// ? Self-packed Components || Functions
import BaseSimpleCard from 'components/BaseCard/BaseSimpleCard'
import {  DonutsChart } from 'components/BaseChart';
import Progress from 'components/BaseProgress';
import { theme } from 'theme';
import { handleResourceTimesByType, handlePercentage } from 'common/commonMethods'
import BaseNoData from 'components/BaseNoData'


// ? context
import EntryContext from '../../EntryContext';

// ^ plugins
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
// import PropTypes from 'prop-types';

/**
 * @author odin
 * @level views/Entry/WeeklyUtilHour
 * @component WeeklyUtilHour
 * @description Online number component
*/
export default function WeeklyUtilHour() {

  // $ init data
  const { t } = useTranslation();
  const maxShowGPUNumber = 5;

  // % context
  const { classes, isAdmin } = useContext(EntryContext);

  // # states
  const [subResource, setSubResource] = useState([])
  const [rootResource, setRootResource] = useState({})
  const [resourceUnit, setResourceUnit] = useState({})

  const [subResourceArr, setSubResourceArr] = useState([])
  const [systemResource, setSystemResource] = useState({})
  const [donutData, setDonutData] = useState({})
  const [poolData, setPoolData] = useState({})

  // - methods
  /**
   * @author odin
   * @description Get initialization data from API
  */
  const initData = async () => {
    try {
      // 取得子資源的資源分佈以及使用狀況
      // const subResourceReq = await getVg();
      const subResourceReq = [...fakeSubResourceReq]

      // 取得根資源的總資源分佈
      // const rootResourceReq = await getResource('system');
      const rootResourceReq = { ...fakeRootResourceReq }

      // 取得資源對照表
      // const resourceUnitReq = await getHivedResourceUnit();
      const resourceUnitReq = { ...fakeResourceUnitReq }

      if(subResourceReq){
        setSubResource(subResourceReq);
      }

      if(rootResourceReq){
        setRootResource(rootResourceReq)
      }

      if(resourceUnitReq){
        setResourceUnit(resourceUnitReq)
      }
    } catch (error) {
      toast.error('Error:' + error);
    }
  }

  /**
   * @author odin
   * @description 依據投入的type不同，計算出該資源總使用的數值
  */
  const calculateTotal = (type, arr) => {
    const typeIndex = {
      memory: 0,
      cpu: 1,
      gpu: 2
    }

    const totalUsed = arr.reduce((acc, cur) => {
      const { list } = cur
      const thisResourceNum = list[typeIndex[type]].used

      return acc + thisResourceNum
    }, 0)

    return totalUsed;
  }


  // * hooks
  /**
   * @author odin
   * @description Component Initialization
  */
  useEffect(() => {
    if(isAdmin) initData()
  }, [])

  /**
   * @author odin
   * @type watch
   * @description Watch ${subResource} and data handling
  */
  useEffect(() => {
    let subResourceArray = [];

    if(!isEmpty(subResource) && !isEmpty(resourceUnit)) {

      subResourceArray = subResource.map(item => {

        const { name, cells, usedCells } = item

        const cellsNameArr = Object.keys(cells);
        const usedCellsNameArr = Object.keys(usedCells);

        // 子資源分配到的總資源 -- 個別物件
        const distributedObj = handleResourceTimesByType({
          type: 'distributed',
          targetArr: cellsNameArr,
          cells,
          resourceUnit
        })

        // 子資源已使用的資源 -- 個別物件
        const usedObj = handleResourceTimesByType({
          type: 'used',
          targetArr: usedCellsNameArr,
          cells,
          resourceUnit,
          usedCells
        })

        return {
          name,
          distributedCpu: distributedObj.cpu,
          distributedGpu: distributedObj.gpu,
          distributedMemory: distributedObj.memory,
          usedCpu: usedObj.cpu,
          usedGpu: usedObj.gpu,
          usedMemory: usedObj.memory,
          list: [
            // 記憶體
            {
              title: t('memory'),
              distributed: distributedObj.memory,
              used: usedObj.memory,
              percentage: handlePercentage(usedObj.memory, distributedObj.memory),
              color: theme.progressMemory,
              unit: 'MB'
            },
            // CPU
            {
              title: t('CPU'),
              distributed: distributedObj.cpu,
              used: usedObj.cpu,
              percentage: handlePercentage(usedObj.cpu, distributedObj.cpu),
              color: theme.progressCPU,
              unit: ''
            },
            // GPU
            {
              title: t('GPU'),
              distributed: distributedObj.gpu,
              used: usedObj.gpu,
              percentage: handlePercentage(usedObj.gpu, distributedObj.gpu),
              color: theme.progressGPU,
              unit: ''
            }
          ]
        }
      })

      // 設定過濾完的資料
      setSubResourceArr(subResourceArray);

    }

  }, [subResource, resourceUnit])

  /**
   * @author odin
   * @type watch
   * @description Watch ${rootResource} and data handling
  */
  useEffect(() => {
    if(!isEmpty(rootResource) && !isEmpty(resourceUnit)) {
      const { name, cells } = rootResource;

      const systemCellsNameArr = Object.keys(cells);

      const systemObj = handleResourceTimesByType({
        type: 'distributed',
        targetArr: systemCellsNameArr,
        cells,
        resourceUnit
      })

      const systemResourceObj = {
        name,
        sysCpu: systemObj.cpu,
        sysGpu: systemObj.gpu,
        sysMemory: systemObj.memory
      }

      setSystemResource(systemResourceObj);
    }

  }, [rootResource, resourceUnit])

  /**
   * @author odin
   * @type watch
   * @description 計算資源池 所有的使用的資源 / rootResource
  */
  useEffect(() => {
    if(!isEmpty(systemResource) && !isEmpty(subResourceArr)) {
      const totalUsedCPU = calculateTotal('cpu', subResourceArr)
      const totalUsedGPU = calculateTotal('gpu', subResourceArr)
      const totalUsedMemory = calculateTotal('memory', subResourceArr)

      const poolObj = {
        name: 'pool',
        distributedCpu: systemResource.sysCpu,
        distributedGpu: systemResource.sysGpu,
        distributedMemory: systemResource.sysMemory,
        usedCpu: totalUsedCPU,
        usedGpu: totalUsedGPU,
        usedMemory: totalUsedMemory,
        list: [
          // 記憶體
          {
            title: t('memory'),
            distributed: systemResource.sysMemory,
            used: totalUsedMemory,
            percentage: handlePercentage(totalUsedMemory, systemResource.sysMemory),
            color: theme.progressMemory,
            unit: 'MB'
          },
          // CPU
          {
            title: t('CPU'),
            distributed: systemResource.sysCpu,
            used: totalUsedCPU,
            percentage: handlePercentage(totalUsedCPU, systemResource.sysCpu),
            color: theme.progressCPU,
            unit: ''
          },
          // GPU
          {
            title: t('GPU'),
            distributed: systemResource.sysGpu,
            used: totalUsedGPU,
            percentage: handlePercentage(totalUsedGPU, systemResource.sysGpu),
            color: theme.progressGPU,
            unit: ''
          }
        ]
      }

      setPoolData(poolObj)
    }


  }, [systemResource, subResourceArr])

  /**
   * @author odin
   * @type watch
   * @description Watch ${subResourceArr} and ${systemResource} to compute donutData percentage
   * 如果資料筆數超過6筆以上抓出前5筆顯示
   * 如果有相同數值的內容，且前5筆的資料不滿5筆，則依照 API 傳來的順序為準，其他則歸入其他的分類項目
   * 如果佔比為0(也就是子資源分配到的GPU為0)，則不顯示該筆資料
  */
  useEffect(() => {
    if(!isEmpty(subResourceArr) && !isEmpty(systemResource)) {

      let data = [{ name: '', y:1 }] // Defalut Chart Data
      const totalGPU = +systemResource.sysGpu

      // - 計算出前5筆以及其他的資料

      // 過濾完配佔比是 0 的項目，再依照 GPU佔比 從大排到小
      const filterArr = subResourceArr
        .filter(item => item.distributedGpu > 0)
        .sort((a, b) => (b.distributedGpu - a.distributedGpu));

      // 尚未超過 5 筆
      if(filterArr.length <= 5) {
        data = filterArr.map(item => ({
          name: item.name,
          y: +(item.distributedGpu / totalGPU).toFixed(2)
        }))
      } else {
        // 超過 5 筆以上剩下的都分類到其他這個類別
        const top5 = filterArr.slice(0, maxShowGPUNumber)
        const other = filterArr.slice(maxShowGPUNumber, filterArr.length)

        const top5Data = top5.map((item) => ({
          name: item.name,
          y: +(item.distributedGpu / totalGPU).toFixed(2)
        }))

        const totalOther = other.reduce((acc, cur) => (acc + cur.distributedGpu), 0)

        data = [...top5Data, {
          name: 'other',
          y: +(totalOther / totalGPU).toFixed(2) }
        ];
      }

      // - 計算未分配的佔比，若分配率與根資源 GPU 資料相同則不新增未分配的項目
      const totalDistributedGPU = filterArr.reduce((acc, cur) => (acc + cur.distributedGpu), 0)

      if(totalDistributedGPU !== totalGPU && totalDistributedGPU < totalGPU) {
        const diff = +(totalGPU - totalDistributedGPU).toFixed(2)

        data.push({
          name: t('unallocated'),
          y: +(diff / totalGPU).toFixed(2),
          color: theme.defaultChartTrailColor
        })
      }

      setDonutData(data)
    }

  }, [subResourceArr, systemResource])

  return (
    <div className={classes.clusterStatusContainer}>

      <BaseSimpleCard
        cardTitle={`${t('vitualCluster')}${t('status')}`}
      >
        <div className={classes.clusterStatusContent}>

          <div className={classes.clusterStatusChart}>
            <Typography
              className={classes.clusterStatusChartTitle}
              component="div"
              variant="subtitle2"
            >
              { `${t('GPU')} ${t('allocationRate')}` }
            </Typography>

            {
              isEmpty(subResourceArr) ? (
                <BaseNoData
                  text={`${t('thereIsNo', { name: t('data') })}`}
                />
              ) : (
                // DonutsChart
                <DonutsChart
                  options={{
                    chart: {
                      type: 'variablepie',
                      height: 250
                    },
                    title: null,
                    tooltip: {
                      headerFormat: '',
                      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                  'Ratio: <b>{point.y}</b>'
                    },
                    plotOptions: {
                      variablepie: {
                        allowPointSelect: false,
                        cursor: 'pointer',
                        size: 400,
                        showInLegend: false,
                        colors: theme.gpuUtilRateDonutColor
                      }
                    },
                    series: [{
                      name: `${t('GPU')} ${t('useRate')}`,
                      colorByPoint: true,
                      innerSize: '20%',
                      zMin: 0,
                      data: donutData
                      // data: [{ name: 'test', y: 0.9, color: '#000000' }, { name: 'test2', y: 0.1 }]
                    }]
                  }}
                />
              )
            }
          </div>

          <div className={classes.clusterStatusTable}>

            {/* 表頭 */}
            <div
              className={`${classes.clusterStatusLine}`}
              key={'head'}
            >

              <Typography
                className={`${classes.clusterStatusLineName}`}
                component="div"
                variant="h6"
              >
                {`${t('vitualCluster')}${t('name')}`}
              </Typography>

              <Typography
                className={`${classes.clusterStatusLineDetail}`}
                component="div"
                variant="h6"
              >
                {`${t('detail')}`}
              </Typography>

            </div>

            {/* 單一個內容 */}
            {
              isEmpty(subResourceArr) ? (
                // 沒有資料的時候
                <BaseNoData
                  text={`${t('thereIsNo', { name: t('data') })}`}
                />
              ) : (
                <>
                  {/* 資源池 */}
                  <div
                    className={`${classes.clusterStatusLine}`}
                    key={poolData.name}
                  >

                    <Typography
                      className={classes.clusterStatusLineName}
                      component="div"
                      variant="h6"
                    >
                      {t('pool')}
                    </Typography>

                    <div className={`${classes.clusterStatusLineDetail} ${classes.clusterStatusLineDetailFixing}`}>

                      {
                        !isEmpty(poolData) && (
                          poolData.list.map(item => (
                            <Progress
                              key={item.title}
                              progressColor={item.color}
                              style={{ padding: '8px 0', width: '100%'  }}
                              title={item.title}
                              total={item.distributed}
                              unit={item.unit}
                              value={item.used}
                            />
                          ))
                        )
                      }
                    </div>

                  </div>

                  {/* 回圈的動態資料跑出來 */}
                  {
                    subResourceArr.map((vgItem) => (
                      <div
                        className={`${classes.clusterStatusLine}`}
                        key={vgItem.name}
                      >

                        <Typography
                          className={classes.clusterStatusLineName}
                          component="div"
                          variant="h6"
                        >
                          {vgItem.name}
                        </Typography>

                        <div className={`${classes.clusterStatusLineDetail} ${classes.clusterStatusLineDetailFixing}`}>

                          {
                            !isEmpty(vgItem) && (
                              vgItem.list.map(item => (
                                <Progress
                                  key={item.title}
                                  progressColor={item.color}
                                  style={{ padding: '8px 0', width: '100%'  }}
                                  title={item.title}
                                  total={item.distributed}
                                  unit={item.unit}
                                  value={item.used}
                                />
                              ))
                            )
                          }
                        </div>

                      </div>
                    ))
                  }
                </>
              )
            }

          </div>

        </div>

      </BaseSimpleCard>

    </div>
  )
}

WeeklyUtilHour.propTypes = {
  // containerClass: PropTypes.string,
}