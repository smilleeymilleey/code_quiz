let numberOfQuestion = 0;
let timerEl = document.getElementById
('quiz__Time');

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


// looping through list of questions and outputting onto the h1 
function countdown() {
    
  
    
    var timeInterval = setInterval(function () {
      if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval)
        displayMessage();
       } else {
  
        timerEl.textContent = "Time: " + timeLeft;
          timeLeft--; 
        }
      
  
   }, 1000);
  }
  
countdown();

// need to loop through the answers and output on buttons??? 
questions();
function questions() {
 


for (let i = 0; i < addQuestionsAndAnswers[numberOfQuestion].answers.length; i++){
    
    document.getElementById("question").innerHTML = addQuestionsAndAnswers[numberOfQuestion].question;
 
    let answerChoices = addQuestionsAndAnswers[numberOfQuestion].answers[i];
    let answerChoiceButton = document.createElement("button");
    
    answerChoiceButton.innerHTML = answerChoices;
    document.getElementById("answerChoice__Container").appendChild(answerChoiceButton)
    
    answerChoiceButton.addEventListener("click", function() {
        if (addQuestionsAndAnswers[numberOfQuestion].correctAnswer === i) {
           addQuestionsAndAnswers++;
           document.getElementById("question").innerHTML = addQuestionsAndAnswers[numberOfQuestion].question;
 
        }
        
    });
    
    
    
    
}

// add timer to the page 




}
};

test();
