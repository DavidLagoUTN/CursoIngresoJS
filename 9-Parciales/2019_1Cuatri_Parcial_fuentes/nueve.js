function mostrar()
{
    var paisIngresado;
    var cantidadHabitantesIngresada;
    var cantidadHabitantesIngresadaParseada;
    var temperaturaMinimaIngresada;
    var temperaturaMinimaIngresadaParseada;
    var cantidadTemperaturasPares;
    var paisConMenosHabitantes;
    var paisConMenosHabitantesCantidad;
    var banderaPrimero;
    var cantidadPaisesTemp40;
    var cantidadTotalDeHabitantes;
    var cantidadTotalDePaises;
    var promedioHabitantes;
    var menorTemperaturaMinima;
    var paisMenorTemperaturaMinima;
    var respuesta;

    respuesta = "si";
    cantidadTemperaturasPares = 0;
    banderaPrimero = true;
    cantidadPaisesTemp40 = 0;
    cantidadTotalDeHabitantes = 0;
    cantidadTotalDePaises = 0;

    while (respuesta =="si")
    {
        paisIngresado = prompt("Ingrese el nombre de un país:");
        while (!isNaN(paisIngresado))
        {
            paisIngresado = prompt("'"+paisIngresado+"' no es un nombre de pais válido. Ingrese el nombre de un país:");
        }

        cantidadHabitantesIngresada = prompt("Ingrese la cantidad de habitantes del país, en millones(entre 1 y 7000):");
        cantidadHabitantesIngresadaParseada = parseInt(cantidadHabitantesIngresada);
        while(isNaN(cantidadHabitantesIngresadaParseada) || cantidadHabitantesIngresadaParseada<1 || cantidadHabitantesIngresadaParseada>7000)
        {
            cantidadHabitantesIngresada = prompt("'"+cantidadHabitantesIngresada+"' no es un número, o está fuera de rango. Por favor, ingrese la cantidad de habitantes del país, en millones(entre 1 y 7000):");
            cantidadHabitantesIngresadaParseada = parseInt(cantidadHabitantesIngresada);
        }

        temperaturaMinimaIngresada = prompt("Ingrese la temperatura mínima del país (entre -50 y 50):");
        temperaturaMinimaIngresadaParseada = parseInt(temperaturaMinimaIngresada);
        while(isNaN(temperaturaMinimaIngresadaParseada) || temperaturaMinimaIngresadaParseada<-50 || temperaturaMinimaIngresadaParseada>50)
        {
            temperaturaMinimaIngresada = prompt("'"+temperaturaMinimaIngresada+"' no es un número, o está fuera de rango. Por favor, ingrese la temperatura mínima del país (entre -50 y 50):");
            temperaturaMinimaIngresadaParseada = parseInt(temperaturaMinimaIngresada);
        }

        if (temperaturaMinimaIngresadaParseada %2 == 0)
        {
            cantidadTemperaturasPares += 1;
        }

        if (banderaPrimero)
        {
            paisConMenosHabitantes = paisIngresado;
            paisConMenosHabitantesCantidad = cantidadHabitantesIngresadaParseada;

            menorTemperaturaMinima = temperaturaMinimaIngresadaParseada;
            paisMenorTemperaturaMinima = paisIngresado;

            banderaPrimero = false;            
        }
        else
        {
            if (cantidadHabitantesIngresadaParseada < paisConMenosHabitantesCantidad)
            {
                paisConMenosHabitantes = paisIngresado;
                paisConMenosHabitantesCantidad = cantidadHabitantesIngresadaParseada;
            }

            if (temperaturaMinimaIngresadaParseada < menorTemperaturaMinima)
            {
                menorTemperaturaMinima = temperaturaMinimaIngresadaParseada;
                paisMenorTemperaturaMinima = paisIngresado;
            }
        }

        if (temperaturaMinimaIngresadaParseada >40)
        {
            cantidadPaisesTemp40 ++;
        }

        cantidadTotalDeHabitantes += cantidadHabitantesIngresadaParseada;
        cantidadTotalDePaises ++;

        respuesta = prompt("Desea continuar el ingreso? si - no :");
    }
    promedioHabitantes = cantidadTotalDeHabitantes / cantidadTotalDePaises;

    document.write("a)Cantidad de temperaturas pares: "+cantidadTemperaturasPares+".<br>");
    document.write("b)Nombre del pais con menos habitantes: "+paisConMenosHabitantes+".<br>");
    document.write("c)Cantidad de paises que superan los 40 grados: "+cantidadPaisesTemp40+".<br>");
    document.write("d)Promedio de habitantes entre los paises ingresados: "+promedioHabitantes+".<br>");
    document.write("e)La temperatura mínima ingresada es de: "+menorTemperaturaMinima+" grados, y el nombre del pais que registro esa temperatura: "+paisMenorTemperaturaMinima+".");
}