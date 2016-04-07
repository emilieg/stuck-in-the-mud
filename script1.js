//Global variables
//DiceBoard

var player1;

var player2;
var playerTurn;
var diceCount = ['', '', '', '', '']; //5 dices are available at the start
var diceAvail = [true, true, true, true, true];
var diceId;
var output = '';
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
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';




swal({  title: "Player1",
        text: 'Enter your Name',
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Enter your Name",
        customClass: 'sweet',
        confirmButtonColor:  "#FF0000" 
      },

      function(inputValue1) {
        $('#p1').text(inputValue1);
        player1 = inputValue1;
        sweetAlert2();
        $('#player-turn span').text(inputValue1);

        playerTurn = inputValue1;
        console.log(player1);
        return inputValue1;
      }
      
  )

$('#player2-scores').on('click', function(){
  sweetAlert2();
})

function sweetAlert2(){
  swal({  title: "Player2",
        text: 'Enter your Name',
        type: "input",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Enter your Name",
        customClass: 'sweet',
        confirmButtonColor:  "#FF0000" },

        function(inputValue2) {
        $('#p2').text(inputValue2);
        player2 = inputValue2;
        console.log(inputValue2);
        return inputValue2;
      }
      

)
}





var flipPlayerTurn = function() {
    $('#player-turn span').addClass('animated flash').one(animationEnd, function(){
    $(this).removeClass('animated flash');
    });

    if (playerTurn === player1) {
        playerTurn = player2; 
    } else {
        roundCount = roundCount + 1; //count game runs 
        playerTurn = player1; 
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
    $('.dice').css("color", "")

    }
};


var rollDice = function() {
    
    var faceValue,
        
        randNum;
   
        faceValue = Math.floor(Math.random() * 6);
        // output += "&#x268" + faceValue + "; ";
        output = "&#x268" + faceValue;
        // diceFace = output;
        
        switch(output) {
          case '&#x2680':
            randNum = 1;
            break;
          case '&#x2681':
            randNum = 2;
            break;
          case '&#x2682':
            randNum = 3;
            break;
          case '&#x2683':
            randNum = 4;
            break;
          case '&#x2684':
            randNum = 5;
            break;
          case '&#x2685':
            randNum = 6;
            break;
          default:
             console.log("need output");     
        }

        return randNum;
    // document.getElementById('dice-board').innerHTML = output;
}



$('#roll-dice').click(function() {

        if(gameLoop === false) {
            return;
        }
        //Call Roll Dice function for each die using a for loop

        console.log("playerTurn after click " + playerTurn);

        $('#round-count span').html(roundCount);

       

        $('#current-roll-score span').html(turnSum1);
        $('#current-roll-score span').html(turnSum2);

        console.log("diceAvail " + diceAvail);
                cleanRoll = true;
        

        for (i = 0; i < diceCount.length; i++) {
            console.log(diceCount[i]);
            if (diceAvail[i] === true) {

                
            


                diceCount[i] = rollDice();

                diceId = $('#die' + (i + 1)).html(output);
                
                // $('#die1').addClass('animated bounceInDown').one(animationEnd, function(){
                // $(this).removeClass('animated bounceInDown');
                // });
                // console.log($(diceId));

                

                if (diceCount[i] === 2 || diceCount[i] === 5) {
                    diceAvail[i] = false;
                    $(diceId).css('color', 'red');
                    cleanRoll = false;

                } 

                
            }
        }
        if (cleanRoll === true && playerTurn === player1) {
            turnSum1 = diceSum(diceCount);
            currentRollPoints1.push(turnSum1);
        
            console.log("turnSum player1 " + turnSum1);
            
            $('#current-roll-score span').html(turnSum1);
            
            playerScore1 = pointsSum(currentRollPoints1);
            $('#player1-scores').html(playerScore1); //

            console.log("playerScore1 "+  playerScore1);

        } else if (cleanRoll === true && playerTurn === player2) {
            turnSum2 = diceSum(diceCount);
            currentRollPoints2.push(turnSum2);
            console.log("turnSum player2 " + turnSum2);
            
            $('#current-roll-score span').html(turnSum2);
            
            playerScore2 = pointsSum(currentRollPoints2);
            
            $('#player2-scores').html(playerScore2);

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
                // $('#player-turn span').addClass('animated flash').one(animationEnd, function(){
                // $(this).removeClass('animated bounceInDown');
                // });


                
            }

        }

    }) //closing click function


function gameOver(playerScore1, playerScore2){
    
    if(playerScore1 > playerScore2) {
        winner = player1;
    }
    else {
        winner = player2;
    }
    $("#winner").show();
    $('#winner').html("THE WINNER IS:" + winner);
    $('#winner').addClass('animated bounceInDown').one(animationEnd, function(){
        $(this).removeClass('animated bounceInDown');
    });
    return winner;
}




$('#new-game').click(function() {
    $("#winner").hide();
    newGame();
});


function newGame() {
  swal({  title: "Player1",
        text: 'Enter your Name',
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Enter your Name",
        customClass: 'sweet',
        confirmButtonColor:  "#FF0000" 
      },

      function(inputValue1) {
        $('#p1').text(inputValue1);
        player1 = inputValue1;
        sweetAlert2();
        $('#player-turn span').text(inputValue1);

        playerTurn = inputValue1;
        console.log(player1);
        return inputValue1;
      }
      
  )

$('#player2-scores').on('click', function(){
  sweetAlert2();
})

function sweetAlert2(){
  swal({  title: "Player2",
        text: 'Enter your Name',
        type: "input",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Enter your Name",
        customClass: 'sweet',
        confirmButtonColor:  "#FF0000" },

        function(inputValue2) {
        $('#p2').text(inputValue2);
        player2 = inputValue2;
        console.log(inputValue2);
        return inputValue2;
      }
      

)
}
    $('#roll-dice').removeAttr('disabled');
    gameLoop = true;
    roundCount = 1;
    playerTurn = player1;
    $('#player-turn span').html(player1);
    $('#current-roll-score span').html('0');
    $('#round-count span').html('0');
    $('#player1-scores').html('');
    $('#player2-scores').html('');
    diceCount = ['', '', '', '', ''];
    diceAvail = [true, true, true, true, true];
    playerScore = 0;
    // $('.scores').html("");
    currentRollPoints = [];
    cleanRoll = true;
    turnSum = 0;
    countLoses = 0;
    $('.dice').html("");
    $('.dice').css("color", "");

};

//how to play the game modal
$('#glyphicon').click(function(){
  $('#myModal').modal('show');
});

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


