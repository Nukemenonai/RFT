const setGroup = () => {
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

module.exports = { 
    setGroup,
    optionsMoreOrLess,
    optionsEqualOrDiff, 
    displayNewStatement 
};