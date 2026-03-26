//creo la lista delle mail
const listaInviti = ['123@abc.it', '455@ddf.com', '5123@fasd.it'];
let check = false; //variabile di contorllo per uscita forzata

//richiedo l'email dell'utente
let mail = prompt('inserisci la tua mail')

//check sulla presenza della mail
for(i = 0; i<listaInviti.length && check ===false; i++){
    if(mail === listaInviti[i]){
        check = true;
        console.log('mail riconosciuta, benvenuto')
    }
}

//avviso di non partecipazione
if(check === false){
    console.log('mi dispiace non sei stato invitato')
}