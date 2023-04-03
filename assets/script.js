var startButtonEl = $(".btn");
var points = 0;
var questionHeaderEl = $("#heading1");
var answerEl = $(".list-group-item");
var afterStart = $(".card-body");
var quizContainer =$("#quiz-container");
var score = $(secondsLeft);
var holdInterval = 0;
var questions = [
  {
    question: "Which of these is a primitive type in JS?",
    options: ["Bit", "Boolean", "Bug", "h1"],
    answer: "Boolean"
  },
  {
    question: "Which of these is a comparison operator in JS?",
    options: ["===", "?=", "=+=", "===="],
    answer: "==="
  },
  {
    question: "How do you use a variable anywhere?",
    options: ["Global scope", "Say it IS so", "local scope", "Show it a globe"],
    answer: "Global scope"
  },
  {
    question: "Math.random() returns a number between:",
    options: ["1-2", "0-2", "1-10", "0-1"],
    answer: "0-1"
  },
  {
    question: "the first index of an array is?",
    options: ["1", "0", "one", "Last"],
    answer: "0"
  },
  
];
 

//click event 1 starts timer
startButtonEl.on("click", function () {
  setTime();
});
var timeEl = $("#time");
var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text("Time: " + secondsLeft);
    
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      // $(alertTimeEl).css("display" , "inline");
    }
  }, 1000);
  //add class to hide question card
  showQuestion();

}

var quizContainer = document.getElementById("quiz-container");
var currentQuestionIndex = 0;

function showQuestion() {
  
  var questionObj = questions[currentQuestionIndex];

  var questionEl = document.createElement("h2");
  
  questionEl.textContent = questionObj.question;
  quizContainer.appendChild(questionEl);

  for (var i = 0; i < questionObj.options.length; i++) {
    var option = questionObj.options[i];

    var buttonEl = document.createElement("button");
    buttonEl.textContent = option;
    quizContainer.appendChild(buttonEl);
  }
    //answer options
  var buttons = quizContainer.querySelectorAll("button");
  
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var userAnswer = event.target.textContent;
      console.log(userAnswer);
      if (userAnswer === questionObj.answer){
      currentQuestionIndex++;
      quizContainer.innerHTML = "";
      showQuestion();
      //adds point to score
      points++
      console.log(points);
      } else {
        secondsLeft -= 5;
        currentQuestionIndex++;
      quizContainer.innerHTML = "";
      showQuestion();
      }
    });
  });

  if (currentQuestionIndex >= questions.length) {

    showResults();
    //unhide score(points) and enter initials also when timer reaches 0
  }
  
}
//trying to save time as score here


// var highScore = document.getElementById("final-score");
// function showResults() {
//   if (secondsLeft >= 0) {
    

//     var timeRemaining = secondsLeft;
//     var finalScore = $("<p>");
//     clearInterval(holdInterval);
//     finalScore.textContent = "Your score is: " + timeRemaining;
  
//     quizContainer.append(finalScore);

//     var score = $("#final-score").val();
//     var listItem = document.createElement("p");
//     listItem.textContent = score;
//     highScore.appendChild(listItem);
//     $("#final-score").val("timeRemaining");
//   }
// }


// startButtonEl.on("click", function () {
//   showQuestion();
// });

