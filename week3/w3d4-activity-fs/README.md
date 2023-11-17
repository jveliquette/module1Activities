# Creating a Node Application to Read and Write to files

## Initializing your node repository

### Step 1: Initialize Your Node Project

In your terminal, execute the commend `npm init -y`. The `-y` flag will initialize your project with default settings and prevent you from having to manually answer the standard initialization questions.

### Step 2: Verify your package.json

Look inside your package.json file, you'll notice it has a key named 'main'. The value associated with 'main' is `index.js`. This was one of the default values that was created during `npm init`. It is the entry point to our application

### Step 3: Add your index.js

Execute the command `touch index.js`. We want to be consistent with what is in our `package.json`.

### Step 4: Create the Recipe Directory

Create a directory named `recipes` within your project directory. This directory will be used to store your recipe JSON files:

```bash
mkdir recipes
```

### Step 5: Import Required Modules

In your `index.js` file, start by importing the necessary Node.js modules:

```javascript
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
```

- `fs`: This module is used for reading and writing files.
- `path`: It's used for working with file paths.
- `minimist`: This module helps with parsing command-line arguments.

### Step 6: Parse Command-Line Arguments

Use `minimist` to parse the command-line arguments provided by the user:

```javascript
const args = minimist(process.argv.slice(2));
```

This line takes the arguments passed to the script and parses them into a JavaScript object (`args`).

### Step 7: Define a Recipe Directory

Specify the directory where recipe JSON files will be stored:

```javascript
const recipeDirectory = './recipes';
```

### Step 8: Check if the Recipe Directory Exists

Check if the `recipes` directory exists, and create it if it doesn't:

```javascript
if (!fs.existsSync(recipeDirectory)) {
  fs.mkdirSync(recipeDirectory);
}
```

This code ensures that the directory for storing recipes is present.

### Step 9: Handle Commands

Based on the user's command (add, view, search), perform the appropriate action. You can use conditional statements (`if` or `switch`) to achieve this. Here, we'll show the code for handling "add" and "view" commands as examples:

#### Handling the "add" Command

```javascript
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
```

#### Handling the "view" Command

```javascript
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
```

### Step 10: Handle Other Commands

You can similarly handle other commands (e.g., "search") by adding more conditional blocks following the same pattern.

### Step 11: Provide Usage Instructions

At the end of your script, it's a good practice to provide usage instructions in case the user enters an invalid or incomplete command:

```javascript
} else {
  console.error('Usage: node index.js <command>');
  console.error('Commands:');
  console.error('  add --name "Recipe Name" --ingredients "Ingredient 1, Ingredient 2"');
  console.error('  view --name "Recipe Name"');
  console.error('  search --ingredient "Ingredient"');
}
```

### Step 12: Run and Test the Application

1. Save the `index.js` file in your code editor.

2. In your terminal, you can now run various commands to interact with your recipe organizer application. Here are some example commands:

   - To add a recipe:

     ```bash
     node index.js add --name "Spaghetti Carbonara" --ingredients "Spaghetti, Eggs, Pancetta, Parmesan cheese, Black pepper"
     ```

   - To view a recipe:

     ```bash
     node index.js view --name "Spaghetti Carbonara"
     ```

   - To search for recipes by ingredient:

     ```bash
     node index.js search --ingredient "Pancetta"
     ```

   Use these commands to add, view, and search for recipes within your application. You can customize and extend the code in the `index.js` file to add more functionality or improve the user experience.

That's it! You've now created a simple CLI recipe organizer application using Node.js. You can continue to enhance this application by adding features such as editing and deleting recipes or improving the user interface.
