// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome: "Paolo",
    cognome: "Paolino",
    eta: "1000"
}


// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente) {
    console.log(studente[key]);
}


// Creare un array di oggetti di studenti.
var oggettiStudenti = [
    {
        nome: "Maria",
        cognome: "Gambino",
        eta: "1200",
    },
    {
        nome: "Grazia",
        cognome: "Brambo",
        eta: "1100",
    },
    {
        nome: "Matteo",
        cognome: "Marino",
        eta: "1300",
    }
];


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// console.log(oggettiStudenti[0].nome);

for (var i = 0; i < oggettiStudenti.length; i++){
    console.log(oggettiStudenti[i].nome);
    console.log(oggettiStudenti[i].cognome);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.