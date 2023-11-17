# Chalkboard

### Activity Description
In this activity, you will be reinforcing your knowledge of Javascript modules by building an app that styles CLI output! Using an open-source library called Chalk, you will create a stylish Command Line Interface.

The goal of this activity is to get practice with installing and using third-party dependencies, as well as practice importing and exporting Javascript functions.

### Requirements

Write a javascript module that exports 10 different functions.
Import those functions into the `index.js` file and invoke them inside the body of the `main()` function.

These functions you create and export should use exported members from the Chalk library to do the following:

1. Change color text to blue
2. Change color text to red, background color to cyan
3. Change background color to yellow
4. Underline all text
5. Underline _some_ text
6. Change background color to a use the `hex` value `#5c5ce7`
7. Underline text with background color red
8. Change text to `rgb` value `(255, 136, 0)`
9. Change text to red with strikethrough
10. Use inverse color modifier

```javascript
function main() {
  // should print a blue "Hello world!" in the console.
  printBlue("Hello world!");
  // should print a blue "Hello world!" with an underline.
  printBlueWithUnderline("Hello world!");
}
```

#### Expected output
We expect that running `npm start` will produce 10 different messages, each styled in its own unique way.

#### Library Documentation
Refer to Chalk's npm documentation for instructions on how to install and use the library.
- [Chalk](https://www.npmjs.com/package/chalk)
