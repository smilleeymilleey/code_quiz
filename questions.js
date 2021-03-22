function test() {

let questionArray = [
    {question:"question 1 ", answers:["a", "b", "c", "d"], correctAnswer:0,
     question:"question 2", answers:["a1","b1","c1", "d1"], correctAnswer:1,
     question:"question 3", answers:["a2","b2","c2","d2"], correctAnswer:2,
     question: "question 4", answers:["a3", "b3", "b3","b3"], correctAnswer:0,
     question: "question 5", answers: ["a4", "b4","c5","d5"], correctAnswer:3

} ]; 


// looping through list of questions and outputting onto the h1 
for(let i =0; i < questionArray.length; i++){
    let questionList = questionArray[i]
     document.getElementById("question").innerHTML = questionList.question;

}

for (let i = 0; i <questionArray.length; i++)

};

test();