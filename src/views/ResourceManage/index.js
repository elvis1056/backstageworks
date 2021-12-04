import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Context from './Context';
import System from './components/System';
import SubSource from './components/SubSource';
import BreadCrumbs from 'components/BreadCrumbs';
import BaseMenu from 'components/BaseMenu'
import CreateResourceModal from './components/SubSource/components/SubResource/CreateResourceModal';
import ModifyResourceModal from './components/SubSource/components/SubResource/ModifyResourceModal';
import CreateGroupModal from './components/SubSource/components/Group/CreateGroupModal';
import ModifyGroupModal from './components/SubSource/components/Group/ModifyGroupModal';
import UserSettingModal from './components/SubSource/components/Group/UserSettingModal';

import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';

import { getResource, getResourceVirtualGroup, getHivedResourceUnit } from 'utils/api';

import styles from './index.module.scss';

const fakeTreeData = { 'name':'system', 'group':'system', 'parent':null, 'children':[{ 'name':'\b測試', 'group':'qwewwww', 'parent':'system', 'children':[], 'cells':{}, 'usedCells':{}, 'virtualGroups':['twtwtwtwtw'] }, { 'name':'nick', 'group':'system', 'parent':'system', 'children':[], 'cells':{ 'rtx2080ti.virtual.rtx2080ti':{ 'name':'rtx2080ti.virtual.rtx2080ti', 'resourceUnit':'rtx2080ti', 'number':2 } }, 'usedCells':{ 'rtx2080ti.virtual.rtx2080ti':2 }, 'virtualGroups':['nick', 'nick2'] }], 'cells':{ 'rtx2080ti.virtual.rtx2080ti':{ 'name':'rtx2080ti.virtual.rtx2080ti', 'resourceUnit':'rtx2080ti', 'number':2 }, 'default.pinned.NODE-103':{ 'name':'default.pinned.NODE-103', 'resourceUnit':'A6000', 'number':1 }, 'cpu.pinned.NODE-103-cpu':{ 'name':'cpu.pinned.NODE-103-cpu', 'resourceUnit':'cpu', 'number':1 }, 'rtx2060.pinned.NODE-101':{ 'name':'rtx2060.pinned.NODE-101', 'resourceUnit':'rtx2060', 'number':1 }, 'cpu.virtual.cpu':{ 'name':'cpu.virtual.cpu', 'resourceUnit':'cpu', 'number':2 } }, 'usedCells':{ 'rtx2080ti.virtual.rtx2080ti':2, 'default.pinned.NODE-103':1, 'rtx2060.pinned.NODE-101':1, 'cpu.virtual.cpu':1, 'cpu.pinned.NODE-103-cpu':1 }, 'virtualGroups':['llll', 'test', 'rtx'] }
const fakeResourceUnits = { 'rtx2060':{ 'gpu':1, 'cpu':12, 'memory':30720 }, 'A6000':{ 'gpu':1, 'cpu':8, 'memory':59505 }, 'cpu':{ 'gpu':null, 'cpu':1, 'memory':1024 }, 'rtx2080ti':{ 'gpu':1, 'cpu':6, 'memory':20480 } }

