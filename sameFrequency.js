// Write a function called sameFrequency. Given two positive integers, Given two
// positive integers,find out if the two numbers have the same frequency of digits

// Understanding the problem
// Restating
// we have to write a function that takes two integers as argument and we have to find
// out if they have the same digits with the same frequecny. If they do we'll return 
// true if not return false.


// inputs --> Two positive numbers
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Exampes
// console.log(longestSeqUniqueCharacters("hellothere"));// 'lothere'
// console.log(sameFrequency(182, 281));// true 
// console.log(sameFrequency(34, 14));// false
// console.log(3589578, 5879385)); // true
// console.log(22, 222);// false 
// Complex Examples
// 
// Invlaid inputs
// console.log(sameFrequency(-111, -111) // fasle

// Break it Down
// --> First we will convert each number into a string
// --> Then we will loop through each string and record the frequency 
//     of each character in the string in an object '112' --> {1: 2, 2:1}
// --> Once we know the frequency of each character in the string we will
//     comapare both object keys and values
//     the of the two objects.
// --> 

function frequencyCounter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1; 
  }
  return obj;
}

function sameFrequency(num1, num2) {
  if (num1 < 0 || num2 < 0) return false;
  let str1 = num1.toString();
  let str2 = num2.toString();
 
  console.log(str1);

  let obj1 = frequencyCounter(str1);
  let obj2 = frequencyCounter(str2);

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (!(obj1[key] === obj2[key])) {
      return false;
    }
  }
  return true;


}

console.log(sameFrequency(182, 281));// true 
console.log(sameFrequency(34, 14));// false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));// false 

