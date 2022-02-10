function mostrar()
{
	//tomo la edad
	var edadIngresada;
	var edadIngresadaParseada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresadaParseada = parseInt(edadIngresada);
	
	if(edadIngresadaParseada < 13 || edadIngresadaParseada > 17)
	{
		alert("No sos adolescente");
	}
}