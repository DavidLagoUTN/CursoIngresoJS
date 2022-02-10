function mostrar()
{
	//tomo la edad
	var edadIngresada;
	var edadIngresadaParseada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresadaParseada = parseInt(edadIngresada);
	
	if(edadIngresadaParseada >= 18)
	{
		alert("Sos mayor de edad");
	}
}