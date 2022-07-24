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
let biggestPrimeNumber = 0;
let primeNumberCounter = 0;
let primeNumberArray = []

for (number = 2; number <= 50; number++) {
  for (let primeTester = 1; primeTester <= number; primeTester++) {
    if (number % primeTester === 0) {
      primeNumberCounter = primeNumberCounter + 1
      if (primeNumberCounter > 2) {
        primeNumberArray.push(number)
      }
    };
  };
};
console.log(primeNumberArray)
// gabarito trybe