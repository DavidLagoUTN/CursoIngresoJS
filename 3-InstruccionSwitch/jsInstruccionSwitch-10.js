function mostrar()
{
	//tomo el destino
	var destino;
	var estacion;
	var mensajeViaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;


	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensajeViaje = "Se viaja";
					break;

				default:
					mensajeViaje = "No se viaja";
					break;
			}
			break;

		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
					mensajeViaje = "Se viaja";
					break;

				default:
					mensajeViaje = "No se viaja";
					break;
			}
			break;
		
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensajeViaje = "No se viaja";
					break;
					
				default:
					mensajeViaje = "Se viaja";
					break;
			}
			break;
		
		default:	//Otoño
			mensajeViaje = "Se viaja";
			break;
	}
	alert(mensajeViaje + " a " + destino + " en " + estacion + ". Gracias.");
}//FIN DE LA FUNCIÓN