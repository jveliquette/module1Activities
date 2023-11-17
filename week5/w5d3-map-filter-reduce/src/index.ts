
/* Imagine you have an array of tasks that you need to complete at work. Each task is represented by an object with the properties title, completed, and priority.
You need to write code to perform several operations on the task array. Your job is to complete the code by using the higher order array functions: filter, map, and reduce. Here's a breakdown of each operation you need to perform on the array:

Filter Incomplete Tasks:
    - Use the filter function to create an array containing only the incomplete tasks.
    - Name the array incompleteTasks.

Count Completed Tasks:
    - Use the reduce function to count the number of completed tasks.
    - Assign the value to a variable called completedTaskCount.

Calculate Total Priority:
    - Use the reduce function to calculate the sum of priorities for all tasks.
    - Assign the value to a variable called totalPriority.

Generate Task Titles:
    - Use the map function to create an array of strings containing the task titles.
    - Assign the value to a variable called taskTitles. */

    // Declaring type alias Task
    type Task = {
        title: string;
        completed: boolean;
        priority: number;
    }

    // Array of tasks
    const tasks: Task[] = [
        { title: 'Complete Project', completed: false, priority: 2 },
        { title: 'Review Code', completed: true, priority: 1 },
        { title: 'Write Documentation', completed: false, priority: 3 },
    ];

    const incompleteTasks = tasks.filter((task) => task.completed === false);
    console.log("Incomplete Tasks: ", incompleteTasks);

    const completedTaskCount = tasks.filter((task) => task.completed === true).reduce((accum) => accum + 1, 0);
    console.log("Completed Task Count: ", completedTaskCount);

    const totalPriority = tasks.reduce((accum, currValue) => accum + currValue.priority, 0);
    console.log("Sum of Priorities: ", totalPriority);

    const taskTitles = tasks.map((task) => task.title);
    console.log("Task Titles: ", taskTitles);

    // ----------------
    // DO NOT MODIFY this function - it is here to test your code.
    function testTaskList(): boolean{
        if(incompleteTasks[0].title === "Complete Project"
        &&
        completedTaskCount === 1
        &&
        totalPriority === 6
        &&
        taskTitles[0] === "Complete Project"
        )
        {
            return true;
        }
        return false;
    }
