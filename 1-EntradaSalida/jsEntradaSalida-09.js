/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var sueldoParseado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldoParseado = parseInt(sueldo);

	resultado = sueldoParseado + sueldoParseado/10;
	document.getElementById("txtIdResultado").value = resultado;
}
*/

/*
Consigna 9-bis(reentrega):
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt),
tomar el % de aumento por 'PROMPT' 
luego mostrar el importe con un aumento del % recibido
en el cuadro de texto "RESULTADO".
*/

function mostrarAumento()
{
	var sueldo;
	var porcentajeIngresado;
	var aumentoNumerico;
	var resultado;
	var mensajeAlert;
	
	var sueldoParseado;
	var porcentajeIngresadoParseado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldoParseado = parseInt(sueldo);
	
	porcentajeIngresado = prompt("Ingresá el porcentaje de aumento");
    porcentajeIngresadoParseado = parseInt(porcentajeIngresado);
    
    aumentoNumerico = sueldoParseado*(porcentajeIngresadoParseado/100);
	resultado = sueldoParseado + aumentoNumerico;
	
	document.getElementById("txtIdResultado").value = resultado;
	mensajeAlert = "Ingresaste " + sueldoParseado +".";
	mensajeAlert = mensajeAlert + "El porcentaje de aumento que ingresaste es del " + porcentajeIngresadoParseado + "%.";
	mensajeAlert = mensajeAlert + "El aumento es de " + aumentoNumerico +".";
	mensajeAlert = mensajeAlert + "El resultado final con la suma del aumento es de: " + resultado + ".";
	alert(mensajeAlert);
}