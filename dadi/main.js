let numeroUtente=Math.floor(Math.random() * 6);
let numeroComputer=Math.floor(Math.random() * 6);

console.log("Il tuo numero: " + numeroUtente);
console.log("Il numero del computer: " + numeroComputer);
if(numeroUtente>numeroComputer){
    console.log("Hai vinto");
}else if(numeroUtente<numeroComputer){
    console.log("Hai perso");
}else{
    console.log("Pareggio");
}