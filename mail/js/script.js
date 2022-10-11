// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//utente inserisci mail
let msg = false;
const usermail = prompt("inserisci la tua mail");
//creo array mails utenti con permesso di accesso
const listmail = ["bat_man@gmail.com", "bat-man@gmail.com", "batman@gmail.com", "BATMAN@gmail.com"];
//ciclo for scorro il valore inserito dall' utente nella lista mails
for (let i = 0; i < listmail.length; i++) {
    if (usermail === listmail[i]) {
        msg = true
    }
}

//se la mail è giusta garantisco l' accesso all' utente
if (msg === true) {
    msg = "Bentornato BATMAN!";
} else {
    msg = "vattene a fanculo... tu non sei BATMAN..."
}

alert(msg);
