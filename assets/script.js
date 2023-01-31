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

 timerStart = setInterval(timeCountDown, 1000);
 timerEl.textContent = timeAmt;

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

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    }
];


function timeCountDown() {
    timeAmt--;
    timerEl.textContent = timeAmt;
  }
