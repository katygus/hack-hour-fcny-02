/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']

After completing your initial approach, try refactoring your solution so that it completes in O(n) time.

*/
//input: n * arrays of num || strings
//output: 1 array of shared els from input arrays || "Nothing in Common!"
/*
How do I check how many input arrays there are?
* check args.length for total num of arrays
* reduce first array 
*   if acc[currVal] exists, increment its value by 1, else acc[currVal] = 1 (create obj with # of times each el occurs)
* 
* NO - two pointers, 
*/
const commonElements = (
  ...args: (string | number)[][]
): (string | number)[] | 'Nothing in Common!' => {
  const totalArrs = args.length;
  console.log(totalArrs);
  const firstArr = args[0];
  console.log(firstArr);
  // const resultArr = [];
  // // edge - if there are no input arrays or only one
  // if (!totalArrs || totalArrs <= 1) return 'Nothing in Common!';
  // for (let i = 0; i < totalArrs; i++) {
  //   const reducedArrs = args[i].reduce((acc, curr) => {
  //     console.log(acc[curr]);
  //     if (acc[curr]) {
  //       acc[curr] = acc[curr] + 1;
  //     }
  //     acc[curr] = 1;
  //   });
  //   for (const key in reducedArrs) {
  //     if (reducedArr[key] === totalArrs) {
  //       resultArr.push(key);
  //     }
  //   }
  // }
  // if (resultArr.length === 0) return 'Nothing in Common!';
  // return resultArr;
  return [];
};

const arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonElements(arr1, arr2, arr3)); // -> [2, 3, 2000, 'dog'];


/*
** Extension **
Now assume that there may be duplicate values within a single array.
Refactor your function to make sure it continues to return a new array
with all the common elements (with any duplicates removed).

ex:
arr1 = [2, 2, 10, 'dog', 'lion', 2, 2000];
arr2 = [7, 2, 'cat', 7, 7, 'lion', 7, 2000];
arr3 = [2, 100, 'lion', 2000];

commonElementsDuplicates(arr1, arr2, arr3) -> [2, 'lion', 2000]

*/

const commonElementsDuplicates = (
  ...args: (string | number)[][]
): (string | number)[] | 'Nothing in Common!' => {
  return [];
};

export { commonElements, commonElementsDuplicates };
