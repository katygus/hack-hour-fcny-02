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
  for (let i = 0; i < arr.length; i++) { //i=2
    let diff = target - arr[i]; //diff=13
    for (let j = 1; j < arr.length; j++) {//j=5
        if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};
const nums = [2, 5, 10, 45]
console.log(twoSum(nums, 35)) //-> true
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

export const threeSum = (arr: number[], target: number): boolean => {
  return false;
};
