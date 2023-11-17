import chalk from "chalk"

    export function printBlue(message) {
        console.log(chalk.blue(message))
    }
    export function printRedbgCyan(message) {
        console.log(chalk.red.bgCyan(message))
    }
    export function bgYellow(message) {
        console.log(chalk.bgYellow(message))
    }
    export function underlineAll(message) {
        console.log(chalk.underline(message))
    }
    export function underlineSome(message) {
        console.log("Hello " + chalk.underline("world!"))
    }
    export function bgHexValue(message) {
        console.log(chalk.hex(`#5c5ce7`)(message))
    }
    export function underlinebgRed(message) {
        console.log(chalk.underline.bgRed(message))
    }
    export function printRgbValue(message) {
        console.log(chalk.rgb(255, 136, 0)(message))
    }
    export function printRedStrikethrough(message) {
        console.log(chalk.red.strikethrough(message))
    }
    export function inverse(message) {
        console.log(chalk.inverse(message))
    }
