// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//SOLUZIONE
//ricevo in input il nome dei due utenti e creo per ciascuno una variabile
const user1 = prompt("utente 1 inserisci il tuo nome");
const user2 = prompt("utente 2 inserisci il tuo nome");
//utilizzo la funzione math.random ed assegno il valore al primo utente
const user1_d6 = (Math.floor(Math.random() * 6) + 1);
console.log("risultato 1 ",user1_d6);
//utilizzo la funzione math.random ed assegno il valore al secondo utente
const user2_d6 = (Math.floor(Math.random() * 6) + 1);
console.log("risultato 2 ",user2_d6);
//confronto tra loro i valori
//il valore più alto vince, comunico in output il vincitore