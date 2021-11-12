import React from 'react';
import styles from './index.module.scss';

import PropTypes from 'prop-types';

import { colors } from 'constant';

const Progress = ({ className, style, title, keys, total, value, unit, progressColor }) => {

  // maximun 100%
  const width = value / total <= 1 ? value / total * 100 : 100
  const progessStyle = {
    width: total ? `${width}%` : 0,
    background: progressColor || colors[(keys % colors.length)]
  }

  return (
    <div
      className={className}
      style={style}
    >
      <div className={styles.header}>
        <div>{title}</div>
        <div>{ total ? `${value} / ${total} ${unit}` : '- / -'}</div>
      </div>
      <div className={styles.track}>
        <div
          className={styles.progess}
          style={progessStyle}
        />
      </div>
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
  keys: PropTypes.number,
  progressColor: PropTypes.string
}

export default Progress;