/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerSumando;
	var segundoSumando;
	var primerSumandoParseado;
	var segundoSumandoParseado;
	var suma;
	
	primerSumando = document.getElementById("txtIdNumeroUno").value;
	primerSumandoParseado = parseInt(primerSumando);

	segundoSumando = document.getElementById("txtIdNumeroDos").value;
	segundoSumandoParseado = parseInt(segundoSumando);

	suma = primerSumandoParseado + segundoSumandoParseado;
	alert("La suma es "+suma);
}

function restar()
{
	var minuendo;
	var sustraendo;
	var minuendoParseado;
	var sustraendoParseado;
	var resta;
	
	minuendo = document.getElementById("txtIdNumeroUno").value;
	minuendoParseado = parseInt(minuendo);

	sustraendo = document.getElementById("txtIdNumeroDos").value;
	sustraendoParseado = parseInt(sustraendo);

	resta = minuendoParseado - sustraendoParseado;
	alert("La resta es "+ resta);
}

function multiplicar()
{ 
	var primerFactor;
	var segundoFactor;
	var primerFactorParseado;
	var segundoFactorParseado;
	var producto;
	
	primerFactor = document.getElementById("txtIdNumeroUno").value;
	primerFactorParseado = parseInt(primerFactor);

	segundoFactor = document.getElementById("txtIdNumeroDos").value;
	segundoFactorParseado = parseInt(segundoFactor);

	producto = primerFactorParseado * segundoFactorParseado;
	alert("El producto es "+ producto);
}

function dividir()
{
	var dividendo;
	var divisor;
	var dividendoParseado;
	var divisorParseado;
	var division;
	
	dividendo = document.getElementById("txtIdNumeroUno").value;
	dividendoParseado = parseInt(dividendo);

	divisor = document.getElementById("txtIdNumeroDos").value;
	divisorParseado = parseInt(divisor);

	division = dividendoParseado / divisorParseado;
	alert("La división es "+ division);
}

