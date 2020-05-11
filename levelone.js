import { displayNewStatement } from './sets.js';
import { setGen } from './sets.js';
import { optionsMoreLess } from './sets.js';

let score = 0
let set01 = setGen();
let comparison = optionsMoreLess();
let set02 = setGen();
let statement1 = displayNewStatement(set01, comparison, set2); 
let done = false; 
let question = document.getElementById("question");
let declaracion1 = document.getElementById("statement1");

question.innerHTML = `¿Qué relación tiene ${set01} frente a ${set02}?`

function checker(input){
  if(input === 'mayor' && comparison === ' es mayor que ') {
    score ++;
  }else if (input === 'menor' && comparison === ' es menor que ') {
    score ++;
  } else {
    score --; 
  }
  done = true; 
}

if (done === true) {
  displayNewStatement();
  done = false; 
}
