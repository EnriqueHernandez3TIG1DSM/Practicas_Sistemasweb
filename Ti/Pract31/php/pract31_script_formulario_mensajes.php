<?php
	header("Content-type: application/json; charset=utf-8");
	// Decodificacion JSON Informacion
	$La_informacion=json_decode(file_get_contents("php://input"),true);
	// Respuesta JSON a cliente
	echo json_encode($La_informacion);

?>