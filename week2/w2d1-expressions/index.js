/*

W2D2-Expressions

Background:

You are hired as a junior software developer to work on an online platform called DanceBud. DanceBud is a revolutionary web app that combines dance choreography with fitness tracking, creating a dynamic and entertaining workout experience for users of all ages and fitness levels. This app is designed to make exercise enjoyable, transforming the way people perceive and approach their fitness journeys. DanceBud's features include an interactive library of dance routines, personalized fitness challenges, dance battles with other players, and custom music playlists.

*/

/*
1. Your team lead asks you to add an if-else conditional statement to the code for the DanceBud app that will control the program flow. When a new user signs up for DanceBud, they assign themselves a fitness level of 1 to 10, where 1 is the lowest level and 10 is the highest level. The app displays beginner dance videos to users whose fitness level is 1 to 3, intermediate dance videos to users whose fitness level is 4 to 6, and advanced dance videos to users with a fitness level of 7 or above. First, declare a variable called fitnessLevel and assign it a value of 5. Next, declare a variable called videoLevel. Finally, write an if-else statement that assigns a value of beginner, intermediate, or advanced to the variable videoLevel based on the value of the variable fitnessLevel.
*/
let fitnessLevel = 5;
let videoLevel = "intermediate"

// Beginner 1-3
if (fitnessLevel <= 3) {
    videoLevel = "beginner";
}

// Intermediate 4-6
else if (fitnessLevel >= 4 && fitnessLevel <= 6) {
    videoLevel = "intermediate";
}
// Advanced 7-10
else if (fitnessLevel >= 7 && fitnessLevel <= 10) {
    videoLevel = "advanced";
}

/*
2. The DanceBud platform operates on a freemium model, meaning users can create a free account and use some of the features of the app, but need to sign up for a paid account to access all of the features. Users with a free account are limited to having ten songs maximum in their custom music playlists, while users with a paid account can add up to one hundred songs to the custom playlist. Declare a variable called userType and assign it a value of "free". Declare another variable named maxSongs and assign it a default value of zero. Write an if else statement that assigns a value of 10 to maxSongs if the user type is free and assigns a value of 100 to maxSongs if the user type is paid.
*/
let userType = "free";
let maxSongs = 0;

// free account
if (userType = "free") {
    maxSongs = 10;
}
// paid account
else if (userType != "free") {
    maxSongs = 100;
}

/*
3. Once a DanceBud user has reached the maximum number of songs allowed in their playlist, a message is displayed to let them know they can't add any more songs. Declare a variable called playlistLength and assign it a value of 57. Next, declare a variable called message. Write a nested if statement that checks if the playlist length is equal to or greater than the maximum number of songs. If the playlist length is equal to or greater than the maximum, check if the user type is free or paid and assign a value to the message variable. If the user type is paid, the message value that is assigned is: "You reached the maximum number of songs in your playlist." If the user type is free, the message value that is assigned is: "You reached the maximum number of songs in your playlist. You can store up to one hundred songs with a paid account." You can use the maxSongs and userType variables declared in the previous problem in the conditional expressions for your if statements.
*/
let playlistLength = 57;
let message;
if (playlistLength >= 10) {
    if (userType = "free");
    message = "You reached the maximum number if songs in your playlist. You can store up to one hundred songs with a paid account.";
} else {
    if (playlistLength >= 100) {
        if (userType!== "free");
        message = "You have reached the maximum number of songs in your playlist.";
    }
}

if (userType = "free" && playlistLength >= 10) {
   message = "You reached the maximum number of songs in your playlist. You can store up to one hundred songs with a paid account.";
}
else if (userType != "free" && playlistLength >= 100) {
    message = "You have reached the maximum number of songs in your playlist.";
}

/*
4. Users with a paid DanceBud account can battle other users in a dance contest. This feature is not available to users with a free account. Declare a variable called danceBattleMessage. Write an if statement that tests the variable userType from the previous problem. If the user type is not paid, then assign a value to danceBattleMessage that says "Dance battles are not available for free accounts."
*/
let danceBattleMessage;

if (userType = "free") {
   danceBattleMessage = "Dance battles are not available for free accounts.";
}

/*
5. Your team lead asks you to write code to display a customized welcome message to DanceBud users based on the time of day. The code to retrieve the time from the users system clock is already written. You need to add an if else statement that formulates the greeting based on the time of day.
The time is in 24 hour mode. Declare a variable called time and assign it a value of 19 for 7:00 PM. Now declare a variable called greeting. Add an if-else statement that assigns the correct message to the variable greeting based on the time of day. If the time is before noon, assign the value "Good morning!". If the time is after noon, but before 6:00 PM, assign the value "Good afternoon!". If the time is after 6:00 PM, assign the value "Good evening!".
*/
let time = 19; // 7pm
let greeting;

