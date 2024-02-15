// Write a function which takes in a string and returns counts of each character
// in the the string ?

// 1-Can i restate the problem in my own words ?
//   implement addition 
// 2-what are the input that go into the problem ?
//   Are the inputs Interger numbers or floating points number or string representation of numbers
// 3-What are the outputs that should come from the solution to the problem or the return value of the function ?
//   If we pass in two folating point numbers should be return an Integer or floating point number
// 4-Can the output be determined from the inputs? In other words do I have enough information to solve the problem ?

// 5-How should I label the important pieces of data that are a part of the problem ?

function charCount(str) {
  let objCount = {};
  let strInLowerCase = str.toLowerCase()
  
  for (let i = 0; i < strInLowerCase.length; i++) {
    
    let condition_one = strInLowerCase.codePointAt(i) >= 97 && strInLowerCase.codePointAt(i) <= 122;
    let condition_two = strInLowerCase.codePointAt(i) >= 48 && strInLowerCase.codePointAt(i) <= 57;
    
    if ( condition_one || condition_two) {
      if (objCount.hasOwnProperty(strInLowerCase[i])) {
          objCount[strInLowerCase[i]] = objCount[strInLowerCase[i]] + 1;
      } else {
          objCount[strInLowerCase[i]] = 1;
      }
    } else {
      continue;
    }
    
  }
  
  return objCount;
}

console.log(charCount("abab"));
console.log(charCount('abcdefg'));
console.log(charCount('Hhello'));
console.log(charCount('My Phone Number is 03231410211'));
console.log(charCount('0123456789'));
console.log(charCount('1234 1234'));