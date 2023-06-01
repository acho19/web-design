/*
day of the week, change the png image 
*/
let today = new Date(); // new date object; based on number of ms since 1/1/70
// console.log(Date.now());  number of milliseconds since 1/1/1970
let day = today.getDay(); // current hour method to parse date object
console.log(day);
let greeting; // initialize variable
let paragraph = document.getElementById('greeting'); // accessing an element on the page

if (day = 1) {
  greeting = 'Today is Monday, let\'s start the week strongly! Anyways...';
} else if (day = 2) {
  greeting = 'Today is Tuesday, have you been to any restaurants near WSP? Anyways...';
} else if (day = 3) {
  greeting = 'Today is Wednesday, almost there! Anyways...';
} else if (day = 4) {
    greeting = 'Today is Thursday, actually almost there! Anyways...';
} else if (day = 5) {
    greeting = 'Today is Friday, omg finally! Anyways...';
} else if (day = 6) {
    greeting = 'Today is Saturday, any plans to eat out today? Anyways...';
} else if (day = 7) {
    greeting = 'Today is Sunday, relax and reset day! Anyways...';
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

//update page content
let heading = document.getElementsByTagName('h1'); // DOM query that accesses all <p> elements as a NodeList
console.log(heading);

let firstHeader = heading[0]; // assign first paragraph to a variable
console.log(firstHeader);
// change text content of last paragraph
firstHeader.textContent = 'Please read this page!';

// changes CSS property 
let myChange = document.querySelector('h1');

// Change the background color of myDiv to blue
myChange.style.color = 'white';