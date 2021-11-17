/**
 * Summary
 * Calculate available resources at selected time
 * 
 * Description
 * 1. 將取得可用資源做 reverse()，透過 find() 方法
 * 2. 如果後台時間軸最初時間比我們選擇的結束時間來得早，就是全部
 * 3. 如果不是全部，透過 index 尋找可用時間軸的資源取最小值
 * 
 * @param { Number } selectedStartDate 
 * @param { Number } selectedEndDate 
 * @param { Object } data 
 * @param { Object } totalData 
 * 
 * @return { Object } 
 */

export const checkCanUseResource = (selectedStartDate, selectedEndDate, data, totalData) => {
  const timeArea = [];

  let reverseStartIndex = 0;
  let reverseEndIndex = 0;
  const reverseData = Object.entries(data).reverse();

  const isFindReverseEndData = reverseData.find(([key], index) => {
    reverseEndIndex = index
    return selectedEndDate > Number(key)
  })

  if (!isFindReverseEndData) {
    return totalData
  }

  reverseData.find(([key], index) => {
    reverseStartIndex = index
    return selectedStartDate >= Number(key)
  })

  for (let i = reverseEndIndex; i <= reverseStartIndex; i++) {
    timeArea.push(reverseData[i])
  }

  const ans = timeArea.reduce((accumulator, [, data]) => {
    const accumulatorGpu = { ...accumulator.gpu };
    Object.entries(totalData.gpu).forEach(([gpuType, totalGpuNumber]) => {
      if (!data.gpu[gpuType]) return
      accumulatorGpu[gpuType] = Math.min(accumulatorGpu[gpuType],  totalGpuNumber - data.gpu[gpuType])
    })
    accumulator.cpu = Math.min((totalData.cpu - data.cpu), accumulator.cpu)
    accumulator.memory = Math.min((totalData.memory - data.memory), accumulator.memory)
    accumulator.storage = Math.min((totalData.storage - data.storage), accumulator.storage)
    accumulator.gpu = accumulatorGpu
    return accumulator
  }, { ...totalData })

  return ans;
}