// morning (before noon) = "Good morning!"
if (time < 12) {
    greeting = "Good morning!";
}
// afternoon (after noon but before 6pm (18)) = "Good afternoon!"
else if (time > 12 && time < 18) {
    greeting = "Good afternoon!";
}
// evening (after pm (18)) = "Good evening!"
else if (time > 18) {
    greeting = "Good evening!";
}

/*
6. DanceBud users can view dance videos based on their favorite style of music. Declare a variable called musicStyle and assign it a value of "hip-hop". Declare another variable called videoCategory. Write an if else statement that assigns a value to videoCategory based on the music style the user chose. The music styles are: jazz, hip-hop, latin, pop, and rock. For jazz, assign the variable videoCategory a value of 1, for hip-hop 2, for latin 3, for pop 4, and for rock 5. Use the strict equality operator.
*/
let musicStyle = "hip-hop";
let videoCategory;

// musicStyle(videoCategory) = jazz(1), hip-hop(2), latin(3), pop(4), rock(5)
if (musicStyle = "jazz") {
    videoCategory === 1;
}
else if (musicStyle = "hip-hop") {
    videoCategory === 2;
}
else if (musicStyle = "latin") {
    videoCategory === 3;
}
else if (musicStyle = "pop") {
    videoCategory === 4;
}
else if (musicStyle = "rock") {
    videoCategory === 5;
}

/*
7. A new feature is being added to the DanceBud app. To help users choose between the different music styles in the app, the name of a popular song that exemplifies that musical style is displayed. Declare a variable called songName. Write a switch statement that assigns the value to the song name based on the value of the musicStyle variable from the previous problem.

  jazz: "Take Five"
  hip-hop: "Hey Ya"
  latin: "Despacito"
  pop: "Umbrella"
  rock: "Welcome to the Jungle"
*/
let songName;
switch (musicStyle) {
    case musicStyle = "jazz":
        songName = "Take Five";
        break;
    case musicStyle = "hip-hop":
        songName = "Hey Ya";
        break;
    case musicStyle = "latin":
        songName = "Despacito";
        break;
    case musicStyle = "pop":
        songName = "Umbrella";
        break;
    case musicStyle = "rock":
        songName = "Welcome to the Jungle";
        break;
}

/*
8. Each month the DanceBud app features a fitness challenge based on holiday during that month. When users log into the app, they can see a list of the holiday challenges. Your task is to assign the appropriate holidays based on the month. Declare a variable called month and assign it a value of 10. Declare a variable called holidays. Use a switch statement to assign the appropriate value to the variable holidays based on the month.

   January: 'Martin Luther King Day';
   February: 'Valentines Day';
   March: 'National Cereal Day';
   April: 'Earth Day';
   May: 'Memorial Day';
   June: 'Flag Day';
   July: '4th of July';
   August: 'International Cat Day';
   September: 'Labor Day';
   October: 'Halloween';
   November: 'Thanksgiving';
   December: 'Winter Break';
*/
let month = 10
let holidays;
switch (month) {
    case month = 1:
        holidays = 'Martin Luther King Day';
        break;
    case month = 2:
        holidays = 'Valentines Day';
        break;
    case month = 3:
        holidays = 'National Cereal Day';
        break;
    case month = 4:
        holidays = 'Earth Day';
        break;
    case month = 5:
        holidays = 'Memorial Day';
        break;
    case month = 6:
        holidays = 'Flag Day';
        break;
    case month = 7:
        holidays = '4th of July';
        break;
    case month = 8:
        holidays = 'International Cat Day';
        break;
    case month = 9:
        holidays = 'Labor Day';
        break;
    case month = 10:
        holidays = 'Halloween';
        break;
    case month = 11:
        holidays = 'Thanksgiving'
        break;
    case month = 12:
        holidays = 'Winter Break'
        break;
}

/*
9. Your team lead asks you to work on the dance battle game within the DanceBud app. Different images are displayed as the user earns points in the game during their dance. For example, once the user earns 50 points, a flying unicorn is displayed. Declare a variable called points and assign it a value of 75. Next, declare a variable called image. Use an if else statement to determine which image is displayed based on the number of points and assign the image file name to the image variable.

Points - Image File Name
0-24     rainbow.jpg
25-49    narwhal.jpg
50-74    unicorn.jpg
75-99    llama.jpg
100+     trophy.jpg

*/
let points = 75;
let image;
if (points < 24) {
    image = "rainbow.jpg";
}
else if (points >= 25 && points <= 49) {
    image = "narwhal.jpg";
}
else if (points >= 50 && points <= 74) {
    image = "unicorn.jpg";
}
else if (points >= 75 && points <=99) {
    image = "llama.jpg";
}
else if (points >= 100) {
    image = trophy.jpg;
}

