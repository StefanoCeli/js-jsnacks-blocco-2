//creo variabile somma che sarà 0 e un ciclo "for" che va a ripetersi pèer cinque volte in cui dentro andrò a inserire un prompt per l'utente

var somma=0;

/* for(var i=0; i<5; i++){
    var num_utente=parseInt(prompt('inserisci un numero'));
    somma += num_utente;
    console.log(somma);
}
console.log('La somma di tutti i numeri è: ' + somma) */

//creo la stessa situazione ma con il ciclo while,quindi in questo caso la variabile "i" andrà dichiarata fuori

var i=0;

while(i<5){
    var num_utente=parseInt(prompt('inserisci un numero'));
    somma += num_utente;
    console.log(somma);
    i++
}
console.log('La somma di tutti i numeri è: ' + somma)