# Pixel Art Maker Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

To get started, open `designs.js` and start building out the app's functionality.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

---  
# INSTRUCTION AND NOTES form Udacity Classroom  

# Project Overview  
## What Will I Build?  
You’ll build a single-page web app that allows users to draw pixel art on a customizable canvas! Check out this example:


You'll be given starter code, including HTML and CSS, to build the application. You'll write JavaScript code that lets the user to create a grid of squares representing their design, and apply colors to those squares to create a digital masterpiece!

**Your users should be able to:**

- Dynamically set the size of the table as an N by M grid.
- Choose a color.
- Click a cell in the grid to fill that cell with the chosen color.
- Your primary task is to implement the makeGrid() function, that dynamically creates a grid that the user can interact with.

## What Skills Do I Need?  
In this project, you'll use your front-end programming skills from JavaScript Foundations and Intro to jQuery, including:

- Defining variables with const and let
- Accessing the DOM using methods of the document object
- Declaring functions and attaching them to DOM objects as event listeners
- Writing nested loops and using loop variables
- Although not a requirement, you are encouraged to use jQuery to manipulate the DOM for this project.

## How Does This Help My Career?  
Interacting with the DOM — the structure of a web page — is one of the most fundamental skills for a front-end web developer. Mastering event listeners is essential to creating user interfaces — and to quite a few other things. Later in the curriculum you'll see much more about event listeners when you're writing JavaScript code that interacts with the network.

# Instructions  
Get the Starter Code
If you'd like to start from scratch without any files, feel free to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use.

You can download the starter code through either:

- [The Pixel Art Maker repository on GitHub](https://github.com/udacity/project-pixel-art-maker-starter)  
- [This zipped folder](https://github.com/udacity/project-pixel-art-maker-starter/archive/master.zip)  

The starter code includes all required HTML input fields, as well as some basic styling. A skeleton of the makeGrid() function is provided as well.

## Project Rubric  
Review the [Pixel Art Maker project rubric](https://review.udacity.com/#!/rubrics/641/view) carefully, and refer to it often while you build the project. If you want additional feedback, post in the course forums or Slack.

## Development Strategy  
Before writing any code, try loading up index.html from the starter project to see how things look! Notice that the design.js file is implemented in the <body> tag in the index.html file. Your goal is to build out the design.js file to achieve all the interactive elements on the page!

Now, open up design.js. As you start writing your code, keep these three tasks in mind:

Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.
Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

Note: To complete Pixel Art Maker, you must be using the current version of Edge, Firefox, or Chrome.

## Udacity Style Guides  
The starter contains basic styling, but feel free to style the app as you please! You should write your code and markup to meet the specifications provided in these style guides:

- [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Style Guide](https://udacity.github.io/git-styleguide/)
