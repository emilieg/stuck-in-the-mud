//Global variables
//DiceBoard

var currentScore;
var diceCount = ['','','','','']; //5 dices are available at the start
var currentDice = []; //push dice values into currentDice array


//Roll Dice function
var rollDice = function(){
  result =Math.floor(Math.random() * 6 +1);
  return result;
}

$( document ).ready(function() {
  console.log( "document loaded" );


  $('#roll-dice').click(function() {
//Call Roll Dice function for each die using a for loop

for (i=0; i< diceCount.length; i++) {
  console.log("diceCount.lenght is: " + diceCount.length);
  
  if(diceCount[i] !==2 && diceCount[i] !== 5) {

    diceCount[i] = rollDice();
    console.log(diceCount[i]);
    var diceId = $('#die' + (i+1)).html(diceCount[i]);
    
    if(diceCount[i] === 2 || diceCount[i] === 5) {
      $(diceId).css('border-color', 'red');

    }
  }

}

}) //closing click function
}); //closing for document_ready f()




































