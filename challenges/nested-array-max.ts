/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all arrays are non-empty and all elements in each array are numbers.

Ex:



*/
type NestedNumberArray = [
  number | NestedNumberArray,
  ...(number | NestedNumberArray)[]
];

// this is a sliding window problem. I look at each subarray (array up to next nest) at a time
// the window starts at the current largest number and goes to the last number (non array element)

const nestedArrMax = (arr: NestedNumberArray): number | undefined => {
  // variable to track largest value
  let maxNum = 0;
  // iterate over array
  for (let i = 0; i < arr.length; i++) {
        // if element type is number, if it is larger than largest var, reassign largest var to new element
      if (typeof arr[i] === 'number') {
        
      }
    // if element type is array, pass the element(array) into recursive call
  }

  return 0;
};

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
//-> 10

// const arrNested = [1, [3, [10], 6]];
// nestedArrMax(arrNested);
//-> 10
/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all arrays are non-empty and all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (
  arr: NestedNumberArray,
  level: number
): number | undefined => {
  return undefined;
};

export { nestedArrMax, nestedArrMaxLevel, NestedNumberArray };
