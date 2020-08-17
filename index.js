// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? One is block scoped and the other is function scoped
 * 
 * 2. Which of the two uses a closure? How can you tell? the first one because of the return within the funtion. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? if we were to ever need to call upon counterMaker anywhere else its good to be outside of the function.
 *
*/

// counter1 code
// function counterMaker() {
//   let count = 0;
//   return function counter() {
//    return count++;
//   }
// }

// const counter1 = counterMaker();

// // counter2 code
// let count = 0;

// function counter2() {
//   return count++;
// }


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

  
     function inning(max){
        return Math.floor(Math.random() * Math.floor(max));
       }
    
 
 console.log(inning(2));



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/


function finalScore(cb,numOfInnings){ 
  let homeInningScores = []
  let awayInningScores = []
  for (let i = 1; i < (numOfInnings+1); i++){
    homeInningScores.push(cb(2));
    awayInningScores.push(cb(2));
  }
console.log(homeInningScores)
console.log(awayInningScores)  
}
finalScore(inning,9);
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, numOfInnings){



  function getInningScore(cb, numOfInnings) {
    let homeInningScores = []
    let awayInningScores = []
      for (let b =1; b<=numOfInnings; b++){
        homeInningScores.push(cb());
        awayInningScores.push(cb());
  }
    console.log(homeInningScores);
    console.log(awayInningScores);
}

  for(i = 0; i < numOfInnings; i++) {
    console.log(`Inning ${numOfInnings+1}: ${awayInningScores[i]} - ${homeInningScores[i]}`)
   }
  
}
  
console.log(scoreboard(inning, getInningScore, 19));






