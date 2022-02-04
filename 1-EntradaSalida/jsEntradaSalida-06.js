/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
	alert("la suma es "+suma);
}