import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Shm = ({ data = 0 }) => {
  return (
    <div className={classnames(styles.container, styles.shm)}>
      <span />
      <span />
      <span />
      <div className={styles.content}>
        <p>SHM</p>
        <p>
          <b>{data}</b>MB
        </p>
      </div>
    </div>
  );
};

Shm.propTypes = {
  data: PropTypes.number
};

export default Shm;