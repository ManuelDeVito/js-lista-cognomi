// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi, stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.


// Creo un array contenente dei cognomi in ordine casuale.
// Chiedo all'utente il suo cognome.
// Lo inserirlo nella lista dei cognomi.
// Stampo la lista dei cognomi in ordine alfabetico
// Comunico all'utente la posizione in cui si trova il suo cognome.




var cognomi = ['Morelli', 'Vallifuoco', 'Petrangeli', 'Campagna', 'Pedica', 'Mollica', 'Iannelli', 'Russano'];

var cognome_utente = prompt ('Inserisci il tuo cognome');

cognomi.push(cognome_utente);

console.log(cognomi.sort());

var posizione = cognomi.indexOf(cognome_utente) + 1;

console.log('La posizione del tuo cognome si trova al numero = ' + posizione);
