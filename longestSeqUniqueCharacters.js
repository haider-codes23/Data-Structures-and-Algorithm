// Write a function to find the longest sequence of unique characters in a string

// Understanding the problem
// Restating
// Given a string of characters find the longest sequence of characters which are unique
// --> we'll create a vairbale called tempSubstring and initialize it with a empty string
// --> we'll create a variable called LongestSubString and initialize it with an empty string 
// --> we start from the first character and check wether the subsequent character
//     is same or not
//    --> If it's same we'll remove the first character from the substring
//    --> if it's different we'll concatenate it with the first character
// --> We'll redo this process to check wether the subsequent character is similar 
//    or not, if its similar we'll remove the previous chacter if it's not we'll concatenate it
//    with the substring

// inputs --> A string
// outupt --> A substring 

// Concrete Examples
// Simple Exampes
// console.log(longestSeqUniqueCharacters("hellothere"));// 'lothere'
// console.log();// 
// console.log();//
// console.log()); 
// console.log(); 
// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down

function longestSeqUniqueCharacters(str) {
  if (str.length === 0) return null;
  let tempLongestSubString  = str[0];
  let longestsubString = '';

  for (let i = 0; i < str.length - 1; i++) {
    //tempLongestSubString = str[i];
    console.log("Iteration" + i);
    console.log('temp longest Substring:' + tempLongestSubString);
    console.log(`subsequent character: ${str[i + 1]}`);
    console.log('comparing these character: ' + str[i] + ' ' + "and" + ' ' + str[i + 1]);
    if (str[i] !== str[i + 1]) {
      console.log('entered in the if condition');
      
      tempLongestSubString = tempLongestSubString.concat(str[i + 1]);
      console.log('After concatenating:' + tempLongestSubString);
      longestsubString = tempLongestSubString;
      console.log('-------------------------------------------');
    }
    else {
      console.log("Entered Else");
      tempLongestSubString = str[i];
      console.log('-------------------------------------------');
    }
  }
  return longestsubString;
}
console.log(longestSeqUniqueCharacters('hellothere'));