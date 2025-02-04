let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let randomChoosenColor;
let userClickedPattern = [];
let started = false;
////////////////////////////////////////////////////////

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#info-bar").html(`Level ${level}`);

  let random = Math.floor(Math.random() * 4);

  return random;
}

///////////////////////////////////////////////////////////////
// KEYPRESS EVENT ON TIME

$("body").one("keypress", function () {
  // e.stopImmediatePropagation();
  randomChoosenColor = buttonColors[nextSequence()];
  console.log(randomChoosenColor);
  gamePattern.push(randomChoosenColor);
  setTimeout(() => {
    buttonFlashing(randomChoosenColor);
  }, 500);
  console.log(level, gamePattern);
});

//////////////////////////////////////////////////////////////////

// try {
//   var randomChoosenColor = buttonColors[nextSequence()];
// } catch {
//   console.log("nextSequence not called");
// }
// gamePattern.push(randomChoosenColor);

// let colorID = `#${randomChoosenColor}`;

///////////////////////////////////////////////////////////
// BUTTON CLICK EVENT

$(".button").on("click", function () {
  let buttonClicked = $(this).attr("id");

  userClickedPattern.push(buttonClicked);

  let audio = new Audio(`assets/sounds/${buttonClicked}.mp3`);

  audio.play();

  $(this).toggleClass("pressed");

  setTimeout(() => {
    $(this).toggleClass("pressed");
  }, 150);

  console.log(userClickedPattern);

  checkAnswer(level);
});

///////////////////////////////////////////////////////////

function buttonFlashing(buttonID) {
  let button = $(`#${buttonID}`);
  let audio = new Audio(`assets/sounds/${buttonID}.mp3`);

  audio.play();

  $(button).toggleClass("pressed");

  setTimeout(() => {
    $(button).toggleClass("pressed");
  }, 150);
}

//////////////////////////////////////////////////////////////
// USER CHECK ANSWER

function checkAnswer(currentLevel) {

  for (let i = 0; i < currentLevel; i++) {
    if (gamePattern[i] === userClickedPattern[i]) {
      console.log("Success");
    } else {
      console.log("Wrong");
    }
  }
}
