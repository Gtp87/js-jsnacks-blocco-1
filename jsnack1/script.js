// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

const container = document.querySelector('.container');

// ciclo for
// let somma = 0;
// for (let index = 0; index <10; index++) {
//     let numero = parseInt(prompt('inserisci un numero'));
//     somma += numero;
// }

// console.log(somma);

// container.innerHTML += somma;


// ciclo while
let contatore = 0;
let somma = 0;

while (contatore < 10) {
    let numero = parseInt(prompt('inserisci un numero'));
    somma += numero;
    contatore++;
}

console.log(somma);
container.innerHTML += somma;
