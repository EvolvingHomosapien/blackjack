// Constant variables storing the quiz's questions, answers, and correct answer into arrays.
const questions = [
    {
    question: 'What is the data type of "JavaScript" ?' ,
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: true},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false},
        
        ]
    },
    {
    question: "What is the data type of 1?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: true},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false}
        ]
    },
    {
    question: "What is the data type of true?",
    answers: [
        {text: "Boolean", correct: true},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false}
        ]
    },
    {
    question: "What is the data type of const dataType = {language: 'JavaScript', topic: 'data types'}?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: true}
        ]
    },
    {
    question: "What is the data type of let a = null;?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: true},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false}
        ]
    },
    {
    question: "What is the data type of let a;?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: true},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false}
        ]
    },
    {
    question: "What is the data type of 9007199254740995n?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: true},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: false}
        ]
    },
    {
    question: "What is the data type of const mySymbol = Symbol();? ",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: true},
        {text: "Object", correct: false}
        ]
    },
    {
    question: 'What is the data type of const dataTypes = ["Boolean", "String", "Number", "BigInt", "null", "undefined", "Symbol", "Object"];?',
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: true}
        ]
    },
    {
    question: "Which of the 8 data types is the only non-primitive data type?",
    answers: [
        {text: "Boolean", correct: false},  
        {text: "String", correct: false},
        {text: "Number", correct: false},
        {text: "BigInt", correct: false},
        {text: "null", correct: false},
        {text: "undefined", correct: false},
        {text: "Symbol", correct: false},
        {text: "Object", correct: true}
        ]
        },
];

// Assigning variables to each element's ID.

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

// The state variables.
// This stores the question as an index value and the player's score so we can count the score.

let currentQuestionIndex = 0;
let score = 0;

// The functions.
// This function will set the first question's index to 0, the current score to 0, creates the next button with DOM manipulation, and displays the next question.

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT QUESTION";
    showQuestion();
}

// This function pairs an index value to each question and adds 1 to the default value since the first value of the array is 0 based.


function showQuestion() {

    
  // This function resets the previous question and answer.  
    
    
    refreshState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    // This function displays the answer to the current question.

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
         });

}
// This function will remove all the previous answers after a question has been complete.

function refreshState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// This function makes it so that if the selected data set is true, then it will add the class name "correct", if false, it will add the class name "incorrect".

function selectAnswer(a){
    const selectedBtn = a.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// The function displays the player's final score on a button at the end of their quiz.

function showScore(){
    refreshState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "PLAY AGAIN?";
    nextButton.style.display = "block";
}


function executeNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
if(currentQuestionIndex < questions.length){
    executeNextButton();
}else{
    startQuiz();
}}

// Envokes the original function that starts the quiz for the user.

)

startQuiz();