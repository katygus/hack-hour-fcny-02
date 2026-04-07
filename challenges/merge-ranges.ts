/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/
/*
* sort nested arrays
* iter through array of arrays
* slow and fast pointers inside of for or while loop
* variable
*/

export const mergeRanges = (intervals: number[][]): number[][] => {
  //sort the nested arrays (use the sort method passing in a, b where a[0] - b[0]
  intervals.sort((a, b) => a[0] - b[0]);
  let slow;
  let fast;

  for (let i = 0; i < intervals.length; i++) {
    slow = intervals[i];
    fast = intervals[i+1];
    console.log(`slow ${slow} and fast${fast}`)
    if (fast[0] >= slow[0] && fast[0] <= slow[1]) {
      console.log(`first fast: ${fast[0]} is within range of ${slow[0]} and ${slow[1]}`)
     //TODO: figure out how to merge the two
    }
   else {
    console.log("no merge");
   }
   // increment i an additional time so you skip nested arrays by 2
   i += 1
  }
  //TODO: create new array to return -> when condition is met, create new inner array with merged values and push to return array -> if condition is not met, just push the arrays to return array 
  return [];
};

const intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); //-> [[0, 1], [3, 8], [9, 12]]