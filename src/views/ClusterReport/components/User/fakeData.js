export const fakeSystemResource = {
  'name': 'system',
  'group': 'system',
  'parent': null,
  'children': [
    {
      'name': '\b測試',
      'group': 'qwewwww',
      'parent': 'system',
      'children': [],
      'cells': {},
      'usedCells': {},
      'virtualGroups': [
        'twtwtwtwtw'
      ]
    },
    {
      'name': 'nick',
      'group': 'system',
      'parent': 'system',
      'children': [],
      'cells': {
        'rtx2080ti.virtual.rtx2080ti': {
          'name': 'rtx2080',
          'resourceUnit': 'rtx2080ti',
          'number': 2
        }
      },
      'usedCells': {
        'rtx2080ti.virtual.rtx2080ti': 2
      },
      'virtualGroups': [
        'nick',
        'nick2'
      ]
    }
  ],
  'cells': {
    'rtx2080ti.virtual.rtx2080ti': {
      'name': 'rtx2080',
      'resourceUnit': 'rtx2080ti',
      'number': 2
    },
    'default.pinned.NODE-103': {
      'name': '節點103',
      'resourceUnit': 'A6000',
      'number': 1
    },
    'cpu.pinned.NODE-103-cpu': {
      'name': 'cpu.pinned.NODE-103-cpu',
      'resourceUnit': 'cpu',
      'number': 1
    },
    'rtx2060.pinned.NODE-101': {
      'name': 'rtx2060.pinned.NODE-101',
      'resourceUnit': 'rtx2060',
      'number': 1
    },
    'cpu.virtual.cpu': {
      'name': 'cpuOnly',
      'resourceUnit': 'cpu',
      'number': 2
    }
  },
  'usedCells': {
    'rtx2080ti.virtual.rtx2080ti': 2,
    'default.pinned.NODE-103': 1,
    'cpu.virtual.cpu': 2,
    'cpu.pinned.NODE-103-cpu': 1
  },
  'virtualGroups': [
    'llll',
    'test',
    'rtx'
  ]
}

export const fakeResourceUnits = {
  'rtx2060': {
    'gpu': 1,
    'cpu': 12,
    'memory': 30720
  },
  'A6000': {
    'gpu': 1,
    'cpu': 8,
    'memory': 59505
  },
  'cpu': {
    'gpu': null,
    'cpu': 1,
    'memory': 1024
  },
  'rtx2080ti': {
    'gpu': 1,
    'cpu': 6,
    'memory': 20480
  }
}

