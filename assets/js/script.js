//using var is the old way. It should be const and let. this make the code more fluid updated as per the newest best practices.
var timeleft = document.querySelector("#time");
var hiscore = document.querySelector(".left-link");
var title = document.querySelector("#title");
var Elbelowtitle = document.querySelector("#Elbelowtitle");
var pbelowtitle = Elbelowtitle.querySelector("#ptext");
var btncontainer = document.querySelector(".buttoncontainer");
var answers = document.querySelector(".answers");
var startbtn = document.querySelector("#startbtn");
var answerdivbtn = document.querySelector("#divanswerbtn");
var answerbtn = document.querySelector(".answerbtn");
var answerresult = document.querySelector("#answerresult");
var test = document.querySelector("#testtext");
var secondsLeft = 75;
var currentquestion=-1; //we will create jsut one function to go from one question to another...so basically, the nextquestion will need to pick item 0 in the array. The nextquestion function will increment of 1 the variable currentquestion, hence the need to start at -1//
var score=secondsLeft;


// Questions that will be asked. I liked the model from geeksforgeeks since it was easily readable.
const Questions = [{
    qarray: "A B ____ D E F G",
    ansarray: [
    { text: "T", isCorrect: false },
    { text: "G", isCorrect: false },
    { text: "C", isCorrect: true },
    { text: "X", isCorrect: false }
    ]
 
},
{
    qarray: " ____ minus 4 minus 2 equals ZERO",
    ansarray: [
    { text: "16", isCorrect: false/*, isSelected: false*/ },
    { text: "66", isCorrect: false },
    { text: "166", isCorrect: false },
    { text: "6", isCorrect: true }
    ]
 
},
{
    qarray: "What does the fox say ? ________",
    ansarray: [
    { text: "woof", isCorrect: false },
    { text: "gring-ding-ding", isCorrect: true },
    { text: "meow", isCorrect: false },
    { text: "squeek", isCorrect: false }
    ]
 
},
{
    qarray: "String values must be enclosed within _____ when being assigned to variables.",
    ansarray: [
    { text: "commas", isCorrect: false },
    { text: "curly braces", isCorrect: false },
    { text: "quotes", isCorrect: true },
    { text: "parentheses", isCorrect: false }
    ]
 
},
{
    qarray: "If the man had blue shoes, and his dog had _____ paws, the bus driver would be 65 years old.",
    ansarray: [
    { text: "1", isCorrect: false },
    { text: "88", isCorrect: false },
    { text: "22", isCorrect: false },
    { text: "4", isCorrect: true }
    ]
 
}
 
]
for (let i = 0; i < Questions.length; i++) {
  console.log(Questions[i].ansarray[i]);
}




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
  //NEEDTO launch the function youlostlol---it doesn't exist yet
    }, 1000);
  }

function removestartbutton() {
    btncontainer.removeChild(startbtn);
    answerdivbtn.classList.remove("hide"); /*show 4 answers button on main page*/
    pbelowtitle.classList.add("hide"); /*hide the paragraph under the main tilte once the game is started*/
}


  /*this function needs to 
  1.replace the title var by the text of the question "q",
  2.replace text by 4 buttons containing answers
  3.when the user clicks the answer go to next function
  */
function nextquestion() {
    currentquestion++;
    console.log(currentquestion)
  
    //If there are no more questions, end the quizz
    if (currentquestion === Questions.length) {
      alert("game ended");
       //endgame();
    }

    //remove previous buttons if they are there
else

    answerdivbtn.innerHTML = ""; //empty innerHTML if any
    title.textContent = Questions[currentquestion].qarray;
    for (let i = 0; i < Questions[currentquestion].ansarray.length; i++) {
      const answerbtn = document.createElement("button");
      answerbtn.textContent = Questions[currentquestion].ansarray[i].text;
      answerbtn.onclick = AnswerClick;
      answerdivbtn.appendChild(answerbtn);
    //this function says for each I in the array, repeat below:
    //make a variable name answertbtn and create a new button element
    //in the css code, each button element has the same style
    //then create the onclick event to launch the function AnswerClick
    //append the newly created button to the answerdivbtn section (named in the variable) as the div container for the buttons.
    
   



    }
}

function AnswerClick() {
  nextquestion();
}

//First we need "start" a function
//This eventlistener will start timer, and launch 
startbtn.addEventListener("click", function() {
    startTimer();
    removestartbutton();
    nextquestion();
    console.log(Questions)
  });











//<-------------Event listener----------->//
//start button
