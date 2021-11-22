export const fakeTemplate = [
  {
    'id': 4,
    'name': 'jk002',
    'description': 'jk002',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 2,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'asdf',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': {
        'aaa': '2',
        'bbb': '3'
      },
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvisyoyoyo/ddd:2',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1aaa': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': {
              'aaa': 3,
              'bbb': 4,
              'ccc': 2
            }
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'cpu'
      },
      'extras': {
        'virtualGroup': 'llll',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1aaa': {
              'skuNum': null,
              'skuType': null,
              'pinnedCellId': 'NODE-103-cpu',
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
            'name': 'qqqqerqwewqe',
            'mountPoint': '/root/qqqqerqwewqe'
          },
          {
            'name': 'tom',
            'mountPoint': '/root/tom'
          }
        ],
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 5,
    'name': 'qqqq',
    'description': 'wwww',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'qqqq',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvisddd/yoyoyo:1',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'cpu'
      },
      'extras': {
        'virtualGroup': 'llll',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'cpu',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 6,
    'name': 'aaaa',
    'description': 'sss',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'aaa',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/ben/jason:666',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'Task_role_1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': '192.168.0.159/ben/jason:666',
          'resourcePerInstance': {
            'gpu': 1,
            'cpu': 6,
            'memoryMB': 20480,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'Task_role_1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 8,
    'name': 'ssss',
    'description': 'sss',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'sssss',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/admin/test:demo4',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'Taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': {
              'aaa': 3,
              'ddd': 4
            }
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'cpu'
      },
      'extras': {
        'virtualGroup': 'llll',
        'hivedScheduler': {
          'taskRoles': {
            'Taskrole1': {
              'skuNum': null,
              'skuType': 'cpu',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 9,
    'name': 'jk001',
    'description': 'jk001',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1jk',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvistest/w:qw',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1jkiiiaassa': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 1,
            'cpu': 6,
            'memoryMB': 20480,
            'ports': {
              'aaa': 1
            }
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1jkiiiaassa': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 10,
    'name': 'jjjj',
    'description': 'jjjj',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1jjjj',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': {
        'ddd': '3'
      },
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvis/elvisqq:q',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        },
        {
          'uri': '192.168.0.159/elvistest/w:qw',
          'name': 'docker_image_1',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole2': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': {
              'aaa': 3,
              'vvv': 4
            }
          },
          'commands': [
            'sleep infinity'
          ]
        },
        'taskrole1aaaa': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_1',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': {
              'ds': 3
            }
          },
          'commands': [
            'sleep infinity',
            'ls',
            '',
            'cd',
            'aaa'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'cpu'
      },
      'extras': {
        'virtualGroup': 'llll',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole2': {
              'skuNum': null,
              'skuType': null,
              'pinnedCellId': 'NODE-103-cpu',
              'affinityGroupName': null
            },
            'taskrole1aaaa': {
              'skuNum': null,
              'skuType': 'cpu',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': [
          {
            'name': 'xfsquaota',
            'mountPoint': '/root/xfsquaota'
          }
        ],
        'glusterfsList': [
          {
            'name': 'qqqqerqwewqe',
            'mountPoint': '/root/qqqqerqwewqe'
          }
        ],
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 11,
    'name': 'elvis12345',
    'description': 'elvis',
    'owner': 'elvis',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole112',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': {
        'test1': '2'
      },
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvistest/w:qw',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': '192.168.0.159/elvistest/w:qw',
          'resourcePerInstance': {
            'gpu': 1,
            'cpu': 6,
            'memoryMB': 20480,
            'ports': {
              'myport': 1
            }
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': [
          {
            'name': 'ass',
            'mountPoint': '/root/ass'
          }
        ],
        'glusterfsList': [
          {
            'name': 'qqqqerqwewqe',
            'mountPoint': '/root/qqqqerqwewqe'
          }
        ],
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 12,
    'name': 'xxx',
    'description': 'xxx',
    'owner': 'elvis',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvisyoyoyo/ddd:2',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': '192.168.0.159/elvisyoyoyo/ddd:2',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 0,
            'memoryMB': 0,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': [
          {
            'name': 'newnew',
            'mountPoint': '/root/newnew'
          }
        ],
        'glusterfsList': null,
        'xdfsList': [
          {
            'name': 'newnew',
            'mountPoint': '/root/newnew'
          }
        ]
      },
      'deployments': null
    }
  },
  {
    'id': 13,
    'name': 's',
    'description': 'a',
    'owner': 'elvis',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvisddd/yoyoyo:2',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': '192.168.0.159/elvisddd/yoyoyo:2',
          'resourcePerInstance': {
            'gpu': 2,
            'cpu': 12,
            'memoryMB': 40960,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 14,
    'name': 'jacktest',
    'description': 'test',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/jack/ubuntu:16.04',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': '192.168.0.159/jack/ubuntu:16.04',
          'resourcePerInstance': {
            'gpu': 1,
            'cpu': 6,
            'memoryMB': 20480,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': [
          {
            'name': 'test',
            'mountPoint': '/root/test'
          }
        ],
        'glusterfsList': [
          {
            'name': 'qqqqqqq',
            'mountPoint': '/root/qqqqqqq'
          }
        ],
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 15,
    'name': 'dddddd',
    'description': 'dddddsss',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/elvistest/w:qw',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 0,
            'memoryMB': 0,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'rtx2080ti'
      },
      'extras': {
        'virtualGroup': 'nick',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': 'rtx2080ti',
              'pinnedCellId': null,
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 16,
    'name': 'jacktest1',
    'description': '',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
      'prerequisites': [
        {
          'uri': '192.168.0.159/jack/ttestest:latest',
          'name': 'docker_image_0',
          'type': 'dockerimage'
        }
      ],
      'taskRoles': {
        'taskrole1': {
          'instances': 1,
          'completion': {
            'minFailedInstances': 1,
            'minSucceededInstances': 1
          },
          'taskRetryCount': 0,
          'dockerImage': 'docker_image_0',
          'resourcePerInstance': {
            'gpu': 0,
            'cpu': 1,
            'memoryMB': 1024,
            'ports': null
          },
          'commands': [
            'sleep infinity'
          ]
        }
      },
      'defaults': {
        'virtualCluster': 'cpu'
      },
      'extras': {
        'virtualGroup': 'llll',
        'hivedScheduler': {
          'taskRoles': {
            'taskrole1': {
              'skuNum': null,
              'skuType': null,
              'pinnedCellId': 'NODE-103-cpu',
              'affinityGroupName': null
            }
          }
        },
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  },
  {
    'id': 17,
    'name': 'test_odin',
    'description': '',
    'owner': 'admin',
    'canReadUsers': [],
    'canWriteUsers': [],
    'publicMode': 0,
    'jobConfig': {
      'protocolVersion': '2',
      'name': 'taskrole1',
      'type': 'job',
      'jobRetryCount': 0,
      'parameters': null,
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
            'ports': null
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
        'nfsList': null,
        'glusterfsList': null,
        'xdfsList': null
      },
      'deployments': null
    }
  }
]