// variables used to start the quiz
var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

// timer variables
var interval = 0;
var secondsLeft = 60
var currentTime = document.querySelector("#time");

// question array variables for conditional

var questionArrayay = [q1, q2, q3, q4, q5];
var index = 0

// answer variables use these for contitional!! 
var question = document.querySelector("#questions");
var choice1El = document.querySelector("#A");
var choice2El = document.querySelector("#B");
var choice3El = document.querySelector("#C")
var choice4El = document.querySelector("#D");

// hide from html 
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




function render() {
    //allows you to show question and choices (they were originally set to hidden before this function is ran)
    question.style.display = "block";
    choice1El.style.display = "table-row";
    choice2El.style.display = "table-row";
    choice3El.style.display = "table-row";
    choice4El.style.display = "table-row";

    //check if index is < questionArray & turns to text
    if (index < questionArrayay.length) {
        question.textContent = questionArray[index].question;
        choice1El.textContent = questionArray[index].choice1;
        choice2El.textContent = questionArray[index].choice2;
        choice3El.textContent = questionArray[index].choice3;
        choice4El.textContent = questionArray[index].choice4;
        answer = questionArray[index].answer

    // checks for answer & if it is what is clicked == answer then it will move to next question


        if (secondsLeft > 10) {
            choice1El.onclick = function () {
                if (questionArray[index].choice1 == answer) {
                    
                    index++
                    render()
                } 
            }

            choice2El.onclick = function () {
                if (questionArray[index].choice2 == answer) {
                   
                    index++
                    render()
                } 
            }

            choice3El.onclick = function () {
                if (questionArray[index].choice3 == answer) {
                    
                    index++
                    render()
                }
            }

            choice4El.onclick = function () {
                if (questionArray[index].choice4 == answer) {
                    
                    index++
                    render()
               
            }
        } 
    } else {
       console.log('you made it through the quiz!')
    
       
    }
}
