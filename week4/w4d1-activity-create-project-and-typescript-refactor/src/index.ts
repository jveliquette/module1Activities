const shoppingList: {itemName: string, count: number, isOnSale: boolean}[] = [];

//Adds a new item to the shopping list
function addItem(newItem: {itemName: string, count: number, isOnSale: boolean}): void {
        shoppingList.push(newItem);
    }

//Displays the items in the shopping list at the console
function printList(): void {
    console.log("Shopping List:");
    for (let i = 0; i < shoppingList.length; i++) {
        let currentItem = shoppingList[i];
        console.log(`${i + 1}. ${currentItem.itemName}`);
        console.log("     Amount: " + currentItem.count);
        if (currentItem.isOnSale) {
            console.log("     " + currentItem.itemName + " is on sale.");
        }
    }
}

//The main function adds items to the list and displays it
function main(): void {
    var item = { // item = object // Create an item
        itemName: 'Frozen pizza',
        count: 4,
        isOnSale: true
    };
    addItem(item); //Add the item to the list

    item = { // Create an item
        itemName: 'Rubber duck',
        count: 1,
        isOnSale: false
    };
    addItem(item); //Add the item to the list

    item = { // Create an item
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
function codeRunner({ testValue, argumentsArray }: { testValue: string, argumentsArray?: any[] }): any {
    const toTest: any = {
        addItem,
        printList,
        main,
    }
    if (argumentsArray !== undefined) {
        return toTest[testValue].apply(null, argumentsArray);
    } else {
        return toTest[testValue];
    }
}
  /*
Do not edit the code in the above section.
The previous code is for automated testing
*/
