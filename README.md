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

### 2. December - Joke Generator

This was a nice, cute, pretty easy puzzle :) I loved the jokes :D

### 3. December - Xmas Countdown

Never made countdown, therefor I needed to check a little, so setInterval() became my friend :) I also learnt there is a Transition and TransitionGroup built-in component in Vue, where can help to work with animation on a reactive element. So I made a countdown, where the numbers are fading away.

### 4. December - Recursicve Xmas Tree

This was a hard one. I am not really familiar with recursive functions. I needed to actually check the solution, but at least I understand now why it needed to be done that way.

### 5.December - Gift label

This was a nice and easy challenge, practicing v-model :)

### 6. December - Item Comparison

This was a hard one.. It started good, then I was a little confused with the select options. But I understood based on the given solution why and how needs to be done. Next challenge was the comparison part, as I used values which were not available in the beginning. Here I mean, that I compare 2 items in an array which has not been selected. So I got a errors that these values are undefined. But it took me some tme to realize, the problem is not the fetch, but that these items have not been selected. Still... v-if needed to be add.. and voilá :D 

### 7.December - Drag and Drop

I was always amazed with Drag and Drop effect, but I have not get a chance (or time?) to actually check out. Luckily Advent of Vue made sure about it to get a closer look. It was really new and again needed to check the solution, but I am planning to do try it with some "easier" thing like list items.

### 8. December - Extra mini project

It was my own mini project to get extra practice. There were 3 puzzles which were harder because they were new to me: Recursive Tree, Count down, Drag and Drop. So I tried to put all these 3 things together. :)

### 8. December - Happy Holidays (i18n)

This puzzle required a i18n library, I was not familiar with. I am going to be honest, I mostly needed to check the solution. To practice a little more I added 3 other language. 

### 9. December  - Sort presents

This puzzle made me practice array.sort, computed properties and toggle. 

