//Initialize variables//
var restart = document.getElementById("restart");

var result = document.getElementById("result");
var lowScore = 0;
var highScore = 0;
var numAnswered = 0;

// Set each quiz question a variable//
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q11a1 = document.getElementById("q11a1");
var q11a2 = document.getElementById("q11a2");

//Link buttons to functions or events//
restart.addEventListener("click",restartQuiz);

q1a1.addEventListener("click", low);
q1a2.addEventListener("click", high);
q2a1.addEventListener("click", low);
q2a2.addEventListener("click", high);
q3a1.addEventListener("click", low);
q3a2.addEventListener("click", high);
q4a1.addEventListener("click", high);
q4a2.addEventListener("click", low);
q5a1.addEventListener("click", high);
q5a2.addEventListener("click", low);
q6a1.addEventListener("click", high);
q6a2.addEventListener("click", low);
q7a1.addEventListener("click", high);
q7a2.addEventListener("click", low);
q8a1.addEventListener("click", high);
q8a2.addEventListener("click", low);
q9a1.addEventListener("click", high);
q9a2.addEventListener("click", low);
q10a1.addEventListener("click", high);
q10a2.addEventListener("click", low);
q11a1.addEventListener("click", high);
q11a2.addEventListener("click", low);

//Functions//
function low() { //Low chances of getting into a top college//
  lowScore += 1;
  numAnswered +=1;
  console.log("numAnswered = " + numAnswered + "lowScore = " + lowScore);
  if (numAnswered == 11) {
    console.log("The quiz is done!")
    updateResult()
  }
}

function high() { //High chances of getting into a top college//
  highScore += 1;
  numAnswered += 1;
  console.log("numAnswered = " + numAnswered + "highScore = " + highScore)
  if (numAnswered == 11) {
    console.log("The quiz is done!")
    updateResult()
  }
}

function updateResult() { //Returns quiz result//
  if (highScore >= 6) {
    console.log("You have high chances!");
    result.innerHTML = "You have a reasonable shot at the top colleges in America! However, this is no guarantee since different colleges place different amounts of emphasis on many factors that are not included in this quiz. Don't be too confident and continue striving!";
  } else if (lowScore >= 6) {
    console.log("You have low chances!");
    result.innerHTML = "You don't have as high of a chance to get admitted into America's top colleges. However, this is no guarantee since different colleges place different amounts of emphasis on many factors that are not included in this quiz. Don't be discouraged and continue striving!";
  }
}

function restartQuiz() { //Restarts the quiz
  result.innerHTML = "Your result: ";
  lowScore = 0;
  highScore = 0;
  numAnswered = 0;
  console.log("lowScore = "+lowScore);
  console.log("highScore = "+highScore);
  console.log("numAnswered = "+numAnswered);
}
