/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

1*7*3 -> abc
1*7*4 -> abd 
1*3*4 -> acd
7*3*4 -> bcd

getAllProducts([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

This problem is solvable in O(n) time complexity, but be careful! 
What if there is a zero in the input array? What if there are
multiple zeroes?

*/
//create a var to hold new array
// iterate through array starting at 1?
//push into new array
//reduce each ell by multi starting at 1th, 7*3*4 push
//return new array
//multiply each other

// for loop
// start w/ array[i]  {

// a (iterating 1st variable) outer loop
// b (iterating 2nd variable) 1st inner loop
// c (iterating 3rd variable) 2nd inner loop

//Cynthia's, but doesn't work
// for (let i = 0; i < array.length; i++) { // outer loop -> index 0 // 1
//   for (let j = i + 1; j < array.length; j++) { // 1st inner loop -> index 1 // 7
//     // if (i === j) continue; //
//     for (let k = j + 1; k < array.length; k++) { // 2nd inner loop -> index 2 // 3
//       // if (j === k) continue;
//       return array[i]*array[j]*array[k];
//     }
//   }

//   }
//BRUTE method
// decl empty result array
// iterate over array
// create var for the index to ignore
// on each iteration, reduce the array so every index except the ignoreIdx is multiplied together
// push the product to result array
// increment ignore index

// ALTERNATE:
// check how many 0s are in the array
// if more than one, fill orig array with zeros and return it
// if exactly one, assign the index of 0 to ignoreIdx, reduce rest of array to 1 product
//OR if no zeros
// reduce entire array to 1 product
// take turns dividing the product by each of the other elements (except the 0) and push those values to a return array
// if there was 1 zero, push it also to the return array

const getAllProducts = (array: number[]): number[] => {
  return [];
};

export default getAllProducts;
