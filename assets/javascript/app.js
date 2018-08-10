$(document).ready(function() {


    // var clickSound = new Audio("sound/button-click.mp3");


        function initialScreen() {
        startScreen = '<button type="button" id="start-button" class="btn btn-primary btn-lg">START GAME</button>';
        $("#mainWindow").html(startScreen);
        }
        initialScreen();

        $("#start-button").on("click", function(event) {
            generateHTML();
            timerWrapper();
            });

        

       
        $(".answer").on("click", function(event){
            // clickSound.play();
            answerSelected = $(this).text();
            if(answerSelected === correctAns[qCounter]) {
        
                clearInterval(clock);
                generateWin();
            }
            else {
                
                clearInterval(clock);
                generateLoss();
            }
        });

        $("#reset-button").on("click", function(event){
            // clickSound.play();
            resetGame();
        });

});
function generateTimeoutLoss() {
    unansweredTotal++;
    gameHTML = "<p class='text-center timer-p' id='timerText'>Time Remaining: <span class='timer' id='timer'>" + counter + "</span></p>" + "<p class='text-center' id='gameText'>Time's Up. The correct answer was: " + correctAns[qCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $("#mainWindow").html(gameHTML);
    setTimeout(hold, 4000); 
}

function generateWin() {
    correctTotal++;
    gameHTML = "<p class='text-center timer-p' id='timerText'>Time Remaining: <span class='timer' id='timer'>" + counter + "</span></p>" + "<p class='text-center' id='gameText'>Correct! The answer is: " + correctAns[qCounter] + "</p>" + imageArr[qCounter];
    $("#mainWindow").html(gameHTML);
    setTimeout(hold, 4000);
}
function generateLoss() {
    incorrectTotal++;
    gameHTML = "<p class='text-center timer-p' id='timerText'>Time Remaining: <span class='timer' id='timer'>" + counter + "</span></p>" + "<p class='text-center' id='gameText'>Wrong! The correct answer is: " + correctAns[qCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $("#mainWindow").html(gameHTML);
    setTimeout(hold, 4000); 
}
function generateHTML() {
    gameHTML = "<p class='text-center timer-p' id='timerText'>Time Remaining: <span class='timer' id='timer'>12</span></p><p class='text-center' id='gameText'>" + questionArr[qCounter] + "</p><p class='first-answer answer' id='answer'>A. " + answerArr[qCounter][0] + "</p><p class='answer' id='answer'>B. "+answerArr[qCounter][1]+"</p><p class='answer' id='answer'>C. "+answerArr[qCounter][2]+"</p><p class='answer' id='answer'>D. "+answerArr[qCounter][3]+"</p>";
    $("#mainWindow").html(gameHTML);
    }
function hold() {
    if (qCounter < 3) {
    qCounter++;
    generateHTML();
    counter = 12;
    timerWrapper();
    }
    else {
        endScreen();
    }
}

function timerWrapper() {
    clock = setInterval(twelveSec, 1000);
    function twelveSec() {
        if (counter === 0) {
            clearInterval(clock);
            generateTimeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $("#timer").html(counter);
    }
    }
function endScreen() {
    gameHTML = "<p class='text-center timer-p' id='timerText'>Time Remaining: <span class='timer' id='timer'>" + counter + "</span></p>" + "<p class='text-center' id='gameText'>Finished. Your results are: " + "</p>" + "<p class='summary-correct' id ='correctResults'>Correct Answers: " + correctTotal + "</p>" + "<p>Wrong Answers: " + incorrectTotal + "</p>" + "<p>Unanswered: " + unansweredTotal + "</p>" + "<p class='text-center reset-button-container' id='resetContainer'><a id ='reset-button' class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset this Quiz</a></p>";
    $("#mainWindow").html(gameHTML);
}

function resetGame() {
    qCounter = 0;
    correctTotal = 0;
    incorrectTotal = 0;
    unansweredTotal = 0;
    counter = 12;
    generateHTML();
    timerWrapper();
}


var startScreen;
var gameHTML;
var counter = 12;
var questionArr = ["When you throw an egg and break it, there is a chance that it will spawn a ________?", "A method of harvesting wheat is:", "What can help to deter Creepers from getting near your home?", "What must happen in order to for obsidian to be created in Minecraft?"];
var answerArr = [["Creeper", "Duck", "Chicken", "Egg Yolk"], ["Hit the wheat with your hand or with a tool", "Dump water on it", "Push it with a piston", "All of the above"], ["An Iron Golem", "A sign that makes fun of the fact that Creepers have no arms", "Cats", "A Creeper head on a fence post"], ["Water must touch a lava source block", "A water flow touches a lava flow", "Felsic lava extruded from a volcano must cool rapidly with minimal crystal growth", "Place a granite block into a furnace and heat it with lava"]];
var imageArr = ["", "", "", ""];
var correctAns = ["C: Chicken", "D: All of the above", "C: Cats", "A: Water must touch a lava source block"];
var qCounter = 0;
var answerSelected;
var clock;
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;



