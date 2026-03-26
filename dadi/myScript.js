//creo delle variabili randomiche che rappresentano i dadi
let dadoG1 = Math.floor(Math.random() * 6) + 1; //dado del giocatore
let dadoCPU = Math.floor(Math.random() * 6) + 1; //dado del computer

//implemento le opzioni dei vari risultati
if(dadoG1 > dadoCPU){
    console.log('Hai vinto!!!')
    console.log('tuo punto: ' + dadoG1 + ', punto CPU: ' +dadoCPU);
}else if(dadoCPU > dadoG1){
    console.log('Hai perso!!!')
    console.log('tuo punto: ' + dadoG1 + ', punto CPU: ' +dadoCPU);
}else{
    console.log('Pareggio!!!')
    console.log('tuo punto: ' + dadoG1 + ', punto CPU: ' +dadoCPU);
}