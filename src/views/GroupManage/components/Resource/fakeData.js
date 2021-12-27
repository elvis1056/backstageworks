export const fakeList = [
  { 'name':'nick', 'group':'system', 'parent':'system', 'children':[], 'cells':{ 'rtx2080ti.virtual.rtx2080ti':{ 'name':'rtx2080', 'resourceUnit':'rtx2080ti', 'number':2 } }, 'usedCells':{ 'rtx2080ti.virtual.rtx2080ti':1 }, 'virtualGroups':['nick2'] },
  { 'name':'system', 'group':'system', 'parent':null, 'children':[{ 'name':'\b測試', 'group':'qwewwww', 'parent':'system', 'children':[], 'cells':{}, 'usedCells':{}, 'virtualGroups':['twtwtwtwtw'] }, { 'name':'nick', 'group':'system', 'parent':'system', 'children':[], 'cells':{ 'rtx2080ti.virtual.rtx2080ti':{ 'name':'rtx2080', 'resourceUnit':'rtx2080ti', 'number':2 } }, 'usedCells':{ 'rtx2080ti.virtual.rtx2080ti':1 }, 'virtualGroups':['nick2'] }], 'cells':{ 'rtx2080ti.virtual.rtx2080ti':{ 'name':'rtx2080', 'resourceUnit':'rtx2080ti', 'number':2 }, 'default.pinned.NODE-103':{ 'name':'節點103', 'resourceUnit':'A6000', 'number':1 }, 'cpu.pinned.NODE-103-cpu':{ 'name':'cpu.pinned.NODE-103-cpu', 'resourceUnit':'cpu', 'number':1 }, 'rtx2060.pinned.NODE-101':{ 'name':'rtx2060.pinned.NODE-101', 'resourceUnit':'rtx2060', 'number':1 }, 'cpu.virtual.cpu':{ 'name':'cpuOnly', 'resourceUnit':'cpu', 'number':2 } }, 'usedCells':{ 'rtx2080ti.virtual.rtx2080ti':2, 'default.pinned.NODE-103':1, 'cpu.virtual.cpu':2, 'cpu.pinned.NODE-103-cpu':1 }, 'virtualGroups':['llll', 'test', 'rtx'] }
]

export const fakeResourceUnits = { 'rtx2060':{ 'gpu':1, 'cpu':12, 'memory':30720 }, 'A6000':{ 'gpu':1, 'cpu':8, 'memory':59505 }, 'cpu':{ 'gpu':null, 'cpu':1, 'memory':1024 }, 'rtx2080ti':{ 'gpu':1, 'cpu':6, 'memory':20480 } }