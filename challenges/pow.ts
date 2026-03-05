/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion.
 */
// input: 2 numbers, base and power

function pow(base: number, power: number): number {
  // multiply base by base, power times using a for loop
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base; 
  }
 return result;
}

console.log('regular: ', pow(2,4));

/**
 * Extension: Use recursion.
 */
// TODO: This still isn't functioning properly!
function powRecurse(base: number, power: number): number {
  let result = 1;
  while (power > 0) {
     const newBase = base * base;
     console.log(newBase);
     console.log(power-1)
    return result = powRecurse(newBase, power-1);
  }
  
   return result;
}

const newTry = powRecurse(2, 4);
console.log('recursive: ', (newTry));
export { pow, powRecurse };
