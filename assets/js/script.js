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
var resultcontainer = document.querySelector("#resultcontainer");
var answerresult = document.querySelector("#answerresult");
var test = document.querySelector("#testtext");
var secondsLeft = 75;
var currentquestion=-1; //we will create jsut one function to go from one question to another...so basically, the nextquestion will need to pick item 0 in the array. The nextquestion function will increment of 1 the variable currentquestion, hence the need to start at -1//
var score=secondsLeft;
var submitButton;
var namebox;
var namescoreArray;
var existingArray = localStorage.getItem("namescoreArray");
var timerInterval;



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





/*-------------Functions------------*/
function startTimer() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeleft.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        endgame();
      }
     }, 1000);
  }




  //DOES NOT WORK
  function stopTimer() {
    clearInterval(timerInterval);
  }
   

function removestartbutton() {
    btncontainer.removeChild(startbtn);
    answerdivbtn.classList.remove("hide"); /*show 4 answers button on main page*/
    pbelowtitle.classList.add("hide"); /*hide the paragraph under the main tilte once the game is started*/
}


  /*this function needs to 
  1.replace the title var by the text of the question "q",
  2.replace text by 4 buttons containing answers*/

function nextquestion() {
    currentquestion++;
    console.log(currentquestion)
  
    //If there are no more questions, end the quizz
    if (currentquestion === Questions.length) {
      answerdivbtn.innerHTML = ""; 
      console.log(currentquestion);
      endgame();
      return;
    }

   else
  // by emptying the innerHTML, we will remove the buttons, if there are any
    answerdivbtn.innerHTML = ""; 
    title.textContent = Questions[currentquestion].qarray;
    for (let i = 0; i < Questions[currentquestion].ansarray.length; i++) {
      const answerbtn = document.createElement("button");
      answerbtn.textContent = Questions[currentquestion].ansarray[i].text
      answerbtn.onclick = function() {
        AnswerClick(Questions[currentquestion].ansarray[i].isCorrect);
      };//This functions passes out if the answer is True or False to the function AnswerClick(isCorrect) with the parameter isCorrect. In the console log you can see if it is true or false.
      answerdivbtn.appendChild(answerbtn);
    //this function says for each I in the array, repeat below:
    //make a variable name answertbtn and create a new button element
    //in the css code, each button element has the same style
    //then create the onclick event to launch the function AnswerClick
    //append the newly created button to the answerdivbtn section (named in the variable) as the div container for the buttons.



    }
}
//This function need to see if the answer clicked is true or not

// Function to handle the button click
function AnswerClick(isCorrect) {
  console.log("Is Correct: " + isCorrect);
  // Add your logic here based on the isCorrect value
      if (isCorrect) {
        answerresult.textContent = (":)--------RIGHT--------(:");
        setTimeout(function() {
          // Execute this code after the delay
          answerresult.innerHTML=""
          nextquestion();
        }, 1000); // Delay of 2000 milliseconds (2 seconds)
      
        

      } else {
        secondsLeft = secondsLeft - 10;
        answerresult.textContent = (":(--------SO WRONG--------):");
        setTimeout(function() {
          // Execute this code after the delay
          answerresult.innerHTML=""
          nextquestion();
        }, 1000); // Delay of 2000 milliseconds (2 seconds)
    ;
  }
}


function endgame() {
  answerdivbtn.innerHTML = ""; //clear buttons if timer finishes before all questions are answered.
  console.log("done")
  console.log(secondsLeft);
  title.textContent = "All Done!!"
  score=secondsLeft;
  console.log(score);
  stopTimer();
  scorename();
}

function scorename (){
//I need to see the final score
//Ask for First Name
//Submit button to store name:highscore in localstorage
pbelowtitle.classList.remove("hide"); //show the paragraph under the main title
pbelowtitle.textContent = ("Congrats, your score is " + score);

// Step 1: Create the textbox element
namebox = document.createElement("input");
namebox.type = "text";
namebox.id = "nameTextbox";

// Step 2: Create the submit button element
submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
submitButton.classList= "btn"
submitButton.id = "nameSubmitButton";

// Step 3: Append the elements to a container element
btncontainer.appendChild(namebox);
btncontainer.appendChild(submitButton);

submitButton.addEventListener("click", function() {
  // Step 5: Retrieve the value of the textbox and log it to the console
  var textboxValue = namebox.value;
  console.log(textboxValue)
    namescoreArray = {
    score: score,
    name: namebox.value.trim(),
  };

savescorename(namescoreArray); //pass this namescoresArray object to the next function
submitButton.classList.add("hide"); //hide submit button after submit click
namebox.classList.add("hide"); //hide namebox after submit click
answerresult.textContent = (":)--------Thank you for playing--------(:");
        setTimeout(function() {
          // Execute this code after the delay
          answerresult.innerHTML="" //this clears the privous shown message
          }, 1500); // Delay of 2000 milliseconds (2 seconds)
     
});

};

function savescorename(namescoreArray) { //namecoreArray object is specified here to recall it from the previous function and use it in this one
   // Retrieve existing data from localStorage or an empty array
  var existingData = JSON.parse(localStorage.getItem("hiscorename")) || []; //existing data will be an array in local storage or an empry array
    console.log("existing data"); //debug
    console.log(existingData); //debug
// Check if existing data exists
  if (existingData) {
   // Add new name and score to the existing array
  existingData.push(namescoreArray);
  // Store the updated array in localStorage
  localStorage.setItem("hiscorename", JSON.stringify(existingData));
} 
} ;





console.log(score);
console.log(namebox);






//First we need "start" a function
//This eventlistener will start timer, and launch 
startbtn.addEventListener("click", function() {
    startTimer();
    removestartbutton();
    nextquestion();
    console.log(Questions)

    
  });
