import { DockerInfo } from './docker-info';
import { Completion } from './completion';
import { Deployment } from './deployment';
import { getDefaultContainerSize, isDefaultContainerSize } from './container-size';
import { get, isNil, isEmpty } from 'lodash';
import { removeEmptyProperties } from '../utils';
// import {DEFAULT_DOCKER_URI} from '../utils/constants';

export class JobTaskRole {
  constructor(props) {
    const { name, instances, dockerInfo, ports, commands, completion, deployment, containerSize,
      isContainerSizeEnabled, taskRetryCount, shmMB } = props;
    this.name = name || '';
    this.instances = instances || 1;
    this.dockerInfo = dockerInfo || new DockerInfo({ uri: '' });
    this.ports = ports || [];
    this.commands = commands || '';
    this.completion = completion || new Completion({});
    this.deployment = deployment || new Deployment({});
    this.containerSize = containerSize || getDefaultContainerSize();
    this.isContainerSizeEnabled = isContainerSizeEnabled || false;
    this.taskRetryCount = taskRetryCount || 0;
    this.shmMB = shmMB || 64;
  }

  static fromProtocol(name, taskRoleProtocol, deployments, prerequisites, secrets) {
    const instances = get(taskRoleProtocol, 'instances', 1);
    const completion = get(taskRoleProtocol, 'completion', {});
    const dockerImage = get(taskRoleProtocol, 'dockerImage');
    const resourcePerInstance = get(taskRoleProtocol, 'resourcePerInstance', {});
    const commands = get(taskRoleProtocol, 'commands', []);
    const shmMB = get(taskRoleProtocol, 'shmMB', 0);

    const taskDeployment = get(deployments[0], `taskRoles.${name}`, {});
    const dockerInfo = prerequisites.find(prerequisite => prerequisite.name === dockerImage) || {};
    const ports = isNil(resourcePerInstance.ports) ? [] :
      Object.entries(resourcePerInstance.ports).map(([key, value]) => ({ key, value: value.toString() }));
    const taskRetryCount = get(taskRoleProtocol, 'taskRetryCount', 0);

    const jobTaskRole = new JobTaskRole({
      name,
      instances,
      completion: Completion.fromProtocol(completion),
      commands: isNil(commands) ? '' : commands.join('\n'),
      containerSize: resourcePerInstance,
      deployment: Deployment.fromProtocol(taskDeployment),
      dockerInfo: DockerInfo.fromProtocol(dockerInfo, secrets),
      ports,
      shmMB,
      taskRetryCount
    });

    if (!isDefaultContainerSize(jobTaskRole.containerSize)) {
      jobTaskRole.isContainerSizeEnabled = true;
    }
    return jobTaskRole;
  }

  getDockerPrerequisite() {
    return this.dockerInfo.convertToProtocolFormat();
  }

  getDeployment() {
    return this.deployment.convertToProtocolFormat();
  }

  convertToProtocolFormat() {
    const taskRole = {};
    const ports = this.ports.reduce((val, x) => {
      if (typeof x.value === 'string') {
        val[x.key] = parseInt(x.value);
      } else {
        val[x.key] = x.value;
      }
      return val;
    }, {});
    const resourcePerInstance = removeEmptyProperties({ ...this.containerSize, ports: ports });

    taskRole[this.name] = removeEmptyProperties({
      instances: this.instances,
      shmMB: this.shmMB,
      completion: this.completion,
      dockerImage: this.dockerInfo.name,
      resourcePerInstance: resourcePerInstance,
      commands: isEmpty(this.commands) ? [] : this.commands.trim ? this.commands.trim().split('\n').map(line=>(line.trim())) : this.commands,
      taskRetryCount: this.taskRetryCount
    });

    return taskRole;
  }
}
