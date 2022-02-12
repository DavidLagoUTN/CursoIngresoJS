function mostrar()
{
	//tomo el destino
	var destino;
	var estacion;
	var mensajePrecioFinal;
	var tarifa;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	mensajePrecioFinal = "El precio final es de: $";
	tarifa = 15000;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					tarifa = tarifa + 20*tarifa/100;
					break;
				case "Mar del plata":
					tarifa = tarifa - 20*tarifa/100;
					break;
				default:	//Cataratas y Córdoba.
				tarifa = tarifa - 10*tarifa/100;
					break;
			}
			break;

		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					tarifa = tarifa - 20*tarifa/100;
					break;
				case "Mar del plata":
					tarifa = tarifa + 20*tarifa/100;
					break;
				default:	//Cataratas y Córdoba.
				tarifa = tarifa + 10*tarifa/100;
					break;
			}
			break;
		
		default:	//Otoño y Primavera.
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					tarifa = tarifa + 10*tarifa/100;
					break;	// No hago nada con Cordoba porque no tiene aumento ni descuento en esta estación.
			}
			break;
	}
	alert(mensajePrecioFinal + tarifa + " para el destino " + destino + " durante la estación de " + estacion + ". Gracias.");
}//FIN DE LA FUNCIÓN