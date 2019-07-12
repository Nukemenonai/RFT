
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let optionsMoreLess = [" es mayor que ", " es menor que "];
let  score = 0;
let scoreDisplay = document.getElementById("score");
let question = document.getElementById("question");
let declaracion1 = document.getElementById("statement1");
var set01
var comp
var set02

function randComp(array){
  return optionsMoreLess[Math.floor(Math.random() * optionsMoreLess.length)];
  
}

function randomLetterGeneration() {
  return letters[Math.floor(Math.random() * letters.length)]+letters[Math.floor(Math.random() * letters.length)]+letters[Math.floor(Math.random() * letters.length)]; 
}


statement1.innerHTML = set01 + comp + set02;
question.innerHTML = `¿Qué relación tiene ${set01} frente a ${set02}?`

function resetStatement(){
  set01 = randomLetterGeneration();
  comp = randComp();
  set02 = randomLetterGeneration();
  statement1.innerHTML = set01 + comp + set02;
  question.innerHTML = `¿Qué relación tiene ${set01} frente a ${set02}?`;

}



function chkMore(){
  if(comp == " es mayor que " ){
    score ++;
  }else{
    score --
  }
  resetStatement();
  scoreDisplay.innerHTML = `Your score is ${score}`;
}

function chkLess(){
  if(comp == " es menor que "){
    score ++;
  }else{
    score --; 
  }
  resetStatement();
  scoreDisplay.innerHTML = `Your score is ${score}`;
}


resetStatement()