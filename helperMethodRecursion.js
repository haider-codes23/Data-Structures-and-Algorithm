function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}

//Collecing Odd values using helper method Recursion
// Now each time collectOddValues is called recursively the results array is redeclared and initialized to an empty array
// and we wont be able to collect the odd values, to overcome that we declare the results array in the outer scope, and 
// we dont want result to float around in the middle of nowhere we name our collectOddValues function helper and enclose the 
// helper function inside another function called collectOddValues 

function collectOddValues(arr) {
  let result = []; // this is where we will collect our odd values
  

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  collectOddValues(arr.slice(1));// The slice method takes two arguments the first one is where the extraction begins
                                // the second one is where the extraction ends, if we omit the second arguemnt, it return 
                                // all the element beginning from  index provided in the first argument.
  return result;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);  

  return result;
}