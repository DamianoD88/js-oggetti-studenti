// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var Studente = {
    nome: "Paolo",
    cognome: "Paolino",
    eta: "1000"
};


// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in Studente) {
    console.log(studente[key]);
};


// Creare un array di oggetti di studenti.

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.