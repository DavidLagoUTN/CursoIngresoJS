function mostrar()
{
	//tomo la edad
	var edadIngresada;
	var edadIngresadaParseada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresadaParseada = parseInt(edadIngresada);
	
	if(edadIngresadaParseada ==15)
	{
		alert("Niña Bonita");
	}

}//FIN DE LA FUNCIÓN