const ResourceManage = () => {
  const query = new URLSearchParams(window.location.search);
  const getParam = query.get('selectedItem') || 'system';
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [treeData, setTreeData] = useState([]);
  const [activeSystemData, setActiveSystemData] = useState({});
  const [vgData, setVgData] = useState([]);
  const [resourceUnits, setResourceUnits] = useState({});

  const [originModifyResourceSelectedData, setOriginModifyResourceSelectedData] = useState({});
  const [modifyResourceSelectedItem, setModifyResourceSelectedItem] = useState('');
  const [modifyResourceData, setModifyResourceData] = useState({});

  const [originModifyGroupSelectedData, setOriginModifyGroupSelectedData] = useState({});
  const [modifyGroupSelectedItem, setModifyGroupSelectedItem] = useState('');
  const [modifyGroupData, setModifyGroupData] = useState({});

  const [isCreateResourceModalShow, setIsCreateResourceModalShow] = useState(false);
  const [isModifyResourceModalShow, setIsModifyResourceModalShow] = useState(false);

  const [isCreateGroupModalShow, setIsCreateGroupModalShow] = useState(false);
  const [isModifyGroupModalShow, setIsModifyGroupModalShow] = useState(false);

  const [isUserSettingModalShow, setIsUserSettingModalShow] = useState(false);
  const [userSettingVgCells, setUserSettingVgCells] = useState(false);

  const getData = (name = getParam) => {
    setIsLoading(true)
    setTreeData([fakeTreeData])
    setResourceUnits(fakeResourceUnits)
    setActiveSystemData(findSelectedData([fakeTreeData]))
    const close = true;
    if (close) return
    Promise.all([getResource(name), getHivedResourceUnit()])
      .then(([res, resourceUnits]) => {
        setIsLoading(false)
        setTreeData([res])
        setActiveSystemData(findSelectedData([res]))
        setResourceUnits(resourceUnits)
      })
      .catch(err => {
        toast.error('Error:' + err.data ? err.data.message : err.message, {
          onClose: () => history.push('group-manage')
        })
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (!isModifyGroupModalShow) {
      setOriginModifyGroupSelectedData({})
      setModifyGroupSelectedItem('')
      setModifyGroupData({})
    }
  }, [isModifyGroupModalShow])

  useEffect(() => {
    if (!isModifyResourceModalShow) {
      setOriginModifyResourceSelectedData({})
      setModifyResourceSelectedItem('')
      setModifyResourceData({})
    }
  }, [isModifyResourceModalShow])

  const getVgData = selectedItem => {
    getResourceVirtualGroup(selectedItem)
      .then(res => setVgData(res))
      .catch(err => toast.error('Error:' + err.data ? err.data.message : err.message))
  }

  const findModifyGroupSelectedData = (data) => {
    const findActive = data.find(element => element.name === modifyGroupSelectedItem)
    return findActive
  }

  const findModifyResourceSelectedData = (data) => {
    const findActive = data.find(element => element.name === modifyResourceSelectedItem)
    if (!isEmpty(findActive)) {
      return findActive
    } else {
      const findChildren = data.flatMap(item => item.children)
      return !isEmpty(findChildren) ? findModifyResourceSelectedData(findChildren) : {}
    }
  }

  const findSelectedData = (data) => {
    const findActive = data.find(element => element.name === selectedItem)
    if (!isEmpty(findActive)) {
      return findActive
    } else {
      const findChildren = data.flatMap(item => item.children)
      return !isEmpty(findChildren) ? findSelectedData(findChildren) : {}
    }
  }

  useEffect(() => {
    if (!isEmpty(modifyResourceSelectedItem)) {
      (() => {
        const data = findModifyResourceSelectedData(treeData);
        const parentData = { ...activeSystemData }
        const { cells, usedCells } = parentData

        const remainCells = Object.entries(usedCells).reduce((acc, [key, value]) => {
          if (acc[key]) {
            return { ...acc, [key]: { ...acc[key], number: acc[key]['number'] - value }  }
          } else {
            return { ...acc }
          }
        }, cells)

        const mergeCells = Object.entries(remainCells).reduce((acc, [key, details]) => {
          const newAcc = { ...acc }
          if (newAcc[key]) {
            newAcc[key] = {
              ...newAcc[key],
              number: newAcc[key]['number'] + details['number']
            }
            return { ...newAcc }
          } else {
            return { ...newAcc, [key]: details }
          }
        }, data.cells)

        const result = { ...data, cells: mergeCells }

        if (!isEmpty(data)) {
          setOriginModifyResourceSelectedData(data)
          setModifyResourceData(result)
        }
      })()
    }
  }, [modifyResourceSelectedItem])

  useEffect(() => {
    if (!isEmpty(modifyGroupSelectedItem)) {
      (() => {
        const data = findModifyGroupSelectedData(vgData);
        const parentData = { ...activeSystemData };
        const { cells, usedCells } = parentData;

        const remainCells = Object.entries(usedCells).reduce((acc, [key, value]) => {
          if (acc[key]) {
            return { ...acc, [key]: { ...acc[key], number: acc[key]['number'] - value }  }
          } else {
            return { ...acc }
          }
        }, cells)

        const mergeCells = Object.entries(remainCells).reduce((acc, [key, details]) => {
          const newAcc = { ...acc }
          if (newAcc[key]) {
            newAcc[key] = {
              ...newAcc[key],
              number: newAcc[key]['number'] + details['number']
            }
            return { ...newAcc }
          } else {
            return { ...newAcc, [key]: details }
          }
        }, data.cells)

        const result = {
          ...data,
          cells: mergeCells
        }

        if (!isEmpty(data)) {
          setOriginModifyGroupSelectedData(data)
          setModifyGroupData(result)
        }
      })()
    }
  }, [modifyGroupSelectedItem])

  useEffect(() => {
    if (!isEmpty(treeData)) {
      const data = findSelectedData(treeData);
      if (!isEmpty(data)) {
        setActiveSystemData(data)
      }
      const close = true;
      if (close) return
      getVgData(selectedItem)
    }
  }, [selectedItem, treeData])

  useEffect(() => {
    getData()
    setSelectedItem(getParam)
  }, [getParam])

  const context = {
    getData,
    getParam,
    isLoading,
    setIsModifyResourceModalShow,
    setModifyResourceSelectedItem,
    setModifyResourceData,
    modifyResourceData,
    setOriginModifyResourceSelectedData,
    originModifyResourceSelectedData,
    setIsCreateGroupModalShow,
    setIsModifyGroupModalShow,
    setIsUserSettingModalShow,
    setUserSettingVgCells,
    setModifyGroupSelectedItem,
    setModifyGroupData,
    modifyGroupData,
    setOriginModifyGroupSelectedData,
    originModifyGroupSelectedData
  }

  return (
    <Context.Provider value={context}>
      <div style={{ position: 'relative', padding: '0 20px 20px', display: 'flex', flexDirection: 'column', overflow:'hidden', height: '100%' }}>
        <BreadCrumbs />
        <div className={styles.ResourceManage__container}>
          <div className={styles.ResourceManage__TreeView}>
            <BaseMenu
              data={treeData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className={styles.ResourceManage__Block}>
            <div className={styles.ResourceManage__System}>
              <System
                data={activeSystemData}
                resourceUnits={resourceUnits}
                selectedItem={selectedItem}
              />
            </div>
            <div className={styles.ResourceManage__SubResource}>
              <SubSource
                resourceData={activeSystemData.children}
                resourceUnits={resourceUnits}
                setIsCreateResourceModalShow={setIsCreateResourceModalShow}
                vgData={vgData}
              />
            </div>
          </div>
        </div>
        {
          isCreateResourceModalShow &&
          <CreateResourceModal
            data={activeSystemData}
            isOpen={isCreateResourceModalShow}
            onClose={() => setIsCreateResourceModalShow(false)}
            resourceUnits={resourceUnits}
          />
        }
        {
          isModifyResourceModalShow &&
          <ModifyResourceModal
            data={activeSystemData}
            isOpen={isModifyResourceModalShow}
            onClose={() => setIsModifyResourceModalShow(false)}
            resourceUnits={resourceUnits}
          />
        }
        {
          isCreateGroupModalShow &&
          <CreateGroupModal
            data={activeSystemData}
            isOpen={isCreateGroupModalShow}
            onClose={() => setIsCreateGroupModalShow(false)}
            resourceUnits={resourceUnits}
          />
        }
        {
          isModifyGroupModalShow &&
          <ModifyGroupModal
            data={activeSystemData}
            isOpen={isModifyGroupModalShow}
            onClose={() => setIsModifyGroupModalShow(false)}
            resourceUnits={resourceUnits}
          />
        }
        {
          isUserSettingModalShow &&
          <UserSettingModal
            data={userSettingVgCells}
            getRefreshData={getData}
            isOpen={isUserSettingModalShow}
            onClose={() => setIsUserSettingModalShow(false)}
          />
        }
      </div>
    </Context.Provider>
  );
};

export default ResourceManage;