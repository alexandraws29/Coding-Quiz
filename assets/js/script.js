// Variables
var questionEl = document.getElementById('question')
var score = 0
var currentQuestion = 0
var timerEl = document.getElementById('timer')
var beginNow = document.getElementById('beginQuiz')
var btnA = document.getElementById('opt-A')
var btnB = document.getElementById('opt-B')
var btnC = document.getElementById('opt-C')
var btnD = document.getElementById('opt-D')
var question = document.getElementById('question')
var qWrapEl = document.getElementById('question-wrapper')
var coverPage = document.getElementById("coverPage")
var endCoverPage = document.getElementById("endCoverPage")
var startAgain = document.getElementById('startQuizOver')
var timeLeft = 75;


let quizQuestion = [
    {Question: 'Which Operator is used to assign a value to a variable?', a: '=', b: '*', c: '-', d: '+',
    Answer: '='},
    {Question: 'how do you declare a JavaScript variable?', a: 'variable myVariable', b: 'v myVariable', c: 'var myVariable', d: 'var-my-variable',
    Answer: 'var myVariable'},
    {Question: 'Which event occurs when the user clicks on an HTML element?', a: 'onmouseover', b: 'onchange', c: 'hover', d: 'onClick',
    Answer: 'onClick'},
    {Question: 'How do you find the number with the highest value of x and y?', a: 'Math.max(x,y)', b: 'top(x,y)', c: 'Math.ceil(x,y)', d: 'ceil(x,y)',
    Answer: 'Math.max(x,y)'},
    {Question: 'Which is the correct way to write an array?', a: 'var colors = ("red", "blue", "green" )', b: 'var colors = {"red", "blue", "green" }', c: 'var colors = ["red", "blue", "green" ]', d: 'var colors = "red", "blue", "green" ',
    Answer: 'var colors = ["red", "blue", "green" ]'},
    {Question: 'How do we wright an inline comment?', a: '(comment)', b: '//comment', c: '<!--comment-->', d: '-comment-',
    Answer: '//comment'},
    {Question: 'How do we write a multiple line comment?', a: '/*comment*/', b: '-comment-', c: '//comment', d: '[comment]',
    Answer: '/*comment*/'},
    {Question: 'How does a for loop start?', a: 'for - i=0; i<=5', b: 'for i= 1 to 5', c: 'for (i<=5; i++)', d: 'for (i=0; <=5; i++',
    Answer: 'for (i=0; <=5; i++'},
    {Question: 'Which of these is a correctly writted if statement?', a: 'if (i === 5)', b: 'if i = 5 then', c: 'if i=5', d: 'if i == 5 then',
    Answer: 'if (i === 5)'},
    {Question: 'Which of these will pop up a message on the screen where the user must type a response?', a: 'alert', b: 'confirm', c: 'window.open', d: 'prompt',
    Answer: 'prompt'},
];

// Functions
function startQuiz () {
    coverPage.classList.add('displayNone')
    qWrapEl.classList.remove('displayNone')
    displayQuestion()
    countdown()
}

function gameOver(){
    qWrapEl.classList.add('displayNone')
    endCoverPage.classList.remove('displayNone')
    var finalScore = score + timeLeft
    var initials = prompt(`Congratulations! You got ${score}/${quizQuestion.length} correct! Your final score is ${finalScore}! Enter your initials to have them added to the highscores.`)
    localStorage.setItem('Final Score', `${initials}: ${finalScore}`)
}

var displayQuestion = function(){
  question.textContent = quizQuestion[currentQuestion].Question;
  btnA.textContent = quizQuestion[currentQuestion].a;
  btnB.textContent = quizQuestion[currentQuestion].b;
  btnC.textContent = quizQuestion[currentQuestion].c;
  btnD.textContent = quizQuestion[currentQuestion].d;
}


var next = function(e){

    var targetEl = event.target;
    if (targetEl.textContent === quizQuestion[currentQuestion].Answer){
    alert('correct')
    score++
    } else if (targetEl.textContent === 'Begin the Quiz Now!'){
    } else {
        alert('incorrect')
        timeLeft -= 10;
    }

    if(timeLeft === 0 || currentQuestion === quizQuestion.length -1){
        gameOver();
        return;
    }
    currentQuestion++;
    displayQuestion()
}


function countdown() {
    var timeInterval = setInterval(function() {
      if(timeLeft > 0 && currentQuestion < quizQuestion.length){
        timerEl.textContent = timeLeft + ' seconds remaining'
        timeLeft--
      } else{
        timerEl.textContent = ''
        clearInterval(timeInterval)
  
      }
  
    }, 1000);
  }
  



// Event Listeners
beginNow.addEventListener('click', startQuiz)
btnA.addEventListener('click', next)
btnB.addEventListener('click', next)
btnC.addEventListener('click', next)
btnD.addEventListener('click', next)
