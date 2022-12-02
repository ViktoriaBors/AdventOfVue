# AdventOfVue
 
## Introduction
[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24.

## My Goal
It's easy - to practice and practice Vue :)

## "Blog" 
Get some insight about these puzzles here. Lets start!

### 1. of December - Gift search
Needed to build a debounced search bar. Debounce good to delay functions. This is specially useful when we search. We dont want to send request at every single keydown. We want to send a request after the user pause and stop writing. Debounce can help with that.

I knew I need to use setTimeOut, but I actually have not met with the concept of debounce. After search on the net I found [this article](https://www.javascripttutorial.net/javascript-dom/javascript-debounce/) to help me out.

My solution is not perfect, as if the search bar is empty, the previous result is still listed... Any idea what I am missing? 