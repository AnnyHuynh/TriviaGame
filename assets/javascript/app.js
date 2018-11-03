var counter = 60;
var intervalId;

function start(){

var timing = document.getElementById("timeCounter");
timing.innerHTML = counter;

function timeIt(){
counter--;
timing.innerHTML = counter;
  if (counter === 0){
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("start_quiz").style.visibility = "hidden";
  document.getElementById("quiz").style.visibility = "hidden";
  check();
}
}
intervalId = setInterval(timeIt, 1000);

document.getElementById("after_submit").style.visibility = "hidden";
document.getElementById("start_quiz").style.visibility = "hidden";
document.getElementById("quiz").style.visibility = "visible";
}
function stop(){
  clearInterval(intervalId);
  counter = 60;
}

function check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  if (question1 === "Beagle"){
    correct++;
  }else if (question1 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question2 === "Avocado"){
    correct++;
  }else if (question2 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question3 === "42"){
    correct++;
  }else if (question3 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question4 === "Bitch"){
    correct++;
  }else if (question4 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question5 === "Along the tongue and soles"){
    correct++;
  }else if (question5 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question6 === "24"){
    correct++;
  }else if (question6 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question7 === "Between 12 & 14 hrs"){
    correct++;
  }else if (question7 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question8 === "False"){
    correct++;
  }else if (question8 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question9 === "Corgi"){
    correct++;
  }else if (question9 === ""){
    unanswered++;
  }else{
    incorrect++;
  }
  if (question10 === "9"){
    correct++;
  }else if (question10 === ""){
    unanswered++;
  }else{
    incorrect++;
  }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("quiz").style.visibility = "hidden";
document.getElementById("start_quiz").style.visibility = "hidden";

document.getElementById("number_correct").innerHTML = "Correct Answers: "+ correct;
document.getElementById("number_incorrect").innerHTML= "Incorrect Answers: "+ incorrect;
document.getElementById("number_unanswered").innerHTML = "Unanswered: "+ unanswered;

if (correct > 7){
  alert("Yeah! You did a good job!!!");
}else{
  alert("Oppp! Try Again!");
}

stop();

}

function reset(){
  counter = 60;
  var timing = document.getElementById("timeCounter");
  timing.innerHTML = counter;
  correct = 0;
  incorrect = 0;
  unanswered = 10;
  document.getElementById("after_submit").style.visibility = "hidden";
  document.getElementById("quiz").style.visibility = "hidden";
  document.getElementById("quiz").reset();
  document.getElementById("start_quiz").style.visibility = "visible";
}
