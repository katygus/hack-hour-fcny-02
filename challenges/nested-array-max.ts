/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all arrays are non-empty and all elements in each array are numbers.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/
type NestedNumberArray = [
  number | NestedNumberArray,
  ...(number | NestedNumberArray)[],
];

// this is a sliding window problem. I look at each subarray (array up to next nest) at a time
// the window starts at the current largest number and goes to the last number (non array element)

const nestedArrMax = (arr: NestedNumberArray): number | undefined => {
  let max: number = -Infinity;
  // iterate over array
  for (const num of arr) {
    // on each iter, val of max will be greatest num so far
    if (Array.isArray(num)) {
      // if curr el is an array
      // * to compare current max to recursive call of max on num, have to pass both into Math.max
      max = Math.max(nestedArrMax(num)!, max);
    }

    // if curr > max, reassign max to val of curr
    else if (num > max) {
      max = num;
    }
  }

  return max;
};

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
// TODO - Not close to figuring this out yet but have to stop for today
const nestedArrMaxLevel = (
  arr: NestedNumberArray,
  level: number,
): number | undefined => {
  let depth = 1;
  let max = -Infinity;
  
  const helper = (arr: NestedNumberArray, currLevel: number, max: number) => {
    for (let num in arr) {
      if (Array.isArray(num) && currLevel < level) {
        currLevel++;
        return Math.max(helper(num, depth, max), max);

      } else if (Array.isArray(num) && currLevel === max) {
        return max;
      } 
      }
      
    }
  }helper(arr, level, max);
  return max;
}
  // // track current depth of array on each iter
  // if (!arr.length) return undefined;
  // let depth = 1;
  // let max = -Infinity;

  // const maxLevelHelper = (arr: NestedNumberArray, depth: number) => {
  //   // check max val against current val
  //   console.log(`arr at level:${depth}:`, arr);
  //   if (depth === level) return max;
  //   for (const num of arr) {
  //     console.log("num: ", num);
  //     console.log("depth: ", depth);
  //     while (level > depth) {
  //       if (Array.isArray(num)) {
  //         depth++;
  //         level--;
  //         max = Math.max(maxLevelHelper(num, depth)!, max);
  //       } else if (num > max){
  //          max = num;
  //           console.log(`max is ${max} at level ${depth}`)
  //         return max;
  //       }
  //     }
  //   }
  // };
  // maxLevelHelper(arr, depth);
  // return max;
};

const arrNested: NestedNumberArray = [1, [3, [10], 6]];
// nestedArrMaxLevel(arrNested, 1);
//-> 1

console.log(nestedArrMaxLevel(arrNested, 2));
//-> 6

// nestedArrMaxLevel(arrNested, 3);
//-> 10
export { nestedArrMax, nestedArrMaxLevel, NestedNumberArray };
