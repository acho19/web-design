/*
day of the week, change the png image 
*/
let today = new Date(); // new date object; based on number of ms since 1/1/70
// console.log(Date.now());  
let day = today.getDay(); // current hour method to parse date object
// console.log(day);
let greeting; // initialize variable
let paragraph = document.getElementById('greeting'); // accessing an element on the page

if (day == 1) {
    greeting = 'Monday is a great day to hire me! Anyways...';
} else if (day == 2) {
    greeting = 'Tuesday is a great day to hire me! Anyways...';
} else if (day == 3) {
    greeting = 'Wednesday is a great day to hire me! Anyways...';
} else if (day == 4) {
    greeting = 'Thursday is a great day to hire me! Anyways...';
} else if (day == 5) {
    greeting = 'Friday is a great day to hire me! Anyways...';
} else if (day == 6) {
    greeting = 'Saturday is a great day to hire me! Anyways...';
} else if (day == 7) {
    greeting = 'Sunday is a great day to hire me! Anyways...';
} 

paragraph.textContent = greeting;


let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  // console.log('toggle');
    navigation.classList.toggle('toggle');
  // navigation.className = "toggle";
    header.classList.toggle('toggle');
  // header.className = "toggle";
}

menuIcon.addEventListener('click', toggleNav);


// //update page content
let heading = document.getElementsByTagName('h1'); // DOM query that accesses all <p> elements as a NodeList
// console.log(heading);

let firstHeader = heading[0]; // assign first paragraph to a variable
// console.log(firstHeader);
// // change text content of last paragraph
firstHeader.textContent = 'I am looking for a job!';

// // changes CSS property 
let myChange = document.querySelector('h1');

// // Change the background color of myDiv to blue
myChange.style.color = 'white';
