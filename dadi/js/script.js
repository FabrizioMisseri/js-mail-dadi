// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//SOLUZIONE
//ricevo in input il nome dei due utenti e creo per ciascuno una variabile
const user1_name = prompt("utente 1 inserisci il tuo nome");
const user2_name = prompt("utente 2 inserisci il tuo nome");
//utilizzo la funzione math.random ed assegno il valore al primo utente
const user1_d6 = (Math.floor(Math.random() * 6) + 1);
console.log(user1_name, " ha lanciato ",user1_d6);
const user1 = [user1_name, user1_d6];
//utilizzo la funzione math.random ed assegno il valore al secondo utente
const user2_d6 = (Math.floor(Math.random() * 6) + 1);
console.log(user2_name, " ha lanciato ",user2_d6);
const user2 = [user2_name, user2_d6];
//confronto tra loro i valori il valore più alto vince, comunico in output il vincitore
let msg = "";
if (user1[1] === user2[1]) {
    msg = "pareggio";
} else if (user1[1] > user2[1]) {
    msg = `${"l' utente "}${user1[0]}${" ha vinto, con un lancio pari a "}${user1[1]}${", contro un lancio avversario pari "}${user2[1]} `
} else {
    msg = `${"l' utente "}${user2[0]}${" ha vinto, con un lancio pari a "}${user2[1]}${", contro un lancio avversario pari "}${user1[1]} `
}
//stampo il msg
alert(msg);
