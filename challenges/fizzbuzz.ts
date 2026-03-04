/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

/*DIDN'T GET ANY OF THIS DONE IN THE TIME!!!!*/

//input: number
//output: array of strings and numbers
const fizzbuzz = (num: number): (number | string)[] => {
  //create an array from the number and all nums before starting at 1
  const numArr = Array.from(
    { length: num }, // length of array is equal to passed in number
    (el, index) => (el = index + 1),
  );
  console.log(numArr);
  //starting from 1, push each number to the array up to num
  //map over new array, converting nums div by 3, 5, 3&5
  const result = numArr.map((e) => {
    if (e % 3 === 0 && e % 5 === 0) return "fizzbuzz";
    else if (e % 3 === 0) return "fizz";
    else if (e % 5 === 0) return "buzz";
    else return e;
  });
  return result;
};
const attempt = fizzbuzz(17);
console.log(attempt);

const fizzbuzz2 = (num: number): (number | string)[] => {
  return Array.from({ length: num }, (_, idx) => {
    let numbEl = idx + 1;
    const fizz = numbEl % 3 === 0;
    const buzz = numbEl % 5 === 0;
    const fizzbuzz = numbEl % 3 === 0 && numbEl % 5 === 0;
    if (fizzbuzz) return "fizzbuzz";
    if (fizz) return "fizz";
    if (buzz) return "buzz";
    return numbEl;
  });
};
const trying = fizzbuzz2(56);
console.log(trying);
/*
Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,
"buzz" in place of numbers divisible by 5 but not by 3 or 7,
"bazz" in place of numbers divisible by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

const fizzbuzzbazz = (num: number): (number | string)[] => {
  const numberArray = Array.from(
    { length: num },
    (elem, idx) => (elem = idx + 1),
  );
  const result = numberArray.map((el) => {
    if (el % 7 === 0 && el % 5 === 0) {
      if (el % 3 === 0) {
        return "fizzbuzzbazz";
      } else return "buzzbazz";
    } else if (el % 7 === 0 && el % 3 === 0) {
      return "fizzbazz";
    } else if (el % 5 === 0 && el % 3 === 0) return "fizzbuzz";
    else if (el % 7 === 0) return "bazz";
    else if (el % 5 === 0) return "buzz";
    else if (el % 3 === 0) return "fizz";
    else return el;
  });

  return result;
};
console.log(fizzbuzzbazz(105));
export { fizzbuzz, fizzbuzzbazz };
