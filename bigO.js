function addUpTo1(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

console.log(addUpTo1(6));

function addUpTo2(n) {
	return n * (n + 1) / 2;
}
let t1Function1 = performance.now();
console.log(addUpTo2(1000000000))
let t2Function1 = performance.now();

console.log(`Time Elapsed: ${(t2Function1 - t1Function1)} seconds`);

let t1Function2 = performance.now();
console.log(addUpTo2(1000000000))
let t2Function2 = performance.now();

console.log(`Time Elapsed: ${(t2Function2 - t1Function2)} seconds`);

// Now if we try to figure out the big O for this function, we'd start by saying
// that in the first loop as n grows we hhave rougly n operations 
// that means we have O(n) here. Then we have another loop in which as n grows 
// we have rougly n operations. Sp here we might think the Big O will be 2n but 
// remember that we dont care about that. WE care about the big picture so we 
// simplify it to O(n)
function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

// Here we have a nested loop, if we try to figure out the big O for this function
// we start by saying that in the outer loop as n grows we have rougly n iterations
// so it's big O will be O(n)but then we have a nested loop in which as n grows we
// have n operations so it's Big O will be O(n). But it is not O(2n) which would
// have simplified to O(n) becasue it's nested, so an O(n) operation inside an 
// O(n) operation is O(n * n) which is O(n^2). So what this means is that as n grows
//, the runtime roughly grows at the rate of n squared. 
// Big O will also we 
function printAllPairs(n) {
  for (var i = 0; i < n; i ++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(5);

function logAtleast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
logAtleast5(10);

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(onlyElementsAtEvenIndex(arr));