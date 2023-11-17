import chalk from "chalk";
import {printBlue, printRedbgCyan, bgYellow, underlineAll, underlineSome, bgHexValue, underlinebgRed, printRgbValue, printRedStrikethrough, inverse} from "./chalkfunctions.js";

function main() {
    // invoke your chalk functions here!
    let message = "Hello world!"
    printBlue(message);
    printRedbgCyan(message);
    bgYellow(message);
    underlineAll(message);
    underlineSome(message);
    bgHexValue(message);
    underlinebgRed(message);
    printRgbValue(message);
    printRedStrikethrough(message);
    inverse(message);
}
main()
