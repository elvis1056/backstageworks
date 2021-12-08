import React, { useState, useEffect, useCallback } from 'react';

// # API
import {
// getCurrentUserInfo
// getCustomizedSystemParam,
// getUserNotices,
// getXdfsIsEnabled
// # 取得資源對照表
// getHivedResourceUnit
// # 取得可以使用的 Vg 資源對照表
// getCanUseVirtualGroups
} from 'utils/api';

// ? context
import GlobalContext from './GlobalContext';

// ? Self-packed Components || Functions
import { PageHeader, SideBar } from './components';

// ? style
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import './Main.scss';

// ^ plugins
import PropTypes from 'prop-types';
import { isEmpty, find, isNull } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import cookies from 'js-cookie';

import { fakeResourceUnit } from './fakeData';

/**
 * @author elvis
 * @level layouts/Main
 * @component Main
 * @description Main Component
*/
const Main = ({ children }) => {

  // $init data
  const defaultUser = cookies.get('user');

  // # states
  const [userInfo, setUserInfo] = useState({});
  const [locale, setLocale] = useState('zh-CN');
  const [systemSetting, setSystemSetting] = useState([]);
  const [systemSettingUrl, setSystemSettingUrl] = useState('');
  const [isXdfsEnabled, setIsXdfsEnabled] = useState();

  // Notication
  const [noticeList, setNoticeList] = useState([]);
  const [socketClient, setSocketClient] = useState(null);

  // 資源對照表相關
  const [resourceUnit, setResourceUnit] = useState({})
  const [canUseVgList, setCanUseVgList] = useState([])
  const [isReGetCanUseVg, setIsReGetCanUseVg] = useState(true)

  // - methods
  /**
   * @author elvis
   * @param {string} user -- User name
   * @description 取得使用者資料
  */
  const getUserInfo = async () => {
    // user做預設
    // user = user || defaultUser

    try {
      // const userInfoReq = await getCurrentUserInfo(user)
      const userInfoReq = { 'username':'admin', 'userCode':null, 'name':null, 'email':null, 'phone':null, 'description':null, 'roles':['admin'], 'privileges':['ADMIN'], 'state':1, 'leaderGroups':['system', 'qwe', 'A2'], 'userGroups':['system'], 'virtualGroups':['nick', 'nick2', 'test', 'rtx'], 'nfsList':['ass', 'xfsquota3', 'nfs2', 'qwer', 'sdsdsd', 'admin', 'elvis', 'xfsquaota', 'dododo'], 'glusterfsList':['qqqqqqq', 'glusterfs'], 'xdfsList':['xdfs', 'admin'], 'lastSigninDate':1636696393988 }

      if(userInfoReq && !isEmpty(userInfoReq)){
        const thisUserInfo = {
          ...userInfoReq,
          admin: userInfoReq.privileges.find(item => item === 'ADMIN') !== undefined ? 'true' : false
        }
        setUserInfo(thisUserInfo)
      }
    } catch (err) {
      const msg = err.data ? err.data.message : err.toString();
      toast.error(msg);
    }
  }

  /**
   * @author elvis
   * @description 取得使用者資料
  */
  const getSystemSetting = async () => {
    try {
      // const systemSettingReq = await getCustomizedSystemParam()
      const systemSettingReq = []
      if(systemSettingReq && !isEmpty(systemSettingReq)){
        setSystemSetting(systemSettingReq);

        setSystemSettingUrl(!isEmpty(find(systemSettingReq, el => el.key === 'helper')) ? find(systemSettingReq, el => el.key === 'helper').value : 'http://docs.aiserver.cn/');
      }
    } catch (err) {
      const msg = err.data ? err.data.message : err.toString();
      toast.error(msg);
    }
  }

  /**
   * @author elvis
   * @description 取得個人通知列表
  */
  const getNotices = async () => {
    // const { username } = userInfo;

    try {
      // const list = await getUserNotices(username)
      const list = []

      if(list && !isEmpty(list)){
        setNoticeList(list);
      }

    } catch (err) {
      const msg = err?.data ? err?.data?.message : err?.toString();
      toast.error(msg);
    }
  }

  /**
   * @author elvis
   * @param {string} username -- 使用者名稱
   * @description 取得可以使用的集群列表
  */
  const getCanUseVgList = async () => {
    // username
    try {
      // const list = await getCanUseVirtualGroups(username)
      const list = []

      if(list && !isEmpty(list)){
        // console.log('Main getCanUseVgList list', list)
        setCanUseVgList(list);
      }

    } catch (err) {
      const msg = err?.data ? err?.data?.message : err?.toString();
      toast.error(msg);
    }

    // 設定為 false 不會再打一次 API
    setIsReGetCanUseVg(false)
  }

  /**
   * @author elvis
   * @param {string} vgName -- 特定的集群名稱
   * @param {string} cellName -- 該集群內的 cell 名稱
   * @param {number} limitedNumber -- 非必填，從 API 拿來的限制數量
   * @description 取得該資源的詳細資訊
   * @returns {object}
  */
  const getResource = useCallback((
    vgName,
    cellName,
    limitedNumber
  ) => {
    if(!isEmpty(resourceUnit) && !isEmpty(canUseVgList)){
      // console.log('getResource resourceUnit', resourceUnit)
      // console.log('getResource canUseVgList', canUseVgList)

      let usedNumber = 0;

      const vgObj = canUseVgList.find(item => item.name === vgName)

      const { cells, usedCells } = vgObj

      const {
        number: totalNumber,
        resourceUnit: cellUnitType
      } = cells[cellName]

      const { cpu, gpu, memory } = resourceUnit[cellUnitType]

      if(!isNull(usedCells)) {
        usedNumber = usedCells[vgName]
      }

      const remainNumber = totalNumber - usedNumber

      return {
        vgName,
        cellName,
        unit: { cpu, gpu, memory },
        unitStr: `${gpu} GPU, ${cpu}CPU, ${(memory / 1024).toFixed(0)}G RAM`,
        used: {
          cpu: cpu * usedNumber,
          gpu: gpu * usedNumber,
          memory: memory * usedNumber,
          number: usedNumber,
          str: `${gpu * usedNumber} GPU, ${cpu * usedNumber}CPU, ${((memory  * usedNumber) / 1024).toFixed(0)}G RAM`
        },
        remain: {
          cpu: cpu * remainNumber,
          gpu: gpu * remainNumber,
          memory: memory * remainNumber,
          number: remainNumber,
          str: `${gpu * remainNumber} GPU, ${cpu * remainNumber}CPU, ${((memory  * remainNumber) / 1024).toFixed(0)}G RAM`
        },
        total: {
          cpu: cpu * totalNumber,
          gpu: gpu * totalNumber,
          memory: memory * totalNumber,
          number: totalNumber,
          str: `${gpu * totalNumber} GPU, ${cpu * totalNumber}CPU, ${((memory  * totalNumber) / 1024).toFixed(0)}G RAM`
        },
        limit: {
          cpu: limitedNumber ? cpu * limitedNumber : 0,
          gpu: limitedNumber ? gpu * limitedNumber : 0,
          memory: limitedNumber ? memory * limitedNumber : 0,
          number: limitedNumber ? limitedNumber : 0,
          str: limitedNumber ? `${gpu * limitedNumber} GPU, ${cpu * limitedNumber}CPU, ${((memory  * limitedNumber) / 1024).toFixed(0)}G RAM` : '0 GPU, 0 CPU, 0G RAM'
        }
      }
    } else {
      return {
        vgName,
        cellName,
        unit: {},
        unitStr: '',
        used: {
          cpu: 0,
          gpu: 0,
          memory: 0,
          number: 0,
          str: '0 GPU, 0 CPU, 0G RAM'
        },
        remain: {
          cpu: 0,
          gpu: 0,
          memory: 0,
          number: 0,
          str: '0 GPU, 0 CPU, 0G RAM'
        },
        total: {
          cpu: 0,
          gpu: 0,
          memory: 0,
          number: 0,
          str: '0 GPU, 0 CPU, 0G RAM'
        },
        limited:{
          cpu: 0,
          gpu: 0,
          memory: 0,
          number: 0,
          str: '0 GPU, 0 CPU, 0G RAM'
        }
      }
    }

  }, [resourceUnit, canUseVgList])

  const getXdfs = async () => {
    try {
      // const { isEnabled: isXdfsEnabled } = await getXdfsIsEnabled();
      const isXdfsEnabled = false;

      setIsXdfsEnabled(isXdfsEnabled);
    } catch (err) {
      toast.error(err?.data ? err.data?.message : err.toString())
    }
  }

  const getResourceUnit = async () => {
    try {
      // 取得資源對照表
      // const resourceUnitReq = await getHivedResourceUnit();
      const resourceUnitReq = {}
      setResourceUnit(fakeResourceUnit)

      if(resourceUnitReq && !isEmpty(resourceUnitReq)){
        setResourceUnit(resourceUnitReq);
      }

    } catch (err) {
      const msg = err.data ? err.data.message : err.toString();
      toast.error(msg);
    }
  }

  const getUnitsByKeyAndResourceUnitObject = (key, unitsObj) => {
    if (isEmpty(unitsObj[key])) return { cpuUnit: 0, gpuUnit: 0, memoryUnit: 0 }
    const { cpu: cpuUnit, gpu: gpuUnit, memory: memoryUnit } = unitsObj[key];
    return {
      cpuUnit,
      gpuUnit: gpuUnit === null ? 0 : gpuUnit,
      memoryUnit
    }
  }

  const getResourceUnitCount = useCallback((jobConfig, vgInfos) => {
    const { defaults, extras, taskRoles } = jobConfig;
    const { virtualCluster } = defaults;
    const { virtualGroup, hivedScheduler } = extras;

    return Object.entries(taskRoles).reduce((acc, [taskRoleName, parameters]) => {
      const { resourcePerInstance } = parameters;
      const { cpu, gpu, memoryMB } = resourcePerInstance;
      if (!hivedScheduler || !vgInfos[virtualGroup]) {
        return { ...acc }
      }
      const vgObj = vgInfos[virtualGroup];
      const { cells: vgTotleCells } = vgObj;
      const pinnedOrVirtual = hivedScheduler.taskRoles[taskRoleName].skuType
        ? 'virtual'
        : 'pinned'

      const skuType = hivedScheduler.taskRoles[taskRoleName].skuType || hivedScheduler.taskRoles[taskRoleName].pinnedCellId;
      const selectedCellKey = `${virtualCluster}.${pinnedOrVirtual}.${skuType}`;

      const { resourceUnit: unitName } = vgTotleCells[selectedCellKey];
      const { cpuUnit, gpuUnit, memoryUnit } = getUnitsByKeyAndResourceUnitObject(unitName, resourceUnit);

      const count = Math.max(
        cpuUnit === 0 ? 0 : cpu / cpuUnit,
        gpuUnit === 0 ? 0 : gpu / gpuUnit,
        memoryUnit === 0 ? 0 : memoryMB / memoryUnit
      )

      return {
        ...acc,
        [taskRoleName]: {
          vc: virtualCluster,
          sku: pinnedOrVirtual === 'pinned' ? 'pinnedCellId' : 'skuType',
          skuType,
          count,
          unitName,
          cpuUnit,
          gpuUnit,
          memoryUnit
        }
      }
    }, {})
  }, [resourceUnit, canUseVgList])

  function doesImageFileExist(urlToFile) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', urlToFile, false);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(!xhr.getResponseHeader('Content-Type').startsWith('text/html'));
        } else {
          reject(false);
        }
      }
      xhr.onerror = function () {
        reject(false);
      };
      xhr.send();
    })
  }

  const asyncIsFileExist = async (urlToFile) => {
    try {
      return await doesImageFileExist(urlToFile)
    } catch (err) {
      return false
    }
  }

  /**
   * @author elvis
   * @description Component data initialization
  */
  const initData = () => {
    getUserInfo(defaultUser)
    getSystemSetting()
    getXdfs()
    getResourceUnit()
  }

  // & handled data
  const contextValue = {
    userInfo,
    noticeList,
    setNoticeList,
    getUserInfo,
    setUserInfo,
    locale,
    setLocale,
    systemSettingUrl,
    systemSetting,
    setSystemSetting,
    socketClient,
    setSocketClient,
    isXdfsEnabled,
    // - 資源轉換有關
    resourceUnit,
    canUseVgList,
    getResource,
    getCanUseVgList,
    setIsReGetCanUseVg,
    getResourceUnitCount,
    asyncIsFileExist
  }

  // * hooks
  /**
   * @author elvis
   * @description componentDidMount
  */
  useEffect(() => {
    initData();
  }, [])

  /**
   * @author elvis
   * @description socketClient 以及 locale 變動且不為 null 時，重新取得 Notice 列表的資料並且更新
  */
  useEffect(() => {
    if ((!isNull(socketClient) && locale)) {
      getNotices()
    }
  }, [socketClient, locale])

  /**
   * @author elvis
   * @description 
  */
  useEffect(() => {
    const { username } = userInfo;

    if(isReGetCanUseVg && username) {
      getCanUseVgList(username)
    }
  }, [isReGetCanUseVg, userInfo])

  return (
    <GlobalContext.Provider value={contextValue}>
      <PageHeader />
      <SideBar userInfo={userInfo} />
      <ToastContainer
        containerId="mainToast"
        position="top-center"
        style={{
          zIndex: 10000000 // bigger than modal
        }}
      />
      <div className="content-wrapper">
        {children}
      </div>
    </GlobalContext.Provider>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
