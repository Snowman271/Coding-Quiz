const startButtonEl = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')

startButtonEl.addEventListener('click', startGame)

function startGame() {
startButtonEl.classList.add('hide')
questionContainerEl.classList.remove('hide')
}

function nextQuestion() {

}

function selectAnswer() {
    
}