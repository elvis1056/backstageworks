import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  DetailsList, CheckboxVisibility, DetailsListLayoutMode, SelectionMode, DetailsHeader, DetailsRow,
  ComboBox
} from 'office-ui-fabric-react';
import { isEmpty, isNil } from 'lodash';
import { TextField } from 'components/BaseInput';
import { IconButton, DefaultButton } from 'components/BaseButton';

const onRenderDetailsHeader = ({ ...detailsHeaderProps }) => {
  const renderCustomHeaderTooltip = (tooltipHostProps, defaultRender) => {
    return (
      <span
        style={{
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        {
          defaultRender({ ...tooltipHostProps })
        }
      </span>
    );
  };

  return (
    <DetailsHeader
      {...detailsHeaderProps}
      onRenderColumnHeaderTooltip={renderCustomHeaderTooltip}
      styles={{
        root: {
          padding: '10px 0'
        }
      }}
    />
  );
};

const NFSMount = ({ title, name, value, onChange, onError, keyName, keyField, keyOptions, valueName, valueField, secret, onValidateKey, onValidateValue }) => {
  const { t } = useTranslation();

  const [dupList, setDupList] = useState([]);

  useMemo(() => {
    const valueCount = value.reduce((res, x) => {
      if (res[x[valueField]] === undefined) {
        res[x[valueField]] = 0;
      }
      res[x[valueField]] += 1;
      return res;
    }, {});
    const newDupList = value.filter(x => valueCount[x[valueField]] > 1).map(x => x[valueField]);

    // const msgId = `KeyValueList ${name}`;
    let errorMessage = '';
    if (newDupList.length > 0) {
      errorMessage = `${name || 'KeyValueList'} has duplicated values.`;
    }

    if (value.some(x => isEmpty(x[keyField]) && !isEmpty(x[valueField]))) {
      errorMessage = `${name || 'KeyValueList'} has key with empty value.`;
    }
    if (value.some(x => isEmpty(x[valueField]) && !isEmpty(x[keyField]))) {
      errorMessage = `${name || 'KeyValueList'} has value with empty key.`;
    }

    if (!isNil(onValidateKey) || !isNil(onValidateValue)) {
      for (const item of value) {
        if (!isNil(onValidateKey)) {
          const key = item[keyField];
          const res = onValidateKey(key);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
        if (!isNil(onValidateValue)) {
          const value = item[valueField];
          const res = onValidateValue(value);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
      }
    }
    if (onError) {
      onError(errorMessage);
    }
    setDupList(newDupList);
  }, [value]);

  const columns = [
    {
      key: keyName,
      name: title,
      minWidth: 320,
      onRender: (item, idx) => {
        let errorMessage = null;
        if (isEmpty(item[keyField]) && !isEmpty(item[valueField])) {
          errorMessage = 'empty key';
        }
        if (!isNil(onValidateKey)) {
          const res = onValidateKey(item[keyField]);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
        return (
          <ComboBox
            errorMessage={errorMessage}
            onChange={(e, opt) => onKeyChange(idx, opt.text)}
            options={keyOptions}
            styles={{
              root: {
                borderRadius: 3
              }
            }}
            text={item[keyField]}
          />
        );
      }
    },
    {
      key: valueName,
      name: valueName,
      minWidth: 170,
      onRender: (item, idx) => {
        let errorMessage = null;
        if (dupList.includes(item[valueField])) {
          errorMessage = t('sameMountPoint');
        }
        if (!isNil(onValidateValue)) {
          const res = onValidateValue(item[valueField]);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
        return (
          <TextField
            errorMessage={errorMessage}
            onChange={(e, val) => onValueChange(idx, val)}
            type={secret && 'password'}
            value={item[valueField]}
          />
        );
      }
    },
    {
      key: 'remove',
      name: `${t('delete')}`,
      minWidth: 70,
      style: { padding: 0 },
      onRender: (item, idx) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <IconButton
            iconProps={{ iconName: 'Delete' }}
            key={`remove-button-${idx}`}
            onClick={() => onRemove(idx)}
          />
        </div>
      )
    }
  ];

  const onAdd = useCallback(() => {
    onChange([...value, { [keyField]: '', [valueField]: '' }]);
  }, [onChange, value, keyField, valueField]);

  const onRemove = useCallback(idx => {
    onChange([...value.slice(0, idx), ...value.slice(idx + 1)]);
  }, [onChange, value]);

  const onKeyChange = useCallback((idx, val) => {
    onChange([...value.slice(0, idx), { [keyField]: val, [valueField]: `/root/${val}` }, ...value.slice(idx + 1)]);
  }, [onChange, value, keyField]);

  const onValueChange = useCallback((idx, val) => {
    onChange([...value.slice(0, idx), { ...value[idx], [valueField]: val }, ...value.slice(idx + 1)]);
  }, [onChange, value, valueField]);

  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'column' 
      }}
    >
      <div>
        <DetailsList
          checkboxVisibility={CheckboxVisibility.hidden}
          columns={columns}
          compact
          // getKey={getKey}
          items={value}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          onRenderDetailsHeader={onRenderDetailsHeader}
          onRenderRow={props => {
            return (
              <DetailsRow
                styles={{
                  root: {
                    fontSize: '14px',
                    color: '#333',
                    selectors: {
                      '& .ms-ComboBox-container': {
                        width: '100%',
                        padding: '0 10px'
                      },
                      '& .ms-TextField': {
                        width: '100%',
                        padding: '0 10px'
                      }
                    }
                  },
                  cell: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 0'
                  }
                }}
                {...props}
              />
            );
          }}
          selectionMode={SelectionMode.none}
        />
        <div style={{ padding: '0 10px' }}>
          <DefaultButton
            iconProps={{
              iconName: 'Add'
            }}
            onClick={onAdd}
            text={t('Add')}
          />
        </div>
      </div>
    </div>
  );
};

NFSMount.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
  // custom field
  secret: PropTypes.bool,
  columnWidth: PropTypes.number,
  keyName: PropTypes.string,
  keyField: PropTypes.string,
  keyOptions: PropTypes.array,
  valueName: PropTypes.string,
  valueField: PropTypes.string,
  // validation
  onValidateKey: PropTypes.func,
  onValidateValue: PropTypes.func
};

export default NFSMount;