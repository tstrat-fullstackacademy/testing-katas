const { expect } = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
  it('retuns an array', () => {
    const result = twoSum([], 1)
    const result2 = twoSum([1], 1)
    const result3 = twoSum([1, 2, 3], 1)
    expect(Array.isArray(result)).to.equal(true)
    expect(Array.isArray(result2)).to.equal(true)
    expect(Array.isArray(result3)).to.equal(true)
  })

  it('returns empty array if less than two elements', () => {
    let testArr = []
    const testVal = 5
    expect(twoSum(testArr, testVal)).to.deep.equal([])

    testArr.push(1)
    expect(twoSum(testArr, testVal)).to.deep.equal([])
  })

  it('returns an array of indexes that add up to the target sum', () => {
    let testArr = [1, 2, 3]
    let target = 5

    expect(twoSum(testArr, target)).to.deep.equal([1, 2])
  })
})
