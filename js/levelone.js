
 function setGroup() {
  return [...Array(3)].map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join(''); 
}

 function optionsMoreOrLess() {
  let options = [" es mayor que ", " es menor que "];
  return options[Math.floor(Math.random() * options.length)];
}

 function optionsEqualOrDiff() {
  let options = [" es igual a ", " es diferente a "];
  return options[Math.floor(Math.random() * options.length)];
}

 function displayNewStatement( set1, comp, set2 ){
  statement = set1 + comp + set2;
  return statement;  

}

let  score = 0;
let scoreDisplay = document.getElementById("score");


function iniciarJuego() {
  let score = 0;
  let set01 = setGroup();
  let comparison = optionsMoreOrLess();
  let set02 = setGroup();
  let statement1 = displayNewStatement(set01, comparison, set02);
  let done = false;
  let question = document.getElementById('question');
  let declaration = document.getElementById('statement1');
  declaration.innerHTML = `<p>${statement1}</p>`;

  question.innerHTML = `¿Qué relación tiene ${set01} frente a ${set02}?`;
}


let done = false; 
function checker(input) {
  if (input === 'mayor' && comparison === ' es mayor que ') {
    score++;
  } else if (input === 'menor' && comparison === ' es menor que ') {
    score++;
  } else {
    score--;
  }
  done = true;
}

if (done === true) {
  displayNewStatement();
  done = false;
}


window.addEventListener('load', iniciarJuego);


