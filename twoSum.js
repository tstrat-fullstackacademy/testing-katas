function twoSum(arr, target) {
  if (arr.length < 2) {
    return []
  }
  const seen = {}
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i]
    const numToFind = target - currentNum
    if (seen[numToFind] !== undefined) return [seen[numToFind], i]
    seen[currentNum] = i
  }
  return []
}

module.exports = twoSum
