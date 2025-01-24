let gamePattern = [];

let userClickedPattern = [];
// $('h1').css('color', 'red')
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChoosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChoosenColor);

let colorID = `#${randomChoosenColor}`;


$('.button').on('click', function () {
  // console.log();

  let buttonClicked = $(this).attr('id');

  // console.log(buttonClicked);

  userClickedPattern.push(buttonClicked);
  console.log(userClickedPattern);

  let audio = new Audio(`assets/sounds/${buttonClicked}.mp3`)

  audio.play();

  $(this).toggleClass('pressed');

  setTimeout(() => {
    $(this).toggleClass('pressed');
  }, 150)

});




// console.log(randomChoosenColor);
// $(colorID).toggleClass('pressed');
// console.log(randomChoosenColor);
// let soundSrc = `assets/sounds/${randomChoosenColor}.mp3`;
// let audio = new Audio(soundSrc);

// audio.play();
// setTimeout(() => {
//     $(colorID).toggleClass('pressed');
// }, 300)

// setTimeout(() => {
//   $(randomChoosenColor).fadeIn();
//   $(randomChoosenColor).fadeOut();
// }, 500);

function nextSequence() {
  let random = Math.floor(Math.random() * 4);
  return random;
}
