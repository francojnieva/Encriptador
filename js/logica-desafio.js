
let boton_encriptar = document.querySelector(".boton_encriptar");
let boton_desencriptar = document.querySelector(".boton_desencriptar");
let imagen = document.querySelector(".imagen");
let parrafo = document.querySelector(".parrafo");
let resultado = document.querySelector(".resultado");
let boton_copiar = document.querySelector(".copiar");

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiar ;

function encriptar() {

    if (recuperar_texto() === '') {
        alert ("El campo no puede estar vacio, por favor complete para poder continuar.");
        return;
    }
    imagen.classList.add ("oculto");
    parrafo.classList.add("oculto");
    resultado.textContent = encriptar_texto(recuperar_texto());
}

function desencriptar() {
    if (recuperar_texto() === '') {
        alert ("El campo no puede estar vacio, por favor complete para poder continuar.");
        return;
    }
    imagen.classList.add ("oculto");
    parrafo.classList.add("oculto");
    resultado.textContent = desencriptar_texto(recuperar_texto());
}

function recuperar_texto() {
    area = document.querySelector(".texto");
    return area.value;
}

function copiar() {
    parrafo.classList.add("oculto");
    let contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("copy");
}

/********** LOGICA DE ENCRIPTACIÓN ***********/

function encriptar_texto(mensaje) {
    var texto = mensaje;
    var texto_final = "";

    for (var i=0 ; i< texto.length ; i++) {
        if (texto[i]=="a") {
            texto_final = texto_final + "ai";
        }
        else if (texto[i] == "e") {
            texto_final = texto_final + "enter";
            }
        else if (texto[i] == "i") {
            texto_final = texto_final + "imes";
            }
        else if (texto[i] == "o") {
            texto_final = texto_final + "ober";
        }
        else if (texto[i] == "u") {
            texto_final = texto_final + "ufat";
        }
        else {
            texto_final = texto_final + texto[i];
        }
    }
    return texto_final;
}

/********* LOGICA DE LA DESENCRIPTACIÓN **********/

function desencriptar_texto(mensaje) {
    var texto = mensaje;
    var texto_final = "";
    
    for (var i=0 ; i< texto.length ; i++) {
        if (texto[i]=="a") {
            texto_final = texto_final + "a";
            i+=1;
        }
        else if (texto[i] == "e") {
            texto_final = texto_final + "e";
            i+=4;
            }
        else if (texto[i] == "i") {
            texto_final = texto_final + "i";
            i+=3;
            }
        else if (texto[i] == "o") {
            texto_final = texto_final + "o";
            i+=3;
        }
        else if (texto[i] == "u") {
            texto_final = texto_final + "u";
            i+=3;
        }
        else {
            texto_final = texto_final + texto[i];
        }
    }
    return texto_final;
}  