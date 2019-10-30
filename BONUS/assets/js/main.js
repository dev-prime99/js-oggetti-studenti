
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  "nome" : "Andrea",
  "cognome" : "Primerano",
  "età" : "20 anni"
}

var text = "";

for (var key in studente) {
  text += studente[key] + " ";
}

document.getElementById("std1").innerHTML = "Studente numero 1: " + text;

console.log(studente);


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var scolari = [
  {
    "nome" : "Andrea",
    "cognome" : "Primerano",
    "età" : "20 anni"
  },
  {
    "nome" : "Giovanni",
    "cognome" : "Bardin",
    "età" : "26 anni"
  },
  {
    "nome" : "Guglielmo",
    "cognome" : "Rossi",
    "età" : "40 anni"
  }
];

var text2 ="";


for (var i = 0; i < 3; i++) {
  text2 += scolari[i].nome + " " + scolari[i].cognome + "</br>";
}

document.getElementById("std2").innerHTML = "NOMI STUDENTI:" + "</br>" + text2;


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var utente, nome, cognome, eta, ok;

ok = 0;

var letters = /^[a-zA-Z]+$/;

while (ok < 1) {
  nome = prompt("inserisci il nome");
  if (nome.match(letters)) {
    ok = 1;
  } else{
    ok = 0;
  }
}

ok = 0;
while (ok < 1) {
  cognome = prompt("inserisci il cognome");
  if (cognome.match(letters)) {
    ok = 1;
  } else{
    ok = 0;
  }
}

ok = 0;
while (ok < 1) {
  eta = prompt("inserisci l'età");
  if (isNaN(eta)) {
    ok = 0;
  } else{
    ok = 1;
  }
}

utente = {
  "nome" : nome,
  "cognome" : cognome,
  "eta" : eta
}

scolari.push(utente);

text2 += scolari[3].nome + " " + scolari[3].cognome + "</br>";

document.getElementById("std3").innerHTML = "NOMI STUDENTI:" + "</br>" + text2;

console.log(utente);
