const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexAl(){
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];

    }
    return colorHex;

}
boton.addEventListener("click",function (){
    let colorAleatorio = generarColorHexAl();
    color.textContent =colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
});



function copiarTexto() {
    // Obtiene el elemento del párrafo
    var parrafo = document.getElementById('color');
    
    // Crea un campo de texto temporal
    var campoTemporal = document.createElement('textarea');
    campoTemporal.value = parrafo.innerText;
    
    // Añade el campo al documento
    document.body.appendChild(campoTemporal);
    
    // Selecciona el contenido del campo
    campoTemporal.select();
    campoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto al portapapeles
    document.execCommand('copy');
    
    // Elimina el campo de texto temporal
    document.body.removeChild(campoTemporal);
    
    // Opcional: Muestra un mensaje indicando que el texto fue copiado
    alert('Texto copiado: ' + parrafo.innerText);
}