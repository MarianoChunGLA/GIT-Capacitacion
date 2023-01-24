console.log("Holaa, soy un console.log");

function getAllAccounts(){
    alert("Error fatal! Mirar la consola");
    throw new Error("Soy un error!! Fallo total");
}

console.log("Holaa, soy un console.log posterior a la creación de la funcion getAllAccounts()");