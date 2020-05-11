function setGen() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)]+
           letters[Math.floor(Math.random() * letters.length)]+
           letters[Math.floor(Math.random() * letters.length)]; 
}

function optionsMoreLess() {
    let options = [" es mayor que ", " es menor que "];
    return options[Math.floor(Math.random() * options.length)];
}

function optionsEqualDiff() {
    let options = [" es igual a ", " es diferente a "];
    return options[Math.floor(Math.random() * options.length)];
}

function displayNewStatement( set1, comp, set2 ){
    statement = set1 + comp + set2;
    return statement;  
  
}

export { displayNewStatement }; 
export { setGen }; 
export { optionsMoreLess };
export { optionsEqualDiff }; 