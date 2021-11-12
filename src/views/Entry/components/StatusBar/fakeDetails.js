export const fakeThisWeekJobScheduleReq = [
  {
    'id': 14,
    'name': '\ba',
    'state': 1,
    'cells': {
      'default.pinned.NODE-103': {
        'name': null,
        'resourceUnit': null,
        'number': 1
      }
    },
    'startAt': 1636696800000,
    'endAt': 1636774500000,
    'virtualGroup': 'test',
    'user': 'admin',
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': {
        'aaa': '2',
        'bbb': '3'
      },
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvistest/rrrr:1',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskRoleOdin': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 1,
            'cpu': 8,
            'memoryMB': 59505,
            'ports': {}
          },
          'commands': [
            'sleep infinity',
            'cd'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'default'
      },
      'extras': {
        'virtualGroup': 'test',
        'hivedScheduler': {
          'taskRoles': {
            'taskRoleOdin': {
              'skuNum': null,
              'skuType': null,
              'pinnedCellId': 'NODE-103',
              'affinityGroupName': null
            }
          }
        },
        'nfsList': [
          {
            'name': 'qwer',
            'mountPoint': '/root/qwer'
          },
          {
            'name': 'herer',
            'mountPoint': '/root/herer'
          }
        ],
        'glusterfsList': [
          {
            'name': 'qwer',
            'mountPoint': '/root/qwer'
          },
          {
            'name': 'herer',
            'mountPoint': '/root/herer'
          }
        ],
        'xdfsList': null
      },
      'deployments': null
    },
    'jobScheduleLogs': [
      {
        'timestamp': 1636696800060,
        'message': '400 Bad Request: [{"code":"InvalidProtocolError","message":"[{\\"keyword\\":\\"minProperties\\",\\"dataPath\\":\\".taskRoles[\'taskRoleOdin\'].resourcePerInstance.ports\\",\\"schemaPath\\":\\"#/properties/taskRoles/patternProperties/%5E%5Ba-zA-Z_%5D%5Ba-zA-Z0-9_%5D*%2'
      }
    ],
    'jobState': -1
  }
]