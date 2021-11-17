import Joi from 'joi-browser';

export const TaskRoleSehema = Joi.object().keys({
  name: Joi.string().required(),
  completion: Joi.object().keys({
    minFailedInstances: Joi.number().integer().min(0).allow(null),
    minSucceededInstances: Joi.number().integer().min(0).allow(null)
  }),
  dockerInfo: Joi.object().keys({
    uri: Joi.string().required()
  }).unknown(true),
  containerSize: Joi.object().keys({
    cpu: Joi.number().integer().min(1),
    gpu: Joi.number().integer().min(0),
    memoryMB: Joi.number().integer().min(1),
    storageGB: Joi.number().integer().min(1)
  }),
  deployment: Joi.object().unknown(true),
  isContainerSizeEnabled: Joi.boolean(),
  instances: Joi.number().integer().min(1),
  shmMB: Joi.number().max(Joi.ref('containerSize.memoryMB')).min(0).default(64),
  commands: Joi.string(),
  ports: Joi.array().items(Joi.object()).allow(null),
  taskRetryCount: Joi.number().integer().min(0)
})

export const TaskRolesSechma = Joi.array().items(TaskRoleSehema)