import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Pivot, PivotItem, Icon } from 'office-ui-fabric-react';
import { IconButton } from 'components/BaseButton';
import { JobTaskRole } from 'views/Schedule/components/models/job-task-role';
import { TaskRoleSehema } from '../../../model/JobTaskRoleSchema';
import { validate } from 'joi-browser';
import Content from './Content';
import PropTypes from 'prop-types';

function createUniqueName(usedNames, namePrefix, startindex) {
  let index = startindex;
  let name = `${namePrefix}_${index++}`;
  while (usedNames.find(usedName => usedName === name)) {
    name = `${namePrefix}_${index++}`;
  }
  return [name, index];
}

const TaskRole = ({ jobTaskRoles, setJobTaskRoles }) => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(jobTaskRoles && jobTaskRoles[0].name);
  const [selectedIdx, setSelectedIdx] = useState('0');

  const checkDupName = () => {
    if (!jobTaskRoles) return;
    if (jobTaskRoles.map(tr => tr.name).filter((item, idx) => idx !== Number(selectedIdx))
      .includes(selectedTab)) return t('duplicateName')

    const TEXT_FILED_REGX = /^[A-Za-z0-9\-._~]+$/;
    if (!TEXT_FILED_REGX.test(selectedTab)) return `${t('stringFormatIs')} ^[A-Za-z0-9\\-_~]+$`;
  }

  useEffect(() => {
    if (jobTaskRoles && jobTaskRoles[Number(selectedIdx)].name !== selectedTab) {
      setSelectedTab(jobTaskRoles[Number(selectedIdx)].name)
    }
  }, [jobTaskRoles])

  const handleRenderTab = (itemProps, defaultRender) => {
    if (itemProps === undefined || defaultRender === undefined) {
      return null;
    }

    const findData = jobTaskRoles && jobTaskRoles.find(tr => tr.name === itemProps.headerText)

    const { error: TaskRoleErr } = validate(findData, TaskRoleSehema)
    const hasError = TaskRoleErr

    return (
      <div
        style={{
          position: 'relative'
        }}
      >
        <div style={{ padding: '0 10px', display: 'flex', alignItems: 'center', overflow: 'auto' }}>
          {
            findData.name !== selectedTab && hasError &&
            <Icon
              iconName="Info"
              styles={{
                root: {
                  position: 'absolute',
                  top: -10,
                  left: 7,
                  fontSize: 10,
                  color: 'red'
                }
              }}
            />
          }
          <span
            onClick={() => {
              setSelectedTab(itemProps.headerText)
              setSelectedIdx(itemProps.itemKey)
            }}
          >
            {defaultRender(itemProps)}
          </span>
          {
            jobTaskRoles.length > 1 &&
            <Icon
              iconName={'Cancel'}
              onClick={(e) => {
                handleRemoveTabItem(e, itemProps.headerText)
              }}
            />
          }
        </div>
      </div>
    )
  }

  const HEADER_PREFIX = 'Task_role';
  let taskRoleSeq = jobTaskRoles.length + 1;

  function generateUniqueTaskName(taskRoles, curIndex) {
    const usedNames = taskRoles
      .map(taskRole => taskRole.name)
      .filter((_, index) => index < curIndex);
    const [newName, updateIndex] = createUniqueName(usedNames, HEADER_PREFIX, taskRoleSeq);
    taskRoleSeq = updateIndex;
    return newName;
  }

  const handleAddItem = () => {
    let tempLength = jobTaskRoles.length
    let taskRoleName = generateUniqueTaskName(jobTaskRoles, tempLength);
    while (Object.keys(jobTaskRoles).includes(taskRoleName)) {
      tempLength = tempLength + 1;
      taskRoleName = generateUniqueTaskName(jobTaskRoles, tempLength);
    }
    const newTaskRole = new JobTaskRole({ name: taskRoleName, commands: 'sleep infinity' });
    setJobTaskRoles(prev => [...prev, newTaskRole]);
    setSelectedTab(taskRoleName);
    setSelectedIdx(jobTaskRoles.length);
  }

  const handleRemoveTabItem = (e, name) => {
    e.stopPropagation();
    const removedItems = jobTaskRoles.filter(tr => tr.name !== name);
    setSelectedIdx('0');
    setSelectedTab(removedItems[0].name);
    setJobTaskRoles(removedItems);
  }

  return (
    <div className={styles.paddingBottom72}>
      <div className={styles.tabContainer}>
        <div className={styles.tabContent}>
          <Pivot
            selectedKey={selectedIdx}
            styles={{
              text: { fontSize: 16, padding: '0 15px' },
              root: { background: '#FFF' },
              link: [{ margin: 0, padding: 0, background: '#f8f8f8' }],
              linkIsSelected: {
                marginRight: 8,
                paddingRight: 8,
                paddingLeft: 8,
                width: 'auto',
                selectors: {
                  ':before': {
                    transition: ' left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s, right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s'
                  },
                  ':hover:before': {
                    left: 0,
                    right: 0,
                    transition: ' left 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s, right 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9) 0s'
                  }
                }
              }
            }}
          >
            {
              jobTaskRoles && jobTaskRoles.map((item, idx) =>
                <PivotItem
                  headerText={item.name}
                  itemKey={idx}
                  key={idx}
                  onRenderItemLink={handleRenderTab}
                />
              )
            }
          </Pivot>
        </div>
        <div className={styles.tabAdd}>
          <IconButton
            iconProps={{
              iconName: 'Add'
            }}
            onClick={handleAddItem}
          />
        </div>
      </div>
      <Content
        checkDupName={checkDupName}
        jobTaskRoles={jobTaskRoles}
        selectedIdx={Number(selectedIdx)}
        // selectedTab={selectedTab}
        setJobTaskRoles={setJobTaskRoles}
      />
    </div>
  );
};

TaskRole.propTypes = {
  jobTaskRoles: PropTypes.array,
  setJobTaskRoles: PropTypes.func
}

export default TaskRole;