var timeleft = document.querySelector("#time");
var hiscore = document.querySelector(".left-link");
var boldtxt = document.querySelector(".title");
var Elbelowtitle = document.querySelector("#Elbelowtitle");
var btncontainer = document.querySelector(".buttoncontainer");
var startbtn = document.querySelector("#startbtn");
var answerresult = document.querySelector("#answerresult");
var secondsLeft = 75;
var currentquestion=0;
var score=secondsLeft;

// Questions that will be asked. I liked the model from geeksforgeeks since it was easily readable.
const Questions = [{
    q: "A B ____ D E F G",
    a: [{ text: "T", isCorrect: false },
    { text: "G", isCorrect: false },
    { text: "C", isCorrect: true },
    { text: "X", isCorrect: false }
    ]
 
},
{
    q: " ____ minus 4 minus 2 equals ZERO",
    a: [{ text: "16", isCorrect: false/*, isSelected: false*/ },
    { text: "66", isCorrect: false },
    { text: "166", isCorrect: false },
    { text: "6", isCorrect: true }
    ]
 
},
{
    q: "What does the fox say ? ________",
    a: [{ text: "woof", isCorrect: false },
    { text: "gring-ding-ding", isCorrect: true },
    { text: "meow", isCorrect: false },
    { text: "squeek", isCorrect: false }
    ]
 
},
{
    q: "String values must be enclosed within _____ when being assigned to variables.",
    a: [{ text: "commas", isCorrect: false },
    { text: "curly braces", isCorrect: false },
    { text: "quotes", isCorrect: true },
    { text: "parentheses", isCorrect: false }
    ]
 
},
{
    q: "If the man had blue shoes, and his dog had _____ paws, the bus driver would be 65 years old.",
    a: [{ text: "1", isCorrect: false },
    { text: "88", isCorrect: false },
    { text: "22", isCorrect: false },
    { text: "4", isCorrect: true }
    ]
 
}
 
]
 




/*-------------Functions------------*/
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeleft.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        alert("You lost LOL");
      }
  //NEEDTO launch the function youlostlol
    }, 1000);
  }

function removestartbutton() {
    btncontainer.removeChild(startbtn);
}


  /*this function needs to 
  1.replace the boldtxt by the text of the question,
  2.replace Elbelowtitle by 4 buttons containing answers
  3.when the user clicks the answer go to next function
  */
function startquestions() {

}

//First we need "start" a function
//This eventlistener will start timer, and launch 
startbtn.addEventListener("click", function() {
    startquestions();
    startTimer();
    removestartbutton();
  });











//<-------------Event listener----------->//
//start button
