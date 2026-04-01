/*
Write a function findInOrderedSet that determines if a given number exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

//binary sort - divide array in half and see if target number is larger or smaller, then only check the corresponding half

const findInOrderedSet = (array: number[], target: number): boolean => {

  
  let smlIdx = 0;
  // var for largest index
  let lgIdx = array.length -1;
  if (array[smlIdx] > target || array[lgIdx] < target) return false;
  // iter over array for as long as smlIdx <= lgIdx
  while (smlIdx <= lgIdx) {
  // find midpoint
  let midIdx = Math.floor((smlIdx + lgIdx) / 2);
 
  if (target === array[midIdx]) {
    console.log('perfect match: ', array[midIdx]);
    return true;
  }
 else if (target < array[midIdx]) {
    lgIdx = midIdx - 1;
    console.log('target is smaller, so now lgIdx: ', lgIdx);
    continue;
  }
  else if (target > array[midIdx]) {
    console.log('target is larger, so now smlIdx: ', smlIdx);
    smlIdx = midIdx + 1;
    continue;
  }
  console.log(`largest idx is ${lgIdx} and smallest idx is ${smlIdx}`);
}
  return false;
};

const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  //-> true
// findInOrderedSet(nums, 2); //-> false
/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix: number[][], target: number): boolean => {
  return false;
};

export { findInOrderedSet, findIn2dMatrix };
