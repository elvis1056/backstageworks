import React, { useState } from 'react';
import { Icon } from 'office-ui-fabric-react';
import ConfrimModal from 'components/ConfirmModal';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteJobSchedule } from 'utils/api';

import styles from './ViewSchedule.module.scss';

function ViewSchedule({ getData, data, onClose, onOpenModifyModal, selectedVg }) {
  const { t } = useTranslation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isTimeOverNow = data.startAt > new Date().getTime();
  const isTimeBeforeNow = data.startAt < new Date().getTime();

  const onDelete = () => {
    deleteJobSchedule(data.id)
      .then(() => {
        setShowDeleteModal(false);
        onClose();
        getData(selectedVg);
        toast.success(t('success'));
      })
      .catch(err => {
        toast.error('Error: ' + err.data ? err.data.message : err.message)
      });
  }

  const stateText = state => {
    switch (state) {
      case -1:
        return <div style={{ background: '#FFE4DD', display: 'inline-block' }}>{t('denied')}</div>;
      case 0:
        return <div style={{ background: '#FFF8EA', display: 'inline-block' }}>{t('verifying')}</div>;
      case 1:
        return <div style={{ background: '#D6F8C5', display: 'inline-block' }}>{t('verified')}</div>;
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
        return styles['schedule__container__block__info--red'];
      case 0:
        return styles['schedule__container__block__info--state'];
      case 1:
        return styles['schedule__container__block__info--green'];
      default:
        return 'green';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {
            isTimeBeforeNow && data.state === -1 &&
            <div className={styles.icon}>
              <Icon
                iconName={'Edit'}
                onClick={() => {
                  onOpenModifyModal()
                  onClose()
                }}
              >icon1</Icon>
            </div>
          }
          {
            isTimeOverNow &&
            <>
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
            </>
          }
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