// Arrays

let menu = ['home', 'serviços', 'portfólio', 'links'];
let menusevices = menu[1];
let indexOfPortifolio = menu.indexOf('portfólio');
menu.push('contato');


// for loop

for (let menuIndex = 0; menuIndex < menu.length; menuIndex += 1) {
  console.log(menu[menuIndex]);
};

// for/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let lista of names) {
  console.log(lista);
};

// do while

let x = 0;

while (x < 10) {
  x += 2
  console.log(x)
};