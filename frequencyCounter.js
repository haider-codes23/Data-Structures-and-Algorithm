// Understanding the problem
// Restating
// The function takes two arrays as argument and checks if the square of each
// element in the first array exist in the second array, the order doesn't matter.
// If it does the function ruturns true otherwise it returns false.

// inputs --> Two arrays
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Examples
// same([1, 2, 3],[1, 4, 9]) --> true
// same([1, 2, 2], [1, 4, 4]) --> true
// same([1, 2, 2], [1, 4, 1]) --> fasle
// same([2, 4, 6], [4, 16]) --> false
// same([8, 9, 10], [64, 81]) --> false
// same([1, 2, 2], [1, 4, 1]) --> false
// Complex Examples
// same([11, 12, 44], [1936, 121, 144])
// Invlaid inputs
// same(['a', 'b'], ['aa', 'bb']) --> false

// Break it Down
// --> first we'll check if both array have the same number of elements, e.g. check 
// there length, if equal we will procces further if not then return false
// --> If length of both arrays are equal
//    --> First loop through all the elements in the first array
//    --> Then check if the element which we are looping over exists in the secondArr
//    --> If it exist then remove that element from the second array
//    --> If it doesn't then return false  

function same(firstArr, secondArr) {
  //do something
  if (firstArr.length !== secondArr.length) return false;

  for (let i = 0; i < firstArr.length; i++) {
    let indexOfElementExists = secondArr.indexOf(firstArr[i] ** 2);
    if (indexOfElementExists === -1) {
      return false;
    }
    secondArr.splice(indexOfElementExists, 1);
  }
  //return boolean value true or fasle
  return true;
}

// console.log(same([1, 2, 3],[1, 4, 9]));
// console.log(same([1, 2, 2], [1, 4, 1]))

// The above function has a Time complexity of O(N^2) because we have a loop
// then inside the loop we are using indexof() methods which potentially checks 
// every element in the array to find the index of the element which we passed
// to it as an argument. 

// Look Back and Refactor ==> lets make the Time complexity of the function from
// O(N^2) to O(N)

// Break it down
// --> first we'll check if both array have the same number of elements, e.g. check 
// there length, if equal we will procces further if not then return false
// --> Then create two objects and loop through each array and add the elements
//     in the array into the the object along with there frequency
//      --> for this step we will first check if the current value is undefined
//          or some other value, if it's undefined we will assign it the value 0
//          and add 1 into it, if it's not undefined we will just add 1 into the
//          current count
//     e.g. we have two arrays [1, 2, 2, 3] and [1, 4, 4, 9], this will become 
//     {1: 1, 2: 2, 3: 1} and {1: 1, 4: 2, 9: 1}
// --> Then we are going to loop over the first object
//     --> check if the double of the each key in the first object exist as a key in the second object
//         if it doesn't return false but if it does then check if the frequency also
//         matches e.g. if we had two 2's in our first object then do we have two 4's in the secondObj
//         if the frequecny doesn't match return false otherwise return true



function sameRefactored(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of firstArr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of secondArr) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
   
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(sameRefactored([1, 2, 3],[1, 4, 9]));// --> true
console.log(sameRefactored([1, 2, 2], [1, 4, 4])); //--> true
console.log(sameRefactored([1, 2, 2], [1, 4, 1])); //--> fasle
console.log(sameRefactored([2, 4, 6], [4, 16])); //--> false
console.log(sameRefactored([8, 9, 10], [64, 81])); //--> false
console.log(sameRefactored([1, 2, 2], [1, 4, 1])); //--> false
//Complex Examples
console.log(sameRefactored([11, 12, 44], [1936, 121, 144]));


console.log(sameRefactored([1, 2, 3], [1, 4, 9])); 