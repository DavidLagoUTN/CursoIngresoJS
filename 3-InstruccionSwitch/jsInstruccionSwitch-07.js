function mostrar()
{
	//tomo el destino
	var destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
			alert("Se encuentra al Norte");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este");
			break;
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;
	}

}//FIN DE LA FUNCIÓN