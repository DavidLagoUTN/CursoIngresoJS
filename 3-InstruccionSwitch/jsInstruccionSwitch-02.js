function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensajeAntesDeInvierno;
	var mensajeInvierno;
	var mensajeDespuesDeInvierno;

	mensajeAntesDeInvierno = "Falta para el invierno."
	mensajeInvierno = "Abrigate que hace frio."
	mensajeDespuesDeInvierno = "Ya pasamos el frio, ahora calor!!!."

	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert(mensajeAntesDeInvierno);
			break;

		case "Julio":
		case "Agosto":
			alert(mensajeInvierno);
			break;

		default:
			alert(mensajeDespuesDeInvierno);
			break;
	}

}//FIN DE LA FUNCIÓN