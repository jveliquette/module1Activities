var shoppingList = [];
//Adds a new item to the shopping list
function addItem(newItem) {
    shoppingList.push(newItem);
}
//Displays the items in the shopping list at the console
function printList() {
    // console.log("Shopping List:");
    for (var i = 0; i < shoppingList.length; i++) {
        var currentItem = shoppingList[i];
        // console.log("".concat(i + 1, ". ").concat(currentItem.itemName));
        // console.log("     Amount: " + currentItem.count);
        if (currentItem.isOnSale) {
            // console.log("     " + currentItem.itemName + " is on sale.");
        }
    }
}
//The main function adds items to the list and displays it
function main() {
    var item = {
        itemName: 'Frozen pizza',
        count: 4,
        isOnSale: true
    };
    addItem(item); //Add the item to the list
    item = {
        itemName: 'Rubber duck',
        count: 1,
        isOnSale: false
    };
    addItem(item); //Add the item to the list
    item = {
        itemName: 'Energy drink',
        count: 25,
        isOnSale: false
    };
    addItem(item); //Add the item to the list
    printList(); // Print the item details to the console
}
//Call the main function to execute the application
main();
/*
Do not edit anything in the section below.
The following code is for automated testing
*/
function codeRunner(_a) {
    var testValue = _a.testValue, argumentsArray = _a.argumentsArray;
    var toTest = {
        addItem: addItem,
        printList: printList,
        main: main,
    };
    if (argumentsArray !== undefined) {
        return toTest[testValue].apply(null, argumentsArray);
    }
    else {
        return toTest[testValue];
    }
}
/*
Do not edit the code in the above section.
The previous code is for automated testing
*/
