<?php
	header("Content-type: appliaction/json; charset=utf-8");

	$info=json_decode(file_get_contents("php://input"),true);

	//valores del objeto JSON
	$sku=$info['_sku'];
	$nombre=$info['_nombre'];
	$autor=$info['_autor'];
	$imagen=$info['_imagen'];

	//Variables de conexion a la base de datos
	$host="localhost";
	$bd="db_pract34";
	$usuario="root";
	$passwd="";

	// CONEXION ALA DB

	try{
		// conexión con la BD
		$conexion=new PDO('mysql:host=localhost;dbname=db_pract34;charset=utf8',$usuario,$passwd);
		$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		//se prepara  la setencia SQL.inseert
		$stm=$conexion->prepare("INSERT INTO tbl_libros(sku_c,nombre_c,autor_C,c_imagen) VALUES(:sku,:nombre,:autor,:imagen)");

		$arreglo_valores=array(":sku" => $sku, ":nombre" => $nombre, ":autor" => $autor, ":imagen" => $imagen);

		//se ejecuta  la sentencia SQL insert
		$stm->execute($arreglo_valores);

	//  Obteniendo LOS REGISTROS DE LA TABLA tbl_libros 

			//Preparar las sentencia SQl--select

			$stm=$conexion->prepare("SELECT * FROM tbl_libros");

			$stm->execute();

			//obteniendo los registros de la tabla
			$resgistros=array();
			while ($fila=$stm->fetch(PDO::FETCH_ASSOC)) {
				$registros[]=$fila;
			}

		//se Cierra la  conexion con la base de datos
		$stm=null;
		$conexion=null;

		
		echo json_encode($registros);


	}catch(PDOException $ex){
		echo "Error: ".$ex->getMessage();
	}
?>