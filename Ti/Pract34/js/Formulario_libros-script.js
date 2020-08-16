//Obtener las referencias de los elementos 
const r_sku=document.getElementById('txtSku');
const r_nombre=document.getElementById('txtNombre');
const r_autor=document.getElementById('txtAutor');
const r_imagen=document.getElementById('txtImagen');
const r_guardar=document.getElementById('boton_para_guardar');

//obteniendo  la información del archivo de imagen o metainformacion
var info_imagen=null;
r_imagen.addEventListener('change',function(){
	let info=new FileReader();
	info.readAsDataURL(this.files[0]);

	info.onloadend=function(){
		info_imagen=info.result;
	}
});

r_guardar.addEventListener('click',function(){
	//Realizar la peticion HTTP(POST) mediante el API FETCH
	fetch('http://localhost/Ti/Pract34/php/Formulario_libros_script.php',{
		method:"POST",
		headers:{
			"Content-type":"application/json; charset=utf-8"
		},
		body:JSON.stringify({
			_sku:r_sku.value,
			_nombre:r_nombre.value,
			_autor:r_autor.value,
			_imagen:info_imagen
		})
	})
	.then(function(respuesta){
		return respuesta.json();
	})
	.then(function(json){
		console.log(json);
		document.getElementById('contenido_para_libro').innerHTML="";
		let contenido=``;
		json.forEach(function(info){
			contenido+=`<div class='col s4'>
							<div class='card'>
								<div class='card-image'>
									<img src='${info.c_imagen}'/>
								</div>
								<div class='card-content'>
									<p>${info.sku_c}</p>
									<p>${info.nombre_c}</p>
									<p>${info.autor_c}</p>
								</div>
							</div>
						</div>`
		});

		document.getElementById('contenido_para_libro').innerHTML=contenido;
	})
	.catch(function(err){
		console.error("Error: ",err);
	});
});

document.addEventListener('DOMContentLoaded',function(){
	fetch('http://localhost/Ti/Pract34/php/script_info_libros.php')
	.then(function(respuesta){
		return respuesta.json();
	})
	.then(function(json){
		document.getElementById('contenido_para_libro').innerHTML="";
		let contenido=``;
		json.forEach(function(info){
			contenido+=`<div class='col s4'>
							<div class='card'>
								<div class='card-image'>
									<img src='${info.c_imagen}'/>
								</div>
								<div class='card-content'>
									<p>${info.sku_c}</p>
									<p>${info.nombre_}</p>
									<p>${info.autor_c}</p>
								</div>
							</div>
						</div>`
		});

		document.getElementById('contenido_para_libro').innerHTML=contenido;
	})
	.catch(function(err){
		console.error("Error: ",err);
	});
});
