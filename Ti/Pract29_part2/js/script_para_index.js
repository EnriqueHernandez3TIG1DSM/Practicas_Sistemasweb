const elementoh4=document.getElementById('contenido');


// escuchador  para el documento
document.addEventListener('DOMContentLoaded', function(){
    // Implementacion API XMLHttpRequest
    Implementacion_ajax();
    // Implementacion API Fetch
    // Implementacion_fetch();
})


function Implementacion_ajax(){
    let objeto_ajax=new XMLHttpRequest();
    objeto_ajax.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200){
            elementoh4.innerHTML=this.responseText;
        }
    }
    objeto_ajax.open("GET","http://localhost/Ti/Pract29_part2/files/Mi_Archivo_Texto.txt",true)//Ruta relativa
    objeto_ajax.send();
};

function Implementacion_fetch(){
    fetch("http://localhost/Ti/Pract29_part2/files/Mi_Archivo_Texto_Fetch.txt")
    .then(function(respuesta){
        return respuesta.text();

    })
    .then(function(texto){
        elementoh4.innerHTML=texto;
    })
}