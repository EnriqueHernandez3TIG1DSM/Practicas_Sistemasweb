<?php
	//conexion a la BD
	$host="localhost";
	$bd="db_pract34";
	$usuario="root";
	$passwd="";

	// Conexion DB  
	try{
		//Establecer conexión con la BD
		$conexion=new PDO('mysql:host=localhost;dbname=db_pract34;charset=utf8',$usuario,$passwd);
		$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		// Obtener los registros de tbl_libros

			//Preparacion sentencia SQL--select
			$stm=$conexion->prepare("SELECT * FROM tbl_libros");

		
			$stm->execute();

			//Obtener los registros de la tabla
			$resgistros=array();
			while ($fila=$stm->fetch(PDO::FETCH_ASSOC)) {
				$registros[]=$fila;
			}

		//Cerrar conexion con la BD
		$stm=null;
		$conexion=null;

		
		echo json_encode($registros);


	}catch(PDOException $ex){
		echo "Error: ".$ex->getMessage();
	}
?>