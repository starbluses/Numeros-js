function validar(){
    var nuemeroinput= document.getElementById("numeroInput").value;
    var mensjeelemento = document.getElementById("mensaje");

    if(nuemeroinput == 85) {
        mensjeelemento.textContent = "¡Es correcto! El numero introducido es 85";
    }else if (nuemeroinput<85){
        mensjeelemento.textContent = "¡Es menor a 85, El numero tiene que ser mas grande";
    }else if (nuemeroinput>85){
        mensjeelemento.textContent = "Es mayor a 85, El numero tiene que ser mas chico";
    }
}