// GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        // Math.floor(Math.random() * 6) + 1
        let msg;
        let pc;
        let user = [];
        const btn = document.getElementById("submit");
        
        btn.addEventListener ("click", function() {
            pc = Math.floor(Math.random() * 6) + 1;
            let username = document.getElementById("username");
            user.push(username.value);
            let userdice = Math.floor(Math.random() * 6) + 1;
            user.push(userdice);
        // Stabilire il vincitore, in base a chi fa il punteggio più alto.
            if (pc === user[1]) {
                msg = "pareggio"
            } else if (pc > user[1]) {
                msg = ` ha vinto il pc con un lancio pari a ${pc} contro ${user[1]} `
            } else {
                msg = ` ha vinto ${user[0]}, con un lancio pari a ${user[1]} contro ${pc} `
            }
        
            console.log("lancio del pc ", pc);
            console.log("lancio di ", user[0], " pari a ", user[1]);
            alert(msg);
        })
        