export const fakeJobData = [
  {
    'debugId': 'ab646cb70b0f60ef8dccc88c47d30f8d',
    'name': 'admin_1638773486651',
    'username': 'admin',
    'state': 'RUNNING',
    'subState': 'AttemptRunning',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1638773558000,
    'createdTime': 1638773558000,
    'launchedTime': 1638773562000,
    'completedTime': null,
    'appExitCode': null,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '996fdbc45d9557385fe7a0374fb62c98',
    'name': 'admin_1638496957844',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1638496983000,
    'createdTime': 1638496983000,
    'launchedTime': 1638496988000,
    'completedTime': 1638509011000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'ec3156be297eddbc06af1e33ee7e46ad',
    'name': 'admin_1638337902130',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1638337925000,
    'createdTime': 1638337926000,
    'launchedTime': 1638338091000,
    'completedTime': 1638338091000,
    'appExitCode': 255,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': 'c327332d5b7cf3dccc1e0adeae338504',
    'name': 'admin_1637629991373',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1637630020000,
    'createdTime': 1637630020000,
    'launchedTime': 1637630078000,
    'completedTime': 1638509012000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '1c570edb9f558307ddb9180672dc8202',
    'name': 'admin_1637560127560',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1637560184000,
    'createdTime': 1637560184000,
    'launchedTime': 1637560254000,
    'completedTime': 1637629958000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': 'b605e4fd3f55812de0a4c630f246286f',
    'name': 'admin_1636702175695_0d37f057',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1637306159000,
    'createdTime': 1637306159000,
    'launchedTime': 1637306162000,
    'completedTime': 1637307991000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'e5e3fa867c7fdd64b09b20fdd808db04',
    'name': 'admin_1636702175695_d31a095f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1637285581000,
    'createdTime': 1637285581000,
    'launchedTime': 1637285584000,
    'completedTime': 1637286427000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'eafe0e2c8095c7c698013fc5b5394330',
    'name': 'admin_1636702175695',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636702238000,
    'createdTime': 1636702238000,
    'launchedTime': 1636702242000,
    'completedTime': 1636704451000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'f88f5b571027d2149f2bc934d5d881b8',
    'name': 'admin_1636700316632_fa9e97c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636700971000,
    'createdTime': 1636700971000,
    'launchedTime': 1636700974000,
    'completedTime': 1636702215000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '5d6d3660a6dc5d4e366086b4972fb5d7',
    'name': 'admin_1636700316632',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636700342000,
    'createdTime': 1636700342000,
    'launchedTime': 1636700342000,
    'completedTime': 1636700342000,
    'appExitCode': -200,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'd8b0d5c7dbe6593dc38399f82070fbc4',
    'name': 'admin_1636698339173_e9b82351',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636699868000,
    'createdTime': 1636699868000,
    'launchedTime': 1636699872000,
    'completedTime': 1636700049000,
    'appExitCode': -1200,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '66ed6426916070a34b19b92098e8e9ec',
    'name': 'admin_1636698339173',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636698374000,
    'createdTime': 1636698374000,
    'launchedTime': 1636698378000,
    'completedTime': 1636698587000,
    'appExitCode': -1200,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '461759b2ceba7f6f1a2de74b2b1f0630',
    'name': 'admin_1636696052740_c33b6a6',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636697344000,
    'createdTime': 1636697344000,
    'launchedTime': 1636697347000,
    'completedTime': 1636697590000,
    'appExitCode': -1200,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': 'cb066d7ec7fd4fe78581bdaaf545baff',
    'name': 'admin_1636696516949',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636696545000,
    'createdTime': 1636696545000,
    'launchedTime': 1636696548000,
    'completedTime': 1636696606000,
    'appExitCode': -1200,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '9ba9c0d29f8dbf7e65a4a88372e3f74b',
    'name': 'admin_1636696052740',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636696083000,
    'createdTime': 1636696083000,
    'launchedTime': 1636696086000,
    'completedTime': 1636696550000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '8357088199ff22eebe961752ac7b42e6',
    'name': 'admin_1636683747330',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636683771000,
    'createdTime': 1636683771000,
    'launchedTime': 1636683774000,
    'completedTime': 1636685682000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': 'a1ecd0bcac9cb02aeff310c02cbdfbda',
    'name': 'admin_1636683605202',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636683629000,
    'createdTime': 1636683629000,
    'launchedTime': 1636683708000,
    'completedTime': 1636683708000,
    'appExitCode': -1204,
    'virtualCluster': 'rtx2060',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'rtx',
      'usedResourceCells': {
        'rtx2060.pinned.NODE-101': 1
      },
      'totalCPU': 12,
      'totalMemory': 30720,
      'pinnedCellIdSkuTypeMap': {
        'NODE-101': 'rtx2060'
      },
      'skuTypeResourceUnitMap': {
        'rtx2060': {
          'gpu': 1,
          'cpu': 12,
          'memory': 30720
        }
      }
    }
  },
  {
    'debugId': 'a5c921675671871bcd30406c264fb303',
    'name': 'admin_123562356',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636683483000,
    'createdTime': 1636683483000,
    'launchedTime': 1636683486000,
    'completedTime': 1636683486000,
    'appExitCode': -1204,
    'virtualCluster': 'rtx2060',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'rtx',
      'usedResourceCells': {
        'rtx2060.pinned.NODE-101': 1
      },
      'totalCPU': 12,
      'totalMemory': 30720,
      'pinnedCellIdSkuTypeMap': {
        'NODE-101': 'rtx2060'
      },
      'skuTypeResourceUnitMap': {
        'rtx2060': {
          'gpu': 1,
          'cpu': 12,
          'memory': 30720
        }
      }
    }
  },
  {
    'debugId': '0c5966a0d8c3610c3e5cb85ac672b178',
    'name': 'alallalalalla_asdf_2b5a9c11',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636603493000,
    'createdTime': 1636603493000,
    'launchedTime': 1636603497000,
    'completedTime': 1636605391000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '2691928bd0f50cb060d6677f252693fd',
    'name': 'asdf_f9afb84d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636600244000,
    'createdTime': 1636600244000,
    'launchedTime': 1636600247000,
    'completedTime': 1636602095000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103-cpu': 'cpu'
      },
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': '9ca76b07b6be82d5c839ba98372bb8bb',
    'name': 'admin_1636017085427_543e356_ac6f173b',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636075121000,
    'createdTime': 1636075121000,
    'launchedTime': 1636075125000,
    'completedTime': 1636076982000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': 'f4fda9145410f95f33d233c8c25700ed',
    'name': 'admin_1636017085427_543e356',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636018980000,
    'createdTime': 1636018980000,
    'launchedTime': 1636018983000,
    'completedTime': 1636020822000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '10bd4fa1284d4d062db87a2946081687',
    'name': 'admin_1636017404080',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636017524000,
    'createdTime': 1636017524000,
    'launchedTime': 1636017527000,
    'completedTime': 1636019372000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '7fcfefe3f24698288b3abb3c7fb7ac18',
    'name': 'admin_1636017153330',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636017184000,
    'createdTime': 1636017184000,
    'launchedTime': 1636017186000,
    'completedTime': 1636017552000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '0e3bb2b2b4db14b8c0822f88d9158ed7',
    'name': 'admin_1636017085427',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636017133000,
    'createdTime': 1636017133000,
    'launchedTime': 1636017133000,
    'completedTime': 1636017133000,
    'appExitCode': -200,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'rtx2080ti': {
          'gpu': 1,
          'cpu': 6,
          'memory': 20480
        }
      }
    }
  },
  {
    'debugId': '76dd7e000c1987ac493eece5f4a92063',
    'name': 'admin_1636016197211',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636016309000,
    'createdTime': 1636016309000,
    'launchedTime': 1636016312000,
    'completedTime': 1636016545000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505,
      'pinnedCellIdSkuTypeMap': {
        'NODE-103': 'A6000'
      },
      'skuTypeResourceUnitMap': {
        'A6000': {
          'gpu': 1,
          'cpu': 8,
          'memory': 59505
        }
      }
    }
  },
  {
    'debugId': '5b5bf6c03e7ba1623d97897afb9d566b',
    'name': 'admin_1636013194259',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636013215000,
    'createdTime': 1636013215000,
    'launchedTime': 1636013258000,
    'completedTime': 1636015059000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2060',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'rtx',
      'usedResourceCells': {
        'rtx2060.pinned.NODE-101': 1
      },
      'totalCPU': 12,
      'totalMemory': 30720,
      'pinnedCellIdSkuTypeMap': {
        'NODE-101': 'rtx2060'
      },
      'skuTypeResourceUnitMap': {
        'rtx2060': {
          'gpu': 1,
          'cpu': 12,
          'memory': 30720
        }
      }
    }
  },
  {
    'debugId': '899352afd8d1b211e53c4911565ba8b2',
    'name': 'taskrole1_f29e9c25',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636012587000,
    'createdTime': 1636012587000,
    'launchedTime': 1636012590000,
    'completedTime': 1636013315000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024,
      'pinnedCellIdSkuTypeMap': {},
      'skuTypeResourceUnitMap': {
        'cpu': {
          'gpu': null,
          'cpu': 1,
          'memory': 1024
        }
      }
    }
  },
  {
    'debugId': 'f3d82f54ce6b92f6357a19a023480afc',
    'name': 'taskrole1_0ea8237a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1636001671000,
    'createdTime': 1636001671000,
    'launchedTime': 1636001715000,
    'completedTime': 1636001715000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '57b5f26966c7c3f3f4a2bc9f5566f98d',
    'name': 'asdf_d1aaf14d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635993639000,
    'createdTime': 1635993639000,
    'launchedTime': 1635993645000,
    'completedTime': 1635993747000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '4526d6c3305e2efbf73087fad045f29b',
    'name': 'jack_1635387389517_a4bff931',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635990704000,
    'createdTime': 1635990704000,
    'launchedTime': 1635990708000,
    'completedTime': 1635990745000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '48303e6a89f545b873c5d14983541681',
    'name': 'jack_1635387389517_1b6aa06a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635931361000,
    'createdTime': 1635931361000,
    'launchedTime': 1635931364000,
    'completedTime': 1635933222000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': 'a039b5d89249c9449b34271bd3777547',
    'name': 'admin_1635752944663',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635752962000,
    'createdTime': 1635752962000,
    'launchedTime': 1635752965000,
    'completedTime': 1635754895000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'cefb22111a232167bdb47de4dc2c597e',
    'name': 'admin_1635750610912',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635750640000,
    'createdTime': 1635750640000,
    'launchedTime': 1635750644000,
    'completedTime': 1635752491000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'dc81119b14dc7e2a40a8b6f4b9614637',
    'name': 'jack_1635387389517_159df030',
    'username': 'jack',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635410888000,
    'createdTime': 1635410888000,
    'launchedTime': 1635410891000,
    'completedTime': 1635412782000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': 'b9dd5b5b93e89a0b23df2d451ab52616',
    'name': 'jack_1635387389517',
    'username': 'jack',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635387406000,
    'createdTime': 1635387406000,
    'launchedTime': 1635387495000,
    'completedTime': 1635389262000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick2',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '4c40fe7c8000d0f4c333c2f1e19bf82b',
    'name': 'admin_1634808377611_66fc5fc_96eeea3b',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635385806000,
    'createdTime': 1635385806000,
    'launchedTime': 1635385809000,
    'completedTime': 1635387702000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '32ed069ed82ffff9e97c1ab64f614ace',
    'name': 'admin_1634808377611_66fc5fc_267e9b3d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635328106000,
    'createdTime': 1635328106000,
    'launchedTime': 1635328108000,
    'completedTime': 1635329972000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': 'cd333aae9584b7e16fb7209765333ecb',
    'name': 'admin_1634808377611_66fc5fc_8895a36e',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635300980000,
    'createdTime': 1635300980000,
    'launchedTime': 1635300983000,
    'completedTime': 1635302862000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '9f7a4f84fda661551afe1e00e722ce67',
    'name': 'admin_1634808377611_66fc5fc',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1635298792000,
    'createdTime': 1635298793000,
    'launchedTime': 1635298795000,
    'completedTime': 1635300642000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '928be96526ed1ec5cc94dc64b8583511',
    'name': 'admin_1634808377611_e99cfb58',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634871133000,
    'createdTime': 1634871133000,
    'launchedTime': 1634871146000,
    'completedTime': 1634873082000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '96665e936fad25d562e780301eb5dbe0',
    'name': 'admin_1634808377611',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634808447000,
    'createdTime': 1634808447000,
    'launchedTime': 1634808460000,
    'completedTime': 1634810382000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '3b327d30f3b721f11bcdd744651c41cc',
    'name': 'admin_1634808200701',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634808242000,
    'createdTime': 1634808242000,
    'launchedTime': 1634808248000,
    'completedTime': 1634810195000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '610dbe229f77a351bb31171fc9fdee5f',
    'name': 'admin_1634191982696',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634192347000,
    'createdTime': 1634192347000,
    'launchedTime': 1634192352000,
    'completedTime': 1634192352000,
    'appExitCode': 254,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '0c3f69ccdb56db4a41d8c6ce529fa0ed',
    'name': 'admin_1633485718248_572a527_c2142039',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634096796000,
    'createdTime': 1634096796000,
    'launchedTime': 1634096802000,
    'completedTime': 1634098722000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '1982712893ff209b57ce09f7347808da',
    'name': 'admin_1633680740435_0bfb38a_6cc8d16f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634093206000,
    'createdTime': 1634093206000,
    'launchedTime': 1634093213000,
    'completedTime': 1634095051000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '33397f44a12dd2b3aeebe572c89472f3',
    'name': 'admin_1633680740435_0bfb38a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1634017759000,
    'createdTime': 1634017759000,
    'launchedTime': 1634018743000,
    'completedTime': 1634019811000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'f8c6bf91c8296774cd86107ccf8d385e',
    'name': 'admin_1633680740435',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633680784000,
    'createdTime': 1633680784000,
    'launchedTime': 1633680790000,
    'completedTime': 1633682675000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '9cd58e94f699916a97e33039b6300da6',
    'name': 'admin_1633485718248_572a527_9c63bd36',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633674903000,
    'createdTime': 1633674903000,
    'launchedTime': 1633674909000,
    'completedTime': 1633676862000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '2ac44cf90ef10fb05b72dad8162edb57',
    'name': 'admin_1633485718248_572a527_cc8abd30',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633661301000,
    'createdTime': 1633661301000,
    'launchedTime': 1633661315000,
    'completedTime': 1633663242000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '40ff4a2478dd9839a1ddcdb2a398ac9b',
    'name': 'admin_1633485718248_572a527',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633485810000,
    'createdTime': 1633485810000,
    'launchedTime': 1633485816000,
    'completedTime': 1633487675000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '525518bc086def8b612cc83b5e56bf6e',
    'name': 'admin_1633485718248',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633485747000,
    'createdTime': 1633485747000,
    'launchedTime': 1633485761000,
    'completedTime': 1633485825000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'c501fdf3bcf75d0cbbfe725fb4740072',
    'name': 'admin_1632470543803_4e5cd55_0bb00f39',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633396978000,
    'createdTime': 1633396978000,
    'launchedTime': 1633396990000,
    'completedTime': 1633398882000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '3d19d0a53c6854e4e1f2c3bf38f490c7',
    'name': 'admin_1632470543803_4e5cd55_9d48223e',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633339402000,
    'createdTime': 1633339402000,
    'launchedTime': 1633339414000,
    'completedTime': 1633341942000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': 'd3285dd806d6e9a0ee5650eb3513be3c',
    'name': 'admin_1632470543803_4e5cd55_6c161f6a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633336176000,
    'createdTime': 1633336176000,
    'launchedTime': 1633336189000,
    'completedTime': 1633336542000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '33762eba5b1e6abf5da6e1f1c3c905f4',
    'name': 'admin_1632470543803_4e5cd55_5c74bd3c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633335191000,
    'createdTime': 1633335191000,
    'launchedTime': 1633335203000,
    'completedTime': 1633335522000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '1ecbf2e45e8c910105acfa35a88b39af',
    'name': 'admin_1632470543803_4e5cd55_e28d906d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633075513000,
    'createdTime': 1633075513000,
    'launchedTime': 1633076316000,
    'completedTime': 1633335102000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': '6f87ef1b921b99e13ead6b862a4a357c',
    'name': 'admin_1632470543803_4e5cd55_e1a8a132',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633075452000,
    'createdTime': 1633075452000,
    'launchedTime': 1633075501000,
    'completedTime': 1633075501000,
    'appExitCode': -210,
    'virtualCluster': 'rtx2080ti',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'nick',
      'usedResourceCells': {
        'rtx2080ti.virtual.rtx2080ti': 1
      },
      'totalCPU': 6,
      'totalMemory': 20480
    }
  },
  {
    'debugId': 'c3dc6530592f0baff08943aea570b884',
    'name': 'admin_1632470543803_4e5cd55_b76fed6b',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1633073170000,
    'createdTime': 1633073170000,
    'launchedTime': 1633073183000,
    'completedTime': 1633335095000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '181a84645b0020c4dce338d1c33b6996',
    'name': 'admin_1632470543803_4e5cd55_fe9a083c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 5,
    'retryDetails': {
      'user': 0,
      'platform': 5,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1632808943000,
    'createdTime': 1632808943000,
    'launchedTime': 1632809759000,
    'completedTime': 1633072505000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '375c6d5418dbacc1a4245416b397a259',
    'name': 'admin_1632470543803_4e5cd55',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1632730288000,
    'createdTime': 1632730288000,
    'launchedTime': 1632730306000,
    'completedTime': 1632808936000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'b33a5c5e591ce3816505432cac2687bc',
    'name': 'admin_1632470543803',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1632470631000,
    'createdTime': 1632470631000,
    'launchedTime': 1632470637000,
    'completedTime': 1632470692000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '5c4d6a71cedf8c81e1bd55ac2c0578d7',
    'name': 'admin_1632470381020',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1632470449000,
    'createdTime': 1632470449000,
    'launchedTime': 1632470454000,
    'completedTime': 1632470574000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'c0db065c90d7ff3328875d9edb481a78',
    'name': 'admin_1631610452059_fc96515c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631869253000,
    'createdTime': 1631869253000,
    'launchedTime': 1631869260000,
    'completedTime': 1632359898000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '45ff3fc2ff4f08e2c12acfecb913744d',
    'name': 'admin_1631610452059_7a7e3653',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631776844000,
    'createdTime': 1631776844000,
    'launchedTime': 1631776850000,
    'completedTime': 1631868806000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '73de08fc66f5d56892e15f66978ede3d',
    'name': 'admin_1631610452059_0079be5b',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631768850000,
    'createdTime': 1631768850000,
    'launchedTime': 1631768856000,
    'completedTime': 1631769106000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '662fa32ce4f88798f938e5a2059da4d3',
    'name': 'admin_1631610452059_9ce81753',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631611348000,
    'createdTime': 1631611348000,
    'launchedTime': 1631611354000,
    'completedTime': 1631611426000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '34544626c1c687221f66336949b72fd5',
    'name': 'admin_1631610452059',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631610671000,
    'createdTime': 1631610671000,
    'launchedTime': 1631611316000,
    'completedTime': 1631611316000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'llll',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '589821532fa2c00beb656ee95454ebca',
    'name': 'nick_1629166925509_b08c8839',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631327395000,
    'createdTime': 1631327395000,
    'launchedTime': 1631327404000,
    'completedTime': 1631671832000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'a68a8195dee604df3a7ea40b02f4441f',
    'name': 'nick_1629166925509_59612c6a',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631254579000,
    'createdTime': 1631254579000,
    'launchedTime': 1631254604000,
    'completedTime': 1631273566000,
    'appExitCode': 255,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '09c1165ca483572405cbf2476dc7c053',
    'name': 'nick_1629166925509_c7ccfc61',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631094054000,
    'createdTime': 1631094054000,
    'launchedTime': 1631094068000,
    'completedTime': 1631254608000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '61b4f57852c2a352ae9b23dfcc08af8a',
    'name': 'nick_1629166925509_986ae231',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631090933000,
    'createdTime': 1631090933000,
    'launchedTime': 1631090939000,
    'completedTime': 1631092388000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '5c5f0e6e80753039bee0c2410b6d3d84',
    'name': 'jkjk01_1630468887365_f9af396a',
    'username': 'jkjk01',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1631080540000,
    'createdTime': 1631080540000,
    'launchedTime': 1631080546000,
    'completedTime': 1631092999000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'dff6d00d8134c7a0fb8ecc8d07bdc206',
    'name': 'nick_1629166925509_e606ae61',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630995394000,
    'createdTime': 1630995394000,
    'launchedTime': 1630995587000,
    'completedTime': 1631080488000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '1f64dd55b0ec94cc0d8c0a6df9256888',
    'name': 'nick_1629166925509_0c4c3433',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630662321000,
    'createdTime': 1630662321000,
    'launchedTime': 1630662425000,
    'completedTime': 1630662425000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '6f7c3a9575855a5f46c7d5c996cb8dde',
    'name': 'nick_1629166925509_f2ccf230',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630660648000,
    'createdTime': 1630660648000,
    'launchedTime': 1630660811000,
    'completedTime': 1630660811000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '106fdae579b49f1f331886fbe93fa31e',
    'name': 'nick_1629166925509_dfbc903a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630659400000,
    'createdTime': 1630659400000,
    'launchedTime': 1630660541000,
    'completedTime': 1630660541000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'da35d6d9fdd9378ca2d0ff64127bbb20',
    'name': 'nick_1629166925509_aa6eca61',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630655913000,
    'createdTime': 1630655913000,
    'launchedTime': 1630655936000,
    'completedTime': 1630657634000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'd3edd9c72025d1bd65fbe5000214a445',
    'name': 'nick_1629166925509_9aed046d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630654901000,
    'createdTime': 1630654901000,
    'launchedTime': 1630654921000,
    'completedTime': 1630655934000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '48c892058c606e91b87b12229c502a35',
    'name': 'admin_1630643216207',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 17,
    'retryDetails': {
      'user': 0,
      'platform': 17,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630643232000,
    'createdTime': 1630643232000,
    'launchedTime': 1630643238000,
    'completedTime': 1631080484000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '05da135ed2a3690de5b7b8a0cee3b109',
    'name': 'admin_1630642986831',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630643011000,
    'createdTime': 1630643011000,
    'launchedTime': 1630643018000,
    'completedTime': 1630643154000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '2d72cf332dce32081f6a2706b26da8fb',
    'name': 'admin_1630642898411',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630642941000,
    'createdTime': 1630642941000,
    'launchedTime': 1630642946000,
    'completedTime': 1630643004000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'b718880680a4dbc396294a3d1736acc9',
    'name': 'nick_1629166925509_b7199c37',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630639971000,
    'createdTime': 1630639971000,
    'launchedTime': 1630639989000,
    'completedTime': 1630654924000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '1ed12ae467a8d18aabb4f4bf98025c9b',
    'name': 'nick_1629166925509_4e3b293b',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630633102000,
    'createdTime': 1630633102000,
    'launchedTime': 1630633117000,
    'completedTime': 1630639984000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '23eb19e519ad93220a13f2f01d05aac8',
    'name': 'nick_1629166925509_4aac2560',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630632915000,
    'createdTime': 1630632915000,
    'launchedTime': 1630632921000,
    'completedTime': 1630633114000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'aef9462eff2a12fa6bc81046f5bab73c',
    'name': 'nick_1629166925509_31199437',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630547297000,
    'createdTime': 1630547297000,
    'launchedTime': 1630547322000,
    'completedTime': 1630632884000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '19e4ec5c12289ae94e0dd8157facb752',
    'name': 'admin_1630488271864',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630546935000,
    'createdTime': 1630546935000,
    'launchedTime': 1630546952000,
    'completedTime': 1630546952000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.null': 0
      },
      'totalCPU': 0,
      'totalMemory': 0
    }
  },
  {
    'debugId': 'fe942fbad6d83e43908984364bdd7440',
    'name': 'nick_1629166925509_275bc130',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630546709000,
    'createdTime': 1630546709000,
    'launchedTime': 1630546715000,
    'completedTime': 1630547317000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '64f7f4e32c8d509e718d00e0cec418d2',
    'name': 'nick_1629166925509_2494bf3f',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630546486000,
    'createdTime': 1630546486000,
    'launchedTime': 1630546494000,
    'completedTime': 1630546684000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '047556492161641d43695503295c6242',
    'name': 'nick_1629166925509_23eda263',
    'username': 'nick',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630546436000,
    'createdTime': 1630546436000,
    'launchedTime': 1630546442000,
    'completedTime': 1630546443000,
    'appExitCode': 255,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '170f78d1d6f5721aaf4e746b8aa849f4',
    'name': 'nick_1629166925509_22bdb064',
    'username': 'nick',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630546391000,
    'createdTime': 1630546391000,
    'launchedTime': 1630546397000,
    'completedTime': 1630546398000,
    'appExitCode': 255,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '890c9e976783175693bde9eb85b49ca6',
    'name': 'jkjk01_1630468887365_8722df35',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630485823000,
    'createdTime': 1630485823000,
    'launchedTime': 1630485829000,
    'completedTime': 1630485891000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '341818f5470f5aed104f57ea9cbfde80',
    'name': 'jkjk01_1630468887365_754aa937',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630484652000,
    'createdTime': 1630484652000,
    'launchedTime': 1630484659000,
    'completedTime': 1630484717000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'af96ac5866fec7bfd19c2b5a08e7f9e9',
    'name': 'jkjk01_1630468887365_29107e60',
    'username': 'jkjk01',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630479655000,
    'createdTime': 1630479655000,
    'launchedTime': 1630479660000,
    'completedTime': 1630483764000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '322f76183d84280a120221a3f506c300',
    'name': 'jkjk01_1630468887365_1ec7c863',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630479014000,
    'createdTime': 1630479015000,
    'launchedTime': 1630479021000,
    'completedTime': 1630479674000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '3fba2af129d15a5f011a9529535d6133',
    'name': 'jkjk01_1630468887365',
    'username': 'jkjk01',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630468916000,
    'createdTime': 1630468916000,
    'launchedTime': 1630468921000,
    'completedTime': 1630478914000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '8c3745b288496afdb71cdeaa7fbbc9f3',
    'name': 'nick_1629166925509_4aa6ed33',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630465171000,
    'createdTime': 1630465171000,
    'launchedTime': 1630465183000,
    'completedTime': 1630546374000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'd1bf9499d6c35c56f99bce31b241a6d2',
    'name': 'nick_1629166925509_2c17eb60',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630312084000,
    'createdTime': 1630312084000,
    'launchedTime': 1630312201000,
    'completedTime': 1630465093000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '792d1bd5b03311fdbc861347457be556',
    'name': 'nick_1629166925509_f54fa060',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630308491000,
    'createdTime': 1630308491000,
    'launchedTime': 1630308529000,
    'completedTime': 1630312114000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '591ad25249e0dc930657618d1230a178',
    'name': 'nick_1629166925509_a6c1ca37',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630303343000,
    'createdTime': 1630303343000,
    'launchedTime': 1630303378000,
    'completedTime': 1630308517000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '743c848257838410ea63874109ef6ec4',
    'name': 'nick_1629166925509_a3c85e69',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1630303148000,
    'createdTime': 1630303148000,
    'launchedTime': 1630303184000,
    'completedTime': 1630303374000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '0012c87badca9f7c0bbcdf8d129bbd3f',
    'name': 'nick_1629166925509_d05f293c',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629869871000,
    'createdTime': 1629869871000,
    'launchedTime': 1629869897000,
    'completedTime': 1630303184000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '849ccb72653e75b96845ee42599236c7',
    'name': 'nick_1629166925509_c4d5be31',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629869117000,
    'createdTime': 1629869117000,
    'launchedTime': 1629869140000,
    'completedTime': 1629869887000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '149c7665164244acfb07949acd44b799',
    'name': 'nick_1629166925509_05c77660',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629856594000,
    'createdTime': 1629856594000,
    'launchedTime': 1629856747000,
    'completedTime': 1629869134000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'aef3e4e0507a7fe45cddf111eab15bf5',
    'name': 'nick_1629166925509_513c816d',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629794425000,
    'createdTime': 1629794425000,
    'launchedTime': 1629794473000,
    'completedTime': 1629856614000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'b6522aac535ce877b7d24d8a336d2eac',
    'name': 'admin_1629786476191_3ec46d5_4127146a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629793382000,
    'createdTime': 1629793382000,
    'launchedTime': 1629793395000,
    'completedTime': 1629794444000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '676659335c2cfb7f099e08e675ba71e5',
    'name': 'admin_1629786476191_3ec46d5',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629793230000,
    'createdTime': 1629793230000,
    'launchedTime': 1629793235000,
    'completedTime': 1629793364000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '498a644f75aeb5b2fafe66d0beaade97',
    'name': 'admin_1629786476191',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629792717000,
    'createdTime': 1629792717000,
    'launchedTime': 1629792723000,
    'completedTime': 1629793094000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'ae01ce65245f184a43f0344d8539ec2a',
    'name': 'nick_1629166925509_29c51965',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629791906000,
    'createdTime': 1629791906000,
    'launchedTime': 1629791914000,
    'completedTime': 1629791932000,
    'appExitCode': 255,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '79f0fe7f1d3c3a50d0f1a0caf200f955',
    'name': 'nick_1629166925509_1e06ce64',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629791088000,
    'createdTime': 1629791088000,
    'launchedTime': 1629791100000,
    'completedTime': 1629791859000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '543c793c91623b12002a8dfb30c02c33',
    'name': 'nick_1629166925509_d49b5739',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629786269000,
    'createdTime': 1629786269000,
    'launchedTime': 1629786277000,
    'completedTime': 1629786294000,
    'appExitCode': 255,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'dfac6caaefcf8bd09affd84f31ac9406',
    'name': 'nick_1629166925509_388d6362',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629776207000,
    'createdTime': 1629776207000,
    'launchedTime': 1629776220000,
    'completedTime': 1629784968000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '55bc3052fe9cd9b8e8ade21881921d21',
    'name': 'nick_1629166925509_e52e0730',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629770576000,
    'createdTime': 1629770576000,
    'launchedTime': 1629770587000,
    'completedTime': 1629776044000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '9544d00babc993a92c0cf51e99e4901d',
    'name': 'nick_1629166925509_6638d46b',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629711923000,
    'createdTime': 1629711923000,
    'launchedTime': 1629711948000,
    'completedTime': 1629769257000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'ac6d6d2afc5c6c936dd9ac30a4014339',
    'name': 'nick_1629166925509_4079bf3e',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629709437000,
    'createdTime': 1629709437000,
    'launchedTime': 1629709473000,
    'completedTime': 1629711937000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '1535a88b8ef78982ad963a2a1b87104d',
    'name': 'dododo_1629422338673_e8f0b161',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629703701000,
    'createdTime': 1629703701000,
    'launchedTime': 1629703707000,
    'completedTime': 1629703754000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '5b12998ad9ce8c7c05e8bf35b53397b9',
    'name': 'dododo_1629422338673_d1839668',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629702166000,
    'createdTime': 1629702166000,
    'launchedTime': 1629702172000,
    'completedTime': 1629702224000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '182029cf1b72d7815e898bf81d7176d4',
    'name': 'dododo_1629422338673_ccaf893f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629701852000,
    'createdTime': 1629701852000,
    'launchedTime': 1629701857000,
    'completedTime': 1629701907000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '92c8f0173a7a11075168d8656409cf08',
    'name': 'dododo_1629422338673_caeb173a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629701734000,
    'createdTime': 1629701734000,
    'launchedTime': 1629701740000,
    'completedTime': 1629701794000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'c9b0b367c7ef1cbd5bdd569b0c4cb165',
    'name': 'dododo_1629422338673_c945f531',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629701627000,
    'createdTime': 1629701627000,
    'launchedTime': 1629701634000,
    'completedTime': 1629701707000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'd85b2d219798c96cfc103176807d935c',
    'name': 'nick_1629166925509_1c742c30',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629690954000,
    'createdTime': 1629690954000,
    'launchedTime': 1629690965000,
    'completedTime': 1629709464000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '23488d5d0f689d79e7eb8b2003f5de75',
    'name': 'nick_1629166925509_1e09cc6d',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629438760000,
    'createdTime': 1629438760000,
    'launchedTime': 1629438837000,
    'completedTime': 1629690325000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '14ff8b9e3ee05a53a9803f59341dcd93',
    'name': 'dododo_1629422338673',
    'username': 'dododo',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629422356000,
    'createdTime': 1629422356000,
    'launchedTime': 1629422692000,
    'completedTime': 1629699964000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'df6530ac0a4da5efebfb48a73caf2dfd',
    'name': 'nick_1629166925509',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 2,
    'retryDetails': {
      'user': 0,
      'platform': 2,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1629166970000,
    'createdTime': 1629166970000,
    'launchedTime': 1629166991000,
    'completedTime': 1629438674000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '0b6182a81f77b3b3c57a86e36e4eeaec',
    'name': 'nicktest_1628672112540_eed2d026',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628848452000,
    'createdTime': 1628848453000,
    'launchedTime': 1628848477000,
    'completedTime': 1628848477000,
    'appExitCode': 220,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '979eda58e1950b5373480801300ff0e7',
    'name': 'admin_be114b80_527ef237',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628838208000,
    'createdTime': 1628838208000,
    'launchedTime': 1628838241000,
    'completedTime': 1628845383000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '8d47efb33d65dd550f0b41847df79d00',
    'name': 'admin_be114b80_4fb63a62',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628838055000,
    'createdTime': 1628838055000,
    'launchedTime': 1628838101000,
    'completedTime': 1628838229000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '69dc33a38a8c3976e9ce050bc4f1656c',
    'name': 'nicktest_1628672112540_b8982c2e',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628761026000,
    'createdTime': 1628761026000,
    'launchedTime': 1628761032000,
    'completedTime': 1628848473000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '2bceb6a5948adab1d64902c097d93456',
    'name': 'nicktest_1628672112540_b8174f2a',
    'username': 'nick',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628760988000,
    'createdTime': 1628760988000,
    'launchedTime': 1628760993000,
    'completedTime': 1628760993000,
    'appExitCode': 255,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '095c8ca2fcaf419c8e0a5bbde1fc79eb',
    'name': 'nicktest_1628672112540_b764ad76',
    'username': 'nick',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628760942000,
    'createdTime': 1628760942000,
    'launchedTime': 1628760948000,
    'completedTime': 1628760948000,
    'appExitCode': 255,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'b46596725e24d7d3c2d4f3cbee0bc6fc',
    'name': 'admin_1628755996611',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628756013000,
    'createdTime': 1628756013000,
    'launchedTime': 1628756018000,
    'completedTime': 1628756018000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '9931e36b4abc20c3841d69a2937ebc67',
    'name': 'nicktest_1628672112540_67abce20',
    'username': 'nick',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628755712000,
    'createdTime': 1628755712000,
    'launchedTime': 1628755718000,
    'completedTime': 1628760955000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '72980b1473fc0f4ee85a5e3ef55965e1',
    'name': 'nicktest_1628672112540_5659ff2b',
    'username': 'nick',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628754643000,
    'createdTime': 1628754643000,
    'launchedTime': 1628755330000,
    'completedTime': 1628755330000,
    'appExitCode': 255,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'ef6598e8be76cea7294640b3c1c19d91',
    'name': 'nicktest_1628672112540_6cecea73',
    'username': 'nicktest',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628672167000,
    'createdTime': 1628672167000,
    'launchedTime': 1628672179000,
    'completedTime': 1628732123000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '748eb9e6df94f968aeecb7a5fee12981',
    'name': 'nicktest_1628672112540',
    'username': 'nicktest',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628672140000,
    'createdTime': 1628672140000,
    'launchedTime': 1628672145000,
    'completedTime': 1628672145000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'eaadfdbd9dc9a3a845391bc7250b7718',
    'name': 'admin_1628565293192',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628565330000,
    'createdTime': 1628565330000,
    'launchedTime': 1628565342000,
    'completedTime': 1628750393000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '54fb4c7e43795be70f828f0538c285e3',
    'name': 'admin_1628565079617',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628565117000,
    'createdTime': 1628565117000,
    'launchedTime': 1628565121000,
    'completedTime': 1628565121000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '46ef8187aac0245eda71bba8bd9460a7',
    'name': 'admin_1628564903924',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628564979000,
    'createdTime': 1628564979000,
    'launchedTime': 1628564983000,
    'completedTime': 1628564983000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '831b2d419fe6d9619264e4c192e9819f',
    'name': 'admin_1628564652059',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628564684000,
    'createdTime': 1628564684000,
    'launchedTime': 1628564689000,
    'completedTime': 1628564689000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '17834690faa0bbd427b78766ecb7189e',
    'name': 'admin_be114b80',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628476150000,
    'createdTime': 1628476150000,
    'launchedTime': 1628476162000,
    'completedTime': 1628838031000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'eb279b979576bfa086d5f8037a9872d4',
    'name': 'admin_be004c09',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628220186000,
    'createdTime': 1628220186000,
    'launchedTime': 1628220193000,
    'completedTime': 1628564693000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '546417b285b1ad3be8d2e140944a1850',
    'name': 'admin_be004c08',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628069283000,
    'createdTime': 1628069283000,
    'launchedTime': 1628069291000,
    'completedTime': 1628220163000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '86b1fff9bb7d8561370229df7f1ae4ab',
    'name': 'admin_be004c07',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628068552000,
    'createdTime': 1628068552000,
    'launchedTime': 1628068581000,
    'completedTime': 1628068713000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '6560834f9dfeaf3c58ebc3f32f778350',
    'name': 'admin_be004c06',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628068308000,
    'createdTime': 1628068308000,
    'launchedTime': 1628068315000,
    'completedTime': 1628068575000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'c040715b6f751e3ca61019bbd36f4f9b',
    'name': 'admin_be004c05',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628068188000,
    'createdTime': 1628068188000,
    'launchedTime': 1628068206000,
    'completedTime': 1628068253000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'f2988ab22a43b2da518aa1a09624105a',
    'name': 'admin_be004c04',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628067974000,
    'createdTime': 1628067974000,
    'launchedTime': 1628068000000,
    'completedTime': 1628068203000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '4539a44eefe31f622075030413dddee3',
    'name': 'admin_be004c03',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628066563000,
    'createdTime': 1628066563000,
    'launchedTime': 1628066571000,
    'completedTime': 1628067993000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'ae646e204e2d68236bfd9f8692765a73',
    'name': 'admin_1628060052507',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628060149000,
    'createdTime': 1628060149000,
    'launchedTime': 1628060158000,
    'completedTime': 1628564683000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': 'df85d436203ab67ffb2661d1a55e7aaf',
    'name': 'admin_be004c02',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628060148000,
    'createdTime': 1628060148000,
    'launchedTime': 1628060157000,
    'completedTime': 1628066543000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'e296d7b6df04e78b937d3abc7f9d5312',
    'name': 'admin_be004c01',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628060030000,
    'createdTime': 1628060030000,
    'launchedTime': 1628060039000,
    'completedTime': 1628060083000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'ec7ca4d2f585705c834aa0bd1c1e9814',
    'name': 'admin_be004c00',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628056770000,
    'createdTime': 1628056770000,
    'launchedTime': 1628056778000,
    'completedTime': 1628060034000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '75eedb78b83bafccdd31e6e7369cb055',
    'name': 'admin_be004b99',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628049088000,
    'createdTime': 1628049088000,
    'launchedTime': 1628049096000,
    'completedTime': 1628056693000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '3e8370cd6e1653eb2b41cc017d967711',
    'name': 'admin_be004b98',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628048668000,
    'createdTime': 1628048668000,
    'launchedTime': 1628048675000,
    'completedTime': 1628049093000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '7b77ddd7611bf7ef2f570f88a6669bdc',
    'name': 'admin_be004b97',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628042249000,
    'createdTime': 1628042249000,
    'launchedTime': 1628042256000,
    'completedTime': 1628048623000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '294b718e2c0622be955a8728c1384308',
    'name': 'admin_be004b96',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1628039367000,
    'createdTime': 1628039367000,
    'launchedTime': 1628039374000,
    'completedTime': 1628042223000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'c780b72f3f25b254ba7a28ae17faa969',
    'name': 'admin_be004b95',
    'username': 'admin',
    'state': 'SUCCEEDED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627984406000,
    'createdTime': 1627984407000,
    'launchedTime': 1627984453000,
    'completedTime': 1627984453000,
    'appExitCode': 0,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '620d8b5847189963399ff3270bb258ba',
    'name': 'admin_be004b94',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627973250000,
    'createdTime': 1627973250000,
    'launchedTime': 1627973258000,
    'completedTime': 1627973583000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '48d1d98497a3e6c9cd795c33b1626918',
    'name': 'admin_be004b93',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627971804000,
    'createdTime': 1627971804000,
    'launchedTime': 1627971863000,
    'completedTime': 1627971863000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'f7f68fba0befb2d0715ccf2fd02db594',
    'name': 'admin_1627970272835',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627970297000,
    'createdTime': 1627970297000,
    'launchedTime': 1627970302000,
    'completedTime': 1627970359000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '5818a51c2d9c3d80e1dacc5bb5a94209',
    'name': 'admin_1627970154983',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627970186000,
    'createdTime': 1627970186000,
    'launchedTime': 1627970191000,
    'completedTime': 1627970191000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '19dc09d7f42a915ec6a027406366c840',
    'name': 'admin_1627963357419_937dc056',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627970078000,
    'createdTime': 1627970078000,
    'launchedTime': 1627970084000,
    'completedTime': 1627970084000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '8c9c7514b116c0706e69eb22d1f20920',
    'name': 'admin_1627963357419',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627963379000,
    'createdTime': 1627963379000,
    'launchedTime': 1627969933000,
    'completedTime': 1627969933000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.pinned.NODE-103-cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '84e46e497d01df22c03e0b4ca6c76c99',
    'name': 'admin_be004b92',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627958211000,
    'createdTime': 1627958211000,
    'launchedTime': 1627958219000,
    'completedTime': 1627971831000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '80a57a8554f580408519b6baedce01ec',
    'name': 'admin_be004b91',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627956343000,
    'createdTime': 1627956343000,
    'launchedTime': 1627956376000,
    'completedTime': 1627956573000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'e4f7706113dfd55d2b4ada68ca37ab4f',
    'name': 'admin_be004b90',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627955427000,
    'createdTime': 1627955427000,
    'launchedTime': 1627955441000,
    'completedTime': 1627955863000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '3f8b175be5b806c715c2b236769140a6',
    'name': 'admin_be004b89',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627895578000,
    'createdTime': 1627895578000,
    'launchedTime': 1627895660000,
    'completedTime': 1627954473000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '39be19101e556088c2e8ad35fb5db9ee',
    'name': 'admin_be004b88',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627895001000,
    'createdTime': 1627895001000,
    'launchedTime': 1627895014000,
    'completedTime': 1627895443000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'ddbd6729890d3f5dcaf096960cfadf4a',
    'name': 'admin_be004b87',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627894177000,
    'createdTime': 1627894177000,
    'launchedTime': 1627894190000,
    'completedTime': 1627894843000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '8bd36ee5611bcfff060fd12450067ced',
    'name': 'admin_1627271192151',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627271241000,
    'createdTime': 1627271241000,
    'launchedTime': 1627271245000,
    'completedTime': 1627271245000,
    'appExitCode': 1,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 1
      },
      'totalCPU': 1,
      'totalMemory': 1024
    }
  },
  {
    'debugId': '95ee42468acdb81d4742d3d946539097',
    'name': 'admin_be004b86',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627012123000,
    'createdTime': 1627012123000,
    'launchedTime': 1627012136000,
    'completedTime': 1627012208000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '5b2b93d7d840530c9f58742e429a3823',
    'name': 'admin_be004b85',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627010929000,
    'createdTime': 1627010929000,
    'launchedTime': 1627010956000,
    'completedTime': 1627010956000,
    'appExitCode': -1204,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '507075a744f8cc6de6106fb75a33db23',
    'name': 'admin_be004b84',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627010805000,
    'createdTime': 1627010805000,
    'launchedTime': 1627010834000,
    'completedTime': 1627010834000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '557b7a91c1b7fe0cc384be695b1c8f0b',
    'name': 'admin_be004b83',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1627010072000,
    'createdTime': 1627010072000,
    'launchedTime': 1627010103000,
    'completedTime': 1627010103000,
    'appExitCode': -1204,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '45bf1f9f06782502ae4522f383aa3193',
    'name': 'admin_be004b82_32762a67',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626923504000,
    'createdTime': 1626923504000,
    'launchedTime': 1626935643000,
    'completedTime': 1626935643000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'default.virtual.null': 0
      },
      'totalCPU': 0,
      'totalMemory': 0
    }
  },
  {
    'debugId': 'ffd2cebd1c643f1cb00938076d228d7d',
    'name': 'admin_1626835037909_09bd9a1',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626920842000,
    'createdTime': 1626920842000,
    'launchedTime': 1626920847000,
    'completedTime': 1626920847000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'c6611133bef4ee8a6ba9b3a79d7507b8',
    'name': 'admin_1626848603427',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626848831000,
    'createdTime': 1626848831000,
    'launchedTime': 1626848835000,
    'completedTime': 1626848835000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'b61448a362023f1df2d748463f629baf',
    'name': 'admin_1626835133100',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626835151000,
    'createdTime': 1626835151000,
    'launchedTime': 1626835156000,
    'completedTime': 1626835156000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '224d4a1ba58b220b0aeaec7da49b371c',
    'name': 'admin_1626835037909',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626835058000,
    'createdTime': 1626835058000,
    'launchedTime': 1626835063000,
    'completedTime': 1626835063000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'a78c769a6721e3e471c8568dc5d9e0d1',
    'name': 'admin_be004b82',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626834482000,
    'createdTime': 1626834482000,
    'launchedTime': 1626834494000,
    'completedTime': 1626935684000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '4d044ceaad828f199fd6f6d8bf71f217',
    'name': 'admin_be004b81',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626834283000,
    'createdTime': 1626834283000,
    'launchedTime': 1626834295000,
    'completedTime': 1626834454000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '1941e42b3822f9cea0f8f65a30521504',
    'name': 'admin_1626774946418',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626775089000,
    'createdTime': 1626775089000,
    'launchedTime': 1626775093000,
    'completedTime': 1626775093000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '9e62a62acb890c08faa89f7d9eb9600d',
    'name': 'admin_1626774900028',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626774925000,
    'createdTime': 1626774925000,
    'launchedTime': 1626774929000,
    'completedTime': 1626774929000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '398b002f326de0de6038e146832393a1',
    'name': 'admin_1626774755093',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626774796000,
    'createdTime': 1626774796000,
    'launchedTime': 1626774808000,
    'completedTime': 1626774924000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'fa1965b4856c7d2ad002693f7dc069ec',
    'name': 'admin_1626774602613',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626774652000,
    'createdTime': 1626774652000,
    'launchedTime': 1626774660000,
    'completedTime': 1626774660000,
    'appExitCode': 254,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '594df5c4302f1bc75a0c7fd639e64a3f',
    'name': 'admin_1626774453412',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626774494000,
    'createdTime': 1626774494000,
    'launchedTime': 1626774499000,
    'completedTime': 1626774499000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': 'e065e2f253bdcbd90df23ba720d0d051',
    'name': 'admin_1626774025408',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626774062000,
    'createdTime': 1626774062000,
    'launchedTime': 1626774067000,
    'completedTime': 1626774067000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '072f36eced47f29aa8289d6622d30f04',
    'name': 'admin_1626773795130',
    'username': 'admin',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626773821000,
    'createdTime': 1626773821000,
    'launchedTime': 1626773826000,
    'completedTime': 1626773826000,
    'appExitCode': 1,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': {
      'virtualGroup': 'test2',
      'usedResourceCells': {
        'default.pinned.NODE-103': 1
      },
      'totalCPU': 8,
      'totalMemory': 59505
    }
  },
  {
    'debugId': '6d30c4bf436f6d8e5afd58e5ace18442',
    'name': 'admin_be004b80_43012436',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626689700000,
    'createdTime': 1626689700000,
    'launchedTime': 1626689714000,
    'completedTime': 1626689972000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'f4312c0c5fcc925ed8e298dec5779a96',
    'name': 'admin_be004b80_3ac3d363',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626689160000,
    'createdTime': 1626689160000,
    'launchedTime': 1626689173000,
    'completedTime': 1626689614000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '661e76be0b1a2d827d358378555267a0',
    'name': 'admin_be004b80_3370f661',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626688680000,
    'createdTime': 1626688680000,
    'launchedTime': 1626688693000,
    'completedTime': 1626689012000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '20d5276bbcc9aa118a8f08473d62adb2',
    'name': 'admin_be004b80_22f5e333',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626687600000,
    'createdTime': 1626687600000,
    'launchedTime': 1626687679000,
    'completedTime': 1626688232000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '887b59ee3520f2c808c84e20833bb38e',
    'name': 'admin_be004b80_11912539',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626686460000,
    'createdTime': 1626686460000,
    'launchedTime': 1626686474000,
    'completedTime': 1626687094000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '51747bf807a991e4c0a61d838d4acd32',
    'name': 'admin_be004b80',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626419681000,
    'createdTime': 1626419682000,
    'launchedTime': 1626419695000,
    'completedTime': 1626421664000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '0b969c00acff5bc3432681beb0d2d170',
    'name': 'admin_be004b79',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626416731000,
    'createdTime': 1626416731000,
    'launchedTime': 1626416743000,
    'completedTime': 1626416824000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'e30449bc6c4081f0821dcdc4ee7d3f22',
    'name': 'admin_be004b78',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626416163000,
    'createdTime': 1626416164000,
    'launchedTime': 1626416184000,
    'completedTime': 1626416273000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'b48a5783d37960faf276e93c283f798c',
    'name': 'admin_be004b77',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 1,
    'retryDetails': {
      'user': 0,
      'platform': 1,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626166964000,
    'createdTime': 1626166964000,
    'launchedTime': 1626166977000,
    'completedTime': 1626399094000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'ea4d5e6e7285992ec9b2c667ef69c45b',
    'name': 'admin_be004b76',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626166769000,
    'createdTime': 1626166769000,
    'launchedTime': 1626166783000,
    'completedTime': 1626166946000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '3b440f95e4763f4403131f66f189242d',
    'name': 'admin_be004b75',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626165883000,
    'createdTime': 1626165890000,
    'launchedTime': 1626166766000,
    'completedTime': 1626166766000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '2d80b1226208fc7c899e2b3c9204cd8c',
    'name': 'admin_be004b74',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626165362000,
    'createdTime': 1626165366000,
    'launchedTime': 1626165898000,
    'completedTime': 1626165898000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '91f91b302fae876af347b555dbcfc048',
    'name': 'admin_be004b73',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626143062000,
    'createdTime': 1626143062000,
    'launchedTime': 1626143100000,
    'completedTime': 1626162265000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '844a2d74d93b848cafbe019c18704951',
    'name': 'admin_be004b72',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626142791000,
    'createdTime': 1626142792000,
    'launchedTime': 1626142818000,
    'completedTime': 1626143091000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'd30d7ec981a64401f09b9e0004d96618',
    'name': 'admin_be004b71',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626083149000,
    'createdTime': 1626083149000,
    'launchedTime': 1626083447000,
    'completedTime': 1626142805000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '14c28571925436c6689dd024755ea0ae',
    'name': 'admin_be004b70',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626082991000,
    'createdTime': 1626082991000,
    'launchedTime': 1626083024000,
    'completedTime': 1626083176000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'a7af64f7b378a6c01e590ebab0812091',
    'name': 'admin_be004b69',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1626082877000,
    'createdTime': 1626082877000,
    'launchedTime': 1626082912000,
    'completedTime': 1626083016000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '37f804e0aaf62815e0c472988859f17c',
    'name': 'admin_be004b68',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 3,
    'retryDetails': {
      'user': 0,
      'platform': 3,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625724389000,
    'createdTime': 1625724389000,
    'launchedTime': 1625724417000,
    'completedTime': 1626082898000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'b69a4b51cc5a73d3583075e29afb4997',
    'name': 'admin_be004b67',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625716768000,
    'createdTime': 1625716769000,
    'launchedTime': 1625716804000,
    'completedTime': 1625724404000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'a711adbf6ee1ac89d15f5e080a6e768e',
    'name': 'admin_be004b66',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625716016000,
    'createdTime': 1625716016000,
    'launchedTime': 1625716063000,
    'completedTime': 1625716804000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'b09bdbfa803064ab5bc060891556e121',
    'name': 'admin_be004b65',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625715861000,
    'createdTime': 1625715861000,
    'launchedTime': 1625715874000,
    'completedTime': 1625716052000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '57e1b22211aab817ca2f2bdcee5773a7',
    'name': 'admin_be004b64',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625650530000,
    'createdTime': 1625650530000,
    'launchedTime': 1625650545000,
    'completedTime': 1625715860000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'e2cd50300e6dd5a9cdf9c490ef037453',
    'name': 'admin_be004b63',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625650376000,
    'createdTime': 1625650376000,
    'launchedTime': 1625650482000,
    'completedTime': 1625650482000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': 'da62008c59edbc3d68e3e2ad7ea0472e',
    'name': 'admin_be004b62',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 1,
    'retryDetails': {
      'user': 0,
      'platform': 1,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1625188201000,
    'createdTime': 1625188202000,
    'launchedTime': 1625188216000,
    'completedTime': 1625650310000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 2,
    'description': {
      'virtualGroup': 'test',
      'usedResourceCells': {
        'cpu.virtual.cpu': 2
      },
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '0fc88061b2ffcb5ac45296a9dece2400',
    'name': 'admin_c460c230',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624953351000,
    'createdTime': 1624953351000,
    'launchedTime': 1624953390000,
    'completedTime': 1624953533000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': {
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '1c812a9e3a3d92d72643ef261fe0b73d',
    'name': 'admin_be004b61',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624936155000,
    'createdTime': 1624936155000,
    'launchedTime': 1624936186000,
    'completedTime': 1624953380000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': {
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '770b5790d218e3fa4912dcf577da57c2',
    'name': 'admin_b1ad3164',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624935347000,
    'createdTime': 1624935347000,
    'launchedTime': 1624935380000,
    'completedTime': 1624936180000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': {
      'totalCPU': 2,
      'totalMemory': 2048
    }
  },
  {
    'debugId': '9a514cbfb372a70a134583bce119f704',
    'name': 'admin_b0a71035',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624935280000,
    'createdTime': 1624935280000,
    'launchedTime': 1624935307000,
    'completedTime': 1624935380000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '838dafa2f088da84b76579fa22fc51ab',
    'name': 'admin_9b0c8030',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624933870000,
    'createdTime': 1624933870000,
    'launchedTime': 1624933884000,
    'completedTime': 1624935300000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '888853b43b1ac971fb45690c5d6d0b8d',
    'name': 'admin_d69bc56f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624434465000,
    'createdTime': 1624434465000,
    'launchedTime': 1624434488000,
    'completedTime': 1624434540000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'c489ebf0d89f84216d8aa4a9cc6935b5',
    'name': 'admin_7a976b3c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624411735000,
    'createdTime': 1624411735000,
    'launchedTime': 1624411748000,
    'completedTime': 1624434480000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'd0b1dbaca4caa8d85a7833b8dd96e26f',
    'name': 'admin_78750e68',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624411515000,
    'createdTime': 1624411515000,
    'launchedTime': 1624411632000,
    'completedTime': 1624411672000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'f72452698813c748c8a48d782d4721d5',
    'name': 'admin_71c29866',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624411076000,
    'createdTime': 1624411076000,
    'launchedTime': 1624411089000,
    'completedTime': 1624411540000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'c6b68fe0c5ab153d0db053c35cd1a087',
    'name': 'admin_6ab63939',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624410611000,
    'createdTime': 1624410612000,
    'launchedTime': 1624411062000,
    'completedTime': 1624411062000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'b14f5c67c168ed2c7f5458059d8531da',
    'name': 'admin_63d92e4f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 8,
    'retryDetails': {
      'user': 0,
      'platform': 8,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624410229000,
    'createdTime': 1624410229000,
    'launchedTime': 1624410241000,
    'completedTime': 1627969847000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'a58c46cdc156465c5ba13a7e1136d53c',
    'name': 'admin_63d92e3f',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624410186000,
    'createdTime': 1624410186000,
    'launchedTime': 1624410199000,
    'completedTime': 1624410640000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '1c0ae536f9fde0a5b7330ea4973d7089',
    'name': 'admin_605f1a33',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624245640000,
    'createdTime': 1624245640000,
    'launchedTime': 1624247676000,
    'completedTime': 1624247676000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'c776a11bb41d4e5ce7c403b5c6e21d46',
    'name': 'admin_51260f75_82790c6c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624244392000,
    'createdTime': 1624244393000,
    'launchedTime': 1624244407000,
    'completedTime': 1624245276000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 3,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '570f356624952e05cad703e5dcaff896',
    'name': 'admin_51260f75_7519ab32',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624008637000,
    'createdTime': 1624008637000,
    'launchedTime': 1624008651000,
    'completedTime': 1624009158000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'f2110624283431fc8eda4e63d46bc172',
    'name': 'admin_51260f75_7251e16e',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624008456000,
    'createdTime': 1624008456000,
    'launchedTime': 1624008625000,
    'completedTime': 1624008625000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '84426108cbf1f76f739d10838a4b901e',
    'name': 'admin_51260f75',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624007626000,
    'createdTime': 1624007626000,
    'launchedTime': 1624007723000,
    'completedTime': 1624007985000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'fd958747c1fa547333f3169b11230506',
    'name': 'admin_605f1a35',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624007280000,
    'createdTime': 1624007280000,
    'launchedTime': 1624007564000,
    'completedTime': 1624007564000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '40d8f843b9fb7d92b2168864dff753fc',
    'name': 'admin_57be0237',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624006713000,
    'createdTime': 1624006713000,
    'launchedTime': 1624006727000,
    'completedTime': 1624007295000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 2,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '63f9c95e39ad4b28033af82ce3a5d78d',
    'name': 'admin_51260f77',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624006517000,
    'createdTime': 1624006518000,
    'launchedTime': 1624006531000,
    'completedTime': 1624007608000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'd7fecd998296943438b94c4e2442845e',
    'name': 'admin_51260f66',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624006277000,
    'createdTime': 1624006277000,
    'launchedTime': 1624006291000,
    'completedTime': 1624006648000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '65ddaecbb922c68fd133fef80a40a424',
    'name': 'admin_5071dc34',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624006236000,
    'createdTime': 1624006236000,
    'launchedTime': 1624006249000,
    'completedTime': 1624006648000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '40a4b9bc75b4947b991ecfc6cc9d1aa5',
    'name': 'admin_411a5f36',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624005792000,
    'createdTime': 1624005792000,
    'launchedTime': 1624005894000,
    'completedTime': 1624006218000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'd7243b255d05ed45894ca5c6eeb1f69e',
    'name': 'admin_477a5f36',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624005645000,
    'createdTime': 1624005645000,
    'launchedTime': 1624005727000,
    'completedTime': 1624005727000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'afde0b4bc0c3570e0ece6c27426bb546',
    'name': 'admin_450e0e31',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624005486000,
    'createdTime': 1624005486000,
    'launchedTime': 1624005499000,
    'completedTime': 1624006208000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '1e216da3413d25de3cb999954640c0ac',
    'name': 'admin_44428b6c',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624005433000,
    'createdTime': 1624005433000,
    'launchedTime': 1624005447000,
    'completedTime': 1624006208000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '7d0cccabda3d3b7ac93273ef224aa6c6',
    'name': 'admin_41efe96a',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624005285000,
    'createdTime': 1624005285000,
    'launchedTime': 1624005425000,
    'completedTime': 1624005425000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '32eda9b1960dc4fdb12bb4c3bfbb71bc',
    'name': 'admin_37bd3b63',
    'username': 'admin',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1624004633000,
    'createdTime': 1624004633000,
    'launchedTime': 1624004911000,
    'completedTime': 1624004911000,
    'appExitCode': -210,
    'virtualCluster': 'cpu',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '45ae89f736651d0674f914f0cb393915',
    'name': 'jack_3a789c58',
    'username': 'jack',
    'state': 'FAILED',
    'subState': 'Completed',
    'executionType': 'START',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1623405056000,
    'createdTime': 1623405056000,
    'launchedTime': 1623405069000,
    'completedTime': 1623727181000,
    'appExitCode': -1200,
    'virtualCluster': 'default',
    'totalGpuNumber': 0,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': 'df04689789b872f4379903c2883fa7f2',
    'name': 'jack_3a456c58',
    'username': 'jack',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1623404813000,
    'createdTime': 1623404813000,
    'launchedTime': 1623404827000,
    'completedTime': 1623405053000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  },
  {
    'debugId': '16935766e719e72f615f701327c89d6f',
    'name': 'jack_5383e26',
    'username': 'jack',
    'state': 'STOPPED',
    'subState': 'Completed',
    'executionType': 'STOP',
    'tags': [],
    'retries': 0,
    'retryDetails': {
      'user': 0,
      'platform': 0,
      'resource': 0
    },
    'retryDelayTime': null,
    'submissionTime': 1623402476000,
    'createdTime': 1623402476000,
    'launchedTime': 1623404791000,
    'completedTime': 1623404791000,
    'appExitCode': -210,
    'virtualCluster': 'default',
    'totalGpuNumber': 1,
    'totalTaskNumber': 1,
    'totalTaskRoleNumber': 1,
    'description': null
  }
]
