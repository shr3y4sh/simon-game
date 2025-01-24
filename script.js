
let gamePattern = [];
// $('h1').css('color', 'red')
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let randomChoosenColor = nextSequence();

gamePattern.push(randomChoosenColor);

function nextSequence(){
    let random = Math.floor(Math.random() * 4);
}