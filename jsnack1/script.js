// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

const container = document.querySelector('.container');

let somma = 0;
for (let index = 0; index <10; index++) {
    let number = parseInt(prompt('inserisci un numero'));
    somma += number;
}

console.log(somma);

container.innerHTML += somma;
