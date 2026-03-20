/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

/*
Have to iterate over array (for or while)
Two variables (left and right) to represent pointers
One variable (temp) to hold the switching element
While iterating, move each pointer inward one step after reassigning elements
 * have to assign right value to temp each time before swapping
 * then reassign right value to left value
 * then reassign left value to temp value
 * then move each pointer inward
 * keep doing this until right pointer is equal to left pointer
*/ 

export const reverseArray = (array: any[]): any[] => {
  let rightIdx = array.length -1;
  let leftIdx = 0;

  let temp;
    
  while (leftIdx <= rightIdx) {
      temp = array[rightIdx];
      array[rightIdx] = array[leftIdx];
      array[leftIdx] = temp;
      leftIdx++;
      rightIdx--;
  }

  return array;
};

// const reversed = [1, 2, 3, 4, 5];
// console.log(reverseArray(reversed));
/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

export const reverseSentence = (sentence: string): string => {
  const words = sentence.split(" ");
  console.log(words);
  let lIdx: number = 0;
  let rIdx: number = words.length -1;
  let tempWord;

  while (lIdx <= rIdx) {
    tempWord = words[lIdx];
    words[lIdx] = words[rIdx];
    words[rIdx] = tempWord;
    lIdx++;
    rIdx--;
    console.log(words);
  }
  return words.join(" ");
};

const phrase = "bob likes dogs alot";
console.log(reverseSentence(phrase));