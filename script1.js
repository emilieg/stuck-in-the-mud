//Global variables
//DiceBoard

var playerTurn = 'player1';
var diceCount = ['','','','','']; //5 dices are available at the start
var diceAvail = [true,true,true,true,true];
var diceId;
var currentRollPoints =[];
var cleanRoll;
var playerScore;
var turnSum = 0;
var countLoses = 0;

var flipPlayerTurn = function(){
  $('#current-roll-score span').html('0');
  diceCount = ['','','','',''];
  diceAvail = [true,true,true,true,true];
  currentRollPoints =[];
  cleanRoll = true;
  turnSum = 0;
  countLoses =0;
  $('.dice').html("");
  $('.dice').css("border-color", "black")
  if (playerTurn === 'player1') {
    playerTurn = 'player2';
  }  else if(playerTurn === 'player2') {
       alert("GAME OVER"); 
  } 
};

//Roll Dice function
var rollDice = function(){
  result =Math.floor(Math.random() * 6 +1);
  return result;
};

$('#roll-dice').click(function() {

  // function rollDice() {
    //Call Roll Dice function for each die using a for loop
    
    $('#player-turn span').html(playerTurn);
    console.log("diceAvail " + diceAvail);
    cleanRoll = true;
    
    for (i=0; i< diceCount.length; i++) {

      if(diceAvail[i]=== true) {

        diceCount[i] = rollDice();

        console.log(diceCount[i]);
          diceId = $('#die' + (i+1)).html(diceCount[i]);

        if(diceCount[i] === 2 || diceCount[i] === 5) {
          diceAvail[i] = false;
          $(diceId).css('border-color', 'red');  
          cleanRoll = false;
        }
      //else statement here? 
      // else if (diceAvail[i] === false && diceAvail[i] === diceAvail[i]) {
      //   flipPlayerTurn ();
      }
    }
    if(cleanRoll === true) {
      turnSum = diceSum(diceCount);
      currentRollPoints.push(turnSum);
      
      console.log( "The turnSum is: " + turnSum);
      console.log( "The currentRollPoints is: " + currentRollPoints);

      $('#current-roll-score span').html(turnSum);
    }
    
    playerScore = pointsSum(currentRollPoints);
    console.log("playerScore :" + playerScore);
    console.log ("playerTurn before if check :" + playerTurn);
    if (playerTurn === 'player1') {
      playerScore = $('#player1-scores span').html(playerScore);
    } else {
      playerScore = $('#player2-scores span').html(playerScore);
    } 
    
    //check if all dice are stuck/equal 2 or 5
    //then calculate playerScore
    var diceNotAvail=0;
    for (i=0; i < diceAvail.length; i++) {
      console.log("in the for loop");
      console.log("diceAvail " + diceAvail);
      if (diceAvail[i] === false) {
        console.log("diceAvail are: " + diceAvail);
        diceNotAvail++;
      }
      if (diceNotAvail === diceAvail.length) {
        
        flipPlayerTurn();
        $('#player-turn span').html(playerTurn);
      }
    }
    
      // flipPlayerTurn();
      // console.log("after flipTurn function: " + playerTurn);   

 })//closing click function







function newGame () {
  diceCount = ['','','','',''];
  currentRollPoints =[];
  turnSum = 0;
  playerScore = 0;
  cleanRoll = true;
  $('#player1-scores span').html('0');
  $('#player1-scores span').html('0');
  $('#current-roll-score span').html('0');
  flipPlayerTurn();
};









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


































