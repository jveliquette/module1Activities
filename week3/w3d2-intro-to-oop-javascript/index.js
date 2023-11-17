// You are programming a role playing game. In the game you are tracking the
// health, mana and current weapon of a Knight.  Here's the first solution
// which just uses some global state variables to store the information.

let health = 100
let mana = 50
let weapon = 'sword'

// // this function reduces health
// function reduceHealth(damage) {
//     health -= damage
//     return health
// }

// // this function increases mana
// function increaseMana(manaPotion) {
//     mana += manaPotion
//     return mana
// }

// // this function changes weapons
// function changeWeapon(newWeapon) {
//     weapon = newWeapon
//     return weapon
// }

// // this function shows all of the stats
// function displayStatus() {
//     return `Health: ${health}, Mana: ${mana}, Weapon: ${weapon}`
// }

// // The knight takes 20 damage
// console.log(reduceHealth(20)) // outputs: 80

// // The knight drinks a mana potion that restores 10 mana
// console.log(increaseMana(10)) // outputs: 60

// // The knight changes weapon to 'axe'
// console.log(changeWeapon('axe')) // outputs: 'axe'

// // Display the knight's current status
// console.log(displayStatus()) // outputs: 'Health: 80, Mana: 60, Weapon: axe'

// The problem with this, is that you can't use this for multiple Knights.
// Your challenge is to rewrite the functions and state variables as a Knight class.

class Knight {
    constructor (health, mana, weapon) {
        this.health = health;
        this.mana = mana;
        this.weapon = weapon;
    }
    reduceHealth(damage) {
        this.health -= damage
    }
    increaseMana(manaPotion) {
        this.mana += manaPotion
    }
    changeWeapon(newWeapon) {
        this.weapon = newWeapon
    }
    displayStatus() {
        return `Health: ${this.health}, Mana: ${this.mana}, Weapon: ${this.weapon}`
    }
    fightDragon() {
        this.reduceHealth(10)
        this.increaseMana(5)
        this.changeWeapon("Dragon Slayer")
        return this.displayStatus()
    }
}

// Once your create your class add a new function to your new Knight class.
// This function will be called fightDragon().
// Add this functionality to the fightDragon() class:
//  - A fight with a dragon causes health to reduce by 10.
//  - During the fight, the knight gains 5 mana.
//  - The knight's weapon changes to 'Dragon Slayer'.
//  - The function returns this.displayStatus()


// Use the following code to test your class.
// Please comment out the console.log statements before submitting your code.

// Create a new knight
let codeMaster = new Knight(100, 50, 'sword')
console.log(codeMaster)

// The knight takes 20 damage
codeMaster.reduceHealth(20)
console.log(codeMaster.health) // outputs: 80

// // The knight drinks a mana potion that restores 10 mana
console.log(codeMaster.increaseMana(10))
console.log(codeMaster.mana) // outputs: 60

// // The knight changes weapon to 'axe'
codeMaster.changeWeapon('axe') // outputs: 'axe'
console.log(codeMaster.weapon)

// // Display the knight's current status
console.log(codeMaster.displayStatus()) // outputs: 'Health: 80, Mana: 60, Weapon: axe'

// // Bonus: Knight fights with the dragon
console.log(codeMaster.fightDragon()) // outputs: 'Health: 70, Mana: 65, Weapon: Dragon Slayer'
