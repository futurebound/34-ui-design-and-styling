![cf](http://i.imgur.com/7v5ASc8.png) 34_ui: UI Challenge
===

**NOTE: DO NOT USE JAVASCRIPT FOR ANYTHING. THIS IS PURE SCSS.**
_(The instructions in the comp **wrongly** imply you should use JS...)_


## Submission Instructions
* Work in the same repo as your Budget Tracker fork
* Work on a branch named `ui-challenge`
* Create a separate directory **inside** your `lab-<name>/` dir for the ui-challenge, and put the comp, sprites, and your solution there.
* Follow the usual PR submission for both your budget tracker and the ui-challenge as one submission for lab 34.

## Requirements
* This is an independent project, but your are free to collaborate with your classmates.
* This exercise is to give you some hands-on experience working with sprites in a very common use-case: custom styling of form elements.
* The instructions on the comp page say to do the styling with JavaScript. To be clear, you are not to use JS.


#### Feature Tasks
**PLAN YOUR WORK AND WORK YOUR PLAN**
* For this assignment you will be building a series of custom form elements, some of which will require the use of a provided sprite-sheet.

##### Markup
* Use good HTML structure to scaffold this site, of course, using semantic elements where possible.
* You do not need to use React and Webpack to build this page.

##### SCSS
* Use SMACSS-style modularity to organize your SCSS; there are no specific requirements. Feel free to try an alternate system for organizing your SCSS.
* Style the page to reflect the comp image provided as closely as possible; but, feel free to leave out the paragraph of instructions.
* This is a **Mobile-Only** design.
* Sprites are used in web development to load multiple image resources while only needing a single HTTP request to retrieve a single resource.

## Stretch
* Utilize React and Webpack to build this custom form using component-based architecure. That means that each form element will be it's very own component. How would you construct those elements for reusability given that we have two example implementations for each element?
* You can accomplish this a few ways, but I would suggest building these components within the Budget Tracker, and rendering them to a new route/view once the build is complete.

