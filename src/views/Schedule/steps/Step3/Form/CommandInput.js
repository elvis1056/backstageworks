import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {
  DirectionalHint,
  TooltipHost,
  Icon
} from 'office-ui-fabric-react';
import MonacoTextField from './MonacoTextField';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { PAI_ENV_VAR } from 'views/Schedule/components/constants';

const CommandInput = React.memo(({ title, hint, value, defaultValue, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
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
      <div className={styles.input}>
        <MonacoTextField
          completionItems={[...PAI_ENV_VAR.map(x => x.key)]}
          errorMessage={isEmpty(value) ? t('commandCannotBeEmpty') : null}
          monacoProps={{ height: 150, language: 'shell', defaultValue }}
          value={value.replaceAll(' && ', '\n')}
          {...props}
        />
      </div>
    </div>
  );
});

CommandInput.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
};

export default CommandInput;