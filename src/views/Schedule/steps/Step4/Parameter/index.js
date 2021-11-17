import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyValueList } from './KeyValueList';
import PropTypes from 'prop-types';

const ParametersList = ({ parameters, setParameters }) => {
  const { t } = useTranslation();
  const onPortChange = v => setParameters(v);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <KeyValueList
        keyField="key"
        keyName={t('keyword')}
        name="Parameter List"
        onChange={onPortChange}
        value={parameters}
        valueField="value"
        valueName={t('Value')}
      />
    </div>
  );
};

ParametersList.propTypes = {
  parameters: PropTypes.array,
  setParameters: PropTypes.func
}

export default ParametersList;