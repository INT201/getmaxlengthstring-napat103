const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) return undefined
  let arr = []
  let pre = arrayOfString[0].length

    for (let i = 0; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length > pre) {
        pre = arrayOfString[i].length
      }
    }
    for (let i = 0; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length === pre) {
        arr.push(arrayOfString[i])
      }
    }
    return arr
}

module.exports = getMaxLengthString
