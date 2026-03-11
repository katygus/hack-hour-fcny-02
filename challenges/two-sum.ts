/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rationale:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rationale: No elements inside the array sum up to the target number
*/

// if I assume array is sorted, start with first el, then only check against els whose val is <= diff
// if not sorted, (what time/space to sort?)
export const twoSum = (arr: number[], target: number): boolean => {
  // for (let i = 0; i < arr.length; i++) { //i=2
  //   let diff = target - arr[i]; //diff=13
  //   for (let j = 1; j < arr.length; j++) {//j=5
  //       if (arr[i] + arr[j] === target) return true;
  //   }
  // }
  let mappedArr = new Map();
  //loop array, finding diff between arr[i] and target
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    // check if mappedArr.has diff
    if (mappedArr.has(diff)) return true;
  // no, add diff, i to mappedArr
    mappedArr.set(arr[i], i);
  }
  return false;
};
const nums = [2, 5, 10, 15]
console.log(twoSum(nums, 7)) //-> true
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

// start with pointer A, add pointer B, find diff between target and sum of AB, search hashmap for diff

export const threeSum = (arr: number[], target: number): boolean => {
  // const hashForThree = new Map();

  // for (let i = 0; i < arr.length; i++) {
  //   let a = arr[i];
  //   let b = arr[i+1];
  //   let sum = a + b;
  //   let diff = target - sum;
  //   if (hashForThree.has(diff)) return true;
  //   hashForThree.set(a, i);
  //   // have to keep incrementing b before leaving loop
  // }
  // return false;

  for (let i = 0; i < arr.length; i++) {
    const sortedArr = arr.sort();
    let a = i + 1; 
    let b = arr.length-1;
    
    while (a < b) {
      let sum = sortedArr[i] + sortedArr[a] + sortedArr[b];
      console.log(sum);
      if (sum === target) return true;
      a++;
      b--;
    }

  }
  return false;
};
 const arr = [2, 5, 11, 15];
 console.log(threeSum(arr, 18));
 console.log(threeSum(arr, 22));
 console.log(threeSum(arr, 31))