/*
10. Your team lead asks you to fix some syntax errors in the code for the platform.
The code is supposed to display an encouraging fitness message to users based on the number of fitness challenges they've completed in the app.
As it turns out, this code has several syntax errors. Developers often make syntax errors when writing JavaScript - it's
almost impossible not to make errors. That's the nature of programming!
See how many errors you can fix in the DanceBud Code. Make sure that the message variable is always initialized with a value.
*/
//Code with errors to fix:

let fitnessChallengeMessage;
let challengesCompleted = 5;

if (challengesCompleted = 1) {
    fitnessChallengeMessage = "You're off to a great start!";
} else if (challengesCompleted > 1 && challengesCompleted < 5) {
    fitnessChallengeMessage = "You're making great progress! Keep up the good fitness work!";
} else if (challengesCompleted > 5) {
    fitnessChallengeMessage = "You're a fitness champion!"
}



/*
11. Uh oh! There are more errors in the DanceBud code. Fix the switch statement below so that it assigns a value to the motivationalMessage variable based on the day of the week. The variable should always be initialized.

*/
//Code to fix:

let dayOfTheWeek = 1;
let movationalMessage;
switch (dayOfTheWeek){
    case dayOfTheWeek = 1:
        movationalMessage = "It's time for fitness Sunday fun day!";
        break;
    case dayOfTheWeek = 2:
        movationalMessage = "Whose got a case of the Mondays? Time to get dancing!";
        break;
    case dayOfTheWeek = 3:
        movationalMessage = "It's taco Tuesday and dance time!";
        break;
    case dayOfTheWeek = 4:
        movationalMessage = "It's Hump Day and it's shake your rump day!"
        break;
    case dayOfTheWeek = 5:
        movationalMessage = "It's Throwback Thursday! Time to dance like it's 1999.";
        break;
    case dayOfTheWeek = 6:
        movationalMessage = "It's Fri-Yay! Dance right into the weekend!";
        break;
    case dayOfTheWeek = 7:
        movationalMessage = "Saturday - cat-urday! Time to shake your paws with your feline friends!"
        break;
}

/*
=====================================================
=====================================================
Do not edit anything in the section below.
The following code is for automated testing
*/
//#1.
function testVideoLevel() {
    if(videoLevel === 'intermediate')
    {
        return true;
    }
    return false;
} //end test function

//#2.
function testMaxSongs() {
    if(maxSongs === 10)
    {
        return true;
    }
    return false;
} //end test function

//#3.
function testMessage() {
    if(message === 'You reached the maximum number of songs in your playlist. You can store up to one hundred songs with a paid account.')
    {
        return true;
    }
    return false;
} //end test function

//#4.
function testDanceBattleMessage() {
    if(danceBattleMessage === 'Dance battles are not available for free accounts.')
    {
        return true;
    }
    return false;
} //end test function

//#5.
function testGreeting() {
    if(greeting === "Good evening!")
    {
        return true;
    }
    return false;
} //end test function

//#6.
function testVideoCategory() {
    if( videoCategory === 2)
    {
        return true;
    }
    return false;
} //end test function

//#7.
function testSongName() {
    if(songName === 'Hey Ya')
    {
        return true;
    }
    return false;
} //end test function

//#8.
function testHolidays() {
    if(holidays === 'Halloween')
    {
        return true;
    }
    return false;
} //end test function

//#9.
function testImage() {
    if(image === "llama.jpg")
    {
        return true;
    }
    return false;
} //end test function

//#10.
function testFitnessChallengeMessage() {
    if(fitnessChallengeMessage === "You're a fitness champion!")
    {
        return true;
    }
    return false;
} //end test function

//#11.
function testMotivationalMessage() {
    if(movationalMessage === "It's time for fitness Sunday fun day!")
    {
        return true;
    }
    return false;
} //end test function

//Test all problems
function testDanceBud(){
    if(testVideoLevel() && testMaxSongs() && testMessage() && testDanceBattleMessage && testGreeting && testVideoCategory && testSongName && testHolidays && testImage && testFitnessChallengeMessage && testMotivationalMessage){
        return true;
    }
    return false;
}


/*
Do not edit the code in the above section.
The previous code is for automated testing
=====================================================
=====================================================
*/
