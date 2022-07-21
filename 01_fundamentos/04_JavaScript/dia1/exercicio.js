const a = 1;
const b = 2;
const c = 3;
let adicao = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

// requisito II
if (a > b) {
  console.log(a)
}else {
  console.log(b)
};

// requisito III
if (a > b && a > c) {
  console.log(a)
}else if (b > a && b > c ) {
  console.log(b)
}else {
  console.log(c)
};

// requisito IV
const valor = -3;

if (valor > 0) {
  console.log('positive')
}else if (valor < 0) {
  console.log('negative')
}else{
  console.log('zero')
};

// requisito V

const ang1 = 80
const ang2 = 40
const ang3 = 60

if (ang1 + ang2 + ang3 == 180) {
  console.log(true)
}else if (ang1 < 0 || ang2 < 0 || ang3 < 0 || ( ang1 != Number || ang2 != Number || ang3 != Number)){
  console.log('Valores inválidos')
}else{
  console.log(false)
};

// requisito VI
let chessPiece = 'Queen'

switch (chessPiece.toLowerCase()){
  case 'pawn': console.log('Moves 1 or 2 squares vertically and captures an adjacent diagonal piece')
    break;
  case 'knight': console.log('moves in a L')
    break;
  case 'bishop': console.log('moves on any square diagonal from its current position')
    break;
  case 'rook': console.log('moves to any square horizontal and vertical from its current position')
    break;
  case 'queen': console.log('moves to any square horizontal, vertical and diagonal from its current position')
    break;
  case 'king': console.log('moves to any adjacent square.')
    break;
  default: console.log('invalid piece')
    break;
};

// requisito VII
const nota = 104

if (nota >= 90 && nota <= 100) {
  console.log('A')
}else if (nota >= 80 && nota < 90) {
  console.log('B')
}else if (nota >= 70 && nota < 80) {
  console.log('C')
}else if (nota >= 60 && nota < 70) {
  console.log('D')
}else if (nota >= 50 && nota < 60) {
  console.log('E')
}else if (nota <= 40 && nota >= 0) {
  console.log('F')
}else{
  console.log('ERRO!')
};

// requisito VIII
const num1 = 3
const num2 = 8
const num3 = 7

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true)
}else {
  console.log(false)
}

// requisito IX
const num4 = 4
const num5 = 8
const num6 = 10

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
  console.log(true)
}else {
  console.log(false)
}

// requisito X
let custoDeProducao = 250
let valorDeVenda = 350
let lucro;

if (custoDeProducao > 0 && valorDeVenda > 0) {
  lucro = valorDeVenda * 1000 - ((custoDeProducao * 1.20) * 1000)
  console.log(lucro)
}else{
  console.log('ERRO!')
};

// requisito XI
let salario = 3000;
let salarioDeduzido;
let calculoIR;
let valorFinal;

if (salario <= 1556.94) {
  salarioDeduzido = salario * 0.92
}else if(salario > 1556.94 && salario < 2594.92){
  salarioDeduzido = salario * 0.91
}else if(salario > 2594.92 && salario < 5189.82){
  salarioDeduzido = salario * 0.89
}else{
  salarioDeduzido = salario - 570.88
}

if (salarioDeduzido > 1903.98 && salario <= 2826.65) {
  calculoIR = salarioDeduzido * 0.075 - (142.80)
  valorFinal = salarioDeduzido - calculoIR
  console.log(valorFinal)
}else if (salarioDeduzido > 2826.65 && salario <= 3751.05) {
  calculoIR = salarioDeduzido * 0.15 - (354.80)
  valorFinal = salarioDeduzido - calculoIR
  console.log(valorFinal)
}else if (salarioDeduzido > 3751.05 && salario <= 4664.68) {
  calculoIR = salarioDeduzido * 0.225 - (636.13)
  valorFinal = salarioDeduzido - calculoIR
  console.log(valorFinal)
}else if (salarioDeduzido > 4664.68) {
  calculoIR = salarioDeduzido * 0.275 - (869.36)
  valorFinal = salarioDeduzido - calculoIR
  console.log(valorFinal)
}else{
  console.log('Valor não registrado')
};