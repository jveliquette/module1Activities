/*

W2D1-Variables, Operators and Functions

Background:

You are working as a software developer on an online platform called “PetPals” that connects virtual pets with caring owners. PetPals simulates the experience of adopting and raising a pet, allowing users to virtually interact with and care for their pet. PetPals is a unique virtual world that connects people of all ages with their passion for animals.
Your team is working on updating the PetPals codebase. As a junior developer, you are tasked with adding some small pieces of new code as well as fixing a few errors that were logged by the Quality Assurance (QA) testing team. The PetPals platform is built using JavaScript.

*/

/*
1. Your team lead asks you to add new variables and constants to the code that will be used later for testing purposes. These variables and constants will contain information about pet owners. Add the following to the code:
- Declare and initialize a variable called ownerFirstName with the value "Jose".
- Declare and initialize a variable called ownerLastName with the value "Yusuf".
- Declare and initialize a constant called birthMonth with the value "January".
- Declare and initialize a variable called hasPet with a value of true.
- Declare and initialize a variable called numberOfPetsAdopted with the value 2.
- Declare a variable called ownerFullName.
- Combine the ownerFirstName and ownerLastName variables together using the concatenation operator and assign the resulting value to the variable ownerFullName.
*/
let ownerFirstName = "Jose";
let ownerLastName = "Yusuf";
const birthMonth = "January";
let hasPet = true;
let numberOfPetsAdopted = 2;
let ownerFullName = ownerFirstName + ownerLastName;

/*
2. A PetPals user wants to buy nineteen treats for their virtual puppy. Dog treats are sold in packs of four. Declare a variable called leftoverTreats. Use a math operator to calculate how many treats we still need if there were only 4 packs purchased
*/
let leftoverTreats = 19%4;

/*
3. A PetPals user owns three virtual iguanas: Whippy, Jub-Jub, and Iggy. The user wins sixty iguana treats in an online competition in the PetPals platform and wants to divide them evenly between the iguanas. Calculate how many treats each of the user's iguanas will get and assign the resulting value to a variable called treatsPerIguana.
*/
let treatsPerIguana = 60/3;

/*
4. If a user adopts a virtual dog on the PetPals platform, the owner needs to feed the dog 1/4 can of food twice per day. Your team lead asks you to add code that calculates how many cans of dog food an owner needs to purchase per week for a single dog. Declare a variable called cansPerWeek and assign the result of the calculation to the variable. Keep in mind the order of operations (Operator Precedence) in JavaScript when performing the calculation.
*/
let cansPerWeek = (1/4*2)*7;

/*
5. Each can of dog food costs five PetPals virtual coins. How much does it cost an owner to feed their virtual dog for a month? Calculate the monthly cost of dog food and assign the value to a variable called monthlyFoodCost.
*/
let monthlyFoodCost = (5*3.5)*4;

/*
6. An owner can earn virtual coins on the PetPals platform by playing with their pet. Each playtime session yields three coins and the owner can play with their pet up to three times per day. Calculate how many coins can an owner earn in a year if they play with their pet the max number of times. Assign the result to a constant called maxYearlyCoins.
*/
let maxYearlyCoins = (3*3)*365;

/*
7. PetPals is hosting a virtual cat adoption fair. There are 47 cats available for adoption. The cats are divided into adoption booths, with each booth containing 5 cats. Declare two constants (totalCats and catsPerBooth) to hold the number of cats available for adoption and the number of cats per booth. Then use the remainder operator to calculate the number of cats are left without a booth. Assign the resulting value to a variable called catsWithoutBooth.
*/
let totalCats = 47;
let catsPerBooth = 5;
let catsWithoutBooth = totalCats%catsPerBooth;

/*
8. Users are required to log into the PetPals platform using a username and password that is at least 6 characters long. Declare a variable called "password" and assign it a value of "$ecurity1st".
*/
let password = "$ecurity1st";

/*
9. Now let's find out if the password is greater than 6 characters long. Get the length of the string in the variable password and assign it to a variable called passwordLength.
*/
let passwordLength = 11;

/*
10. Within the PetPals platform, passwords are required to have at least one number and one special character (such as $ * % !). Using the string index, assign the special character to a variable called passwordSpecialCharacter. Then use the string index of the number in the password variable to assign the number to a variable called passwordNumber.
*/
let passwordSpecialCharacter = password[0];
let passwordNumber = password[8];

