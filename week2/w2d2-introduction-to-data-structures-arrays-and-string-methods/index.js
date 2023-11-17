/*
W2D3-Introduction to Data Structures (Arrays and Objects)

Background:
Traditional grocery shopping can often feel mundane and unexciting. Stores are looking for innovative ways to make everyday shopping tasks more enjoyable to drive brick-and-mortar sales. This presents an intriguing opportunity to develop a software application that transforms grocery shopping.
The "Grocery Game" is an application designed to gamify the grocery shopping experience, making it a fun and competitive activity for customers, while also encouraging healthy food choices. The app features virtual shopping lists, shopping challenges to earn points, and competitions against other shoppers.


1. When users log into the Grocery Game for the first time, they are presented with a sample shopping list of commonly purchased foods to help them get started creating their first virtual shopping list. Declare a new array object called shoppingListObject using the array constructor and assign it the values:
- Eggs
- Milk
- Bread
- Apples
- Tomatoes
- Tuna
*/
let shoppingListObject = new Array ("Eggs", "Milk", "Bread", "Apples", "Tomatoes", "Tuna");
// console.log(shoppingListObject)

/*
2. After creating the new shoppingList array object, your team decides to create new coding standards for the Grocery Game application. One of the new code standards is to use array literals instead of array constructors. Create a new shoppingList array using an array literal instead of the array constructor and assign the same values.
*/
let shoppingList = ["Eggs", "Milk", "Bread", "Apples", "Tomatoes", "Tuna"];
// console.log(shoppingList)

/*
3. One of the features of the Grocery Game are virtual shopping lists for healthy foods. You are tasked with creating a list of categories of healthy foods. Declare an array literal called categories and initialize it with the values:
- Fruit
- Vegetables
- Seafood
- Grains
- Dairy
- Meats
*/
let categories = ["Fruit", "Vegetables", "Seafood", "Grains", "Dairy", "Meats"]
// console.log(categories)

/*
4. A new healthy food category needs to be added to the Grocery Game app. Add an element to the end of the categories array that contains the value 'Nuts'.
*/
categories.push ("Nuts")
// console.log(categories)

/*
5. The Grocery Game app displays the number of healthy food categories to users. Declare a variable called numberOfHealthyCategories and assign the variable the value of the length of the categories array.
*/
let numberOfHealthyCategories = 7
// console.log(numberOfHealthyCategories)

/*
6. The list of healthy food categories needs to be displayed in the Grocery Game GUI as a single string with a hyphen between each word. Right now the list of healthy food categories is in the array categories. Use a method to combine the elements within the categories array into a single string and assign it to a variable called categoriesString.
*/
let categoriesString = categories.join("-")
// console.log(categoriesString)

/*
7. You are working on the Grocery Game codebase. You find a mistake in the code where a list of grocery items is assigned to a variable called tacoList and instead the list should be assigned to an array. Declare an array literal called tacoListArray and assign it the values in the tacoList variable. Use an array method to separate the items in the tacoList string into individual array elements.
*/
let tacoList = "Tortillas Beans Cheese Salsa Avocado";
let tacoListArray = tacoList.split(" ")
// console.log(tacoListArray)

/*
8. An important taco topping was omitted from the tacoListArray. Use an array method to add a new element to the beginning of the array that holds the element 'Peppers'.
*/
tacoListArray.unshift("Peppers")
// console.log(tacoListArray)

/*
9. During the weekly meeting, your team decides that 'Peppers' is not a specific enough ingredient for the taco grocery list. Use an array method to remove the value 'Peppers' from the tacoListArray. Next, se an array method to add the value 'Poblanos' to the end of the array.
*/
tacoListArray.shift()
tacoListArray.push("Poblanos")
// console.log(tacoListArray)

/*
10. One of the exciting features of the Grocery Game app is every day of the week there is a 50% discount on one healthy grocery product. This makes it fun to eat healthy while saving money. The array discountedProducts contains seven elements. Assign the value of each of the elements in the healthyFoods array to a variable named for the corresponding day of the week. For example, the value from the first element in the array is assigned to a variable called 'sunday'. Use lowercase variable names.
*/
const discountedProducts = ['Tomatoes', 'Cucumbers', 'Spinach', 'Mushrooms', 'Tangerines', 'Yams', 'Apricots'];
const sunday = discountedProducts[0];
const monday = discountedProducts[1];
const tuesday = discountedProducts[2];
const wednesday = discountedProducts[3];
const thursday = discountedProducts[4];
const friday = discountedProducts[5];
const saturday = discountedProducts[6];
// console.log(discountedProducts)

