/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive:");
	numeroIngresadoParseado = parseInt(numeroIngresado);

	while (numeroIngresadoParseado <0 || numeroIngresadoParseado >9)
	{
		numeroIngresado = prompt(numeroIngresadoParseado + " es incorrecto. Ingrese un numero del 0 al 9 inclusive:");
		numeroIngresadoParseado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresadoParseado + " registrado correctamente."
	
}//FIN DE LA FUNCIÓN