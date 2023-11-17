const fs = require('fs');
// fs: This module is used for reading and writing files.

const path = require('path');
// path: It's used for working with file paths.

const minimist = require('minimist');
// minimist: This module helps with parsing command-line arguments.

const args = minimist(process.argv.slice(2));
// This line takes the arguments passed to the script and parses them into a JavaScript object (`args`).

const recipeDirectory = './recipes';
// Specifies the directory where recipe JSON files will be stored:

if (!fs.existsSync(recipeDirectory)) {
    fs.mkdirSync(recipeDirectory);
  }
// This line checks if the `recipes` directory exists (Ensures that the directory for storing recipes is present)

if (args._[0] === 'add') {
    // Check if required arguments are provided
    if (!args.name || !args.ingredients) {
      console.error('Usage: node index.js add --name "Recipe Name" --ingredients "Ingredient 1, Ingredient 2"');
    } else {
      // Create a recipe object
      const recipe = {
        name: args.name,
        ingredients: args.ingredients.split(',').map(item => item.trim()),
      };

      // Define the file name and path for the recipe
      const recipeFileName = `${recipe.name.toLowerCase().replace(/\s+/g, '-')}.json`;
      const recipeFilePath = path.join(recipeDirectory, recipeFileName);

      // Write the recipe data to a JSON file
      fs.writeFileSync(recipeFilePath, JSON.stringify(recipe, null, 2));
      console.log(`Recipe "${recipe.name}" added successfully.`);
    }
  }
  // add command

  if (args._[0] === 'view') {
    // Check if the "name" argument is provided
    if (!args.name) {
      console.error('Usage: node index.js view --name "Recipe Name"');
    } else {
      // Generate the file name and path for the recipe
      const recipeFileName = `${args.name.toLowerCase().replace(/\s+/g, '-')}.json`;
      const recipeFilePath = path.join(recipeDirectory, recipeFileName);

      // Check if the recipe file exists and read its content
      if (fs.existsSync(recipeFilePath)) {
        const recipe = JSON.parse(fs.readFileSync(recipeFilePath, 'utf8'));
        console.log('Recipe:', recipe);
      } else {
        console.error(`Recipe "${args.name}" not found.`);
      }
    }
  }
// view command

//Handle Other Commands
// You can similarly handle other commands (e.g., "search") by adding more conditional blocks following the same pattern.

else {
    console.error('Usage: node index.js <command>');
    console.error('Commands:');
    console.error('  add --name "Recipe Name" --ingredients "Ingredient 1, Ingredient 2"');
    console.error('  view --name "Recipe Name"');
    console.error('  search --ingredient "Ingredient"');
  }
// provide usage instructions in case the user enters an invalid or incomplete command:
// Save the `index.js` file in your code editor.
// In your terminal, you can now run various commands to interact with your recipe organizer application. Here are some example commands:
    // - To add a recipe:
    // node index.js add --name "Spaghetti Carbonara" --ingredients "Spaghetti, Eggs, Pancetta, Parmesan cheese, Black pepper"

    // - To view a recipe:
    // node index.js view --name "Spaghetti Carbonara"
    // This returns =
// Recipe: {
//     name: 'Spaghetti Carbonara',
//     ingredients: [
//         'Spaghetti',
//         'Eggs',
//         'Pancetta',
//         'Parmesan cheese',
//         'Black pepper'
//     ]
// }

    // - To search for recipes by ingredient:
    // node index.js search --ingredient "Pancetta"

    // Use these commands to add, view, and search for recipes within your application. You can customize and extend the code in the `index.js` file to add more functionality or improve the user experience.

    // That's it! You've now created a simple CLI recipe organizer application using Node.js. You can continue to enhance this application by adding features such as editing and deleting recipes or improving the user interface.
