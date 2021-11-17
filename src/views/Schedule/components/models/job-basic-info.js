

import { isEmpty, get } from 'lodash';
export const VIRTUAL_CLUSTER_DEFAULT_VALUE = 'total';
export class JobBasicInfo {
  constructor(props) {
    const { name, jobRetryCount, virtualCluster, gpuType } = props;
    this.name = name || '';
    this.jobRetryCount = jobRetryCount || 0;
    this.virtualCluster = virtualCluster || '';
    this.gpuType = gpuType || '';
  }

  static fromProtocol(protocol) {
    const { name, jobRetryCount } = protocol;
    const virtualCluster = get(protocol, 'defaults.virtualCluster', VIRTUAL_CLUSTER_DEFAULT_VALUE);
    const gpuType = get(protocol, 'extras.gpuType', '');
    return new JobBasicInfo({
      name: name,
      jobRetryCount: jobRetryCount,
      virtualCluster: virtualCluster,
      gpuType: gpuType
    });
  }

  getDefaults() {
    if (isEmpty(this.virtualCluster)) {
      return '';
    }

    return {
      virtualCluster: this.virtualCluster
    };
  }

  getGpuType() {
    return this.gpuType;
  }

  convertToProtocolFormat() {
    return {
      protocolVersion: 2,
      name: this.name,
      type: 'job',
      jobRetryCount: this.jobRetryCount
    };
  }
}
