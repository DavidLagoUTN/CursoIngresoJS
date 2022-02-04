/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var importeParseado;

	importe = document.getElementById("txtIdImporte").value;
	importeParseado = parseInt(importe);

	resultado = importeParseado - importeParseado/4;
	document.getElementById("txtIdResultado").value = resultado;
}