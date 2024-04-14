function criptografar() {
    var texto = document.getElementById('inputText').value;
    console.log(texto)
    var resultado = "";
    for(let i = 0; i< texto.length;i++){
        let caracter = texto.charAt(i);
        
        if(caracter === "e"){
            resultado +="enter";
        } else if (caracter === "i"){
            resultado +="imes";
        } else if(caracter === "a"){
            resultado +="ai";
        } else if(caracter === "o"){
            resultado +="ober";
        } else if(caracter === "u"){
            resultado +="ufat";
        } else
            resultado += caracter;
    }
    document.getElementById('resultado').textContent = resultado;
    console.log(resultado);
}

function descriptografar() {
    var textoCriptografado = document.getElementById('inputText').value;

    var textoDescriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('resultado').textContent = textoDescriptografado;
    console.log(textoDescriptografado);
}


function copiarCriptografia() {
    var textoCriptografado = document.getElementById('resultado').textContent;
    var inputTemporario = document.createElement("input");
    
    inputTemporario.setAttribute("value", textoCriptografado);
    document.body.appendChild(inputTemporario);

    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999); 

    
    document.execCommand("copy");
    document.body.removeChild(inputTemporario);
}


