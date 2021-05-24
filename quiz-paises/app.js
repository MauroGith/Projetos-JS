const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const correctAnswers = ['B', 'A', 'B', 'B']

const scorePanel = document.createElement('p')
scorePanel.setAttribute('class','lead regular shadow')
scorePanel.style.backgroundColor = 'white'

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
    
    button.insertAdjacentElement('beforebegin', scorePanel)
    if(score < 50) {
        scorePanel.classList.add('text-danger')
        scorePanel.classList.remove('text-success')
    } else {
        scorePanel.classList.add('text-success')
        scorePanel.classList.remove('text-danger')
    }
    
    scorePanel.textContent = `Você acertou ${score}% do quiz !`
})

