/* 

  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.
  
*/

//TODO: fix issue where uneven number of els returns the last el in the wrong order
//* FIXED: forgot to include the recursive call to reassign left and right arrays

const mergeSort = (array: number[]): number[] => {
  // base case -> array.length = 1
  if (array.length <= 1) return array;

  const mid = Math.ceil(array.length / 2); //index of midpoint for current array

  // split array in half -> for each half
  let leftArr = mergeSort(array.slice(0, mid));
  let rightArr = mergeSort(array.slice(mid));

  // decl var to hold the sorted array
  const sortedArr: number[] = [];

  // as long as each array has elements in it
  // recursively -> pass each array back into mergeSort
  while (leftArr.length && rightArr.length) {
    leftArr[0] < rightArr[0]
      ? sortedArr.push(leftArr.shift()!)
      : sortedArr.push(rightArr.shift()!);
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const arr = [5, 3, 1, 2, 4];
console.log(mergeSort(arr));
export default mergeSort;
