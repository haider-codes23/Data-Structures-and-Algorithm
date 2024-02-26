function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0)  return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;

}

collectOddValues([1, 2, 3, 4, 5]);
  //[1] = [1].concat(collectOddValues([2, 3, 4, 5])) --> here the recursive call returns [3, 5] --> it concats [1] with [3, 5] which returns [1, 3, 5] and assings that to newArr and returns newArr to the first function call
  //       [].concat(collectOddValues([3, 4, 5])) --> here the recursive call returns [3, 5] --> it concats [] with [3, 5] which returns [3, 5]
  //           [3].concat(collectOddValues([4, 5])) --> here the recursive call returns [5] --> it concats [3] with [5] which returns [3, 5]
  //              [].concat(collectOddValues([5])) --> here the recursive call returns [5] --> it concats [] with [5] which returns [5]
  //                 [5].concat(collectOddValues([])) --> // here the recursive call returns an empty array --> it concats [5] array with [] empty array and returns [5]
  //                      if (newArr.length === 0 ) return [] --> this returns an empty array to the last call of collectOddValues