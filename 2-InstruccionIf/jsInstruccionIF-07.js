function mostrar()
{
	//tomo la edad
	var edadIngresada;
	var edadIngresadaParseada;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresadaParseada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;
	
	if(edadIngresadaParseada <18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}