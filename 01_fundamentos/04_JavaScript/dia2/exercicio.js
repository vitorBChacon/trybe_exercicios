let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// requisito I
// for (let x = 0; x < numbers.length; x++) {
//   console.log(numbers[x])
// };

// requisito II
// let sum = 0;
// for (let x = 0; x < numbers.length; x++) {
// sum = sum + numbers[x]
// console.log(sum)
// };

// requisito III
// let mean = sum / 9;
// console.log(mean);

// requisito IV
// if (mean > 20){
//   console.log('Valor maior que 20');
// }else{
//   console.log('valor menor ou igual a 20');
// };

// requisito V
// let biggernumber = 0;
// for (x = 0; x < numbers.length; x++){
//   if (numbers[x] > biggernumber){
//     biggernumber = numbers[x]
//   };
// };
// console.log(biggernumber)

// requisito VI
// let oddNumbers = []
// for (x = 0; x < numbers.length; x++){
//   if (numbers[x] % 2 != 0){
//     oddNumbers.push(numbers[x])
//   };
// };
// console.log(oddNumbers)

// requisito VII
// let smallerNumber = 2000;
// for (x = 0; x < numbers.length; x++){
//   if (numbers[x] < smallerNumber){
//     smallerNumber = numbers[x]
//   };
// };
// console.log(smallerNumber)

// requisito VIII
let numbers2 = []
for (let x = 1; x < 26; x++) {
  numbers2.push(x)
}
// console.log(numbers2)

//requisito IX
let resultadosDaDivisao = []
for (x = 0; x < numbers2.length; x++){
  let divisao = numbers2[x] / 2
  resultadosDaDivisao.push(divisao)
};
console.log(resultadosDaDivisao)