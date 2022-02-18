/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroIngresadoParseado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaDelPrimero;
	//iniciar variables

	banderaDelPrimero = "Primero";
	respuesta = "si";
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Hola, por favor ingresá un número:");
		numeroIngresadoParseado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresadoParseado))
		{
			numeroIngresado = prompt("Error, lo que ingresaste " + numeroIngresado + " no es un numero. Por favor, ingresa un numero:");
			numeroIngresadoParseado = parseInt(numeroIngresado);
		}

		if (banderaDelPrimero == "Primero")
		{
			numeroMaximo = numeroIngresadoParseado;
			numeroMinimo = numeroIngresadoParseado;
			banderaDelPrimero = "Ya no";
		}
		else
		{
			if (numeroIngresadoParseado > numeroMaximo)
			{
				numeroMaximo = numeroIngresadoParseado;
			}
			else
			{
				if (numeroIngresadoParseado < numeroMinimo)
				{
					numeroMinimo = numeroIngresadoParseado;
				}

			}
		}
		respuesta = prompt("Desea seguir ingresando números?\nSi\nNo").toLowerCase();
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN