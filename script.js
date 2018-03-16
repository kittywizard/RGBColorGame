//testing for github purposes

//RGB Color Game

//variables for the squares
var firstSquare, secondSquare;
var rgbArray = [];

//set the squares to their respective classes
firstSquare = document.getElementsByClassName('square')[0];
secondSquare = document.getElementsByClassName('square')[1];

rgbNumbers();

//function that generates three numbers for RGB
function rgbNumbers() {

//loop three times for three parts -- math!
  for(var i = 0; i < 3; i++) {
    var result = Math.floor(Math.random() * ((255-0)+1) + 0);
    rgbArray.push(result);
    //console.log(rgbArray);
  }
  console.log(rgbArray);
  firstSquare.setAttribute("style", "background-color: rgb(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ");");

}

//need to have click events for each square
firstSquare.addEventListener("click", function() {
  //respond to click
  //probably a function call
  console.log("i click dis (1)");
});

secondSquare.addEventListener("click", function() {
  //respond to click
  //probably a function call
  console.log("i click dis (2)");
});
