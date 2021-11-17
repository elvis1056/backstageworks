/*
 * Copyright (c) Microsoft Corporation
 * All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { camelCase, isEmpty, isNil } from 'lodash';
import { IconButton, Stack, DetailsList, CheckboxVisibility, DetailsListLayoutMode, SelectionMode, DetailsHeader, DetailsRow } from 'office-ui-fabric-react';
import PropTypes from 'prop-types';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { DebouncedTextField } from './debounced-text-field';
import { dispatchResizeEvent } from './utils';
// import context from '../context';
import { useTranslation } from 'react-i18next';
import { DefaultButton } from 'components/BaseButton';

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
          padding: '0'
        }
      }}
    />
  );
};

export const KeyValueList = ({ name, value, onChange, onError, keyName, keyField, valueName, valueField, secret, onValidateKey, onValidateValue }) => {
  keyName = keyName || 'Key';
  keyField = keyField || camelCase(keyName);
  valueName = valueName || 'Value';
  valueField = valueField || camelCase(valueName);

  const { t } = useTranslation();
  const [dupList, setDupList] = useState([]);
  // const { setErrorMessage } = useContext(context);

  useMemo(() => {
    const keyCount = value.reduce((res, x) => {
      if (res[x[keyField]] === undefined) {
        res[x[keyField]] = 0;
      }
      res[x[keyField]] += 1;
      return res;
    }, {});
    const newDupList = value.filter(x => keyCount[x[keyField]] > 1).map(x => x[keyField]);

    // const msgId = `KeyValueList ${name}`;
    let errorMessage = '';
    if (newDupList.length > 0) {
      errorMessage = `${name || 'KeyValueList'} has duplicated keys.`;
    }
    if (value.some(x => isEmpty(x[keyField]) && !isEmpty(x[valueField]))) {
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
    // setErrorMessage(msgId, errorMessage);
    setDupList(newDupList);
  }, [value]);

  const onAdd = useCallback(() => {
    onChange([...value, { [keyField]: '', [valueField]: '' }]);
  }, [onChange, value, keyField, valueField]);

  const onRemove = useCallback(idx => {
    onChange([...value.slice(0, idx), ...value.slice(idx + 1)]);
  }, [onChange, value]);

  const onKeyChange = useCallback((idx, val) => {
    onChange([...value.slice(0, idx), { ...value[idx], [keyField]: val }, ...value.slice(idx + 1)]);
  }, [onChange, value, keyField]);

  const onValueChange = useCallback((idx, val) => {
    onChange([...value.slice(0, idx), { ...value[idx], [valueField]: val }, ...value.slice(idx + 1)]);
  }, [onChange, value, valueField]);

  const getKey = useCallback((item, idx) => idx, []);

  // workaround for fabric's bug
  // https://github.com/OfficeDev/office-ui-fabric-react/issues/5280#issuecomment-489619108
  useLayoutEffect(() => {
    dispatchResizeEvent();
  });

  const columns = [
    {
      key: keyName,
      name: keyName,
      minWidth: 300,
      onRender: (item, idx) => {
        let errorMessage = null;
        if (dupList.includes(item[keyField])) {
          errorMessage = t('duplicateKeyword');
        }
        if (isEmpty(item[keyField]) && !isEmpty(item[valueField])) {
          errorMessage = t('keywordCannotBeEmpty');
        }
        if (!isNil(onValidateKey)) {
          const res = onValidateKey(item[keyField]);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
        return (
          <DebouncedTextField
            errorMessage={errorMessage}
            onChange={(e, val) => onKeyChange(idx, val)}
            value={item[keyField]}
          />
        );
      }
    },
    {
      key: valueName,
      name: valueName,
      minWidth: 150,
      onRender: (item, idx) => {
        let errorMessage = null;
        if (!isNil(onValidateValue)) {
          const res = onValidateValue(item[valueField]);
          if (!isEmpty(res)) {
            errorMessage = res;
          }
        }
        return (
          <DebouncedTextField
            defaultValue={item[valueField]}
            errorMessage={errorMessage}
            onChange={(e, val) => onValueChange(idx, val)}
            type={secret && 'password'}
            value={item[valueField] === 0 ? '0' : item[valueField]}
          />
        );
      }
    },
    {
      key: 'remove',
      name: `${t('delete')}`,
      minWidth: 50,
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

  return (
    <Stack gap="m">
      <div>
        <DetailsList
          checkboxVisibility={CheckboxVisibility.hidden}
          columns={columns}
          compact
          getKey={getKey}
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
                      '& .ms-TextField': {
                        width: '100%',
                        padding: '0 10px'
                      },
                      '& .ms-TextField-wrapper': {
                        width: '100%'
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
      </div>
      <div>
        <DefaultButton
          iconProps={{ iconName: 'Add' }}
          onClick={onAdd}
        >
          {t('Add')}
        </DefaultButton>
      </div>
    </Stack>
  );
};

KeyValueList.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
  // custom field
  secret: PropTypes.bool,
  // columnWidth: PropTypes.number,
  keyName: PropTypes.string,
  keyField: PropTypes.string,
  valueName: PropTypes.string,
  valueField: PropTypes.string,
  // validation
  onValidateKey: PropTypes.func,
  onValidateValue: PropTypes.func
};
