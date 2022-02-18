/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var numeroIngresadoParseado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaPositivosNegativos;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	respuesta="si";

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Hola, por favor ingresá un número:");
		numeroIngresadoParseado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresadoParseado))
		{
			numeroIngresado = prompt("Error, lo que ingresaste " + numeroIngresado + " no es un numero. Por favor, ingresa un numero:");
			numeroIngresadoParseado = parseInt(numeroIngresado);
		}
		
		if (numeroIngresadoParseado < 0)
		{
			sumaNegativos += numeroIngresadoParseado;
			cantidadNegativos ++;
		}
		else
		{
			if (numeroIngresadoParseado > 0)
			{
				sumaPositivos += numeroIngresadoParseado;
				cantidadPositivos ++;
			}
			else
			{
				cantidadCeros ++;
			}
		}
		if (numeroIngresadoParseado %2 == 0)
		{
			cantidadPares ++;
		}
		respuesta = prompt("Desea seguir ingresando números?\nSi\nNo").toLowerCase();
	}//fin del while

	promedioNegativos = sumaNegativos / cantidadNegativos;
	promedioPositivos = sumaPositivos / cantidadPositivos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("1-Suma de negativos: " + sumaNegativos);
	document.write("<BR>2-Suma de positivos: " + sumaPositivos);
	document.write("<BR>3-Cantidad de positivos: " + cantidadPositivos);
	document.write("<BR>4-Cantidad de negativos: " + cantidadNegativos);
	document.write("<BR>5-Cantidad de ceros: " + cantidadCeros);
	document.write("<BR>6-Cantidad de números pares: " + cantidadPares);
	document.write("<BR>7-Promedio de números positivos: " + promedioPositivos);
	document.write("<BR>8-Promedio de números negativos: " + promedioNegativos);
	document.write("<BR>9-Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos);

}//FIN DE LA FUNCIÓN