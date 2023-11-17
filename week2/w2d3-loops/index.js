//Scenario: Urban Vogue Streetwear

//You work as a software developer for Urban Vogue Streetwear,
//company that specializes in clothing that are influenced by hip-hop artists.


//1. You need to add code that calculates the total for a shopping cart
//      full of clothes. Write a function called calculateTotalCost that
//      uses a loop to iterate through the prices in the shopping cart
//      array and add the price to the total. The function accepts the
//      array as an argument and returns the total.
const shoppingCart = [15,29,49];

function calculateTotalCost(shoppingCart) {
let totalCost = 0;
for (let i = 0; i < shoppingCart.length; i++) {
    totalCost = totalCost + shoppingCart[i];
}
return totalCost;
}
// console.log(calculateTotalCost(shoppingCart))

//2. Urban Vogue Streetwear occasionally runs store-wide discounts where everything in the store is 10% off.
//      You need to add a new function to the application that will calculate the discounted price
//      for each clothing item in the customer's shopping cart. Write a function called applyDiscount
//      the accepts an array of prices and a discount percentage (i.e. 10). The function loops
//      through the array of prices, applies the discount to each price, and returns an array
//      of the discounted prices. Use the push method to add each discounted price to the new array.
const cart = [20, 50, 79];
const discount = 10
function applyDiscount(cart, discount) {
    let discountArray = []
    for (let i = 0; i < cart.length; i++) {
        discountArray.push(cart[i] - (cart[i]/discount)) // code that's applied to each iteration
}
return discountArray;
}
// console.log(applyDiscount(cart, discount)) // invoking my function

//3. Urban Vogue Streetwear is not longer going to carry sneakers. You need to write a function that removes
//      all of the sneakers from an array of products. Name the function removeSneakers.
//      The removeSneakers function accepts an array of product names and returns the array.
//      Use a while loop to iterate through the array to remove
//      the elements of the array that include 'Sneakers'.
//
//      Hint: You can use the includes function or the indexOf string method in JavaScript to
//      find out if a word is in a string. The splice() method can be used to
//      remove elements from an array by specifying the index and the number
//      of elements to remove.
//
//      Hint: You can use the includes function in JavaScript to
//      find out if a word is in a string.
//
//      Here's the syntax of the includes() function:
//      string.includes(substring);
//
//      Here's an example usage:
//      const str = "Hello, world!";
//      const containsHello = str.includes("Hello"); // Returns true
//      const containsUniverse = str.includes("Universe"); // Returns false

let products = [
    'Character Graffiti T-Shirt', // 0
    'Stencil T-Shirt', // 1
    'Wildstyle Jeans', // 2
    'Purple Piece Sneakers', // 3
    'High-Top Tagging Sneakers', // 4
    'Burner Orange Hoodie', // 5
    'Tag Low-Top Sneakers', // 6
    'Bubble Letter Jeans', // 7
    'Burner Black Sneakers' // 8
]
// should be leftover = ['Character Graffiti T-Shirt', 'Stencil T-Shirt', 'Wildstyle Jeans', 'Burner Orange Hoodie', 'Bubble Letter Jeans', 'Burner Black Sneakers']
// input: array
// output: array without 'Sneakers'

function removeSneakers(products) {
    let counter = 0
    while (counter < products.length) {
        if (products[counter].includes("Sneakers")) {
            products.splice(counter, 1);
        }
        counter++
    }
    return products
}
// console.log(removeSneakers(products))

// function removeSneakers(products) {
//     let updatedProducts = [];
//     for (let i = 0; i < products.length; i++) { // for loop, thats going to iterate over each index, starting at 0, as long as the index is less than the length of the products array, and then we'll increment the index by 1.
//         if (!products[i].includes('Sneakers')) {
//             updatedProducts.push(products[i]);
//         }
//     }
//     return updatedProducts;
// }
// console.log(removeSneakers(products))

//     let i = 0;
//     while ([i] < products.length) {
//         if (products[i].includes("Sneakers"))
//     }

// Optional Challenge:
//      Urban Vogue Streetwear is releasing a new line of oversized puffer jackets
//      featuring graffiti motifs. Your supervisor asks if you can put together
//      a list of all of the puffer jackets that come in red.
//      Write a function called getRedJackets() that accepts an array of all of the
//      jackets and returns an array that contains only the red jackets.
//
//      Hint: You can use the includes function in JavaScript to
//      find out if a word is in a string.
//
//      Here's the syntax of the includes() function:
//      string.includes(substring);
//
//      Here's an example usage:
//      const str = "Hello, world!";
//      const containsHello = str.includes("Hello"); // Returns true
//      const containsUniverse = str.includes("Universe"); // Returns false



const jackets = [
    "Black Tagging Jacket",
    "Red Wildstyle Puffer Jacket",
    "Masterpiece Denim Puffer",
    "Red Throw-Up Jacket",
    "Orange Stencil Graffiti Puffer",
    "Purple Piece Jacket",
    "Red Tagging Oversize Puffer"
];


//-----------
/*DO NOT EDIT
These functions are used to test your code.
*/

//1
//Returns true if the the total cost  is 93
function testCalculateTotalCost(){
     if(calculateTotalCost(shoppingCart) === 93){
        return true;
    }
    return false;
}
//console.log(testCalculateTotalCost());


//2
//Returns true if the first discounted price  is 18
function testApplyDiscount(){
    const discountPercentage = 10;
    let discountArray = applyDiscount(cart, discountPercentage);
    if(discountArray[0] === 18){
        return true;
    }
    return false;
}
//console.log(testApplyDiscount());

//3
//Returns true if there are no sneakers in the array
function testRemoveSneakers(){
    if(!removeSneakers(products).includes('Sneakers')){
        return true;
    }
}
//console.log(testRemoveSneakers());

//Test all
function testAll(){
    if(testCalculateTotalCost()
        &&
        testApplyDiscount()
        &&
        testRemoveSneakers()

        ){
            return true;
        }
        return false;
}
//console.log(testAll());
//-------------
