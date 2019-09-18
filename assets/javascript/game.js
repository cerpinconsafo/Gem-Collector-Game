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
    //(Math.random() * ((max - min) + 1)) + min
    let cpu = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log('The score to match is: ' + cpu);
    //to make the random number show up at the goblinScore id
    $('#goblinScore').text('The Goblins Maximum Bagspace is: ' + cpu);


    let playerScore = 0;
    let wins = 0;
    let loss = 0;



    //generating our random gem numbers
    let gem1 = Math.floor(Math.random() * 11 + 1);
    let gem2 = Math.floor(Math.random() * 11 + 1);
    let gem3 = Math.floor(Math.random() * 11 + 1);
    let gem4 = Math.floor(Math.random() * 11 + 1);

    /*
    console.log('The value of the 1st gem is ' + gem1);
    console.log('The value of the 2nd gem is ' + gem2);
    console.log('The value of the 3rd gem is ' + gem3);
    console.log('The value of the 4th gem is ' + gem4);
    */


    //reset

    function reset() {

        cpu = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        console.log('The new score to match is: ' + cpu);

        $('#goblinScore').text('The Goblins Maximum Bagspace is now: ' + cpu);
        playerScore = 0;
        $('#playerScore').text('Start Looting those Gems Again!');

        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
        console.log('The value of the 1st gem is ' + gem1);
        console.log('The value of the 2nd gem is ' + gem2);
        console.log('The value of the 3rd gem is ' + gem3);
        console.log('The value of the 4th gem is ' + gem4);

    }

    //win and lose funcions
    function winner() {
        alert('A WINNER! ALL THE GEMS ARE YOURS!  YOU ARE RICH BEYOND BELIEF!');
        wins += 1;
        $("#winCount").text("Successful Loots: " + wins);
        reset();
    }

    function loser() {
        alert('YOU LOSE! BACK TO THE DUNGEON FROM WHICH YOU HAVE CRAWLED, YOU THEIFING MONGREL!');
        loss += 1;
        $("#lossCount").text('Dungeon Visits: ' + loss);
        reset();
    }



    //onclick events for gem buttons

    $('#button-1').on('click', function() {
        playerScore = playerScore + gem1;

        //console.log('Gem 1, worth ' + gem1 + ', has been added to your bag!')
        console.log('Your current score : ' + playerScore);

        $('#playerScore').text('You currently have ' + playerScore + ' gems in your bag!');
        if (playerScore == cpu) {
            winner();
        } else if (playerScore > cpu) {
            loser();
        }
    })
    $('#button-2').on('click', function() {
        playerScore = playerScore + gem2;

        //console.log('Gem 2, worth ' + gem2 + ', has been added to your bag!')
        console.log('Your current score : ' + playerScore);

        $('#playerScore').text('You currently have ' + playerScore + ' gems in your bag!');
        if (playerScore == cpu) {
            winner();
        } else if (playerScore > cpu) {
            loser();
        }
    })
    $('#button-3').on('click', function() {
        playerScore = playerScore + gem3;

        //console.log('Gem 3, worth ' + gem3 + ' has been added to your bag!')
        console.log('Your current score : ' + playerScore);

        $('#playerScore').text('You currently have ' + playerScore + ' gems in your bag!');
        if (playerScore == cpu) {
            winner();
        } else if (playerScore > cpu) {
            loser();
        }
    })
    $('#button-4').on('click', function() {
        playerScore = playerScore + gem4;

        //console.log('Gem 4, worth ' + gem4 + ', has been added to your bag!')
        console.log('Your current score = ' + playerScore);

        $('#playerScore').text('You currently have ' + playerScore + ' gems in your bag!');
        if (playerScore == cpu) {
            winner();
        } else if (playerScore > cpu) {
            loser();
        }
    })


});