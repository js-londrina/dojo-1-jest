
exports.read = (string) => {
  const array = string.split(', ').map(element => parseInt(element));

  return array;
}

exports.min = (arr) => {
  let tempMin = arr[0];

  arr.forEach(element => {
    if (element < tempMin) {
      tempMin = element;
    }
  });

  return tempMin;
}

exports.max = (arr) => {
  let [tempMax] = arr;
// let tempMax = 0;

  arr.forEach(element=>{
    if (element > tempMax){
      tempMax = element;
    }
  })

  return tempMax;
}

exports.size = (arr) => arr.length

exports.med = (arr) => {
  let sum = 0;
 
  for( let index = 0; index < arr.length; index++){
    sum += arr[index];
  }
  let result = (sum / arr.length);
  return result;
}


