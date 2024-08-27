const imagen = document.querySelector(".recuado");
const aviso = document.querySelector(".letras");

function encriptar() {
    // Obtener el valor del textarea antes de hacer las validaciones
    var texto = document.getElementById("texto_a_encriptar").value;

    // Verifica si el texto contiene mayúsculas
    if (texto !== texto.toLowerCase()) {
        aviso.textContent = "El texto contiene mayúsculas. Por favor, utiliza solo letras minúsculas.";
        return; // Detiene la función si hay mayúsculas
    }

    // Verifica si hay caracteres especiales
    if (/[^a-z\s]/.test(texto)) {
        aviso.textContent = "El texto contiene caracteres especiales. Por favor, utiliza solo letras y espacios.";
        return; // Detiene la función si hay caracteres especiales
    }

    else{
        // Si todo está bien, procede con la encriptación
        texto = texto.replace(/e /mg, "e");
        texto = texto.replace(/i /mg, "i");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    
    
        // Remover la imagen y mostrar el texto encriptado
        imagen.remove();
        document.getElementById("texto_finalizado").value = texto;
    
       
        aviso.textContent = "solo introduce minusculas y sin acentos";
        }
}


function desencriptar() {
    // Obtener el valor del textarea antes de hacer las validaciones
    var texto = document.getElementById("texto_a_encriptar").value;

    // Verifica si el texto contiene mayúsculas
    if (texto !== texto.toLowerCase()) {
        aviso.textContent = "El texto contiene mayúsculas. Por favor, utiliza solo letras minúsculas.";
        return; // Detiene la función si hay mayúsculas
    }

    // Verifica si hay caracteres especiales
    if (/[^a-z\s]/.test(texto)) {
        aviso.textContent = "El texto contiene caracteres especiales. Por favor, utiliza solo letras y espacios.";
        return; // Detiene la función si hay caracteres especiales
    }
    else{
    // Si todo está bien, procede con la encriptación
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");


    // Remover la imagen y mostrar el texto encriptado
    imagen.remove();
    document.getElementById("texto_finalizado").value = texto;

   
    aviso.textContent = "solo introduce minusculas y sin acentos";
    }
}


function copiarTexto() {
    var textoResultado = document.getElementById("texto_finalizado");
    textoResultado.select();
    document.execCommand("copy");
}