<?php
	header("Content-type: application/json; charset=utf-8");
	// Decodificacion JSON Informacion
	$La_informacion=json_decode(file_get_contents("php://input"),true);
	$nombre=$La_informacion["_nombre"];
	$comentario=$La_informacion["_comentario"];

	//Variables de conexion a la BD
	$host="localhost";
	$bd="db_pract33";
	$usuario="root";
	$passwd="";

	try{
		//conexión con la BD
		$conexion=new PDO('mysql:host=localhost;dbname=db_pract33;charset=utf8',$usuario,$passwd);
		$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		//se hace  preparacion de la sentencia SQL (INSERT)
		$stm=$conexion->prepare("INSERT INTO tbl_comentarios(nombre_c,comentario_c) VALUES
		(:nombre,:comentario)");
		//Ejecutar la sentencia y ver resultados
		$stm->execute(array(":nombre" => $nombre, ":comentario" => $comentario));

		//obteniendo los registros de la DB
		
		// sentencia SQL-SELECT
		$stm=$conexion->prepare("SELECT * FROM  tbl_comentarios");
		// Ejecutar sentencia SQL
		$stm->execute();
		// arreglo que obtentiene los resgitros de la base de datos
		$registros=array();

		// obtener informacion 
		while($fila=$stm->fetch(PDO::FETCH_ASSOC)){
			$registros[]=$fila;
		}

		//Cerrar conexion con la BD
		$stp=null;
		$conexion=null;

		echo json_encode($registros);

	}catch(PDOException $ex){
		echo "Error: ".$ex->getMessage();	
	}


?>