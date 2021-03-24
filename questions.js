let numberOfQuestion = 0;
let timerEl = document.getElementById('quiz__Time');
let answerChoiceContainer = document.getElementById
("answerChoice__Container")

let timeLeft = 30;

function test() {

let addQuestionsAndAnswers = [
    {
        "question": "question 1 ",
        "answers": ["a", "b", "c", "d"],
        "correctAnswer": 0
    },
    {
        "question": "question 2",
        "answers": ["a1", "b1", "c1", "d1"],
        "correctAnswer": 1
    },
    {
        "question": "question 3",
        "answers": ["a2", "b2", "c2", "d2"],
        "correctAnswer": 2
    },
    {
        "question": "question 4",
        "answers": ["a3", "b3", "b3", "b3"],
        "correctAnswer": 0
    },
    {
        "question": "question 5",
        "answers": ["a4", "b4", "c5", "d5"],
        "correctAnswer": 3
    }
 ]
 
 
 
 function countdown() {
     
     var timeInterval = setInterval(function () {
      if (timeLeft === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval)
        displayMessage();
    }
    
    else {
  
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--; 
        }
        
  
    }, 1000);
  }
  
countdown();
 
// increments the questions 
showQuestions(numberOfQuestion);

answerChoiceContainer.addEventListener("click", function(){
    numberOfQuestion++
    showQuestions(numberOfQuestion)

} )


function showQuestions(currentQuestion) {
    
 answerChoiceContainer.innerHTML = "" 
 console.log("reach function")
 console.log(addQuestionsAndAnswers[0].question)
 console.log(currentQuestion)
 document.getElementById("question").innerHTML = addQuestionsAndAnswers[currentQuestion].question;
  



 for (let i = 0; i < addQuestionsAndAnswers[currentQuestion].answers.length; i++){
     let answerChoice = addQuestionsAndAnswers[currentQuestion].answers[i];

         let answerChoiceButton = document.createElement("button");
  answerChoiceButton.innerHTML = answerChoice;

  answerChoiceContainer.appendChild(answerChoiceButton)


//   let rightAnswer = addQuestionsAndAnswers[currentQuestion].correctAnswer;
//     function event(event){
//     if (event.target != rightAnswer ) {
//         alert("wrong!")
//     }
//     }
 }

    
    
}






};

test();
