// Understanding the problem
// Restating
// the function will take two strings as argument, and check wether the first string
// contains the same characrers with the same frequency in the second string, if it does
// then return true otherwise false

// inputs --> Two Strings
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Examples
// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); //false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram('rat', 'car')); // false
// console.log(validAnagram('awesome', 'awesom')); //false
// console.log(validAnagram('qwerty', 'qeywrt')); // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> First we need to check if both strings have the same length if not then
//     return false
// --> Then loop over each string and add the characters into an object, if 
//     a character occurs more than once than increase it's count by one
// --> Then take the first Object and check wether each key exists in the 
//     second object, if it doesn't return false. But if a key does exist
//     then check it's count.

function frequecnyCounter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  return obj;
}

function validAnagram (str1, str2) {
  // do something
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;
  
  let obj1 = frequecnyCounter(str1);
  let obj2 = frequecnyCounter(str2);

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  console.log(obj1);
  console.log(obj2);
  
  // return boolean value
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); //false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true