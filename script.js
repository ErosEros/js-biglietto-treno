// console.log("js ok!")

// // first way to say: Ciao a tutti (print in html)
// document.writeln('Ciao a tutti')

// // second way to say: Ciao a tutti (print on the page)
// alert('Ciao a tutti')

// first question
const etaDelPasseggero = prompt ('Quanti anni hai?');
const textAsNumber = parseInt (etaDelPasseggero);
console.log (textAsNumber);
// second question
const km =prompt ('Quanti km devi percorrere?');
const Number = parseInt (km);
console.log (km);

// price for ticket
let ticket = km * 0.21;

// condition
if (textAsNumber < 18) {
    let ventiPercento  = (ticket / 100) *20;
    ticket = ticket - ventiPercento;
}

else if (textAsNumber > 65) {
    let quarantaPercento  = (ticket / 100) *40;
    ticket = ticket - quarantaPercento;
}


document.getElementById('biglietto').innerHTML = 'price for ticket' + " " + ticket 