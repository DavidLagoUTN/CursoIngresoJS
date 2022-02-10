function mostrar()
{
	//tomo la edad
	var edadIngresada;
	var edadIngresadaParseada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresadaParseada = parseInt(edadIngresada);
	
	if(edadIngresadaParseada < 18)
	{
		if(edadIngresadaParseada < 13)
		{
			alert("Sos un niño");
		}
		else
		{
			alert("Sos adolescente");
		}
	}
	else
	{
		alert("Sos adulto");
	}
}