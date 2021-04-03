var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);
var prompt = document.querySelector("#prompt")

var interval = 0;
var secondsLeft = 60
var currentTime = document.querySelector("#time");

var score = 0;
var penalty = 10;
var question = document.querySelector("#questions");
var choice1El = document.querySelector("#A");
var choice2El = document.querySelector("#B");
var choice3El = document.querySelector("#C")
var choice4El = document.querySelector("#D");

var finalScore = document.querySelector("#final-score")
finalScore.style.display = "none";
var finalScoreBoard = document.querySelector("#final-score-form")
finalScoreBoard.style.display = "none"


choice1El.style.display = "none";
choice2El.style.display = "none";
choice3El.style.display = "none";
choice4El.style.display = "none";


//questions
var q1 = {
    question: "What are the different (primitive) data types presented in javascript?",
    choice1: "string, number, boolean, undefined, null",
    choice2: "only string",
    choice3: "string, boolean, null",
    choice4: "boolean, number, string",
    answer: "string, number, boolean, undefined, null"
}

var q2 = {
    question: "Explain “this” keyword.",
    choice1: "The “this” keyword refers to the object that the function is a property of and the value of “this” keyword will always depend on the object that is invoking the function.",
    choice2: "a little bit of this, and a little bit of that",
    choice3: "undefined",
    choice4: "none of the above",
    answer: "The “this” keyword refers to the object that the function is a property of and the value of “this” keyword will always depend on the object that is invoking the function."
}

var q3 = {
    question: "Arrays, which are a collection of like or similar elements, start with an index of what?",
    choice1: "0",
    choice2: "2",
    choice3: "1",
    choice4: "i",
    answer: "0"
}

var q4 = {
    question: "what value stands for true or false when it comes to coding?",
    choice1: "string",
    choice2: "boolean",
    choice3: "variables",
    choice4: "confirm",
    answer: "boolean"
}

var q5 = {
    question: "what does DOM stand for?",
    choice1: "Document Object Model",
    choice2: "Delete Object Memory",
    choice3: "all of the above",
    choice4: "none of the above",
    answer: "Document Object Model"
}

var questionArr = [q1, q2, q3, q4, q5];
var index = 0

// Start Quiz sets time
function startQuiz() {
    startButton.style.display = "none"
    prompt.style.display = "none"
    count();
    render();
}


// timer 
function count() {
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(interval);
                finalScore.append(score)
                finish();
                currentTime.textContent = "Time's Up";
            }
        }, 1000);
    }
}


function render() {
    //allows you to show question and choices (they were originally set to hidden before this function is ran)
        //allows you to show question and choices
        question.style.display = "block";
        choice1El.style.display = "table-row";
        choice2El.style.display = "table-row";
        choice3El.style.display = "table-row";
        choice4El.style.display = "table-row";
    
        //if correct answer is clicked and there are questions left = move on to the next question. if selected wrong answer decrement the time. 
        if (index < questionArr.length) {
            question.textContent = questionArr[index].question;
            choice1El.textContent = questionArr[index].choice1;
            choice2El.textContent = questionArr[index].choice2;
            choice3El.textContent = questionArr[index].choice3;
            choice4El.textContent = questionArr[index].choice4;
            answer = questionArr[index].answer
    
            if (secondsLeft > 10) {
                choice1El.onclick = function () {
                    if (questionArr[index].choice1 == answer) {
                        score++
                        index++
                        render()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
    
                choice2El.onclick = function () {
                    if (questionArr[index].choice2 == answer) {
                        score++
                        index++
                        render()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
    
                choice3El.onclick = function () {
                    if (questionArr[index].choice3 == answer) {
                        score++
                        index++
                        render()
                    }else {
                    secondsLeft = secondsLeft - 10  
                    }
                }
    
                choice4El.onclick = function () {
                    if (questionArr[index].choice4 == answer) {
                        score++
                        index++
                        render()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
            } 
        } else {
           console.log('Great Job!')
           currentTime = 0
           finalScore.append(score)
           finish()
        }
    }
    function finish() {
        question.style.display = "none";
        choice1El.style.display = "none";
        choice2El.style.display = "none";
        choice3El.style.display = "none";
        choice4El.style.display = "none";
        finalScore.style.display = "table-row";
        finalScoreBoard.style.display = "table-row"
    
        //show finalcore prompt
        //make enter button redirect/ reset the quiz
    }

    // localStorage.set('nameToRetrieveLater', JSON.stringify (yourObject))
 
    // Then you need something to hold the retrieved value
 
    // let highScore = localStorage.get(JSON.parse ( 'nameToRetrieveLater'))

    let subBtn = document.getElementById("saveInitials")
    subBtn.addEventListener("click", saveScore)

    
    function saveScore() {
        console.log("its running")
        let initials = document.getElementById("inputInitials").value;
        console.log(initials)
        let highScore = JSON.parse(localStorage.getItem("leaderBoardScores")) || [];
        console.log(highScore)
        highScore.push({

           initials: initials,
           score: score,
        });
        localStorage.setItem('leaderBoardScores', JSON.stringify(highScore))
 
        let displayInitials = document.createElement("p");
        let lBContainer = document.getElementById("LeaderBoard");
        lBContainer.append(displayInitials); 
        displayInitials.append(initials);
        displayInitials.append(score);
    }

    function showLeaderBoard() {

    }