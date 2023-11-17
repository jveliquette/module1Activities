// We have a set of two functions that each loop over an array of elements,
// perform a math operation, and create a new array with the result

// TO-DO:
// 1) DONE---- Add types to get rid of the error messages
// 2) Finish writing the third function performCalculationOnArrElements
//    This function will take in an array and a function as the arguments.
//    Iterate over each element with the callback function,
//    and push the result into a new array.


// Function 1:
// In this addTwoToEachElement function, we iterate over each element
// of the input array, add two to it, and push the result into a new array.
// The new array contains the original elements incremented by two.

function addTwoToEachElement(arr: number[]): number[] {
    const result = [];
    for (const element of arr) {
        result.push(element + 2);
    }
    return result;
}

// Function 2:
// In the multiplyByTen function, we iterate over each element of the input array,
// multiply it by 10, and push the result into a new array.
// The new array contains the original elements multiplied by 10.

function multiplyByTen(arr: number[]): number[] {
    const result = [];
    for (const element of arr) {
        result.push(element * 10);
    }
    return result;
}

  // Example array
  const numbers = [1, 2, 3, 4, 5];

  // Usage:
  const resultAddTwo = addTwoToEachElement(numbers);
  const resultMultiplyTen = multiplyByTen(numbers);
  console.log('resultAddTwo', resultAddTwo);
  console.log('resultMultiply10', resultMultiplyTen);


  // TO-DO:
// This function will take in an array and a function as the arguments.
//    Iterate over each element with the callback function,
//    and push the result into a new array.
// Finish writing this function
type Calculation = (number: number) => number

  function performCalculationOnArrElements(arr: number[], calculation: Calculation): number[] {
    const result = [];
    for (const element of arr) {
        result.push(calculation(element));
    }
    return result;
  }

  // TO-DO:
  // Update the function invocation with the correct arguments

  // This one should have the same output as the addTwoToEachElement function
  const updatedResultAddTwo = (number: number, calculation: Calculation) => number + 2
  // console.log('updatedResultAddTwo', updatedResultAddTwo)

// This one should have the same output as the multiplyByTen function
  const updatedResultMultiplyTen = (number: number) => number * 10
  // console.log('updatedResultMultiplyTen', updatedResultMultiplyTen)
