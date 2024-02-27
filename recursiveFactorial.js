// factorail recursively
function factorialRecursivly(num) {
  if (num === 1)  return 1; // This is the base case
  return num * factorialRecursivly(num - 1); // this is calling the function recursively with a smaller or different input 
                    // return 3 * factorialRecursively(2)
                    //               return 2 * factorialRecursivly(1)
  }
  


console.log(factorialRecursivly(3));
console.log(factorialRecursivly(4));