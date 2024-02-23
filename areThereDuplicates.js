// Implement a function called areThereDuplicates which accepts a variable number of 
// arguments and checks whether there are any duplicates among the arguments passed in.
// 
// Understanding the problem
// Restating
// --> The function areThereDuplicates accepts some arguments it could be 2 or more, and it 
//    returns a boolean value indicating whether there are duplicates in the arguments or not
// --> The function can take single digit integer asa arguments or single character strings




// inputs --> Two or more arguments
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Exampes
// console.log(areThereDuplicates(1, 2, 3));// false
// console.log(areThereDuplicates(1, 2, 2));// true
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));// true

// Complex Examples
// 
// Invlaid inputs


// Break it Dow
// --> We will declare a new variable and initialize it with an empty object {}
// --> Then we will loop over the arguments and record there frequencies in the object
// --> Then we will loop over the object and check whether the frequencies of any key
//     is greater than one. If there is then return true otherwise return false


function areThereDuplicates(...args) {
  let frequecnyObj = {};
  console.log(args);
  for (let val of args) {
    frequecnyObj[val] = (frequecnyObj[val] || 0) + 1;
  }
  console.log(frequecnyObj);
  for (let key in frequecnyObj) {
    if (frequecnyObj[key] > 1){
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));// false
console.log(areThereDuplicates(1, 2, 2));// true
console.log(areThereDuplicates('a', 'b', 'c', 'a'));// true