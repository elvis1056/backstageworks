import React, { useState } from 'react';
import { Icon, mergeStyles } from 'office-ui-fabric-react';
import ConfrimModal from 'components/ConfirmModal';
import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import ViewModal from '../Schedule/steps/Step2/ViewModal/ViewModal';

import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteJobSchedule, acceptJobSchedule, denyJobSchedule } from 'utils/api';

import styles from './ViewSchedule.module.scss';

function ViewSchedule({ getData, data, onClose, onOpenModifyModal, selectedVg }) {
  const { t } = useTranslation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [viewTemplate, setViewTemplate] = useState({});
  const [isViewModalShow, setIsViewModalShow] = useState(false);

  const onView = templateInfo => {
    setViewTemplate({ ...templateInfo, owner: data.name, description: null });
    setIsViewModalShow(true)
  }

  const onAcceptSchedule = id => {
    acceptJobSchedule(id)
      .then(() => {
        onClose();
        getData(selectedVg);
      })
      .catch(err => {
        toast.error('Error: ' + err.data ? err.data.message : err.message)
      });
  }

  const onDenySchedule = id => {
    denyJobSchedule(id)
      .then(() => {
        onClose();
        getData(selectedVg);
      })
      .catch(err => {
        toast.error('Error: ' + err.data ? err.data.message : err.message)
      });
  }

  const onDelete = () => {
    deleteJobSchedule(data.id)
      .then(() => {
        setShowDeleteModal(false);
        onClose();
        getData(selectedVg);
      })
      .catch(err => {
        toast.error('Error: ' + err.data ? err.data.message : err.message)
      });
  }

  const stateText = state => {
    switch (state) {
      case -1:
        return t('denied');
      case 0:
        return t('verifying');
      case 1:
        return t('alreadyPassed');
      default:
        return '';
    }
  };

  const stateBackground = state => {
    switch (state) {
      case -1:
        return styles['row__title__state--denied'];
      case 0:
        return styles['row__title__state--verifying'];
      case 1:
        return styles['row__title__state--verified'];
      default:
        return '';
    }
  }

  const stateColor = state => {
    switch (state) {
      case -1:
        return styles['manageSchedule__container__block__info--red'];
      case 0:
        return styles['manageSchedule__container__block__info--state'];
      case 1:
        return styles['manageSchedule__container__block__info--green'];
      default:
        return 'green';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {
            (data.jobConfig !== null) &&
            <div className={styles.icon}>
              <Icon
                iconName={'View'}
                onClick={() => {
                  onView(data)
                }}
              />
            </div>
          }
          <div className={styles.icon}>
            <Icon
              iconName={'Edit'}
              onClick={() => {
                onOpenModifyModal()
                onClose()
              }}
            />
          </div>
          <div className={styles.icon}>
            <Icon
              iconName={'Delete'}
              onClick={() => setShowDeleteModal(true)}
            />
          </div>
          <div className={styles.icon}>
            <Icon
              iconName={'Cancel'}
              onClick={() => onClose()}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <div className={`${styles.row__title} ${stateColor(data.state)}`}>
              <div className={`${styles.row__title__state} ${stateBackground(data.state)}`}>
                {stateText(data.state)}
              </div>
            </div>
            <div className={styles.row__name}>{data.name}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('time')}</div>
            <div className={styles.row__description}>{moment(data.startAt).format('MM/DD HH:mm')} - {moment(data.endAt).format('MM/DD HH:mm')}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('User')}</div>
            <div className={styles.row__description}>{!isEmpty(data) && data.users[0]}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('virtualCluster')}</div>
            <div className={styles.row__description}>{data.virtualGroup}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('CPU')}</div>
            <div className={styles.row__description}>{data.cpu}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('memory')}</div>
            <div className={styles.row__description}>{data.memory} MB</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>{t('disk')}</div>
            <div className={styles.row__description}>{data.storage} GB</div>
          </div>
          <div className={styles.row}>
            <div className={styles.row__title}>
              {t('GPU')}
            </div>
            <div className={styles.row__description}>
              {
                isEmpty(data.gpu) 
                  ? <div>{t('no2')}</div>
                  : Object.keys(data.gpu).map(item => {
                    return (
                      <div key={item}>{data.gpu[item]} ( {item} )</div>
                    )
                  })
              }
            </div>
          </div>
          {
            data.endAt > new Date().getTime() &&
            <div className={styles.footer}>
              {
                (data.state === 1 || data.state === 0) &&
                <DefaultButton
                  className={mergeStyles({
                    marginRight: 10,
                    background: '#DD4B39',
                    color: '#fff',
                    border: '1px solid #DD4B39'
                  })}
                  onClick={() => onDenySchedule(data.id)}
                  text={t('Deny')}
                />
              }
              {
                (data.state === -1 || data.state === 0) &&
                <PrimaryButton
                  onClick={() => onAcceptSchedule(data.id)}
                  text={t('passed')}
                  type={'submit'}
                />
              }
            </div>
          }
        </div>
      </div>
      <ConfrimModal
        confrimText={t('delete')}
        content={t('sureDelete', { name: data.name })}
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={onDelete}
        title={`${t('delete')}${t('enSpace')}`}
      />
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
  );
}

ViewSchedule.propTypes = {
  getData: PropTypes.func,
  data: PropTypes.object,
  onClose: PropTypes.func,
  onOpenModifyModal: PropTypes.func,
  selectedVg: PropTypes.string
}

export default ViewSchedule;