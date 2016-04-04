//Global variables
//DiceBoard

var playerTurn;
var diceCount = ['','','','','']; //5 dices are available at the start
var currentRollPoints =[];
var cleanRoll;
var playerScore;



var flipPlayerTurn = function(){
  if (playerTurn === 'player1') {
      playerTurn = 'player2';
  }  else {
    playerTurn = 'player1';
  } 
}

//Roll Dice function
var rollDice = function(){
  result =Math.floor(Math.random() * 6 +1);
  return result;
}

 

  playerTurn ='player2';
  $('#roll-dice').click(function() {
    //Call Roll Dice function for each die using a for loop
    cleanRoll = true; 
    for (i=0; i< diceCount.length; i++) {


      if(diceCount[i] !==2 && diceCount[i] !== 5) {
        diceCount[i] = rollDice();
        console.log(diceCount[i]);
        var diceId = $('#die' + (i+1)).html(diceCount[i]);
       
        if(diceCount[i] === 2 || diceCount[i] === 5) {
          $(diceId).css('border-color', 'red');  
          cleanRoll = false;
        }
      } 
    }
    if(cleanRoll === true) {
      var turnSum = diceSum(diceCount);
      currentRollPoints.push(turnSum);
      
      console.log( "The turnSum is: " + turnSum);
      console.log( "The currentRollPoints is: " + currentRollPoints);
    }
    //check if all dice are stuck/equal 2 or 5
    //then calculate playerScore
    if(cleanRoll === false) {
    playerScore = pointsSum(currentRollPoints);
    console.log("playerScore :" + playerScore);
      if (playerTurn === 'player1') {
          playerScore = $('#player1-scores span').html(playerScore);
    } else {
           playerScore = $('#player2-scores span').html(playerScore);
    } 
        }     

  }) //closing click function












function diceSum(diceCount){
  var total = 0;
  len = diceCount.length;

  for (var i = 0; i < len; i++){
    if(diceCount[i] !==2 && diceCount[i] !==5){
      total += diceCount[i];
    }
  }
  return total;
};



function pointsSum(currentRollPoints){
  var total =0;
  len = currentRollPoints.length;

  for(var i = 0; i <len; i++) {
    total+= currentRollPoints[i];
  } return total;
}


































