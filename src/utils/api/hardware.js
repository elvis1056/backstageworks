import request from './request';

const baseURL = `${window.ENV.prometheusUri}/api/v1/`;
const javaRestURL = `${window.ENV.javaRestServerUri}/api/`
const authPrometheus = {
  username: 'admin',
  password: 'yXPu9uSJiIBDGZZq7Z6z'
}

export const getHardwareInfo = params => {
  return request({
    baseURL,
    url: '/query',
    auth: authPrometheus,
    params
  });
};

export const getHardwareInfoRange = params => {
  return request({
    baseURL,
    url: '/query_range',
    auth: authPrometheus,
    params
  });
};

export const getTotalHostInfo = params => {
  return request({
    baseURL,
    url: 'series',
    auth: authPrometheus,
    params
  })
}

export const shutdownNode = data => {
  return request({
    method: 'POST',
    baseURL: javaRestURL,
    url: '/node/shutdown',
    data
  })
}

export const rebootNode = data => {
  return request({
    method: 'POST',
    baseURL: javaRestURL,
    url: '/node/reboot',
    data
  })
}

export const getNodeState = () => {
  return request({
    url: '/kubernetes/nodes'
  })
}
