//Global variables
//DiceBoard
var die1; 
var die2; 
var die3; 
var die4; 
var die5; 
var currentScore = [];
var diceCount = ['die1','die2','die3','die4','die5']; //5 dices are available at the start
var currentDice = []; //push dice values into currentDice array






//Roll Dice function
var rollDice = function(){
  result =Math.floor(Math.random() * 6 +1);
  return result;
}

 $( document ).ready(function() {
        console.log( "document loaded" );
    

$('#roll-dice').click(function() {
//Call Roll Dice function for each die 
for (i=0; i< diceCount.length; i++) {
  diceCount[i] = rollDice();
  console.log(diceCount[i]);
   currentDice.push(diceCount[i])
 }
console.log(currentDice); 
//set diceCount to DOM of each die div

currentScore = currentDice.filter(isTwoFive);
console.log("the current score array is: " + currentScore);



})
}); //closing for document_ready f()
var isTwoFive = function(number) {
  if (number !== 2 || number !== 5) {
    return number;
  }
  };





// $('#die1').text(diceCount[i]);
// $('#die2').text(diceCount[i]);
// $('#die3').text(diceCount[i]);
// $('#die4').text(diceCount[i]);
// $('#die5').text(diceCount[i]);
// }
//used each die to cal rollDice on click
  // d1 = rollDice();
  // d2 = rollDice();
  // d3 = rollDice();
  // d4 = rollDice();
  // d5 = rollDice();
//set divs of dice to return of rollDice function  

// $('#current-roll-score').text(currentScore(d1,d2,d3,d4,d5));





//get Score for current roll
// var currentScore = function (a,b,c,d,e) {
  // if (die1 !== 2 && die1 !==5 && die2 !== 2 && die2 !==5 &&
  //     die3 !== 2 && die3 !==5 && die4 !== 2 && die4 !==5 && 
  //     die5 !== 2 && die5 !==5 ) {
 //    var sum = a + b + c + d + e;
 //   return sum; 
 // }


























