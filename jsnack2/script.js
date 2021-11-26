// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// ciclo for
// const invitati = ['giovanni', 'pippo', 'carmelo', 'maria', 'sara'];


// const nomeUtente = prompt('inserire proprio nome');


// let find = false;
// for (let index = 0; index < invitati.length; index++) {

//      if (nomeUtente == invitati[index]) {
//         find = true;
//      }
//  }

// if (find == false) {
// console.log('mi stai antipatico, non sei invitato');
// } else {
//  console.log('sei simpatico, sei invitato alla mia festa. prossimamente riceverai indicazioni su luogo ed ora. vestiti elegante');
// }

// ciclo while
const invitati = ['giovanni', 'pippo', 'carmelo', 'maria', 'sara'];
const nomeUtente = prompt('inserire proprio nome');
let find = false;
let i = 0;

while (find == false && i < invitati.length)
{
  if (invitati[i] == nomeUtente) {
      find = true;
  }
  i++;
}

if (find == true) {
    console.log('sei simpatico, sei invitato alla mia festa. prossimamente riceverai indicazioni su luogo ed ora. vestiti elegante');
} else {
    console.log('mi stai antipatico, non sei invitato');
}
