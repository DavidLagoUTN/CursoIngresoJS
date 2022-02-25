function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var numeroIngresadoParseado;
    var respuesta;
    var rangoMin;
    var rangoMax;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var cantidadPositivos;
    var sumaPositivos;
    var promedioPositivos;
    var sumaNegativos;
    var banderaPrimero;
    var NumMin;
    var letraNumMin;
    var NumMax;
    var letraNumMax;

    rangoMin = -100;
    rangoMax = 100;
    cantidadPares = 0;
    cantidadImpares = 0;
    cantidadCeros = 0;
    cantidadPositivos = 0;
    sumaPositivos = 0;
    promedioPositivos = 0;
    sumaNegativos = 0;
    respuesta = "si";
    banderaPrimero = true;

    while (respuesta == "si")
    {
        letraIngresada = prompt("Ingresa una letra");
        while (!isNaN(letraIngresada))
        {
            letraIngresada = prompt("' "+letraIngresada+"' no es una letra, intentá nuevamente. Ingresá una letra:");
        }

        numeroIngresado = prompt("Ingresa un numero entre -100 y 100:");
        numeroIngresadoParseado = parseInt(numeroIngresado);
        while (isNaN(numeroIngresadoParseado) || numeroIngresadoParseado <rangoMin || numeroIngresadoParseado >rangoMax)
        {
            numeroIngresado = prompt("' "+numeroIngresado+"' no es un número, o está fuera de rango. Ingresá un número entre -100 y 100:");
            numeroIngresadoParseado = parseInt(numeroIngresado);
        }

        if (numeroIngresadoParseado % 2 == 0)
        {
            cantidadPares += 1;
        }
        else
        {
            cantidadImpares += 1;
        }

        if (numeroIngresadoParseado == 0)
        {
            cantidadCeros += 1;
        }
        else
        {
            if (numeroIngresadoParseado > 0)
            {
                cantidadPositivos += 1;
                sumaPositivos += numeroIngresadoParseado;
            }
            else
            {
                sumaNegativos += numeroIngresadoParseado;
            }
        }

        if (banderaPrimero)
        {
            NumMin = numeroIngresadoParseado;
            letraNumMin = letraIngresada;
            NumMax = numeroIngresadoParseado;
            letraNumMax = letraIngresada;
            banderaPrimero = false;
        }
        else
        {
            if (numeroIngresadoParseado< NumMin)
            {
                NumMin = numeroIngresadoParseado;
                letraNumMin = letraIngresada;
            }
            else
            {
                if (numeroIngresadoParseado > NumMax)
                {
                    NumMax = numeroIngresadoParseado;
                    letraNumMax = letraIngresada;
                }
            }
        }
        respuesta = prompt ("Desea seguir ingresando datos? si - no:");
    }
    promedioPositivos = sumaPositivos / cantidadPositivos;

    document.write("a)Cantidad de nros pares: "+cantidadPares);
    document.write("<br>b)Cantidad de nros impares: "+cantidadImpares);
    document.write("<br>c)Cantidad de ceros: "+cantidadCeros);
    document.write("<br>d)Promedio de todos los nros positivos: "+promedioPositivos);
    document.write("<br>e)Suma de todos los nros negativos: "+sumaNegativos);
    document.write("<br>f)Número y letra del máximo: "+NumMax+" "+letraNumMax+". Número y letra del mínimo: "+NumMin+" "+letraNumMin+".")
}