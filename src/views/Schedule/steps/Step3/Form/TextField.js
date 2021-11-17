import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {
  DirectionalHint,
  TooltipHost,
  Icon,
  mergeStyles
} from 'office-ui-fabric-react';
import { TextField as BaseTextField } from 'components/BaseInput';
import { debounce } from 'lodash';

const TextField = ({ title, hint, customButton, onChange, containerClass, ...props }) => {
  const _onChange = debounce(onChange, 50)
  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <label>{title}</label>
        {
          hint &&
          <TooltipHost
            calloutProps={{
              isBeakVisible: false,
              directionalHint: DirectionalHint.topAutoEdge,
              gapSpace: 8
            }}
            content={hint}
            tooltipProps={React.isValidElement(hint) ? {
              onRenderContent: () => hint
            } : {}}
          >
            <Icon
              iconName="Info"
              styles={{ root: { verticalAlign: 'middle', cursor: 'pointer', margin: '0 5px' } }}
            />
          </TooltipHost>
        }
      </div>
      <div className={mergeStyles({ position: 'relative', ...containerClass })}>
        <BaseTextField
          onChange={_onChange}
          {...props}
        />
        {customButton}
      </div>
    </div>
  );
};

TextField.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onChange: PropTypes.func,
  customButton: PropTypes.node,
  containerClass: PropTypes.object
};

export default TextField;