let numberOfQuestion = 0;

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

 document.getElementById("question").innerHTML = addQuestionsAndAnswers[numberOfQuestion].question;



// need to loop through the answers and output on buttons??? 


for (let i = 0; i < addQuestionsAndAnswers[answers[0]].length; i++){
  let codeAnswers = addQuestionsAndAnswers.push(addQuestionsAndAnswers[answers[i]])
    document.getElementsByClassName("answers").innerHTML = codeAnswers.answers;



}

// add timer to the page 


  


};

test();
