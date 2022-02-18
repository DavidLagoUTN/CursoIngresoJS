/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

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