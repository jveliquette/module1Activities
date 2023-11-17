/*
The equation for a factorial is as follow:

n! = n * (n - 1) * (n - 2) * ... * 2 * 1

Write the recursive term to calculate any given numbers factorial.

Hint: You will multiply n outside of the recursive call. Each recursive call will need to take in (n - 1). That way each time we open up a new execution context, we will end up getting n-2, n-3, n-4, etc.
*/

function factorial(n: number): number {
  //Our base case is n <= 1 because 1 will always be the last term we multiply by when calculating a factorial
  if (n <= 1) {
    return 1;
  } else {
    // Write your recursive call here
    return n * factorial(n - 1)
  }
}

const num = 5;
const fact = factorial(num); //Answer: 120
// console.log(`Factorial of ${num} is: ${fact}`);

/*
The equation for the fibonacci sequence is as follows:
F(n) = F(n-1) + F(n-2) for n > 1

Write the recursive term to calculate any given numbers fibonacci sequence.

Hint: You will need two recursive calls in order to do so.
*/

function fibonacci(n: number): number {
  //Our base case is n <= 1 because once we get bellow 1, we will only be adding zero to our sequence.
  if (n <= 1) {
    return n;
  } else {
    //Write your recursive call here
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const number = 6;
const fib = fibonacci(number); //Answer: 8
// console.log(`The ${number}th Fibonacci number is: ${fib}`);

/*
Write a recursive function to calculate the sum of all numbers that exist in an array

Hint: Start with arr[0], then pass in a sliced version of your arr to the recursive call
*/

function sumArray(arr: number[]): number {
  //Our base case is when our array length is 0 because we need to utilize the elements in our array within each recursive call. One we run out of elements, we are done.
  if (arr.length === 0) {
    return 0;
  } else {
    //Write your recursive call here
    return arr[0] + sumArray(arr.slice(1))
}
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
// console.log(`Sum of the array is: ${sum}`);

/*
To calculate 2^4, we can also write it out as:

2 * 2 * 2 * 2 = 16

You can think of this as multiplying the base by itself (2) the number of times specified by the exponent (4)

Hint: The base will be a constant term outside of the recursive call. You will then need to pass in multiple arguments to your recursive call. One of them being (exp - 1) in order to reach our base case
*/

function power(base: number, exponent: number): number {
  //Our base case is zero because once we hit zero, we have already multiplied our base by the proper number of times. We are returning one because multiplying by one will not change the outcome of our result.
  if (exponent === 0) {
    return 1;
  } else {
    // Write your recursive call here
    return base * power(base, exponent - 1)
  }
}

const baseNumber = 2; // You can change the base and exponent values
const exponent = 4;
const res = power(baseNumber, exponent);
// console.log(`${baseNumber}^${exponent} is: ${res}`);

/* Stretch Goals: If you finish this problem set, there are plenty more recursive challenges here:

https://www.geeksforgeeks.org/recursion-practice-problems-solutions/


*/

function codeRunner({
  testValue,
  argumentsArray,
}: {
  testValue: string;
  argumentsArray?: any[];
}): any {
  const toTest: any = {
    factorial,
    fibonacci,
    sumArray,
    power,
  };
  if (argumentsArray !== undefined) {
    return toTest[testValue].apply(null, argumentsArray);
  } else {
    return toTest[testValue];
  }
}
