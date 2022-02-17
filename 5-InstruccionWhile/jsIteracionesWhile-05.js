/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var generoIngresado;
	generoIngresado = prompt("Ingrese 'f' para femenino o 'm' para masculino:");

	while (generoIngresado != "f" && generoIngresado != "m")
	{
		generoIngresado = prompt(generoIngresado + " es incorrecto. Ingrese 'f' para femenino o 'm' para masculino:");
	}

	document.getElementById("txtIdSexo").value = "Género " + generoIngresado + " registrado correctamente."
	
}//FIN DE LA FUNCIÓN