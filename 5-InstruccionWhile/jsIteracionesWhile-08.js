/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;
	var sumaPositivos;
	var multiplicacionNegativos;
	var respuesta;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Hola, por favor ingresá un número:");
		numeroIngresadoParseado = parseInt(numeroIngresado);
		if (numeroIngresadoParseado > 0)
		{
			sumaPositivos += numeroIngresadoParseado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresadoParseado;
		}
		respuesta = prompt("Desea seguir ingresando números?\nSi\nNo").toLowerCase();
	}
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN