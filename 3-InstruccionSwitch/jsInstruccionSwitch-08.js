function mostrar()
{
	//tomo el destino
	var destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;

		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frío");
			break;
	}

}//FIN DE LA FUNCIÓN