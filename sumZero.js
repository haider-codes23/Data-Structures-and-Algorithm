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