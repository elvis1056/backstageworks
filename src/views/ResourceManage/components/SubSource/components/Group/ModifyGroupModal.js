import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { DefaultButton, PrimaryButton } from 'components/BaseButton';
import { BaseModal } from 'components/BaseModal';
import MuiDropdown from 'components/BaseMuiDropdown';
import BaseTextField from 'components/BaseMuiInput/BaseTextField';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';

import { putResourceVirtualGroup } from 'utils/api';

import Context from '../../../../Context';

const useStyles = makeStyles(() => ({
  marginRight10: {
    marginRight: 10
  }
}))

function ModifyGroupModal({ isOpen, onClose, resourceUnits }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { getData, modifyGroupData, originModifyGroupSelectedData } = useContext(Context);
  const [isCreating, setIsCreating] = useState(false);
  const [unitsList, setUnitsList] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState([]);

  const [name, setName] = useState('');
  const [isSchedulable, setIsSchedulable] = useState(false);

  const addDropDownOptionKeys = optionItems => {
    return optionItems.map((item) => ({
      key: item.name,
      text: `${item.name} (${item.units.cpu} CPU, ${item.units.gpu !== null ? item.units.gpu : 0} GPU, ${item.units.memory} ${t('Memory')})`,
      optionkey: item.name,
      ...item
    }));
  };

  const onSubmit = async() => {
    try {
      setIsCreating(true)
      const cells = Object.values(selectedUnits)
        .filter(item => ({ ...item, number: item.number === '' ? 0 : item.number }))
        .reduce((acc, { key, number }) => {
          const num = Number(number)
          if (num <= 0) {
            return { ...acc }
          } else {
            return { ...acc, [key]: { number: num } }
          }
        }, {})
      const result = {
        schedulable: isSchedulable,
        cells: cells
      }
      await putResourceVirtualGroup(name, result)
        .then(() => {
          getData()
          onClose()
          setIsCreating(false)
          toast.success(`${t('modify')}${t('enSpace')}${t('success')}`)
        })
    } catch (err) {
      toast.error(err?.data ? err.data?.message : err?.message)
      setIsCreating(false)
    }
  };

  useEffect(() => {
    if (!isEmpty(modifyGroupData) && !isEmpty(originModifyGroupSelectedData)) {
      const { name, cells, schedulable } = modifyGroupData;
      setName(name)
      setIsSchedulable(schedulable)
      const remainCellsWithNum = Object.entries(cells).reduce((acc, [key, details]) => {
        const { name, number, resourceUnit } = details;
        const units = resourceUnits[resourceUnit]
        return [
          ...acc,
          { key, units, name, number, maxNum: number }
        ]
      }, [])
      setUnitsList(remainCellsWithNum)

      const { cells: originCells } = originModifyGroupSelectedData
      const selectedUnits = Object.entries(originCells).reduce((acc, [key, details]) => {
        const { resourceUnit, name, number } = details
        const units = resourceUnits[resourceUnit]
        return [
          ...acc,
          {
            key,
            text: `${name} (${units.cpu} CPU, ${units.gpu !== null ? units.gpu : 0} GPU, ${units.memory} ${t('Memory')})`,
            number,
            maxNum: modifyGroupData['cells'][key]['number']
          }
        ]
      }, [])

      setSelectedUnits(selectedUnits)
    }
  }, [modifyGroupData, originModifyGroupSelectedData])

  return (
    <BaseModal
      isCloseIcon
      isOpen={isOpen}
      modalWidth={500}
      onClose={onClose}
      title={`${t('modify')}${t('enSpace')}${t('group')}`}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          container
          direction="row"
          item
          spacing={2}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xl={6}
          >
            <BaseTextField
              disabled
              label={t('name')}
              onChange={(e) => {
                const value = e.target.value;
                setName(value)
              }}
              required
              type="text"
              value={name}
            />
          </Grid>
          <Grid
            alignItems="center"
            container
            item
            justify="center"
            lg={6}
            md={6}
            sm={6}
            xl={6}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSchedulable}
                  color="primary"
                  name={'schedulable'}
                  onChange={(e, value) => setIsSchedulable(value)}
                />
              }
              label={t('needScheduledToUse')}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
        >
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xl={12}
          >
            <MuiDropdown
              classes={{ root: classes.heightAuto }}
              // inputLabelProps={{ classes: {} }}
              list={addDropDownOptionKeys(unitsList)}
              multiple
              onChange={(e, child) => {
                setSelectedUnits(
                  selectedUnits.find(item => item.key === child.props.optionkey) === undefined
                    ?
                    [
                      ...selectedUnits,
                      {
                        key: child.props.optionkey,
                        text: child.props.text,
                        number: 0,
                        maxNum: child.props.maxNum
                      }
                    ]
                    :
                    selectedUnits.filter(selected => selected.key !== child.props.optionkey)
                )
              }}
              onChangeChecked={(valueOrigin, item) => {
                return valueOrigin.find(data => data.key === item.optionkey) !== undefined ? true : false
              }}
              // selectProps={{
              //   SelectDisplayProps: { style: { paddingTop: 17, paddingBottom: 13, fontSize: 16 } }
              // }}
              text={`${t('Select')}${t('enSpace')}${t('unit')}`}
              value={selectedUnits.map(item => item.text)}
              valueOrigin={selectedUnits}
              width={'100%'}
            />
          </Grid>
        </Grid>
        <Grid
          item
          style={{ height: 300 }}
        >
          <Grid
            container
            direction="column"
            style={{ border: '1px solid rgba(0, 0, 0, 0.12)', flexWrap: 'nowrap', height: '100%', borderRadius: 4, overflow: 'auto' }}
          >
            {
              selectedUnits.map(item => {
                return (
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    item
                    justify="center"
                    spacing={2}
                    style={{ padding: 8 }}
                  >
                    <Grid
                      item
                      lg={8}
                      md={8}
                      sm={8}
                      style={{ padding: 8, textOverflow: 'ellipsis', overflow: 'hidden' }}
                      xl={8}
                    >
                      {item.text}
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={3}
                      style={{ padding: 8 }}
                      xl={3}
                    >
                      <BaseTextField
                        InputProps={{
                          inputProps: {
                            min: 0,
                            onFocus: (e) => e.target.select(),
                            onKeyPress: (e) => {
                              if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }
                          }
                        }}
                        label={t('amount')}
                        onChange={(e) => {
                          const value = e.target.value;
                          const regex = /^[0-9]+$/;
                          const selectedUnit = selectedUnits.find(unit => unit.key === item.key)
                          const restrictedValue = regex.test(value) ? Math.min(Math.max(+value, 0), selectedUnit?.maxNum) : ''
                          const find = { ...selectedUnit, number: restrictedValue }
                          const findIndex = selectedUnits.findIndex(unit => unit.key === item.key)
                          const filterUnits = selectedUnits.filter(unit => unit.key !== item.key)
                          filterUnits.splice(findIndex, 0, find)

                          setSelectedUnits(filterUnits)
                        }}
                        required
                        type="number"
                        value={item.number}
                      />
                    </Grid>
                    <Grid
                      item
                      lg={1}
                      md={1}
                      sm={1}
                      style={{ padding: 8 }}
                      xl={1}
                    >
                      / {item.maxNum}
                    </Grid>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
        <Grid
          item
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <DefaultButton
            children={t('cancel')}
            classes={{ root: classes.marginRight10 }}
            disabled={isCreating}
            onClick={() => (onClose())}
          />
          <PrimaryButton
            children={t('confirm')}
            disabled={isCreating}
            onClick={() => onSubmit()}
            type={'submit'}
          />
        </Grid>
      </Grid>
    </BaseModal>
  );
}

ModifyGroupModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
  resourceUnits: PropTypes.object
};

export default ModifyGroupModal;
