// REFERENCIAS
const nombre=document.getElementById("nombre");
const mensaje=document.getElementById("Comentario");
const boton_enviar=document.getElementById("boton_enviar");

boton_enviar.addEventListener('click',function(){
	// API Fetch
	fetch('http://localhost/Ti/Pract33/php/script_pract33.php	',{
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
		return respuesta.json();
	})
	.then(function(json){
		console.log(json);
		document.getElementById('respuesta').innerHTML="";

	var respuesta=`<tr>
					<th>Nombre</th>
					<th>Comentario</th>
					</tr>`;

	// proceso de objeto json
	json.forEach(function(info){
		respuesta+=`<tr>
						<td>${info.nombre_c}</td>
						<td>${info.comentario_c}</td>
				   </tr>`;
	});
	document.getElementById('respuesta').innerHTML=respuesta;
	
	
	})

	.catch(function(error){
		console.error("Error: ",error);
	});
});
