let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('bem-vinda, ' + info.personagem)

info.recorrente = 'sim'

// console.log(info)

// for (key in info) {
//   console.log(key)
// }

// for (key in info) {
//   console.log(info[key])
// }

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

// for (key2 in info) {
//   for (key in info2) {
//     if (key == key2 && key != 'recorrente') {
//       console.log(info[key] + ' e ' + info2[key2])
//     } else if (key == key2 && key == 'recorrente') {
//       console.log('ambos são recorrentes')
//     };
//   };
// };

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [ 
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ]
};


leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling',editora: 'Rocco', })

// if (leitor.livrosFavoritos.length === 2) {
//   console.log(leitor.nome + ' tem 2 livros favoritos')
// } else {
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é ' + leitor.livrosFavoritos[1].titulo)
// }

function verificacaoDePalindromo (palavra) {
  let palindromo = palavra;
  palindromo = palindromo.split('');
  palindromo = palindromo.reverse();
  palindromo = palindromo.join('');
  if (palindromo === palavra) {
    return true
  } else {
    return false
  };
};

// console.log(verificacaoDePalindromo('arara'))
// console.log(verificacaoDePalindromo('desenvolvimento'))

function retornoDeIndiceDeMaiorValor (vetor) {
  let julgamento = vetor;
  let maiorIndice = 0;
  let testadorDeIndice = 0
  for (let index = 0; index < julgamento.length; index++) {
    if (testadorDeIndice < julgamento[index]) {
      testadorDeIndice = julgamento[index]
      maiorIndice = index
    }
  };
  return maiorIndice
};

let vetorTeste = [2, 3, 6, 7, 10, 1];

// console.log(retornoDeIndiceDeMaiorValor(vetorTeste))

function retornoDeIndiceDeMenorValor (vetor) {
  let julgamento = vetor;
  let menorIndice = 0;
  let testadorDeIndice = 0
  for (let index = 0; index < julgamento.length; index++) {
    if (testadorDeIndice > julgamento[index]) {
      testadorDeIndice = julgamento[index]
      menorIndice = index
    }
  };
  return menorIndice
};

vetorTeste2 = [2, 4, 6, 7, 10, 0, -3];

// console.log(retornoDeIndiceDeMenorValor(vetorTeste2))

function retornoDeMaiorNome (vetor) {
  let julgamento = vetor;
  let maiorNome;
  let testadorDeIndice = 0
  for (let index = 0; index < julgamento.length; index++) {
    if (testadorDeIndice < julgamento[index].length) {
      testadorDeIndice = julgamento[index].length
      maiorNome = julgamento[index]
    }
  };
  return maiorNome
};

vetorDeNomens = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// console.log(retornoDeMaiorNome(vetorDeNomens))

function moda (parametro) {
  let vetorModa = parametro;
  let quantidadeDeRepeticoes = 0;
  let testeDeRepeticoes = 0;
  let numeroMaisRepetido;
  for (let x = 0; x < vetorModa.length; x += 1) {
    quantidadeDeRepeticoes = 0;
    for (let i = 0; i < vetorModa.length; i+= 1) {
      if (vetorModa[i] === vetorModa[x]) {
        quantidadeDeRepeticoes += 1
      }
    };
    if (quantidadeDeRepeticoes > testeDeRepeticoes){
      testeDeRepeticoes = quantidadeDeRepeticoes;
      numeroMaisRepetido = vetorModa[x];
    };
  };
  return numeroMaisRepetido
};

let vetorTeste3 = [2, 3, 2, 5, 8, 2, 3];

console.log(moda(vetorTeste3))