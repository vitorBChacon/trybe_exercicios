// Arrays

let menu = ['home', 'serviços', 'portfólio', 'links'];
let menusevices = menu[1];
let indexOfPortifolio = menu.indexOf('portfólio')
menu.push('contato')


// for loop

for (let menuIndex = 0; menuIndex <= menu.length; menuIndex += 1) {
  console.log(menu[menuIndex])
}