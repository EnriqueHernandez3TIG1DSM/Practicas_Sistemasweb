// REFERENCIAS
const nombre=document.getElementById("nombre");
const mensaje=document.getElementById("Comentario");
const boton_enviar=document.getElementById("boton_enviar");

boton_enviar.addEventListener('click',function(){
	// API Fetch
	fetch('http://localhost/Ti/Pract31/php/pract31_script_formulario_mensajes.php',{
		method:'POST',
		headers:{
			"Content-type":"application/json; charset=utf-8"
		},
		body:JSON.stringify({
			_nombre:nombre.value,
			_comentario:mensaje.value
		})
	})
	.then(function(respuesta){
		return respuesta.text();
	})
	.then(function(json){
		console.log(json);
	})
	.catch(function(error){
		console.error("Error: ",error);
	});
});
