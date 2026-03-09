/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */
//? What is a better time/space complexity: hashing array (if that's what the object cache method is called) or sorting array first then using 2 pointers?
export const duplicateNumber = (array: number[]): number => {
  // iter over the array, save each el as key in an obj
  const hashedArr: Record<string, number> = {};
  let dupe = 0;
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    // if the object has el as key, return that el, if not, add it to obj
    (hashedArr.hasOwnProperty(curr)) ? dupe = curr :  hashedArr[curr] = 1;
  }
  console.log(hashedArr);
  return dupe;
};
console.log(duplicateNumber([1,5,4,3,6,2,4,7]));
/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */
// TODO: k is the min number in the array, n is the number of unique elements in the array, so the max element = k + (n-1) 
export const duplicateNumberAdvanced = (array: number[]): number => {
  // ! can hash like before, but won't fit time complexity requirements

 const hashedArr: Record<string, number> = {};
  let dupe = 0;
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    // if the object has el as key, return that el, if not, add it to obj
    (hashedArr.hasOwnProperty(curr)) ? dupe = curr :  hashedArr[curr] = 1;
  }
  console.log(hashedArr);
  return dupe;
};

console.log(duplicateNumberAdvanced([5, 6, 7, 12, 8, 14, 2, 7]))