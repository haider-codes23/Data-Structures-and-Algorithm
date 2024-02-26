function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
//  return 5 + sumRange(5 - 1) --> returns 10 then 5 + 10 = 15
//      return 4 + sumRange(4 - 1) --> return 6 then 4 + 6 = 10
//          return 3 + sumRange(3 - 1) --> returns 3 then 3 + 3 = 6
//              return 2 + sumRange(2 - 1) --> returns 1 then 2 + 1 = 3



//    CALL STACK
//  |               |
//  |               |
//  |               |
//  | sumRange(1)   |
//  | sumRange(2)   |
//  | sumRange(3)   |
//  | sumRange(4)   |
//  | sumRange(5)   |