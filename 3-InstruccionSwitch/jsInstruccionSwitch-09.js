function mostrar()
{
	//tomo el destino
	var destino;
	var estacion;
	var mensajePrecioFinal;
	var tarifa;
	var porcentajeDeAumentoODescuento;

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
					porcentajeDeAumentoODescuento = 20;
					break;
				case "Mar del plata":
					porcentajeDeAumentoODescuento = -20;
					break;
				default:	//Cataratas y Córdoba.
					porcentajeDeAumentoODescuento = -10;
					break;
			}
			break;

		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentajeDeAumentoODescuento = -20;
					break;
				case "Mar del plata":
					porcentajeDeAumentoODescuento = 20;
					break;
				default:	//Cataratas y Córdoba.
					porcentajeDeAumentoODescuento = 10;
					break;
			}
			break;
		
		default:	//Otoño y Primavera.
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentajeDeAumentoODescuento = 10;
					break;
				default:	//Córdoba.
					porcentajeDeAumentoODescuento = 0;
					break;
			}
			break;
	}
	tarifa = tarifa + tarifa*porcentajeDeAumentoODescuento/100;
	mensajePrecioFinal = mensajePrecioFinal + tarifa + " para el destino " + destino + " durante la estación de " + estacion + ". Gracias.";
	alert(mensajePrecioFinal);
}//FIN DE LA FUNCIÓN