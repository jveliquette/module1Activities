/*
Fix and expand the types this array can be made up with so the TypeScript compiler squiggles go away
Use a union type for typing the `nameNumberOrBooleanArray` array
*/

type objects = string | number | boolean

const nameNumberOrBooleanArray: objects[] = [] // "object" is an error. Change that to a union type.
nameNumberOrBooleanArray.push("Renée"); // fix the compiler error
nameNumberOrBooleanArray.push(34); // fix the compiler error
nameNumberOrBooleanArray.push(true); // fix the compiler error


/*
returnDoubled
Infer what union type this function needs to accept based on the usage
just below the function.

Then finish the implementation of the function to return the expected outputs
shown in the sample usage below the function.
*/

// add a union type to the function parameter `val`
function returnDoubled(val: string | number) {
  if (typeof val === "string") {
    // return a new string made up of the characters of the input string twice
    return val + val
  } else {
    // return the number times 2
    return val * 2
  }
}

// console.log('::returnDoubled::')
// console.log(returnDoubled('Gardenburger')); // GardenburgerGardenburger
// console.log(returnDoubled(42)); // 84

/*
squareSum
Infer what union type this function needs to accept based on the usage
just below the function.

Then finish the implementation of the function to return the expected outputs
shown in the sample usage below the function.

For the type narrowing in the function body, use `Array.isArray`
 */

// add a union type to the function parameter `val`
function squareSum(val: number | number[]) {
  // if `val` is a number, return the number, squared
  // if `val` is an array of numbers, return the sum of all the numbers in the array, squared
    if (Array.isArray(val)) {
      let sum: number = 0
        for (let i = 0; i < val.length; i++) {
      sum += val[i];
      }
      return sum **2;
    }
    else {
        return val**2;
    }
}

// console.log('::squareSum::')
// console.log(squareSum(12)) // 144
// console.log(squareSum([1, 2, 3, 4])) // 100

/*
makeAllCaps
Infer what union type this function needs to accept based on the usage
just below the function.

Then finish the implementation of the function to return the expected outputs
shown in the sample usage below the function.

For the type narrowing in the function body, use `instanceof Array`
*/

// add a union type to the function parameter `input`
function makeAllCaps(input: string | string []) {
  // if `input` is a string, return the string with every letter capitalized.
  // if `input` is an array of strings, return a new string made up of every element in the array, capitalized.
  if (typeof input === 'string') {
    input = input.toUpperCase();
    return input
  }
  else {
    if (input instanceof Array) {
      for (let i = 0; i < input.length; i++) {
          input[i] = input[i].toUpperCase()
      }
      return input.join('')
    }
  }
}

// if (input instanceof Array) {
//   for (let i = 0; i < input.length; i++) {
//     input[i] = input[i].toUpperCase()
// }
// return input
// }
// }

  //   if (input instanceof Array) {;
  //      input = input.map((item) => item.toUpperCase());
  //   }
  //     return input
  //   }
  // }

console.log('::makeAllCaps::')
console.log(makeAllCaps('abc')) // ABC
console.log(makeAllCaps('dEf')) // DEF
console.log(makeAllCaps(['a', 'bc', 'd'])) // ABCD
console.log(makeAllCaps(['E', 'f', 'GH', 'i'])) // EFGHI

/*
Expand the types this array can be made up with so the TypeScript compiler squiggles go away
*/

// uncomment the next line and create a type alias to replace the array type annotation below
type StringOrBoolean = (string | boolean)[]

const nameOrBooleanArray: StringOrBoolean = []
nameOrBooleanArray.push("Delilah"); // should be no compiler error
nameOrBooleanArray.push(false); // should be no compiler error

/*
numberOrString
use a "type alias" instead of defining the type as a "type annotation"
*/

// uncomment and complete the following line, then use the type alias in the function defition just below it
type NumOrString = number | string

// add a union type to the function parameter `numOrString`
function numberOrString(numOrString: NumOrString) {
  if (typeof numOrString === "number") {
    return "you passed in a number";
  } else {
    return "you passed in a string";
  }
}

// console.log('::numOrString::')
// console.log( numberOrString("one") ); // "you passed in a string"
// console.log( numberOrString(1) ); // "you passed in a number"




/*
=====================================================
=====================================================
Do not edit anything in the section below.
The following code is for automated testing
*/

function codeRunner({testValue, argumentsArray}: { testValue: string, argumentsArray?: any[] }): any {
  const toTest: any = {
    returnDoubled,
    squareSum,
    makeAllCaps,
    numberOrString,
  }
  if (argumentsArray !== undefined) {
    return toTest[testValue].apply(null, argumentsArray);
  } else {
    return toTest[testValue];
  }
}

/*
Do not edit the code in the above section.
The previous code is for automated testing
=====================================================
=====================================================
*/
