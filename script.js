let gamePattern = [];
let level = 0;
let userClickedPattern = [];

////////////////////////////////////////////////////////

function nextSequence() {
  $("#info-bar").html(`Level ${level}`);

  level++;
  let random = Math.floor(Math.random() * 4);

  return random;
}

///////////////////////////////////////////////////////////////
// KEYPRESS EVENT

$("body").one("keypress", function () {
  // e.stopImmediatePropagation();

  console.log("whattup");
  nextSequence();
});

//////////////////////////////////////////////////////////////////
let buttonColors = ["red", "blue", "green", "yellow"];

var randomChoosenColor =
  buttonColors[
    () => {
      return nextSequence();
    }
  ];

gamePattern.push(randomChoosenColor);

let colorID = `#${randomChoosenColor}`;

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
});
