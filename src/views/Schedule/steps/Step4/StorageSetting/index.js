import React from 'react';
import { useTranslation } from 'react-i18next';
import NFSMount from './NFSMount';
import PropTypes from 'prop-types';

const StorageSetting = ({ nfsInfo, glusterfsInfo, nfsMounts, setNfsMountsState, setGlusterfsMountsState, glusterfsMounts }) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <NFSMount
          hint={t('toolTipsNFS')}
          keyField="name"
          keyName={t('name')}
          keyOptions={nfsInfo.map(nfs => ({ key: nfs.name, text: nfs.name }))}
          name="NFS List"
          onChange={setNfsMountsState}
          onError={() => {}}
          title={t('NFS')}
          value={nfsMounts}
          valueField="mountPoint"
          valueName={t('mountPoint')}
        />
        <NFSMount
          hint={t('toolTipsNFS')}
          keyField="name"
          keyName={t('name')}
          keyOptions={glusterfsInfo.map(glusterfs => ({ key: glusterfs.name, text: glusterfs.name }))}
          name="GlusterFS List"
          onChange={setGlusterfsMountsState}
          onError={() => {}}
          title={t('glusterfs')}
          value={glusterfsMounts}
          valueField="mountPoint"
          valueName={t('volumeGlusterFS')}
        />
      </div>
    </>
  );
};

StorageSetting.propTypes = {
  nfsInfo: PropTypes.array,
  glusterfsInfo: PropTypes.array,
  nfsMounts: PropTypes.array,
  setNfsMountsState: PropTypes.func,
  setGlusterfsMountsState: PropTypes.func,
  glusterfsMounts: PropTypes.array
}


export default StorageSetting;