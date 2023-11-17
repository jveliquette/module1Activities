// W3 D1 ACTIVITY TIME: INTRO TO FUNCTIONS //

/* Question 1 // Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
    The legal drinking age in the United States is 21. */
// const output = isOldEnoughToDrink(22);
// console.log(output); // --> true
// function isOldEnoughToDrink(age) {
//     if (age >= 21)
//     return true;
//         else if (age < 21)
//             return false;
// }

/* Question 2 // Write a function that counts the number of vowels in a given word. You can use a loop to iterate through the input string. Try using an array method (like .includes()) to check if a letter exists in the given vowels array
const vowels = ['a', 'e', 'i', 'o', 'u']; */
// countVowels("hello world!")
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     function countVowels(word) {
//         let count = 0;
//         for (let character of word) {
//             if (vowels.includes(character)) {
//                 count = count + 1;
//             }
//         }
//         return count;
//     }

/* Question 3 // Write a function called "isSameLength". Given two words, "isSameLength" returns whether the given words have the same length. */
// const output = isSameLength('words', 'super');
// console.log(output); // --> true
// function isSameLength(word1, word2) {
//     if (word1.length === word2.length)
//     return true
//         else if (word1.length !== word2.length)
//         return false
//   }

/* Question 4 // Write a function called "areBothOdd". Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd. */
// const output = areBothOdd(1, 3);
// console.log(output); // --> true
// function areBothOdd(num1, num2) {
//     if (num1 % 2 !== 0 && num2 % 2 !== 0)
//     return true
//         else
//         return false
//   }

/* Question 5 // Write a function called "isEitherEven". Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even. */
// const output = isEitherEven(1, 4);
// console.log(output); // --> true
// function isEitherEven(num1, num2) {
//     if (num1 % 2 === 0 || num2 % 2 === 0)
//     return true;
//         else
//         return false;
// }

/* Question 6 // Write a function called "average". Given two numbers, "average" returns their average. */
// const output = average(4, 6);
// console.log(output); // --> 5
// function average(num1, num2) {
//     return (num1+num2)/2;
//   }

/* Question 7 // Write a function called "joinArrays". Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2". */
// const output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]
// function joinArrays(arr1, arr2) {
//     return arr1.concat(arr2)
//   }

/* Question 8 // Write a function called "getNthElement". Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes:
    * If the array has a length of 0, it should return 'undefined'. */
/*                            0  1  2 */
// const output = getNthElement([1, 3, 5], 1);
// console.log(output); // --> 3
// function getNthElement(array, n) {
//     if (array.length > 0)
//     return(array[n])
// }

/* Question 9 // Write a function called "getIndexOf". Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.
Notes:
    * Strings are zero indexed, meaning the first character in a string is at position 0.
    * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
    * If the character does not exist in the string, it should return -1.
    * Do not use the native indexOf function in your implementation. */
// const output = getIndexOf('a', 'I am a hacker');
// console.log(output); // --> 2
// function getIndexOf(char, str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }


/* Question 10 // Write a function called "removeFromBack". Given an array, "removeFromBack" returns the given array with its last element removed.
Notes:
    * You should be familiar with the method 'pop'. */
// const output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]
// function removeFromBack(arr) {
//     arr.pop()
//     return arr
// }

/* Question 11 // Given an array of two elements, 'swapFirstAndLast' swaps the positions of the first and last elements using array destructuring, and returns the modified array. This should not modify the original array. */
const arr = ['pineapple', 'orange']
console.log(swapFirstAndLast(arr)); // output -> ['orange', 'pineapple']
function swapFirstAndLast(arr) {
    [arr[0], arr[1]];
    return newArray = [arr[1], arr[0]]
}
