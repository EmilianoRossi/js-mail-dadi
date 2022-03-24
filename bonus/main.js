let emailUtente=prompt("Inserisci email valida");
let listaEmail=["matteo@gmail.com" , "fabio@gmail.com" , "pietro@gmail.com" , "anna@gmail.com"];
let valore=0;
let emailDaInserire;
//con la variabile valore impostata a 0 mettiamo un controllo per quanto riguarda l'accettazione dell'email, scorrendo quindi, e trovando
//una mail corrispondente il valore diventa 1
for(let i= 0 ; i< listaEmail.length; i++){
    if(listaEmail[i]==emailUtente){
        valore++;
        alert("Email accettata");
        break;
    }
}
// se non ha trovato email corrispondenti, il valore sarà 0 e quindi mandare il messaggio email non accettata
if(valore==0){
    alert("Email non accettata");
    emailDaInserire=prompt("Inserisci una nuova mail"); 
    listaEmail.push(emailDaInserire);
    alert("email inserita");
    alert("Ecco la lista delle email: " + listaEmail);
    console.log(listaEmail);
}

      