/*
11. Your team lead asks you to fix some syntax errors in the code for the PetPals platform.
The code is supposed to calculate the average number of virtual coins that the pet owners have earned by caring for their pets.
As it turns out, this code has several syntax errors. Developers often make syntax errors when writing JavaScript - it's
almost impossible not to make errors. That's the nature of programming! See how many errors you can fix in PetPals Code.
*/
//Code with errors to fix:

const owner1 = 80;
const owner2 = 75;
const owner3 = 60;
const owner4 = 75;
const owner5 = 9;
const owner6 = 50;
let averageOwnerCoins = ((owner1 + owner2 + owner3 + owner4 + owner5 + owner6) / 6);

/*
12. Users can feed their virtual pets in the PetPals platform. You've been asked to add a function call to the code base. Call the feedPet() function.
*/
 // Add code here to call the function to feed the pet:
feedPet()

//Here is the function:
function feedPet() {
    const petName = "Fluffy"; // You can replace this with the name of your pet
    const food = "kibble";    // The type of food you're feeding

    let message = petName + ' is enjoying a bowl of ' + food;
}

/*
13. You are working in the PetPals codebase and need to add a function call to the describePet() function. This function accepts two arguments, the pet's name and the pet type. Then the function populates a variable with a message that describes a particular virtual pet and returns the message.
Add code to call the function, pass it the arguments petName and petType, and assign the value that is returned to the variable petDescription.
*/

//Arguments to pass to the function:
const petName = "Buddy";
const petType = "dog";

const petDescription = describePet(petName, petType);  // Add code here to call the function to describe the pet.

//Here is the function:
function describePet(petName, petType) {
    return 'Meet ' + petName + ', the ' + petType + '!';
}

/*
14. Within the PetPals codebase, the feedVirtualDog() function simulates feeding a virtual dog and returns a message about the dog's response.
The feedVirtualDog function takes two parameters: dogName and meal. It then constructs a response string that incorporates the provided dog's name and the type of meal fed to the dog. The function simulates the dog's response by adding a playful "Woof woof!" at the end of the message.
 - Declare a variable called dogName and assign it a value of Rex.
 - Declare a variable called meal and assign it a value of chicken.
 - Call the feedVirtualDog function and pass the dogname and meal variables as arguments.
 - Assign the value that is returned to a variable called response.
*/

// Add your function call and variable declarations here:
let dogName = "Rex";
let meal = "chicken";
feedVirtualDog(dogName, meal);
let response = feedVirtualDog(dogName, meal);

//Here is the function:
function feedVirtualDog(dogName, meal) {
    return `${dogName} happily devoured the ${meal}! Woof woof!`;
}

/*
15. Your team lead asks you to fix some syntax errors in the code for the PetPals platform.
The code contains a function supposed to simulate petting a virtual pet iguana.
As it turns out, this code has several syntax errors. Developers often make syntax errors when writing JavaScript - it's
almost impossible not to make errors. That's the nature of programming! See how many errors you can fix in PetPals Code.
*/
//Code with errors to fix:

let iguanaName= 'Jub-Jub';
let iguanaResponse = petIguana(iguanaName);
function petIguana(iguanaName){
    return iguanaName + ' gives you the stink eye when you pet them!';
}



/* ==================================================================
PLEASE DO NOT EDIT - This code is here for grading your work. Thanks!
*/
function testPetPals() {
    if(
        ownerFirstName === "Jose" &&                            //1
        ownerLastName === "Yusuf" &&                            //1
        birthMonth === "January" &&                             //1
        hasPet === true &&                                      //1
        numberOfPetsAdopted === 2 &&                            //1
        ownerFullName === ownerFirstName + ownerLastName &&     //1
        cansPerWeek === (0.25 * 2) * 7 &&                       //2
        leftoverTreats === 19 % 4 &&  //Answer is 3 treats      //3
        treatsPerIguana === 60 / 3 && //Answer is 20 treats       //4
        monthlyFoodCost === (cansPerWeek * 4) * 5 &&            //5
        maxYearlyCoins === (3 * 3) * 365 &&                     //6
        catsWithoutBooth === totalCats % catsPerBooth &&        //7
        password === "$ecurity1st" &&                           //8
        passwordLength === 11 &&                                //9
        passwordSpecialCharacter === "$" &&                     //10
        passwordNumber === "1"  &&                              //11
        averageOwnerCoins === 58.166666666666664 &&             //12
        petDescription === 'Meet Buddy, the dog!'   &&          //13
        response ==='Rex happily devoured the chicken! Woof woof!' &&  //14
        iguanaResponse === 'Jub-Jub gives you the stink eye when you pet them!'     //15
    ){
        return true;
    }
    return false;

} //end test function

// console.log(testPetPals());

/*
===============================================================
*/
