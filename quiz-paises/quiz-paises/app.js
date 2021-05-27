const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')
const scorePanel = document.createElement('p')

const correctAnswers = ['B', 'A', 'B', 'B']



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
    
    scorePanel.setAttribute('class','lead regular shadow')
    scorePanel.style.backgroundColor = 'white'
    scorePanel.textContent = `Você acertou ${score}% do quiz !`

    if(score < 50) {
        scorePanel.classList.add('text-danger')
        scorePanel.classList.remove('text-success')
    } else {
        scorePanel.classList.add('text-success')
        scorePanel.classList.remove('text-danger')
    }
    
    button.insertAdjacentElement('beforebegin', scorePanel)
})



