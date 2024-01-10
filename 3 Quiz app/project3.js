const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            {text: "shark",correct: false},
            {text: "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false}
        ]
    },
    {
        question: "Who is the PrimeMinister Of Bharat ?",
        answers: [
            {text: "Rahul Gandhi",correct: false},
            {text: "Soniya Gnandhi",correct: false},
            {text: "Narender Modi",correct: true},
            {text: "Yogi Adityanath",correct: false}
        ]
    },
    {
        question: "Who will be the Richest, Educated & Happy person in your family ?",
        answers: [
            {text: "Nishant",correct: false},
            {text: "Ankur",correct: false},
            {text: "Akash",correct: false},
            {text: "Me",correct: true}
        ]
    },
    {
        question: "At what time I will be ready for hisar tomorrow ?",
        answers: [
            {text: "8:00 AM",correct: false},
            {text: "11:30 AM",correct: false},
            {text: "2:00 PM",correct: true},
            {text: "4:00 PM",correct: false}
        ]
    }
]

const questionElement  = document.getElementById("question")
const answerButtons  = document.getElementById("answer-buttons")
const nextButton  = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)

    })
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} Out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        handelNextButton();
    }else{
        startQuiz()
    }
})

startQuiz()