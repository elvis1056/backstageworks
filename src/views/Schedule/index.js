import React, { useState, useEffect, useContext } from 'react';
import BaseCalendar from 'components/BaseCalendar';
import BreadCrumbs from 'components/BreadCrumbs';
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import { Stack, StackItem, Callout, Dropdown, mergeStyles } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import ViewSchedule from './ViewSchedule';
import CreateSchedule from './CreateSchedule';
import { TooltipHost, DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import { useTranslation } from 'react-i18next';
import GlobalContext from 'layouts/Main/GlobalContext';
import ModifyScheduleModal from './ModifyScheduleModal';
import indexStyles from './index.module.scss';

import { getJobSchedule, getCanUseVirtualGroups } from 'utils/api';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import moment from 'moment';

const Schedule = () => {
  const { userInfo } = useContext(GlobalContext);
  const { t } = useTranslation();
  const [canUseVg, setCanUseVg] = useState([]);
  const [selectedVg, setSelectedVg] = useState();
  const [selectedVgHasGpu, setSelectedVgHasGpu] = useState(false);
  const [selectedVgKey, setSelectedVgKey] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [target, setTarget] = useState({ dayEl: null, el: null });
  const [createDate, setCreateDate] = useState();
  const [modifyData, setModifyData] = useState({});
  const [isCalloutVisible, setIsCalloutVisible] = useState(false);
  const [dropdownSelectedKey, setDropdownSelectedKey] = useState();
  const [filterSchedulesList, setFilterSchedulesList] = useState([]);
  const [isModifyScheduleModalShow, setIsModifyScheduleModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addDropDownOptionKeys = optionItems => {
    return optionItems.map((item, index) => ({
      key: index,
      text: item.name,
      data: item.data,
      ...item
    }));
  };

  const selectColor = key => {
    const state = ['all', 'accept', 'pending', 'deny'];
    const colors = ['blue', 'green', 'orange', 'red'];
    return colors[state.indexOf(key)];
  };

  const getData = selectedVg => {
    setIsLoading(true)
    getJobSchedule({ virtualGroup: selectedVg })
      .then(data => {
        setSchedules(data
          .filter(item => item.users.some(name => name === userInfo.username))
          .map(item => {
            const color = (state) => {
              switch (state) {
                case 1:
                default:
                  return '#008756';
                case 0:
                  return '#FFA500';
                case -1:
                  return '#DD4B39';
              }
            }
            return (
              {
                ...item,
                start: item.startAt,
                end: item.endAt,
                color: color(item.state)
              }
            )
          }))
        setIsLoading(false)
      })
      .catch(err => {
        toast.error('Error: ' + err.data ? err.data.message : err.message)
        setIsLoading(false)
      })
  }

  const getCanUseVgList = () => {
    getCanUseVirtualGroups(userInfo.username)
      .then((res) => {
        const schedulableData = res.filter(item => item.schedulable !== false)
        setCanUseVg(schedulableData)
        if (!isEmpty(schedulableData)) {
          getData(schedulableData[0].name)
          setSelectedVg(schedulableData[0].name)
          if (!isEmpty(schedulableData[0].gpu)) {
            setSelectedVgHasGpu(true)
          }
        }
      })
      .catch(err => toast.error('Error: ' + err.data ? err.data.message : err.message))
  }

  useEffect(() => {
    if (!isEmpty(userInfo)) getCanUseVgList()
  }, [userInfo])

  useEffect(() => {
    setFilterSchedulesList(() => {
      switch(dropdownSelectedKey) {
        case 'all':
        default:
          return schedules;
        case 'accept':
          return schedules.filter(info => info.state === 1);
        case 'pending':
          return schedules.filter(info => info.state === 0);
        case 'deny':
          return schedules.filter(info => info.state === -1);
      }
    })
  }, [schedules, dropdownSelectedKey])

  return (
    <Stack
      styles={{
        root: {
          padding: '0 20px 20px',
          height: '100%'
        }
      }}
    >
      <BreadCrumbs />
      <Stack>
        <div className={indexStyles.searchBlock}>
          <div className={indexStyles.searchBlock__left} >
            <DefaultButton
              children={t('refresh')}
              className={mergeStyles({ marginRight: 10 })}
              disabled={isLoading}
              iconProps={{
                iconName: 'Refresh'
              }}
              onClick={() => {
                if (!isEmpty(selectedVg)) getData(selectedVg)
              }}
            />
            <Dropdown
              className={mergeStyles({ marginRight: 10 })}
              disabled={isLoading}
              onChange={(e, item) => {
                setSelectedVgKey(item.key)
                setSelectedVg(item.text)
                if (!isEmpty(item.gpu)) {
                  setSelectedVgHasGpu(true)
                } else {
                  setSelectedVgHasGpu(false)
                }
              }}
              options={addDropDownOptionKeys(canUseVg)}
              placeholder={`${t('select')}${t('group')}`}
              selectedKey={selectedVgKey}
              styles={{
                title: {
                  borderRadius: 3
                }
              }}
            />
            <PrimaryButton
              children={t('search')}
              disabled={isLoading}
              iconProps={{ iconName: 'Search' }}
              onClick={() => getData(selectedVg)}
              styles={{
                root: {
                  height: '32px',
                  border: '1px solid transparent',
                  boxSizing: 'border-box',
                  borderRadius: '3px',
                  selectors: {
                    '& div > div': { flexShrink: '0' }
                  }
                }
              }}
            />
          </div>
          <div>
            <Dropdown
              onChange={(event, option) => setDropdownSelectedKey(option.key)}
              onRenderCaretDown={() => <Icon iconName="SwitcherStartEnd" />}
              onRenderOption={option => {
                return (
                  <div style={{ display: 'flex', alignItems: 'center', color: selectColor(option.key) }}>
                    {option.data &&
                          option.data.icon &&
                          <Icon
                            aria-hidden="true"
                            iconName={option.data.icon}
                            style={{
                              marginRight: '8px',
                              fontSize: 14
                            }}
                            title={option.data.icon}
                          />}
                    <span>
                      {option.text}
                    </span>
                  </div>
                );
              }}
              options={addDropDownOptionKeys([
                { name: t('allShow'), data: { icon: '6PointStar' }, key: 'all' },
                { name: t('verified'), data: { icon: 'Accept' }, key: 'accept' },
                { name: t('verifying'), data: { icon: 'HourGlass' }, key: 'pending' },
                { name: t('denied'), data: { icon: 'Cancel' }, key: 'deny' }
              ])}
              placeholder={`${t('select')}${t('enSpace')}${t('status')}`}
              styles={{
                root: {
                  minWidth: 150,
                  width: 150,
                  fontSize: 14,
                  marginRight: '8px'
                },
                title: { borderRadius: '3px' }
              }}
            />
          </div>
        </div>
      </Stack>
      <StackItem
        grow
        styles={{ root: { padding: '20px', background: '#FBFBFB', overflow: 'auto' } }}
      >
        <BaseCalendar
          dateClick={(item) => {
            if (!isEmpty(selectedVg)) {
              const pickToday = new Date(item.date).toDateString() === new Date().toDateString()
              const isVaildTime = new Date(item.date).getTime() >= new Date().getTime()
              if (pickToday) {
                setCreateDate(moment(new Date()).seconds(0).add(5, 'm').toDate())
                setIsCalloutVisible(true)
                setTarget(() => ({ dayEl: item.dayEl, el: null }))
                return
              } else if (isVaildTime) {
                setCreateDate(new Date(item.date))
                setIsCalloutVisible(true)
                setTarget(() => ({ dayEl: item.dayEl, el: null }))
              } else {
                // it's already handle dayCellClassNames
                toast.error(t('PleaseSelectTheCorrectScheduleDate'))
              }
            } else {
              toast.error(t('pleaseSelectVg'))
            }
          }}
          dayCellClassNames={(arg) => {
            if (moment(arg.date).valueOf() < moment().subtract(1, 'days').valueOf()) {
              return 'pastBackground'
            }
          }}
          dayMaxEventRows={4}
          eventClick={(item) => {
            // item.getAttribute for check has getAttribute
            const clickFromMore = item.jsEvent.path.some(item => (item.getAttribute && item.getAttribute('class') === 'fc-popover-body '))
            const el = clickFromMore ? item.jsEvent : item.el;
            const id = Number(item.event._def.publicId)
            setIsCalloutVisible(true)
            setTarget(() => ({ el, dayEl: null }))
            setModifyData({ ...item.event._def.extendedProps, id })
          }}
          eventContent={arg => {
            const eventData = filterSchedulesList.find(item => String(item.id) === arg.event.id)
            return (
              <TooltipHost
                directionalHint={DirectionalHint.leftCenter}
                styles={{ root: { width: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer' } }}
                tooltipProps={{
                  onRenderContent() {
                    return (
                      <div>
                        <p>{moment(eventData.startAt).format('MM/DD HH:mm')} - {moment(eventData.endAt).format('MM/DD HH:mm')}</p>
                      </div>
                    );
                  }
                }}
              >
                <div className={'fc-event-time'}>
                  {arg.timeText}
                </div>
                <div className={'fc-event-title'}>
                  {eventData.name}
                </div>
              </TooltipHost>
            )
          }}
          eventDisplay={'block'}
          events={filterSchedulesList}
        />
      </StackItem>
      {
        isCalloutVisible &&
        <Callout
          directionalHintForRtl={DirectionalHint.topLeftEdge}
          gapSpace={0}
          isBeakVisible
          layerProps={{ styles: { root: { zIndex: 1030 } } }}
          styles={
            target.el
              ? { calloutMain: { width: 'auto', height: 'auto', overflow: 'hidden' } }
              :
              {
                calloutMain: {
                  height: window.innerHeight >= 750 ? 750 : window.innerHeight,
                  width: window.innerWidth >= 700 ? 700 : window.innerWidth,
                  overflow: 'hidden'
                }
              }
          }
          target={target.el || target.dayEl}
        >
          {
            target.el &&
            <ViewSchedule
              data={modifyData}
              getData={getData}
              onClose={() => {
                setIsCalloutVisible(false)
              }}
              onOpenModifyModal={() => setIsModifyScheduleModalShow(true)}
              selectedVg={selectedVg}
            />
          }
          {
            target.dayEl &&
            <CreateSchedule
              canUseVg={canUseVg}
              createDate={createDate}
              getData={getData}
              isOpen={isCalloutVisible}
              onClose={() => {
                setIsCalloutVisible(false)
              }}
              pickDate={createDate}
              selectedVg={selectedVg}
              selectedVgHasGpu={selectedVgHasGpu}
            />
          }
        </Callout>
      }
      {
        isModifyScheduleModalShow &&
        <ModifyScheduleModal
          canUseVg={canUseVg}
          data={modifyData}
          getData={getData}
          isOpen={isModifyScheduleModalShow}
          modify
          onClose={() => setIsModifyScheduleModalShow(false)}
          selectedVg={selectedVg}
          selectedVgHasGpu={selectedVgHasGpu}
        />
      }
    </Stack>
  );
};


export default Schedule;