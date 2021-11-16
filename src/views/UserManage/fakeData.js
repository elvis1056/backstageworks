export const fakeRole = [
  {
    'id': 1,
    'name': 'admin',
    'privileges': [
      'ADMIN'
    ]
  },
  {
    'id': 2,
    'name': 'user',
    'privileges': [
      'JOB'
    ]
  },
  {
    'id': 5,
    'name': 'glusterfs',
    'privileges': [
      'GLUSTERFS'
    ]
  },
  {
    'id': 6,
    'name': 'nfs',
    'privileges': [
      'NFS'
    ]
  },
  {
    'id': 7,
    'name': 'USER',
    'privileges': [
      'USER'
    ]
  },
  {
    'id': 8,
    'name': 'key',
    'privileges': [
      'KEY'
    ]
  },
  {
    'id': 10,
    'name': 'rrrrr',
    'privileges': [
      'SYSTEM',
      'GLUSTERFS',
      'USER',
      'KEY'
    ]
  },
  {
    'id': 13,
    'name': 'test',
    'privileges': [
      'USER'
    ]
  },
  {
    'id': 14,
    'name': 'leader',
    'privileges': [
      'GLUSTERFS',
      'NFS',
      'USER',
      'JOB'
    ]
  }
]

export const fakeVg = [
  {
    'name': 'nick',
    'resource': 'nick',
    'cells': {
      'rtx2080ti.virtual.rtx2080ti': {
        'name': 'rtx2080ti.virtual.rtx2080ti',
        'resourceUnit': 'rtx2080ti',
        'number': 1
      }
    },
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'qwert',
      'jacktest',
      'testestssdfsdf',
      'admin',
      'nicktest',
      'jack',
      'atest'
    ],
    'schedulable': false
  },
  {
    'name': 'nick2',
    'resource': 'nick',
    'cells': {
      'rtx2080ti.virtual.rtx2080ti': {
        'name': 'rtx2080ti.virtual.rtx2080ti',
        'resourceUnit': 'rtx2080ti',
        'number': 1
      }
    },
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'jacktest',
      'admin',
      'nicktest',
      'jack',
      'atest'
    ],
    'schedulable': false
  },
  {
    'name': 'twtwtwtwtw',
    'resource': '\b測試',
    'cells': {},
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'odin3',
      'yuyuyu',
      'wwqq',
      'dodo',
      'qqqqq',
      'jack'
    ],
    'schedulable': false
  },
  {
    'name': 'rtx',
    'resource': 'system',
    'cells': {
      'rtx2060.pinned.NODE-101': {
        'name': 'rtx2060.pinned.NODE-101',
        'resourceUnit': 'rtx2060',
        'number': 1
      }
    },
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'jacktest',
      'admin',
      'nicktest',
      'atest'
    ],
    'schedulable': false
  },
  {
    'name': 'test',
    'resource': 'system',
    'cells': {
      'default.pinned.NODE-103': {
        'name': 'default.pinned.NODE-103',
        'resourceUnit': 'A6000',
        'number': 1
      }
    },
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'normal',
      'nickfortest',
      'user01',
      'admin',
      'dododo',
      'jack',
      'nick',
      'qwert',
      'odin3',
      'jkjk03',
      'ddddd',
      'jkjk01',
      'tttt',
      'atest'
    ],
    'schedulable': true
  },
  {
    'name': 'llll',
    'resource': 'system',
    'cells': {
      'cpu.pinned.NODE-103-cpu': {
        'name': 'cpu.pinned.NODE-103-cpu',
        'resourceUnit': 'cpu',
        'number': 1
      },
      'cpu.virtual.cpu': {
        'name': 'cpu.virtual.cpu',
        'resourceUnit': 'cpu',
        'number': 1
      }
    },
    'usedCells': {},
    'activeJobs': 0,
    'users': [
      'qwert',
      'jacktest',
      'jack',
      'atest'
    ],
    'schedulable': false
  }
]

