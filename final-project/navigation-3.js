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



// random floating point (decimal number) between 0 (inclusive) and 1 (exclusive)
let randomFloat = Math.random();
// console.log('Random float:', randomFloat);

// coin toss
function coinFlip() { // function definition
  let flip = Math.round(Math.random()); // rounds float (0-1) up or down
  console.log('Coin flip:', flip);

  let image, image2; // create image variable

  if (flip == 0) {
    image = 'images/korea.png'; // assign file name to variable
    image2 = 'images/korea-2x.png';
  } else {
    image = 'images/brazil.png';
    image2 = 'images/brazil-2x.png';
  }

  let coin = document.querySelector('#flag');
  coin.src = image;
  coin.srcset = image2;  // change src property of <img> element        
}
// access button
let btn = document.querySelector('button');


// DOM event listener
btn.addEventListener('click', coinFlip); // function call in response to event


