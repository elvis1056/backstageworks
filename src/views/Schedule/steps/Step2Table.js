import React, { useState, useEffect, useContext, useMemo } from 'react';
import { ChoiceGroup, SearchBox, Dropdown, Checkbox } from 'components/BaseInput';
import { IconButton } from 'components/BaseButton';
import { mergeStyles, DropdownMenuItemType } from 'office-ui-fabric-react';
import ViewModal from './Step2/ViewModal/ViewModal';
import Filter from './Step2/Filter';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { getJobTemplate, getCanReadJobTemplate } from 'utils/api';
import Context from '../Context';
import styles from './Step2Table.module.scss';
import PropTypes from 'prop-types';

export const Step2Table = ({ setStep2State, step2State }) => {
  const { t } = useTranslation();
  const { userInfo, activeStep } = useContext(Context);
  const [templateList, setTemplateList] = useState([]);
  const [selectedTemplateKey, setSelectedTemplateKey] = useState(null);
  const [isViewModalShow, setIsViewModalShow] = useState(false);
  const [viewTemplate, setViewTemplate] = useState({});
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState(new Filter());
  const [selectedOwner, setSelectedOwner] = useState(filter.owner);

  const { users } = useMemo(() => {
    const users = Object.create(null);
    if (templateList) {
      templateList.forEach(function(job) {
        users[job.owner] = true;
      });
    }
    return { users }
  }, [templateList])

  const addDropDownOptionKeys = optionItems => {
    return optionItems.map((item) => ({
      key: item.key,
      text: item.name,
      ...item
    }));
  };

  const filterOption = () => {
    const userList = [];
    if (templateList !== undefined) {
      userList.push({
        key: 'user-' + userInfo.username,
        text: `@${t('self')}`,
        type: 'user'
      });
    }
    userList.push(...Object.keys(users)
      .filter(user => {
        return user !== userInfo.username;
      }).map(user => ({
        key: 'user-' + user,
        text: user,
        type: 'user'
      })));

    return addDropDownOptionKeys([
      { key: 'creator', name: t('Creator'), type: '-', itemType: DropdownMenuItemType.Header },
      ...userList,
      { key: 'divider_2', name: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
      { key: 'clear', name: t('clearOption'), type: 'clear', itemType: DropdownMenuItemType.Header }
    ])
  }

  const ChoiceFieldStyle = {
    root: {
      selectors: {
        '& .ms-ChoiceField-field': {
          fontWeight: '400'
        }
      }
    }
  }

  const onView = templateInfo => {
    setViewTemplate(templateInfo);
    setIsViewModalShow(true)
  }

  useEffect(() => {
    if (activeStep === 1) {
      const hasAdminPrivileges = userInfo.admin === 'true' ? true : false;
      const getTemList = hasAdminPrivileges ? getJobTemplate() : getCanReadJobTemplate(userInfo.username);
      getTemList
        .then((template) => setTemplateList(template))
        .catch(err => toast.error(err.message ? err.data.message : err.message))
    }
  }, [activeStep])

  useEffect(() => {
    if (!isEmpty(step2State.templateInfo)) {
      setSelectedTemplateKey(step2State.templateInfo.id)
    }
  }, [step2State])

  useEffect(() => {
    // const { keyword } = filter;
    // const { username } = userInfo;
    setFilter(new Filter(keyword, selectedOwner));
  }, [keyword, selectedOwner])

  return (
    <>
      <div className={styles.searchBlock}>
        <div>{t('select')}{t('enSpace')}{t('template')}</div>
        <div className={styles.searchBlockRight}>
          <SearchBox
            className={mergeStyles({ marginRight: 10 })}
            iconProps={{ iconName: 'Search' }}
            onChange={text => setKeyword(text)}
            placeholder={`${t('search')}`}
          />
          <Dropdown
            multiSelect
            onChange={(event, item) => {
              if (item.type === 'user') {
                const owners = new Set(selectedOwner);
                if (item.selected)
                  owners.add(item.key.split('user-')[1]);
                else
                  owners.delete(item.key.split('user-')[1]);
                setSelectedOwner(owners)
              }
            }}
            options={filterOption()}
            placeholder={t('filter')}
          />
        </div>
      </div>
      <div className={`${styles.container} ${styles.marginTop10}`}>
        {
          !isEmpty(templateList) &&
          filter.apply(templateList).map((templateInfo) => {
            const { id, name, owner, description } = templateInfo
            return (
              <div
                className={styles.row}
                key={id}
              >
                <div className={`${styles.template} ${styles.marginLeft10}`}>
                  <div>
                    <ChoiceGroup
                      onChange={(e, item) => {
                        setSelectedTemplateKey(item.key)
                        setStep2State((prev) => ({ ...prev, templateInfo, isModify: userInfo.username === owner ? false : true }))
                      }}
                      options={[{ key: id, text: name }]}
                      selectedKey={!isEmpty(step2State.templateInfo) && step2State.templateInfo.id}
                      styles={ChoiceFieldStyle}
                    />
                  </div>
                  <div className={`${styles.marginLeft25} ${styles.line}`}>{t('owner')}: {owner}</div>
                  <div className={`${styles.marginLeft25} ${styles.line}`}>{t('description')}: {description}</div>
                  {
                    selectedTemplateKey === id && userInfo.username === owner &&
                    <Checkbox
                      checked={step2State.isModify}
                      className={`${styles.marginLeft25} ${styles.line}`}
                      label={`${t('modify')}${t('enSpace')}${t('configuration')}`}
                      onChange={(event, isChecked) => {
                        setStep2State((prev) => ({ ...prev, isModify: isChecked }))
                      }}
                    />
                  }
                </div>
                <div className={styles.view}>
                  <IconButton
                    iconProps={{ iconName: 'View' }}
                    onClick={() => {onView(templateInfo)}}
                    styles={{ root: { width: '10%', marginTop: '2px' } }}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      {
        isViewModalShow &&
        <ViewModal
          isOpen={isViewModalShow}
          onClose={() => {
            setViewTemplate({})
            setIsViewModalShow(false)
          }}
          viewTemplate={viewTemplate}
        />
      }
    </>
  )
}

Step2Table.propTypes = {
  step2State: PropTypes.object,
  setStep2State: PropTypes.func
}
