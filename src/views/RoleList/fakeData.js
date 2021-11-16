export const fakeRoles = [
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
      'JOB',
      'USER'
    ]
  }
]

export const fakePrivilege = [
  {
    'name': 'ADMIN'
  },
  {
    'name': 'JOB'
  },
  {
    'name': 'USER'
  },
  {
    'name': 'NFS'
  },
  {
    'name': 'GLUSTERFS'
  },
  {
    'name': 'KEY'
  },
  {
    'name': 'VIRTUAL_CLUSTER'
  },
  {
    'name': 'SYSTEM'
  }
]
