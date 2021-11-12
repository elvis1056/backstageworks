import React from 'react';

import PropTypes from 'prop-types';

import PanelStyle from './index.module.scss';

const BasePanel = ({ title, className, children, contentStyle, style }) => {
  return (
    <div
      className={className}
      style={style}
    >
      <div className={PanelStyle.header}>
        {title}
      </div>
      <div
        className={PanelStyle.content}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
};

BasePanel.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  contentStyle: PropTypes.object,
  style: PropTypes.object
};

export default BasePanel;
