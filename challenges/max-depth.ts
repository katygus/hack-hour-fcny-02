/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:

maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/
// input: nested array
// output: number (depth count)

type NestedArray = (number | NestedArray)[];

const maxDepth = (arr: NestedArray): number => {
  // variable to track count starting at 1
  // iterate over array
  // console.log('count', count)
  // for (let i = 0; i < arr.length; i++) {
  //     // on each iter, if el is an array, increm count and pass new element in to maxDepth
  //     let current = arr[i];
  //     console.log('current', current)
  //     if (Array.isArray(current)) {
  //      count++;
  //      maxDepth(current, count);
  //     }
    // use reduce with an internal recursive call
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        return Math.max(acc, maxDepth(curr) + 1);
      }
      return acc;
    }, 1)
  }

console.log(maxDepth([3, [6, [7]], 2])) //-> 3 (maximum depth is 3 levels)
export default maxDepth;
