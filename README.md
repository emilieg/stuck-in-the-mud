# Stuck in the Mud - Dice Game 

The game is hosted here: http://emilieg.github.io/stuck-in-the-mud/ 

*Screenshot*:
  
![Alt](mud-in-screen.png "Stuck in the Mud")

## How to play the game:

The first player rolls all five dice. If any 2s or 5s are rolled, no points are scored for this throw.
If no 2s or 5s are rolled, the total is added to the player's score. 
Any 2s and 5s become STUCK IN THE MUD, and only the remaining dice are rolled. 
Again, if any 2s or 5s are thrown, no points are scored. If there are no 2s or 5s, the total is added to the previous score.
Continue in this way until all the dice are STUCK IN THE MUD. 
After the score is totaled, play passes to the next player.
There are 3 rounds of play.

This is where I found the original game: http://www.activityvillage.co.uk/stuck-in-the-mud

# Technologies used:
* *HTML* & *Bootstrap*, layout
* *CSS*, style
* *Javascript*, game logic 
* *jQuery*, DOM manipulation
* *Sweet Alerts*, alert notifications 

# Installation Instructions:
* Clone this repo by copying the link and running git clone in your terminal
* Open the index.html page in your browser
* Ready Set Play! 

# Approach: 
I started by breaking down the logic of the game and determining scoring and turns. The logic and code were structured using a game loop (start of game, rolling dice, scoring, clearing turn scores and switching player turns). The styling was implemented last. 

