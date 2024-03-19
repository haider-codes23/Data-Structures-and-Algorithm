// factorail recursively
function factorialRecursivly(num) {
  if (num === 1)  return 1; // This is the base case
  return num * factorialRecursivly(num - 1); // this is calling the function recursively with a smaller or different input 
                    // return 5 * factorialRecursivly(5 - 1)
                    //                return 4 * factorialRecursively(4 - 1)
                    //                             return 3 * factorialRecursively(3 - 1)
                    //                                          return 2 * factorialRecursively(2 - 1)
                    //                                              return 1
  }
  


//console.log(factorialRecursivly(3));
console.log(factorialRecursivly(5));