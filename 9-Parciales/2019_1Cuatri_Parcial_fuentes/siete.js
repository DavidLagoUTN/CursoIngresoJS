function mostrar()
{
    var alturaIngresada;
    var alturaIngresadaParseada;
    var alturaMin;
    var alturaMax;
    var sexo;
    var contadorJugadores;
    var sumaAlturas;
    var promedioAlturas;
    var alturaMasBaja;
    var sexoDeLaAlturaMasBaja;
    var cantidadMujeresAltas;
    var alturaMujerAlta;
    var mensajeAlert;

    contadorJugadores = 0;
    alturaMin = 0;
    alturaMax = 250;
    alturaMasBaja = 0;
    alturaMujerAlta = 190;
    cantidadMujeresAltas = 0;
    sumaAlturas = 0;

    while (contadorJugadores <5)
        {
        contadorJugadores ++;

        alturaIngresada = prompt("Hola persona número " + contadorJugadores + ": Ingresá tu altura (Entre "+alturaMin+" y "+alturaMax+" cm):");
        alturaIngresadaParseada = parseInt(alturaIngresada);
        while (isNaN(alturaIngresadaParseada) || alturaIngresadaParseada<0 || alturaIngresadaParseada>250)
        {
            alturaIngresada = prompt("Error. Lo que ingresaste: '" + alturaIngresadaParseada + "' no es un numero, o está fuera del rango entre " + alturaMin + " y " + alturaMax +" cm. Por favor, intentá nuevamente ingresar un numero:");
            alturaIngresadaParseada = parseInt(alturaIngresada);
        }
        sumaAlturas += alturaIngresadaParseada;

        sexo = prompt("Ahora ingresá tu sexo/género con el que te identifiques('f' o 'm'):").toLowerCase();
        while (sexo!= "f" && sexo!= "m")
        {
            sexo = prompt("Error. Ingresaste '" + sexo + "', lo cual no es un sexo/género válido. Ingresá nuevamente tu sexo/género con el que te identifiques('f' o 'm'):").toLowerCase();
        }

        if (contadorJugadores == 1)
        {
            alturaMasBaja = alturaIngresadaParseada;
            sexoDeLaAlturaMasBaja = sexo;
        }
        else
        {
            if (alturaIngresadaParseada < alturaMasBaja)
            {
                alturaMasBaja = alturaIngresadaParseada;
                sexoDeLaAlturaMasBaja = sexo;
            }
        }
        if (sexo == "f" && alturaIngresadaParseada > alturaMujerAlta)
            {
                cantidadMujeresAltas ++;
            }
        }
        promedioAlturas =  sumaAlturas / contadorJugadores;
        mensajeAlert = "a)El promedio de las alturas totales es de: " + promedioAlturas +"cm.";
        mensajeAlert += "\nb)La altura más baja es de " + alturaMasBaja + "cm y su sexo es " + sexoDeLaAlturaMasBaja;
        mensajeAlert += "\nc)La cantidad de mujeres que superan los " + alturaMujerAlta + "cm es de: " + cantidadMujeresAltas;
        alert(mensajeAlert);
}