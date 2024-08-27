let contenedorMensaje = document.getElementById("cont-mensaje");
let boton = document.getElementById("botonCopiar");
let contenedor = document.querySelector(".contenedor__1");
let muñeco =  document.getElementById("idmuñeco");

function encriptar(){
    let texto = document.getElementById("textarea__1").value;

     // Validación de caracteres especiales
    if (!/^[a-zA-Z\s]+$/.test(texto)) {
    alert("El texto no debe contener caracteres especiales.");
    return; // Detener la ejecución de la función
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
  
    if (document.getElementById("textarea__1").value.length != 0){
        document.getElementById("mensaje-encriptado").textContent = textoCifrado;
        mostrarOcultar();
        }
}

function desencriptar(){
    let texto = document.getElementById("textarea__1").value;
    let textoCifrado = texto

        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (document.getElementById("textarea__1").value.length != 0){
        document.getElementById("mensaje-encriptado").textContent = textoCifrado;
        mostrarOcultar();
    }
}

function copiarTexto(){
    var copyText = document.getElementById("mensaje-encriptado");
      
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
      
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
      
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}
