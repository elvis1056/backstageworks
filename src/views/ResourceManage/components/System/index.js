import React from 'react';
import { useTranslation } from 'react-i18next';
import BaseLink from 'components/BaseLink';
import BasePanel from 'components/BasePanel';
import Progress from 'components/BaseProgress';

import styles from './index.module.scss';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

const System = ({ data, resourceUnits }) => {
  const { t } = useTranslation();

  const ModalTitle = () => {
    const checkParent = isEmpty(data.parent) ? '-' : data.parent;
    const checkGroup = isEmpty(data.group)
      ? '-'
      :
      <BaseLink
        style={{ fontSize: '14px', padding: '0' }}
        to={`/group-manage?group=${data.group}`}
      >
        {data.group}
      </BaseLink>;

    return (
      <div className={styles.System__title}>
        <div className={styles.System__title__Blod}>{!isEmpty(data) ? data.name : ''}</div>
        <div className={styles.System__title__normal}>{t('source')} {checkParent}</div>
        <div className={`${styles.System__title__normal} ${styles.System__title__paddingLeftRight}`}>｜</div>
        <div className={styles.System__title__normal}>{t('group2')} {checkGroup}</div>
      </div>
    )
  }

  function GenNonDuplicateID(){
    return Math.random().toString(16)
  }

  return (
    <BasePanel
      contentStyle={{ height: 'calc(100% - 45px)', overflow: 'auto' }}
      style={{ height: '100%' }}
      title={ModalTitle()}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          (!isEmpty(data) && !isEmpty(resourceUnits)) &&
          Object.entries(data.cells).map(([key, value], index) => {
            const { number: totalUnit, name } = value;
            const usedUnit = data.usedCells[key] !== undefined ? data.usedCells[key] : 0
            return (
              <Progress
                key={`${data.name}${key}${GenNonDuplicateID()}`}
                keys={index}
                percentage={(usedUnit / totalUnit) * 100}
                style={{ padding: 20, width: '33.33%' }}
                title={name}
                total={totalUnit}
                unit={''}
                value={usedUnit}
              />
            )
          })
        }
      </div>
    </BasePanel>
  );
};

System.propTypes = {
  data: PropTypes.object,
  resourceUnits: PropTypes.object
}

export default System;