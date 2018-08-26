// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.


//Document Object Model (DOM) is ready for JavaScript 
$(document).ready(function() {
         //Runs first time for #randonNumber
    var randomNum = Math.floor(Math.random() * 101 + 19);
       console.log("First Run", randomNum);
        //Prints results for randonNum to #randonNumber.    
       $("#randomNumber").text(randomNum);
    //variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //Records the wins or losses from the function winning() or function losing().
    $("#totalWins").text(wins);
    $("#totalLoss").text(losses);
    //Each variable generates a random number between 1-12.
    var dia = Math.floor(Math.random()*11 +1);
    var sap = Math.floor(Math.random()*11 +1);
    var eme = Math.floor(Math.random()*11 +1);
    var rub = Math.floor(Math.random()*11 +1); 

    //This resets the game when a win or loss is reach.
    function reset () {
        //after reset the this value is used for #randomNumber
        randomNum = Math.floor(Math.random() * 101 + 19);
            console.log("After Reset", randomNum);
        $("#randomNumber").text(randomNum);
        dia = Math.floor(Math.random()*11 +1);
        sap = Math.floor(Math.random()*11 +1);
        eme = Math.floor(Math.random()*11 +1);
        rub = Math.floor(Math.random()*11 +1);
        userTotal = 0;
        $("#finalScore").text(userTotal);
        
    }

    function winning () {
       alert("You guessed correcly. You won!");
       wins++;
       $("#totalWins").text(wins); 
       //This calls for Function reset().
       reset();
    }

    function losing () {
        alert("You lost! Press Ok to play again!");
        losses++;
        $("#totalLoss").text(losses); 
        //This calls for Function reset().
        reset();
     }
     //diamond click event.
    $("#one").on("click", function() {
        userTotal = userTotal + dia;
        console.log("diamond new total",  dia);
        $("#finalScore").text(userTotal);

        if (userTotal === randomNum) {
            //This calls for function winning().
            winning();
            
        }
        else if (userTotal > randomNum) {
            //This calls for function losing().
            losing();
        }
    }); 
   //sapphire click event
    $("#two").on("click", function() {
        userTotal = userTotal + sap;
        console.log("sapphire new total", sap);
        $("#finalScore").text(userTotal);

        if (userTotal === randomNum) {
            winning();
            
        }
        else if (userTotal > randomNum) {
            losing();
        }
    }); 
    //emerald click event.
    $("#three").on("click", function() {
        userTotal = userTotal + eme;
        console.log("emerald new total", eme);
        $("#finalScore").text(userTotal);

        if (userTotal === randomNum) {
            winning();
            
        }
        else if (userTotal > randomNum) {
            losing();
        }
    });
    //ruby click event.
    $("#four").on("click", function() {
        userTotal = userTotal + rub;
        console.log("ruby new total", rub);
        $("#finalScore").text(userTotal);

        if (userTotal === randomNum) {
            winning();
            
        }
        else if (userTotal > randomNum) {
            losing();
        }
    }); 
});
// &copy; Copyright 2018 Michael Sayson