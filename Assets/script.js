var answerButtonEl = $('li');
var timeLeftEl = $("#timeLeft")
var testEl = $('#test')
var questionEl = $('#question');

const questionList = ["What is the correct syntax for referring to an external script called 'example.js'?", ]
const answerList = [""]

function startQuiz() {
    startBtn.setAttribute("style", "display: none;");
    heading.innerText = null;
    subHeading.innerText = null;
    timerEnd = setInterval(startTime, 1000);
    showQuestion();
};

var startingMinutes = 5;
var time = startingMinutes * 60;
var multiChoice = [
  {
    title:
      "_______ is the process of finding errors and fixing them within a program.",
    choices: ["Compiling", "Executing", "Debugging", "Scanning"],
    correctA: "Debugging",
  },
  {
    title:
      "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified?",
    choices: ["If-Else", "For", "While", "If"],
    correctA: "For",
  },
  {
    title: "A loop that never ends is referred to as a(n)_________.?",
    choices: ["While loop", "Infinite loop", "Recursive loop", "For loop"],
    correctA: "Infinite loop",
  },
  {
    title:
      "What is the term used for a block of code that is executed repeatedly until a certain condition is met?",
    choices: ["Function", "Loop", "Condition", "Variable"],
    correctA: "Loop",
  },
  {
    title:
      "Which data structure is used for storing a collection of elements in a non-linear fashion?",
    choices: ["Array", "Stack", "Queue", "Tree"],
    correctA: "Tree",
  },
  {
    title: "Which of the following is not a web browser?",
    choices: ["Chrome", "Safari", "Firefox", "Photoshop"],
    correctA: "Photoshop",
  },
  {
    title: "Which of the following is not a programming language?",
    choices: ["HTML", "CSS", "MySQL", "JavaScript"],
    correctA: "MySQL",
  },
  {
    title: "Which of the following is a type of computer network?",
    choices: [
      "Local Area Network (LAN)",
      "Wide Area Network (WAN)",
      "Metropolitan Area Network (MAN)",
      "All of the above",
    ],
    correctA: "All of the above",
  },
  {
    title: "During program development, software requirements specify?",
    choices: [
      " How the program will accomplish the task",
      "What the task is that the program will perform.",
      "How to divide the task into subtasks",
      "How to test the program when it is done",
    ],
    correctA: "What the task is that the program will perform.",
  },
  {
    title: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler",
    ],
    correctA: "Hyper Text Markup Language",
  },
];


answerButtonEl.on ('click', function(){
    questionEl.html(`${question1}`);
    alert("asnwers go here");
})