let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let randomChoosenColor;
let userClickedPattern = [];
let timesButtonClicked = 0;
//////////////////////////////////////////////////////

function gamePlayRound(level) {
  userClickedPattern = [];
  $("#info-bar").html(`Level ${level}`);
  randomChoosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChoosenColor);
  setTimeout(() => {
    buttonFlashing(randomChoosenColor);
  }, 800);
}

////////////////////////////////////////////////////////

function nextSequence() {
  let random = Math.floor(Math.random() * 4);
  return random;
}

///////////////////////////////////////////////////////////////
// KEYPRESS EVENT ON TIME
// GAME STARTS, LEVEL = 1

$("body").one("keypress", function () {
  level++;
  timesButtonClicked = 0;
  gamePlayRound(level);
});

///////////////////////////////////////////////////////////
// BUTTON CLICK EVENT

$(".button").on("click", function () {
  timesButtonClicked++;
  let buttonClicked = $(this).attr("id");
  userClickedPattern.push(buttonClicked);

  if (gamePattern[timesButtonClicked - 1] !== buttonClicked && level > 0) {
    console.log(level);
    wrongButton();
    return;
  }

  console.log("User Clicked Pattern", userClickedPattern);
  let audio = new Audio(`assets/sounds/${buttonClicked}.mp3`);

  audio.play();

  $(this).toggleClass("pressed");

  setTimeout(() => {
    $(this).toggleClass("pressed");
  }, 150);

  if (timesButtonClicked === level) {
    timesButtonClicked = 0;
    checkAnswer(level);
  }
});

///////////////////////////////////////////////////////////

function buttonFlashing(buttonID) {
  let button = $(`#${buttonID}`);
  let audio = new Audio(`assets/sounds/${buttonID}.mp3`);

  audio.play();

  $(button).toggleClass("pressed");

  setTimeout(() => {
    $(button).toggleClass("pressed");
  }, 600);
}

//////////////////////////////////////////////////////////////
// USER CHECK ANSWER

function checkAnswer(currentLevel) {
  let isCorrect = true;
  for (let i = 0; i < currentLevel; i++) {
    if (gamePattern[i] != userClickedPattern[i]) {
      isCorrect = false;
      break;
    }
  }
  if (isCorrect) {
    setTimeout(() => {
      level++;
      gamePlayRound(level);
    }, 1400);
  }
}

////////////////////////////////////////////////////////////

function wrongButton() {
  let audio = new Audio("assets/sounds/wrong.mp3");
  audio.play();

  $("body").toggleClass("wrong-button");
  $("#info-bar").html("Game Over");
  setTimeout(() => {
    $("body").toggleClass("wrong-button");
  }, 200);

  setTimeout(() => {
    $("#info-bar").html("Press any key to restart");
  }, 1600);

  $("body").on("keypress", () => {
    location.reload();
  });
}

/////////////////////////////////////////////////////////////////