/*
11.  Some of the stores that are participating in the Grocery Game application do not carry apricots, so this item needs to be replaced with a more common fruit. Replace the value apricots in the array discountedProducts with the value 'Oranges'. Then update the value that is assigned to the 'saturday' variable using the value in the corresponding element of the discountedProducts array.
*/
discountedProducts.pop()
discountedProducts.push ('Oranges')
// console.log(discountedProducts)

/*
12. One of the exciting features of the Grocery Game is the ability for users to earn points for making healthy choices at the grocery store. Each time a user buys one of the items on the healthy choices list, they earn 10 points. Users can redeem points within the app for fun cooking-related prizes, like a flashy new non-stick pan or a rainbow-colored paring knife.

You are tasked with adding a new array called "healthyChoices" to hold the grocery items on the healthy choices list:
- Skim milk
- Wheat bread
- Bananas
- Salmon
- Broccoli
- Blueberries
- Kale
*/
let healthyChoices = ["Skim milk", "Wheat bread", "Bananas", "Salmon", "Broccoli", "Blueberries", "Kale"]
// console.log(healthyChoices)

/* 13. There are three new products that qualify as healthy choices that users can buy to earn points. Add the items to the end of the healthyChoices array, in the following order: Prunes, Beans, Cauliflower
*/
healthyChoices.push ('Prunes', 'Beans', 'Cauliflower')
// console.log(healthyChoices)

/*
14. Your team lead asks you to fix some syntax errors in the code for the Grocery Game platform.
The code is supposed to declare and initialize an array that holds the list of prizes. Users can redeem the points they earned in the app for these prizes.
As it turns out, this code has several syntax errors. Developers often make syntax errors when writing JavaScript - it's
almost impossible not to make errors. That's the nature of programming! See how many errors you can fix in Grocery Game Code.
*/

//Code with errors to fix:

let prizeList = ['Rainbow Paring Knife', 'Flashy Non-Stick Pan', 'Unicorn Mixing Bowls', 'Cactus Salt Shaker',];
let userPoints = 35;
let prizeName;
if(userPoints < 10){
    prizeName = 'none';
}else if(userPoints >= 10 && userPoints <= 19){
    prizeName = prizeList[0];
}else if(userPoints >= 20 && userPoints <= 29 ){
    prizeName = prizeList[1];
}else if(userPoints >= 30 && userPoints <= 39){
    prizeName = prizeList[2];
}else if(userPoints >= 40){
    prizeName = prizelist[3];
}


/*
15. Now that you've fixed the code, your teammate stops by and asks you:
What prize did the user win when they redeemed thirty-five points?
Declare a variable called prize. Initialize the prize variable with the correct value from the prizeList array.
*/
let prize = 'Unicorn Mixing Bowls'

/*
=====================================================
=====================================================
Do not edit anything in the section below.
The following code is for automated testing
*/
//1
function testShoppingListObject(){
    if(shoppingListObject[0] === 'Eggs'){
        return true;
    }
    return false;
}

//2
function testShoppingList() {
    if(shoppingList[1] === 'Milk'){
        return true;
    }
    return false;
}

//3
function testCategories() {
    if(categories[0] === 'Fruit'){
        return true;
    }
    return false;
}

//4
function testCategoriesNuts() {
    if(categories[6]==='Nuts'){
        return true;
    }
    return false;
}

//5
function testNumberOfHealthyCategories(){
    if(numberOfHealthyCategories === 7){
        return true;
    }
    return false;
}

//6
function testCategoriesString(){
    if(categoriesString === 'Fruit-Vegetables-Seafood-Grains-Dairy-Meats-Nuts'){
        return true;
    }
    return false;
}

//7, 8, 9
function testTacoListArray(){
    if(tacoListArray[0] === 'Tortillas' && tacoListArray[5] === 'Poblanos'){
        return true;
    }
    return false;
}

//10, 11
function testDiscountedProducts(){
    if(discountedProducts[0] === 'Tomatoes' && discountedProducts[6] === 'Oranges'){
        return true;
    }
    return false;
}

//12, 13
function testHealthyChoices(){
    if(healthyChoices[6] === 'Kale' && healthyChoices[9] === 'Cauliflower'){
        return true;
    }
    return false;
}


//14, 15
function testPrizeName(){
    if(prizeName === 'Unicorn Mixing Bowls' && prize === 'Unicorn Mixing Bowls' ){
        return true;
    }
    return false;

}





//Test all
function testGroceryGame() {
  if (
    testShoppingListObject() &&
    testShoppingList() &&
    testCategories() &&
    testCategoriesNuts() &&
    testNumberOfHealthyCategories() &&
    testCategoriesString() &&
    testTacoListArray() &&
    testDiscountedProducts() &&
    testHealthyChoices() &&
    testPrizeName()
  ) {
    return true;
  }
  return false;
}
// console.log(testGroceryGame());
/*
Do not edit the code in the above section.
The previous code is for automated testing
=====================================================
=====================================================
*/
