# w4d1-activity-create-project-and-typescript-refactor
# Create Project and Typescript Refactor

### Activity Description
In this activity, we will practice creating a Typescript project from scratch and then performing a simple Javascript to Typescript refactor. We are given a shopping list application that keeps tracks of a list of items to buy during the next visit to the store. However, this application is still plain old Javascript.

The goal of the activity is to build a Typescript project, add the Javascript application, and then refactor the application to use Typescript. Use the instructions in your Moodle course to guide you in creating your new Typescript project. Once your project is built, recall what you have learned about the Typescript compiler, specifically the `tsc` command to initialize a Typescript project and build a Javascript distributable.

### Requirements
- [ ] **Build a new Typescript project**
Use the instructions provided in Moodle to create a new Typescript project from scratch.

- [ ] **Convert `js` files to `ts` files**
Convert the Javascript file `src/index.js` to Typescript so we can annotate types.

- [ ] **Add Static Types**
Identify as many places as you can where type checking should occur. Add types to function parameters and variable declarations.

- [ ] **Successfully transpile your Typescript**
Update your `package.json` file to include a `build` script that will generate a JS distributable.

- [ ] **Stretch - Optimize**
There are a few blocks of code we can _remove_ due to our type checking. Can you spot them?

### Expected Output
You should be able to output to the console a list that contains the grocery items, the item count, and whether or not the item is on sale.

You should also have a `dist` folder generated from the Typescript compiler with all your `.ts` files successfully compiled to `.js` files.

### Additional Notes about Libraries
You will likely need to install type definitions for the third-party dependencies the application uses. Once you have converted the `.js` files to Typescript, VSCode should prompt you with helpful suggestions on how to install dependency types.

#### Library Documentation
- [Typescript Documentation](https://www.typescriptlang.org/docs/)

