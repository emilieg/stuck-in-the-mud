//Global variables
//DiceBoard
var die1=; 
var die2=; 
var die3=; 
var die4=; 
var die5=; 


//Start Game/ Start New function
//player 1 goes first

//Roll Dice function
var rollDice = function(){
  Math.floor(Math.random() * 6 +1);
}

//Call Roll Dice function for each die
die1 = rollDice();
die2 = rollDice();
die3 = rollDice();
die4 = rollDice();
die5 = rollDice();

//get Score for current roll
var currentScore = function (die1,die2,die3,die4,die5) {
  if (die1 !== 2 && die1 !==5 ) {
    var sum = die1 + die2 + die3 + die4 + die5;
  } return sum;
}








 $( document ).ready(function() {
        console.log( "document loaded" );
    });


















