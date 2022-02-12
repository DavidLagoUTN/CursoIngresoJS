function mostrar()
{
	//tomo el mes
	var mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 días (29 si el año es bisiesto)");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días");
			break;
		default:
			alert("Este mes tiene 30 días");
			break;
	}

}//FIN DE LA FUNCIÓN