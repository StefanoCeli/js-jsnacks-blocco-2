//creo una variabile num_utente e all'interno ci sarà un prompt per chiedere all'utente di inserire un numero

var num_utente=parseInt(prompt('Inserisci un numero'));

//creo una condizione dove vado a controllare se il numero è dispari o pari,nel caso sia dispari andrò ad aggiungere a se stesso +1 in modo che stamperà il numero successivo,invece se è pari stamperà soltanto a video il risultato

if(num_utente % 2){

    num_utente += 1;
    console.log('il numero era disparo,quindi stampo quello successivo che è :' + num_utente)

}else{

    console.log('il numero è pari ed è :' + num_utente)
    
}