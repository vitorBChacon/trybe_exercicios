// Requisito 1
let resultado = 1;
for (let fatorial = 4; fatorial > 1; fatorial--) {
  resultado = resultado * fatorial
  console.log(resultado, fatorial)
}

// Requisito 2
let word = 'trybe';
let backwardWord = '';
let letter;
for (let index = 0; index < word.length; index++){
  letter = word[index];
  backwardWord = letter + backwardWord;
};
console.log(backwardWord)

// Requisito 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = '';
let smallestWord = '';

for (let counter = 0; counter < array.length; counter++){
  if (biggestWord.length < array[counter].length){
    biggestWord = array[counter];
  };
  if (smallestWord.length > array[counter].length || smallestWord.length == 0){
    smallestWord = array[counter]
  };
};
console.log('the biggest word is', biggestWord)
console.log('the smallest word is', smallestWord)

// requisito 4
let primeNumbers = [];
let biggerPrime = 0;
let primeCounter;

for (arrayCreator = 2; arrayCreator <= 50; arrayCreator++) {
  primeCounter = 0;
  for (tester = 1; tester <= arrayCreator; tester++) {
    if (arrayCreator % tester === 0) {
      primeCounter++;
    };
  };
  if (primeCounter === 2) {
    primeNumbers.push(arrayCreator)
  };
};

for (gettingBiggerPrime = 0; gettingBiggerPrime < primeNumbers.length; gettingBiggerPrime++){
  if (primeNumbers[gettingBiggerPrime] > biggerPrime) {
    biggerPrime = primeNumbers[gettingBiggerPrime]
  };
};

console.log(biggerPrime);
// gabarito trybe