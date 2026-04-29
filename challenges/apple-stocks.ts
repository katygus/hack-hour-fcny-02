/*

Consider an array `prices` that represents the price
variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0, 3000] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that returns the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use two pointers to keep track of the indices of buy & sell,
calculating profit along as you iterate through the array.

*/
// two pointers: one buy, one sell
// var for profit
// find diff bw buy and sell and save to profit

//loop through and find index of lowest value and index of highest value
// ALGO MONSTER EXPLANATION: https://algo.monster/liteproblems/121

const highestProfit = (prices: number[]): number => {
  //buy index is 0
  //sell index is end
  // var for max diff

  //while buy < sell, loop
  // if diff between buy - sell is greater than max diff, reassign
  // else loop again

  return 0;
};
export default highestProfit;
