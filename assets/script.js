console.log("i am here");
var rootEl = document.body;

var questionArr = [
  {
    question: "What tag is used to define a hyperlink, or link to another page?",
    answer: "<a>",
    choices: ["<em>", "<strong>", "<a>", "<blockquote>"]
  }, {
    question: "What tag is used to define a container for an external app or plug-in?",
    answer: "<embed>",
    choices: ["<caption>", "<code>", "<!DOCTYPE>", "<embed>"]
  }, {
    question: "What tag is used to underline a word or line of text?",
    answer: "<s>",
    choices: ["<s>", "<li>", "<ul>", "<u>"]
  }, {
    question: "What tag is used to define a standard cell inside a table?",
    answer: "<td>",
    choices: ["<h1>", "<td>", "<button>", "<footer>"]
  }, {
    question: "Where is the JavaScript placed inside an HTML document or page?",
    answer: "In the <body> and <head> sections.",
    choices: ["In the <footer> section.", "In the <body> and <head> sections.", "In the <meta> section.", "In the <title> section."]
  }, {
    question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
    answer: "Arrays",
    choices: ["Variables", "Strings", "Arrays", "Recorders"]
  }, {
    question: "What is the name of the statement that is used to exit or end a loop?",
    answer: "Break Statement",
    choices: ["Falter statement", "Conditional Statement", "Close Statement", "Break Statement"]
  }, {
    question: "What is the format called that is used for storing and transporting data?",
    answer: "JSON",
    choices: ["JSON", "Syntax", "HTML", "Font"]
  }, {
    question: "What elements are used to test for TRUE or False values stored in variables?",
    answer: "Conditional Statements",
    choices: ["Comparison and logical operators.", "Conditional Statements", "Trigger readers.", "RegExp or Regular Expressions."]
  }, {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    answer: "Boolean",
    choices: ["Boolean", "Condition", "Event", "Array"]
  }
]
var q = 0;
// 
function showQuestion() {
  const questionText = document.getElementById("question-text");
  const answerChoice = document.getElementById("answer-choices");
  const currentQuestion = questionArr[q];

  if (q >= questionArr.length) {
    endQuiz();
    return
  }

  questionText.textContent = currentQuestion.question;

  answerChoice.innerHTML = "";

  // Populate the answer choices 
  currentQuestion.choices.forEach(function(choice, index){
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("choice");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function() {
      checkAnswer(choice, currentQuestion);
    });
    answerChoice.appendChild(choiceButton);
  });

  console.log(questionArr[q]);
}
// check answer
function checkAnswer(selectedChoice, currentQuestion){
 var currentQuestion = questionArr[q];

 // Update score for correct answer
 if (selectedChoice === currentQuestion.answer) {
  currentQuestion.answeredCorrectly = true;
  q++;
  score++;
 } else {

 }
 showQuestion();
}

function endQuiz(){
  console.log("quiz over")
}
var score = 0;
showQuestion();


