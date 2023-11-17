/* W5 D4 - Workshop: Fizzbuzz
----Problem----
Complete a function named fizzbuzz which takes a single argument of type number.
It should return the following:
    - The word "fizzbuzz" if number is evenly divisible by both 3 and 5
    - The word "fizz" if number is evenly divisible by only 3
    - The word "buzz" if number is evenly divisible by only 5
    - The number if it is not evenly divisible by 3 nor 5 */

function fizzbuzz(number: number): string | number {
	if (number % 3 === 0 && number % 5 === 0) {
		return "fizzbuzz";
	}
	else if (number % 3 === 0) {
		return "fizz";
	}
	else if (number % 5 === 0) {
		return "buzz";
	} else {
		return number;
	}
}
console.log(fizzbuzz(10))
