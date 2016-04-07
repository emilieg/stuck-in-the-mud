//Global variables
//DiceBoard

var playerTurn = 'player1';
var diceCount = ['', '', '', '', '']; //5 dices are available at the start
var diceAvail = [true, true, true, true, true];
var diceId;
var currentRollPoints1 = [];
var currentRollPoints2 = [];
var cleanRoll;
var playerScore1;
var playerScore2;
var turnSum1 = 0;
var turnSum2 = 0;
var countLoses = 0;
var roundCount = 1;
var winner;
var gameLoop = true;
var animationBounceIn = 'bounceInDown';
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


var flipPlayerTurn = function() {

    if (playerTurn === 'player1') {
        playerTurn = 'player2'; 
    } else {
        roundCount = roundCount + 1; //count game runs 
        playerTurn ='player1'; 
    }
    console.log("roundCound: " + roundCount)
    if (roundCount === 4) {
        gameOver(playerScore1, playerScore2);
        console.log("Scores: " + gameOver(playerScore1, playerScore2));
        gameLoop = false;
        $('#roll-dice').attr('disabled','disabled');
    }   else {
    console.log("in flipPlayer Round is: " + roundCount);
    
    //set timer here to wait 1 second before clearing code below
    $('#current-roll-score span').html('0');
    diceCount = ['', '', '', '', ''];
    diceAvail = [true, true, true, true, true];
    cleanRoll = true;
    turnSum1 = 0;
    turnSum2 = 0;
    countLoses = 0;
    $('.dice').html("");
    $('.dice').css("background-color", "")

    }
};

//Roll Dice function
var rollDice = function() {
    result = Math.floor(Math.random() * 6 + 1);
    return result;
};

$('#roll-dice').click(function() {

        if(gameLoop === false) {
            return;
        }
        //Call Roll Dice function for each die using a for loop
        $('#round-count span').html(roundCount);
        $('#player-turn span').html(playerTurn);
        $('#current-roll-score span').html(turnSum1);
        $('#current-roll-score span').html(turnSum2);
// 
        console.log("diceAvail " + diceAvail);
        cleanRoll = true;
        

        for (i = 0; i < diceCount.length; i++) {
            console.log(diceCount[i]);
            if (diceAvail[i] === true) {

                diceCount[i] = rollDice();

                diceId = $('#die' + (i + 1)).html(diceCount[i]);
                $(diceId).effect("highlight", {}, 1500);

                
                

                if (diceCount[i] === 2 || diceCount[i] === 5) {
                    diceAvail[i] = false;
                    $(diceId).css('border-color', 'red');
                    cleanRoll = false;
                }
                //else statement here? 
                // else if (diceAvail[i] === false && diceAvail[i] === diceAvail[i]) {
                //   flipPlayerTurn ();
            }
        }
        if (cleanRoll === true && playerTurn === 'player1') {
            turnSum1 = diceSum(diceCount);
            currentRollPoints1.push(turnSum1);
        
            console.log("turnSum player1 " + turnSum1);
            
            $('#current-roll-score span').html(turnSum1);
            
            playerScore1 = pointsSum(currentRollPoints1);
            $('#player1-scores span').html(playerScore1);
            console.log("playerScore1 "+  playerScore1);

        } else if (cleanRoll === true && playerTurn === 'player2') {
            turnSum2 = diceSum(diceCount);
            currentRollPoints2.push(turnSum2);
            console.log("turnSum player2 " + turnSum2);
            
            $('#current-roll-score span').html(turnSum2);
            
            playerScore2 = pointsSum(currentRollPoints2);
            $('#player2-scores span').html(playerScore2);
            console.log("playerScore2 "+  playerScore2);
            
        }

        

        //check if all dice are stuck
        //then calculate playerScore
        var diceNotAvail = 0;
        for (i = 0; i < diceAvail.length; i++) {

            if (diceAvail[i] === false) {
                diceNotAvail++;

            }
            if (diceNotAvail === diceAvail.length) {
                

                flipPlayerTurn();
                $('#player-turn span').html(playerTurn);

                
            }

        }

    }) //closing click function


function gameOver(playerScore1, playerScore2){
    
    if(playerScore1 > playerScore2) {
        winner = 'player1';
    }
    else {
        winner = 'player2';
    }
    $('#winner').html("THE WINNER IS:" + winner);
    $('#winner').addClass('animated bounceInDown').one(animationEnd, function(){
        $(this).removeClass(bounceInDown);
    });
    return winner;
}




$('#new-game').click(function() {
    newGame();
});


function newGame() {
    $('#roll-dice').removeAttr('disabled');
    gameLoop = true;
    roundCount = 1;
    playerTurn = 'player1';
    $('#player-turn span').html(playerTurn);
    $('#current-roll-score span').html('0');
    $('#round-count span').html('0')
    diceCount = ['', '', '', '', ''];
    diceAvail = [true, true, true, true, true];
    playerScore = 0;
    $('.scores').html("");
    currentRollPoints = [];
    cleanRoll = true;
    turnSum = 0;
    countLoses = 0;
    $('.dice').html("");
    $('.dice').css("border-color", "black");
};




function diceSum(diceCount) {
    var total = 0;
    len = diceCount.length;

    for (var i = 0; i < len; i++) {
        if (diceCount[i] !== 2 && diceCount[i] !== 5) {
            total += diceCount[i];
        }
    }
    return total;
};



function pointsSum(currentRollPoints) {
    console.log(currentRollPoints);
    var total = 0;
    len = currentRollPoints.length;

    for (var i = 0; i < len; i++) {
        total += currentRollPoints[i];
    }

    return total;
}