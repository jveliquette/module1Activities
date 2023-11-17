// * ------------ Refactor Counter ----------------
// Let's start with a small problem. This code is impure because it is modifying a variable
let counter = 1; // I moved this line of code from above the function to inside the function
// defined outside of it's scope.
function incrementCounter() {
    return counter++;
}
// What do you expect to be the values which are logged? Why is there an off-by one error?
console.log("first invocation: ", incrementCounter());
console.log("second invocation: ", incrementCounter());
export {};
// // Use the transpiled JavaScript version of this code in pythontutor.com to help you understand
// // what is happening when you invoke incrementCounter;
// // * --------------  Fix User Problem --------------
// // You work at an internet service provider. When customers cancel their accounts, it removes their IP address
// // from their account but due to a bug it keeps their actual account info in the system.
// // One of your other employees has been tasked at taking a .json file of the user info
// // and removing all the users with null IP addresses from the file and creating a new file.
// // Unfortunately this is as far as they got:
// // See if you can fix the problems.
// type User = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   ip_address: string | null;
// };
// type Users = User[];
// // Some sample data to test out the code with
// const sampleData: User[] = [
//   {
//     first_name: "Beale",
//     last_name: "Marley",
//     email: "bmarley0@instagram.com",
//     ip_address: "200.228.103.89",
//   },
//   {
//     first_name: "Anthe",
//     last_name: "Franek",
//     email: "afranek1@prlog.org",
//     ip_address: "199.246.1.245",
//   },
//   {
//     first_name: "Engelbert",
//     last_name: "Ganforthe",
//     email: "eganforthe2@gnu.org",
//     ip_address: null,
//   },
//   {
//     first_name: "Jackie",
//     last_name: "Yeardsley",
//     email: "jyeardsley3@sfgate.com",
//     ip_address: null,
//   },
// ];
// // We need to do some clean up on some data. First we want to get a handle on how much data needs attention.
// // Below is a function which will return an object with the total count and percentage of ip_address which are null
// // It returns some Stats that look like this:
// type NullStats = {
//   nullIpAddresses: number;
//   percent: string;
// };
// // Set up some counters to count the number of users containing IP addresses
// let countNulls: number = 0;
// let percent: number = 0;
// // Calculates the number of users that have nulls for their IP Address
// function percentNull(users: Users): NullStats {
//   users.forEach((user) => {
//     if (user.ip_address === null) {
//       countNulls += 1;
//     }
//   });
//   percent = (countNulls / users.length) * 100;
//   return { nullIpAddresses: countNulls, percent: `${percent}%` };
// }
// // We can read in the users from the file using this:
// const realUsers: User[] = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
// // **** Testing Code *****
// // Let's run it on the sampleData first
// console.log("Result for sampleData: ", percentNull(sampleData)); // Expected output = Result for sample data: {nullIpAddresses: 2, percent: '50%'}
// // Then run it again on the real Data.
// console.log("Result for User file: ", percentNull(realUsers)); // What is your expected output?
// // Great, now let's re-run with the sample data and you'll see there's a problem
// console.log("Result for sampleData, second check: ", percentNull(sampleData));
// // ! Wow! What happened?!
// // Re-write the percentNull function to avoid side-effects
// function purePercentNull(users: Users): NullStats {
//   let countNulls: number = 0;
//   let percent: number = 0;
//   users.forEach((user) => {
//     if (user.ip_address === null) {
//       countNulls += 1;
//     }
//   });
//   percent = (countNulls / users.length) * 100;
//   return { nullIpAddresses: countNulls, percent: `${percent}%` };
// }
// // Write some code here to test the purePercentNull
// console.log("Result for pure file: ", purePercentNull(realUsers));
// //-------------
// //Your supervisor wants a total for the number of user logins on the website.
// //Use the reduce function to create a total and assign it to the variable totalLogins.
// const userLogins: Array<{ username: string; logins: number }> = [
//   { username: "Marley", logins: 3 },
//   { username: "Franek", logins: 5 },
//   { username: "Ganforthe", logins: 2 },
// ];
// let totalLogins;
// userLogins.reduce((accumulateLogins, currUser) => {
//   return accumulateLogins + currUser.logins;
// }, 0);
// //-------------
// // Challenge! Once you are sure you can count the nulls accuratley no matter how many times
// // the function is ran...
// // write another function that will "fix" the data by removing the users
// // from the array using .filter, then write the array back out to a new JSON
// // file called `fixed-users.json`  (Remember you can use `fs.writeFileSync` to do this)
// // Also try not to put the writeFileSync into the function itself, because that would be
// // a side-effect.
// function fixUsers(users: Users) {
//   users.forEach((user) => {
//     if (user.ip_address === null) {
//       users.filter
//     }
//   });
// }
// fs.writeFileSync
// // ***** Testing Code *****
// const fixedSampleUsers = fixUsers(sampleData);
// // We can run our purePercentNull again on this to verify it got them all
// console.log("Result for Fixed Users", purePercentNull(fixedSampleUsers)); // should return 0
// const fixedUsers = fixUsers(realUsers);
//# sourceMappingURL=index.js.map