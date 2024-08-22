let answer;
let score = 0
const question = document.getElementById("question")
const next = document.getElementById("next")
const input = document.getElementById("input")
const feedback = document.getElementById("feedback")
const submit = document.getElementById("submit")
const scores = document.getElementById('score')

// generates the question
function generateQuestion () {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)

    answer = num1 * num2

    question.textContent = `What is ${num1} multiplied by ${num2}?`
 question.textContent

feedback.textContent = ""
 input.value = ""


}

generateQuestion()

next.addEventListener('click', generateQuestion)

// checks if answer is correct, after clicking submit

function isCorrect () {
const inputID = Number (input.value)

if(inputID === answer ) {
    feedback.textContent = "Correct"
    feedback.style.color = "green"
    score++
scores.textContent = `score : ${score}`
   
} else {
    feedback.textContent = "Incorrect"
}
}

submit.addEventListener('click', isCorrect)

