import fs from 'fs';
// TODO - Add parameter types and Return Types
function addContactToList(contactData, contact) {
    // Bonus TODO - handle case where contact already exists.
    contactData.recentlyAdded = contact;
    contactData.list.push(contact);
    return contactData;
}
// TODO - Add parameter types and Return Types
function removeContactFromList(contactData, contactName) {
    const newContacts = [];
    for (const contact of contactData.list) {
        if (contact.name !== contactName) {
            newContacts.push(contact);
        }
    }
    // Bonus TODO - handle case where removed contact does not exist
    contactData.list = newContacts;
    delete contactData.recentlyAdded;
    return contactData;
}
/**
 * Bonus TODO - If you feel confident with your static code analysis and type definitions,
 * implement a function that updates a contact's address
 * Don't forget to change the any type to real types.
 */
function updateContactAddress(contactData, name, address) { }
// TODO - Add parameter types and Return Types
function getContactData() {
    const contactListJSON = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(contactListJSON);
}
// TODO - Add parameter types and Return Types
function saveContactData(contactData) {
    fs.writeFileSync('data.json', JSON.stringify(contactData, null, 2));
}
// You shouldn't have to touch main()
// But if you add console.log statement, be sure to remove them before submitting
function main() {
    let contactData = getContactData();
    addContactToList(contactData, {
        name: 'Josephine Ayala',
        isActive: true,
        email: 'jayala@global.net',
        address: {
            street: 'Cheerio Ave',
            city: 'San Francisco',
            zipcode: '99485',
            geo: {
                lat: -31.455,
                lng: 43.334,
            },
        },
        phone: 8180047566,
        company: {
            name: 'Coolism',
            catchPhrase: 'Staying the coolest of cool',
        },
    });
    saveContactData(contactData);
    contactData = removeContactFromList(contactData, 'Josephine Ayala');
    saveContactData(contactData);
    return contactData;
}
main();
/*
Do not edit anything in the section below.
The following code is for automated testing
*/
function codeRunner({ testValue, argumentsArray, }) {
    const toTest = {
        addContactToList,
        removeContactFromList,
        updateContactAddress,
        main,
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
