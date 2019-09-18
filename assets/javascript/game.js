//generate a random number for the following items upon PAGE LOAD/REFRESH or GAME RETRY
//1. The CPU (the number to match to win)
//2. The 4 unique Gem buttons (player choices)

//create a funtion that adds the value of the clicked gem button to the USERS score
//create a LOSE function for when the value of the USER goes above the CPU value
//1. i also want to show an image of a jailcell if the user loses before returning to the page
//create a function to modify and maintain score values

$(document).ready(function() {
    //here we define our variables for scoring
    //this Math.floor generates our random number to win
    let cpu = Math.floor(Math.random() * 101 + 19);
    console.log('The score to match is: ' + cpu);

    let player = 0;
    let win = 0;
    let loss = 0;

    //to make the random number show up at the goblinScore id
    $('#goblinScore').text('The Goblins maximum Bagspace is: ' + cpu);

    //generating our random gem numbers
    let gem1 = Math.floor(Math.random() * 11 + 1);
    let gem2 = Math.floor(Math.random() * 11 + 1);
    let gem3 = Math.floor(Math.random() * 11 + 1);
    let gem4 = Math.floor(Math.random() * 11 + 1);

    console.log('The value of the first gem is ' + gem1);
    console.log('The value of the second gem is ' + gem2);
    console.log('The value of the third gem is ' + gem3);
    console.log('The value of the fourth gem is ' + gem4);

});