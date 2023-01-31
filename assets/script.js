const startButtonEl = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const qustionEl = document.getElementById('question')
const answersEl = document.getElementById('answer-btns')
var timerEl = document.getElementById('timeNum');
var timerStart;
var timeAmt = 60;
startButtonEl.addEventListener('click', startGame)
answersEl.addEventListener('click', resetAns)

function startGame() {
startButtonEl.classList.add('hide')
questionContainerEl.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
 for (let i = 0; i < questions.length; i++) {
    showQuestion(questions[i])
 }   
}

//timer 
 timerStart = setInterval(clockTick, 1000);
 timerEl.textContent = time;

function showQuestion(question) {
    qustionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    })
}

function resetAns() {
   while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild)
   }
}

function selectAnswer() {
    
}

const questions = [
    {
        question: 'what is da + d',
        answers: [
        { text: 'mom', correct: false },
        { text: 'steve', correct: false },
        { text: 'dad', correct: true },
        { text: 'bob', correct: false }
        ]
    }
]

function timeCountDown() {
    timeAmt--;
    timerEl.textContent = timeAmt;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }