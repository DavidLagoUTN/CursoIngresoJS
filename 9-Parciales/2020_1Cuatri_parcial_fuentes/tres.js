/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var edadIngresadaParseada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var temperaturaIngresadaParseada;
	var respuesta;

	var primerPersonaBandera;
	var nombrePersonaMasTemperatura;
	var mayorTemperatura;

	var mayoresDeEdadViudos;

	var hombresSolterosOViudos;

	var personasTerceraEdadConFiebre;

	var promedioHombresSolteros;
	var sumaEdadesHombresSolteros;
	var cantidadHombresSolteros;

	primerPersonaBandera = true;
	respuesta = true;
	mayoresDeEdadViudos = 0;
	hombresSolterosOViudos = 0;
	personasTerceraEdadConFiebre = 0;
	sumaEdadesHombresSolteros = 0;
	cantidadHombresSolteros = 0;

	while (respuesta)
	{
		nombreIngresado = prompt("Ingrese su nombre");

		edadIngresada = prompt("Ingrese su edad (mayor a 0)");
		edadIngresadaParseada = parseInt(edadIngresada);

		while (isNaN(edadIngresadaParseada) || edadIngresadaParseada<1)
		{
			edadIngresada = prompt("Error. Ingresaste una edad inválida. Ingrese su edad(mayor a 0)");
			edadIngresadaParseada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese su sexo ('f' o 'm'):");
		
		while (sexoIngresado!= "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error. Ingresaste un sexo no válido, intente nuevamente. Ingrese su sexo ('f' o 'm'):");
		}

		estadoCivilIngresado = prompt("Ingrese su estado civil('soltero', 'casado' o 'viudo'):");

		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error. Ingrese su estado civil('soltero', 'casado' o 'viudo'):");
		}

		temperaturaIngresada = prompt("Ingrese su temperatura (mayor a 0)");
		temperaturaIngresadaParseada = parseInt(temperaturaIngresada);

		while (isNaN(temperaturaIngresadaParseada) || temperaturaIngresadaParseada<1)
		{
			temperaturaIngresada = prompt("Error. Ingresaste una temperatura inválida. Ingrese su temperatura corporal(mayor a 0)");
			temperaturaIngresadaParseada = parseInt(temperaturaIngresada);
		}



		if (primerPersonaBandera || temperaturaIngresadaParseada > mayorTemperatura)
		{
			mayorTemperatura = temperaturaIngresadaParseada;
			nombrePersonaMasTemperatura = nombreIngresado;
			primerPersonaBandera = false;
		}

		if (edadIngresadaParseada>17 && estadoCivilIngresado == "viudo")
		{
			mayoresDeEdadViudos++;
		}

		if (sexoIngresado == "m")
		{
			if(estadoCivilIngresado == "soltero")
			{
				hombresSolterosOViudos ++;
				sumaEdadesHombresSolteros += edadIngresadaParseada;
				cantidadHombresSolteros ++;
			}
			if(estadoCivilIngresado == "viudo")
			{
				hombresSolterosOViudos ++;
			}

		}

		if (edadIngresadaParseada>60 && temperaturaIngresadaParseada>38)
		{
			personasTerceraEdadConFiebre ++;
		}
		respuesta = confirm ("Desea continuar?");
	}

	promedioHombresSolteros = sumaEdadesHombresSolteros / cantidadHombresSolteros;

	document.write("a)El nombre de la persona con mas temperatura: "+nombrePersonaMasTemperatura+".<br>");
	document.write("b)Mayores de edad estan viudos: "+mayoresDeEdadViudos+".<br>");
	document.write("c)Cantidad de hombres que hay solteros o viudos: " +hombresSolterosOViudos+".<br>");
	document.write("d)Personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: " +personasTerceraEdadConFiebre+".<br>");
	if (cantidadHombresSolteros==0)
	{
		document.write("e)No se ingresaron datos sobre hombres solteros");
	}
	else
	{
		document.write("e)Promedio de edad entre los hombres solteros: " +promedioHombresSolteros+"años.");
	}
}