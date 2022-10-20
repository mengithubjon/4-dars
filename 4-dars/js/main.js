let answers = []
let questions = [
    'What is your name',
    'what is your phone',
    'How old are you'
]

for (let i = 0; i < questions.length; i++){
    answers[i] = prompt(questions[i])
}
console.log(answers)