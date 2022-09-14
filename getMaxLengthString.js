const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString == null || arrayOfString == undefined){
  return undefined;
  }else {
    let array= []
    let arrayOfStringlength = arrayOfString[0].length

    for (let i = 0; i <arrayOfString.length; i++){
      if (arrayOfString[i].length > arrayOfStringlength){

      arrayOfStringlength=arrayOfString[i].length
    }
  }

    for (let i = 0; i <arrayOfString.length; i++){
      if (arrayOfString[i].length == arrayOfStringlength){
      array.push(arrayOfString[i])
    }
  }
     return array
  
}
}

 module.exports = getMaxLengthString
