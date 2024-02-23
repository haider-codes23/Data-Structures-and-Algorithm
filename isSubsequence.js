// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second
// string. In other words, the function should check whether the character in the first 
// string appear some where in the second string without there order changing 

// Understanding the problem
// Restating
// --> The function takes two strings and checks whether the characters in the first string appear
//     somewhere in the second string in the same order, if it does return true else return fasle
//     




// inputs --> Two Strings
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Exampes
// console.log(isSubsequence('hello', 'habeablablabo'));
// console.log(isSubsequence('hello', 'hello world'));// true
// console.log(isSubsequence('sing', 'string'));// true
// console.log(isSubsequence('abc', 'abracadabra'));// true
// console.log(isSubsequence('abc', 'acb'));// false
// console.log(isSubsequence('abc', 'hacb'));// false

// Complex Examples
// 
// Invlaid inputs


// Break it Dow
// --> first we will create two poiters
//    --> one pointer will scout through the first string 
//    --> second pointer will scout through the second string
// --> Then we will loop though the second string
// --> We will check if a character from the first string exists within the second 

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let pointerOne = 0;
  let pointerTwo = 0;
  
  for (let i = 0; i < str2.length; i++) {
    
    if (!(str1[pointerOne] === str2[pointerTwo])) {
      if (pointerTwo < str2.length){
        pointerTwo += 1;
      }
      
      continue;
    }
    pointerOne += 1;
    pointerTwo += 1;
    if (str1[pointerOne] === undefined) return true;
    if (str2[pointerTwo] === undefined) return false;
    
  }

}
console.log(isSubsequence('abc', 'hacb'));// false
//console.log(isSubsequence('abc', 'abracadabra'));// true
//console.log(isSubsequence('sing', 'string'));// true
//console.log(isSubsequence('hello', 'haealalao'));
//console.log(isSubsequence('hello', 'hello world'));// true







// console.log(isSubsequence('abc', 'acb'));// false







// console.log(isSubsequence('hello', 'habeablablabo'));