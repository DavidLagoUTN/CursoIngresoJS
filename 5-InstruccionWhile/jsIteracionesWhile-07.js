/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/*
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	var respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";

	contador=0;
	acumulador=0;

	while (respuesta == "si")
	{
		contador ++;
		numeroIngresado = prompt("Hola, por favor ingresá el número " + contador +" :");
		acumulador += parseInt(numeroIngresado);
		respuesta = prompt("Desea seguir ingresando números?\nSi\nNo").toLowerCase();
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN
*/


/*
		variable = prompt ("Ingrese");
		variableParseada = parseInt(variable);
		while(variable)
		{
			variable = prompt("Ingresaste: '"+variable+"' ,no es válido. Intente nuevamente:")
		}
*/

function mostrar()
{
	var alturaIngresada;
	var alturaIngresadaParseada;

	var edadIngresada;
	var edadIngresadaParseada;

	var temperaturaIngresada;
	var temperaturaIngresadaParseada;

	var sexoIngresado;

	var notaIngresada;
	var notaIngresadaParseada;

	var nombreIngresado;
	var contadorEstudiantes;

	contadorEstudiantes = 0;

	while (contadorEstudiantes>5)
	{
		alturaIngresada = prompt ("Ingrese una altura entre 0 y 250 inclusive:");
		alturaIngresadaParseada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresadaParseada) || alturaIngresadaParseada<0 || alturaIngresadaParseada>250)
		{
			alturaIngresada = prompt("Ingresaste: '"+alturaIngresada+"' ,no es un número o está fuera de rango. Intente nuevamente (Ingrese una altura entre 0 y 250 inclusive):");
			alturaIngresadaParseada = parseInt(alturaIngresada);
		}
		
		edadIngresada = prompt ("Ingrese su edad (mayor a 0):");
		edadIngresadaParseada = parseInt(edadIngresada);
		while(isNaN(edadIngresadaParseada) || edadIngresadaParseada<0)
		{
			edadIngresada = prompt("Ingresaste: '"+edadIngresada+"' ,no es un número o está fuera de rango. Intente nuevamente (Ingrese una edad mayor a 0):");
			edadIngresadaParseada = parseInt(edadIngresada);
		}

	}
}