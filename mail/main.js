let emailUtente=prompt("Inserisci email valida");
let listaEmail=["matteo@gmail.com" , "fabio@gmail.com" , "pietro@gmail.com" , "anna@gmail.com"];
/*for(let i=listaEmail.length ; i < listaEmail.length ; i++){
    if(emailUtente==listaEmail[i]){
        alert(listaEmail[i]);
        alert("Email presente");
    }else{
        alert("email non presente");
    }
}
*/

for(let i= 0 ; i< listaEmail.length; i++){
    if(listaEmail[i]===emailUtente){
        console.log("Email accettata");
        break;
    }
}
        
