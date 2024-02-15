# Problem Solving approach

# Objectives

1. Define what an algorithm is.
2. Devise a plan to solve algorithms.
3. compare and contrast problem solving patterns including frequency counter, two pointer problems and divide and conquer.

## How do you improve ?

- Devise a plan for solving problems
- Master common problem solving patterns

# Introduction to problem solving

- What is an algorithm ?
    - A process or set of steps to accomplish a cartain task.
- What are the problem solving strategies ?
    - Understand the Problem
    - Explore Concrete Examples
    - Break it Down
    - Solve/ Simplify
    - Look Back and refactor

---

## Understanding the Problem

- Before you start solving the problem e.g. coding it, you need to understand the probelm, understand the task ahead of you. For this ask deliberate questions, thoroughly investigate the problem
    - Can i restate the problem in my own words ?
    - what are the input that go into the problem ?
    - What are the outputs that should come from the solution to the problem or the return value of the function ?
    - Can the output be determined from the inputs? In other words do I have enough information to solve the problem ?
    - How should I label the important pieces of data that are a part of the problem ?
- Write a function which takes two numbers and returns their sum ?

```jsx
// Can i restate the problem in my own words ?
// implement addition 
// what are the input that go into the problem ?
// Are the inputs Interger numbers or floating points number or string representation of numbers
// What are the outputs that should come from the solution to the problem or the return value of the function ?
// If we pass in two folating point numbers should be return an Integer or floating point number
// Can the output be determined from the inputs? In other words do I have enough information to solve the problem ?

// How should I label the important pieces of data that are a part of the problem ?
```

## Exploring Concrete Examples

- Examples also provide sanity check(wether the result of a calculation or approach can be possible) that your eventual solution works how it should
    - start with simple examples (write two or three simple examples with an input and then the output)
    - Progress to more complex exapmles
    - Explore examples with empty inputs
    - Explore examples with invalid inputs

```jsx
// Write a function which takes in a string and returns counts of each character
// in the the string ?
// Understanding the problem
// 1-Can i restate the problem in my own words ?
//   The function takes a string as an argument and returns an object which contains
//   the count of each character e.g. the number of times it occurs in the string. 
// 2-what are the input that go into the problem ?
//   The inputs could be upper case characters or lower case characters
//   or number literals or some symbol and do we want to account for spaces
// 3-What are the outputs that should come from the solution to the problem or the return value of the function ?
//   Object
// 4-Can the output be determined from the inputs? In other words do I have enough information to solve the problem ?
		 
// 5-How should I label the important pieces of data that are a part of the problem ?
//  

// Concrete Examples 
// Simple Examples
	// charCount("aaaa") => {a: 4}
	// charCount("hello") => {e: 1, h: 1, l: 1, o: 1}
// Complex Examples
	// charCount("My phone numbers is 03231410211")
	// charCount("Your total Bill is $20.23")
// Invalid Inputs
	// charCount()
	// charCount("")
	// charCount(123)
```

## Break it Down

- Write down the actual steps to solve the problem, doesn’t have to be full pseudocode or valid syntax, just in simple plain english. This forces you to think about your code before you actually write it, and it helps you catch any lingering conceptual issues or misunderstandings before you dive in to coding.

```jsx
// function should count string that contain alphanumeric characters in
// lowercase, if there is a character in uppercase we should count that
// but as a lowercase character. Whitespaces and Symbols such as $ or ! should be ignored.
// Write a function which takes in a string and returns counts of each character
// in the the string ?
// Breaking it down 
//  -- we need to make an object that will store the count of each character
//  -- we need to go over all the characters in the string one by one
//  -- Fist we will check if that character exist as a key in the object
//     if it doesn't we will set it's count to 1, if it does we will increment 
//     it's count by 1.
//  -- once we have gone over all the characters we need to return that object

function charCount(str) {
  let objCount = {};
  let strInLowerCase = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    if (strInLowerCase[i] === ' ' || strInLowerCase[i] === '.'){
      continue;
    } else {
      if (objCount.hasOwnProperty(str[i])) {
        objCount[strInLowerCase[i]] = objCount[strInLowerCase[i]] + 1;
      } else {
        objCount[strInLowerCase[i]] = 1;
      }
    }
    
  }
  
  return objCount;
}

console.log(charCount("abab"));
console.log(charCount('abcdefg'));
console.log(charCount('Hhello'));
console.log(charCount('My Phone Number is 03231410211'));
```

## Look back and Refactor

### Refactoring Questions

1. Can you check the results ? —> make sure the results work
2. Can you derive the results differently ? —> different approaches
3. Can you understand it at a glance ? —> does it make sense
4. Can you use the results or methods for some other problem ? 
5. Can you improve the performace of your solution ? —> make it’s Time and Space complexity better
6. Can you think of other ways to refactor  ?
7. How have others people solved this probelm ?

```jsx
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
```