let emailUtente=prompt("Inserisci email valida");
let listaEmail=["matteo@gmail.com" , "fabio@gmail.com" , "pietro@gmail.com" , "anna@gmail.com"];
let valore=0;

for(let i= 0 ; i< listaEmail.length; i++){
    if(listaEmail[i]==emailUtente){
        valore++;
        alert("Email accettata");
        break;
    }
}

if(valore==0){
    alert("Email non accettata");
}
        
