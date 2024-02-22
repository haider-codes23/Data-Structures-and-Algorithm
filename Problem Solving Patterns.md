# Problem Solving Pattern

## Some Common Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Windows
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many More

## Into to problem solving

### Frequency Counter

- What does Frequecy counter use as a data structures, when can we use it and what can it avoid ?
    - This pattern uses Objects or sets to collect values/ frequnecies of values.
    - It can help us avoid nested loops or O(N^2) operations with string or arrays.
    - It helps when you have multiple pieces of data or inputs and you need to compare them to see if they contain similar values. e.g. if they are anagrams of one another(words or phrases that can be used to form other words or phrases) or if a value is contained inside another value.
    - It can be used any time your comapring pieces of data, two inputs and frequencies of things occuring.

- Write a function called same, which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same ?

```jsx
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
```

## Frequency Counter: Anagram Challenge

- Given two Strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```jsx
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
```

## Multiple Pointer Pattern

- What are pointers, how do we create them, how do they work and what can we avoid by using pointers ?
    - Pointers are values that correspond to an index or position of a character in a string or an element in an array.
    - To create a pointer we use references that are actually variables that contain numbers which are indexes referring to position of a character in a string or an element in an array.
    - Pointers move towards the beginning, end or middle on a certain condition. e.g. if we have some sort of linear structure e.g. an array or a string and the idea is we are going to be searching for a pair of values or searching for somethings that meets a certain condition.
    - Are very efficient for solving problems with minimum space complexity so we can avoid space complexitites of O(N) and O(N^2).

### An Example

- Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to 0 or undefined if a pair does not exist.

```jsx
// Understanding the problem
// Restating
// The function will take two sorted arrays of numbers and return the the first pair
//  as an array whoes sum is equal to 0. And if it cant find any pair that sums to zero
// it would return undefined.

// inputs --> Two sorted arrays containing numbers
// outupt --> An array or the value undefined

// Concrete Examples
// Simple Examples
// console.log(sumZero([-3, -2, -1, 0 1, 2, 3])); // [3, -3]
// console.log(sumZero([-2, 0, 1, 3])); // [undefined]
// console.log(sumZero([1, 2, 3])); // undefined

// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> The function sumZero takes two sorted array
// --> create two pointer
//    --> First pointer points at the start index position in the array which is 0 or the right most
//    --> Second pointer points at the last index position in the array which is array length -1 or the element at the left most
//  -->Next we will loop through the array
//    --> add the numbers at the current indexes 
//      --> if the sum is zero return the two number in an array
//      --> if the sum is greater than zero than decrement our right pointer only and add the numbers at those indexs
//      --> if the sum is less than zero than increment our left pointer only and add the numbers at those indexes
//      --> We do not need to explicity return undefined, if the function is not able to find any pair then it will implicitly return undefined
// 

function sumZero (arr) {
  let pointerLeft = 0;
  let pointerRight = arr.length - 1;

  while (pointerLeft < pointerRight) {
    if (arr[pointerLeft] + arr[pointerRight] === 0) {
      return [arr[pointerLeft], arr[pointerRight]];
    } else {
      arr[pointerLeft] + arr[pointerRight] > 0 ? pointerRight -= 1 : pointerLeft += 1;
    }
  }

  
}

// console.log(sumZero([-3, -2, -1, 0 , 1, 2, 3]));
//console.log(sumZero([-4, -3, -2, -1, 0 , 1, 2, 5]));
console.log(sumZero([-4, -3, -2 , -1, 0, 5, 10]));
```

### Multiple Pointer: Count unique value challange

- Implement a function called countUniqueValues which accpets a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will be sorted.

```jsx
// Understanding the problem
// Restating
// The function will take a sorted array as an argument and find out how many unique values it contains e.g. if it has five 2's and one 1
// then there are a total of 2 unique values 1 and 2, and the function return the count of unique values e.g. 2

// inputs --> sorted arrays containing numbers both positive and negative
// outupt --> Number literal representing count of unique values

// Concrete Examples
// Simple Examples
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 5, 4, 7, 7, 12, 12, 13])); // 8
// console.log(CountUniqueValues[])); // 0
// console.log(CountUniqueValues[-2, -1, -1, 0, 1])); // 4

// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> The function countUniqueValue takes a sorted array
// --> 
// --> create two pointer
// --> loop over the the sorted array 
//    -->  left pointer will point at the first element in the array
//    --> right pointer will pointer at the element next to the first element
//    --> Compare the two elements if they are equal will move the right pointer
//        one index to the right and compare those values and leave left pointer
//        where it is, then compare the values at current index again if they are
//        still the same we are going to move the right pointer to the right again
//        , Right pointer is like our scout, then again we will compare the 
//         values at the current indexes and if they differnt we are going to move
//         the left pointer one index to the right and put the element at right
//         index in the position pointing at left pointer. Then we are going to move 
//         the right index forward again and then compare the values again, if they
//         different we'll move the values at right index next to the value at left index
//    --> When right most index has reached the last element in the array we would have
//        our unique element sorted beginning from the index 0 till the index at left pointer
//    --> to find the number of unique values we just have to add one to the left pointer

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let leftPointer = 0;
  let rightPointer = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[leftPointer] === arr[rightPointer]) {
      rightPointer += 1;
    } else {
      leftPointer += 1;
      arr[leftPointer] = arr[rightPointer];
      rightPointer += 1;
    }
  }
  console.log(arr);
  return leftPointer + 1;

} 
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
//console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, ,7, 12, 12 ,13]));
```

