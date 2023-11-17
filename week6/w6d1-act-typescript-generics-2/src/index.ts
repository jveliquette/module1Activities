// =============================
// Make your way through the following exercises, in order

import { type } from "os"

// Before you submit your code, also fix all TypeScript compiler errors
// =============================

// Given this function definition that includes a generic type parameter...
function createAndFillArray<T>(element: T, length: number): T[] {
    return Array<T>(length).fill(element)
}

// ...finish this expression by filling in your code to invoke the `createAndFillArray` function to return an array of strings.
// Include a generic type parameter, as well as arguments to the function.
const stringArray = createAndFillArray<string>('name', 2) /* add your code here */

// Invoke the following function correctly. Include a generic type argument, as well as an argument to the function.
function oneInOneOut<T>(value: T) {
    return value
}

let mySameItem = oneInOneOut<string>('hello') /* add your code here */

// Invoke the following function correctly. Include a generic type argument, as well as an argument to the function.
// *** notice the generic type parameter can be anything, but is often just `T` by convention ***
function returnInArray<Type>(value: Type): Type[] {
    return [value]
}

let myValueInArray = returnInArray<number>(24) /* add your code here */

// Invoke the following function correctly. Include 1 generic type argument, as well as an argument to the function.
// *** notice the generic type parameter can be anything, but is often just `T` by convention ***
function initializeSet<SetType>(arrayOfValues: SetType[]): Set<SetType> {
    let result = new Set(arrayOfValues)
    return result
}

let newSet = initializeSet<number>([2, 4, 6, 8]) /* add your code here */

// Invoke the following function correctly. Include 2 generic type arguments, as well as 2 arguments to the function.
// *** notice there can be more than one generic type parameter. When invoking the function, TypeScript will expect you to pass in a type argument for each type parameter ***
function initializeMap<K, V>(mapKey: K, mapValue: V): Map<K, V> {
    let result = new Map()
    result.set(mapKey, mapValue)
    return result
}

let myMap = initializeMap<string, number>('list', 1) /* add your code here */

// Write a JavaScript function called `makeBig` (don't include type annotations) that accepts one string as input, and returns that string in ALL CAPS
function makeBig(str: string): string {
    return str.toUpperCase() /* fill in function parameters and function body */
}

// invoking our function like this should return the following output:
const tree = makeBig('plant') // => 'PLANT'

// Oops, just below we're calling our `makeBig` function with a number.
// Help prevent this error by adding type annotation to the function definition
// this is an error
const bigOops = makeBig('35')

// refactor your `makeBig` definition above, with type annotations

// next, write a JavaScript function (without type annotations), called `numSquared`,
// that accepts one number, and
// returns the number squared (number times itself)
function numSquared(num: number): number {
    return num ** 2 /* fill in function parameters and function body */
}

// Oops, just below we're calling our `numSquared` function with a string.
// Help prevent this error by adding type annotation to the function definition
// this is an error
numSquared(2)

// Using just JavaScript, write a function with 2 parameters:
// value: any value
// transform: a function that will convert the value passed in as `value`

function transformValue<type>(value: type, transform: (value: type) => type) {
    return transform(value)/* fill in function parameters and function body */
}

// here are 2 utility functions to use
// to try out `transformValue`:
function cube(num: number) {
    return num * num * num
}

function makeSmall(word: string) {
    return word.toLowerCase()
}

// invoke `transformValue` like this:
const threeCubed = transformValue(3, cube) // => 27;

// or this:
const smallTree = transformValue('TrEe', makeSmall) // 'tree'

// with just JavaScript, we could end up with a problem with mixing string and number types in the conversion functions, and we won't get any helpful TypeScript information reporting errors in our code until runtime (until we run the code and invoke the functions).

// this is an error:
const transformOops = transformValue('NINE', makeSmall) // => error
// Oops, we're attempting to invoke a string method on a number here.
// error inside of `transformValue`: word.toLowerCase is not a function

// Before you submit your code, also fix all TypeScript compiler errors

// ADVANCED CONTENT (optional)

/**
 * Let's
 * Create
 * More
 * Type
 * Safety
 * with
 * Generics
 */

// Refactor your `transformValue` function to include generic type parameters.
// Goal: create type safety for the following function invocations:

// transformValue('apple', cube) // should see red squiggly line only on `cube`

// transformValue('abc', makeBig)
// transformValue<number>(3, makeBig) // should see red squiggly line only on `makeBig`
// transformValue(3, cube)
// transformValue('3', cube) // should see red squiggly line only on `'3'`

// ADVANCED RESEARCH NOTE:
/*
The 2nd argument of `transformValue` is a function. In order to take advantage of the type safety provided by generics, you will need to look up how to specify types in a function passed as an argument to another function.

The TypeScript docs refer to this as "function type expressions".

Here's a link to the documentation on how to do this: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

*/

// Before you submit your code, also fix all TypeScript compiler errors

/*
=====================================================
=====================================================
Do not edit anything in the section below.
The following code is for automated testing
*/

function codeRunner({
    functionName,
    argumentsArray,
}: {
    functionName: string
    argumentsArray: any[]
}): any {
    const functionsOnPage: any = {
        makeBig,
        numSquared,
        transformValue,
    }
    return functionsOnPage[functionName].apply(null, argumentsArray)
}

/*
Do not edit the code in the above section.
The previous code is for automated testing
=====================================================
=====================================================
*/