export const fakeUserList = [
  {
    'username': 'admin',
    'userCode': null,
    'name': null,
    'email': null,
    'phone': null,
    'description': null,
    'roles': [
      'admin'
    ],
    'privileges': [
      'ADMIN'
    ],
    'state': 1,
    'leaderGroups': [
      'system',
      'qwe'
    ],
    'userGroups': [
      'system'
    ],
    'virtualGroups': [
      'nick2',
      'nick',
      'test',
      'rtx'
    ],
    'nfsList': [
      'ass',
      'xfsquota3',
      'ABC',
      'nfs2',
      'qwer',
      'sdsdsd',
      'admin',
      'elvis',
      'xfsquaota',
      'dododo'
    ],
    'glusterfsList': [
      'qqqqqqq',
      'glusterfs'
    ],
    'xdfsList': [
      'xdfs',
      'admin'
    ],
    'lastSigninDate': 1636970205587,
    'grouplist': [
      'default',
      'admingroup'
    ],
    'extension': {},
    'admin': true,
    'virtualCluster': [
      'default',
      'cpu',
      'rtx2060',
      'rtx2080ti'
    ],
    'storageConfig': []
  },
  {
    'username': 'gyl07',
    'userCode': 'sdgfhsgdh',
    'name': 'gsfdgsfdg',
    'email': 'gsfygsf@aiserver.cn',
    'phone': '2153621526',
    'description': '',
    'roles': [],
    'privileges': [],
    'state': 0,
    'leaderGroups': [],
    'userGroups': [],
    'virtualGroups': [],
    'nfsList': [],
    'glusterfsList': [
      'user1'
    ],
    'xdfsList': [],
    'lastSigninDate': 1631068667544,
    'grouplist': [
      'default'
    ],
    'extension': {},
    'admin': false,
    'virtualCluster': [
      'default',
      'cpu',
      'rtx2060',
      'rtx2080ti'
    ],
    'storageConfig': []
  },
  {
    'username': 'wwww',
    'userCode': '285973295794',
    'name': 'wwww',
    'email': 'wwww@gmail.com',
    'phone': '4835937495',
    'description': '',
    'roles': [],
    'privileges': [],
    'state': -1,
    'leaderGroups': [],
    'userGroups': [],
    'virtualGroups': [],
    'nfsList': [],
    'glusterfsList': [],
    'xdfsList': [],
    'lastSigninDate': 1628825226283,
    'grouplist': [
      'default'
    ],
    'extension': {},
    'admin': false,
    'virtualCluster': [
      'default',
      'cpu',
      'rtx2060',
      'rtx2080ti'
    ],
    'storageConfig': []
  }
]

export const fakeSystemParam = [
  {
    'key': 'helper',
    'value': 'http://'
  },
  {
    'key': 'defaultJobLifeHour',
    'value': '30'
  },
  {
    'key': 'isJobNeedVerify',
    'value': 'false'
  },
  {
    'key': 'canMultipleLogin',
    'value': 'true'
  },
  {
    'key': 'allowRegister',
    'value': 'true'
  },
  {
    'key': 'limitResourceEnabled',
    'value': 'false'
  },
  {
    'key': 'limitResourceCpu',
    'value': '16'
  },
  {
    'key': 'limitResourceMemory',
    'value': '8092'
  },
  {
    'key': 'limitResourceStorage',
    'value': '5'
  },
  {
    'key': 'jobLifeHour',
    'value': '-1'
  },
  {
    'key': 'userLimitResource',
    'value': '{"rtx2080ti.virtual.rtx2080ti":-1,"default.pinned.NODE-103":-1,"cpu.pinned.NODE-103-cpu":-1,"rtx2060.pinned.NODE-101":-1,"cpu.virtual.cpu":-1}'
  },
  {
    'key': 'jumpServerHost',
    'value': '192.168.0.102'
  },
  {
    'key': 'jumpServerPort',
    'value': '9022'
  },
  {
    'key': 'cpuIdleThreshold',
    'value': '1'
  },
  {
    'key': 'cpuIdleWarnTime',
    'value': '15'
  },
  {
    'key': 'cpuIdleStopTime',
    'value': '30'
  },
  {
    'key': 'gpuIdleThreshold',
    'value': '1'
  },
  {
    'key': 'gpuIdleWarnTime',
    'value': '15'
  },
  {
    'key': 'gpuIdleStopTime',
    'value': '30'
  }
]
