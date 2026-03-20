/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

//input: nested array of numbers, depth
//output: flat array of nums in order from provided depth and lesser depth

/*
* need to know the value of each element and its depth up to the passed in depth
* variable for return array
* 
* Check if depth <= passed in depth and el is not array
    Push el to newArray
If el is array, increment depth, reassign leftOvers to el
Conditional check depth
If depth > 1 and <= passed in depth, look through leftOvers
If el is not array
    Push el to newArray
If el is array, increment depth, reassign leftOvers to el
* 
*/
type NestedArr<T> = (T | NestedArr<T>)[];

export const retrieveDepth = (
  arr: NestedArr<number>,
  depth: number
): number[] => {
  const newArray: number[] = []; // array to return
  console.log('newArray:', newArray);

  let leftOvers: string | any[] = []; // array to hold nested arrays on iterations
  console.log('leftOvers: ', leftOvers);

  let depthCount = 1;

  for (const el of arr) {
      if (depthCount <= depth && !Array.isArray(el)) {
        newArray.push(el);
      }
      else if (Array.isArray(el)) {
        depth++;
        leftOvers = el;
      }
      if (leftOvers.length > 0 && )
  }

  return [];
};

console.log(retrieveDepth([2, [4, [7], 1], 5], 2)) //-> [2, 4, 1, 5]
/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

export const flattenDepth = (
  arr: NestedArr<number>,
  depth: number
): NestedArr<number> => {
  return [];
};