## Sliding Window

- Expalin where we could use sliding window pattern?
    - This really is useful when we have a set of data like an array or a string, and we’re looking for a subset of that data that is continuous in some way. E.g. we have a string `'hellothere` and if we were asked to find the longest sequence of unique characters e.g. first we have `'hel'` then we have `'lother` so the later one is longest in the string.
    - This pattern involves creating a window which could be either a single variable or it can be a subarray or even another string and we move that window depending on a condition, we slide it usually from left to right. if we start at the end we could go from right to left. but usually we move the window from left to right that is the beginning of the array
    - IT is useful when we are keeping track of subset of data in a larger set of data
- Write a function called maxSubarraySum which accpets an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

```jsx
// Write a function called maxSubarraySum which accpets an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array

// Understanding the problem
// Restating
// The function takes an array of numbers and a integer called n as arguments
// it calculates the sum of n consective integers and returns the integers which 
// have the maximum sum along with with there sum

// inputs --> An array and an integer 
// outupt --> n integers and there sum

// Concrete Examples
// Simple Exampes
// console.log(maxSubarraysum([1, 2, 5, 8, 1, 5], 2));// 10
// console.log(maxSubarraysum([1, 2, 5, 2, 8, 1, 5], 4));// 17
// console.log(maxSubarraysum([4, 2, 1, 6], 1));// 6
// console.log(maxSubarraysum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraysum([], 4)); //null
// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> First we handle the edge case e.g. if the the numbers passed as argument is greater
//     than the length of the array we will return null
// --> Create a variable that stores the max sum
// --> Create a variable that stores the temperory sum to check if its more than max
// --> Then we will loop through the first n elements in the array and add them together
// --> Then we will loop through the array again but start from the n that is the 
//     element next to the last n elements added together.
// --> Inside the loop we will subtract the first element in the array from the temp sum
//     and add the element at the n index e.g. if we had an array [1, 2, 3, 4, 5, 6, 7]
//     We will in the first loop add 1 + 2 + 3 and in the next loop we will subtact 1 from
//     the total sum and and add 4 into it. 

function maxSubarraySum(arr, num) {
  if (arr.lenght < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let i = num; i < arr.lenght; i++) {
    tempSum = maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, temp);
  }

  return maxSum;

  console.log(temp);
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3] ,3));
```

- Write a function to find the longest sequence of unique characters in a string ?

```jsx
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
```

## Divide and Conquer

- What is divide and conquer pattern, how does it work, And what are it’s advantages ?
    - This pattern involves dividing a data set into smaller chunks and repeating a process with a subset of data.
    - This pattern can decrease time complexity.
    - We start by dividing the data set into a smaller pieces and then doing something to each smaller pieces to determine where to go next

- Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found return -1.

```jsx
// the array must be sorted
search([1, 2, 3, 4, 5, 6], 4);
search([1, 2, 3, 4, 5, 6], 6);
search([1, 2, 3, 4, 5, 6], 11)
```

- Using linear search is a naieve approach to solve this problem. We will loop over the array, potentially check every element and when we find the value given to the function as an argument we’ll return it’s index or if we dont we’ll return -1.
- If we used Binary search algorithm, that has a divide and conquer approach. In this approach we divide the Array from the middle. The array passed to the function is sorted. E.g. we have an array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 23, 24 , 34, 45]` with 15 elements and we want to find the index of the element `12`. So the middle will be rougly somewhere at the 8th index so the array gets divided into 2 arrays, we dont actually divide the array in real it’s metaphorical e.g.  `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and `[10, 12, 23, 24, 34, 35]` we’ll take the first array or first half and check it last element if it’s greater than `12` which it is not so wont have to check the the first half of the array because we know it’s somewhere in the second half or it’s not in the array but it’s definetely not in the first half. Next we divide the second array as well e.g. we had `[10, 12, 23, 24, 34, 35]`, it will get divided into `[10, 12, 23]` and `[24, 34, 35]`. so we’ll again check the last element in the first subarray, if it is greater than `12` which it is not, so that means the element we are looking for exists in this subarray, which also means we dont have to look for `12`  in the second subarray