/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var dividendoParseado;
	var divisorParseado;
	var resto;
	
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendoParseado = parseInt(dividendo);
	divisorParseado = parseInt(divisor);

	resto = dividendoParseado % divisorParseado;
	alert("El resto es " + resto);
}