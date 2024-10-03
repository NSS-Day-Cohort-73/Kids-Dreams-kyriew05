# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When I click on a child's name, it will start in main.js and then move into Kids.js. Due to the way code runs, it first reads the string interpolation that is inserting the return value of the Kids function into the HTML section. It then moves into the Kids.js module where it will read the code within that module. This algorithm is best for keeping the code easier to read and maintain by having everything is in their own module with a specific purpose.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > I had to invoke the function inside of loop to compare each kid against the list of individual celebrities. For each kid, we call the findCelebrityMatch function with the arguments of kid and celebrities passing through, to find the celebrity's id that matches the kid's celebrityId. Once a match is found, it returns the celebrity that matched and then repeats through each kid in the loop. If I didn't invoke the function, I would have not been able to match each kid correctly.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > In order for the name of the sport to be called, I had to add a dataset type inside of the li element within the for...of loop. The data element stores the information about the celebrity in the HTML that way you are able to access it later on. We are able to get the alert by creating a click event. When you click on the name, it first checks to make sure it is a celebrity by comparing it to the data type. If the data type does equal to celebrity then we can access the data-name and data-sport elements.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The module begins with importing three functions (Pairings, Celebrities, and Kids) from their modules (Pairings.js, CelebrityList.js, and Kids.js). The 'const mainContainer = document.querySelector("#container")' finds an HTML element that has container as the ID which holds the container for displaying the HTML on the webpage. The h1 is the header tag, which holds the title 'Make a memory for kids'. The article tag with the class of details holds the two sections (Kids and Celebrities). The kids section holds the kids list that is stored there by calling the Kids function using string interpolation. The celebrities is doing the same thing just with the Celebrities function. The article with the class of 'Assignments' is calling the Pairings function using string interpolation. The 'mainContainer.innerHTML = applicationHTML' inserts applicationHTML into the mainContainer element of the HTML document.
