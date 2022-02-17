/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var claveCorrecta;

	claveCorrecta = "utn750"
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != claveCorrecta)
	{
		claveIngresada = prompt("Error. Intente nuevamente:");
	}

	alert("Excelente... Bienvenid@!");
	
}//FIN DE LA FUNCIÓN
