
function mostrar()
{
    var ladoTrianguloEquilatero;
    var ladoTrianguloEquilateroParseado;
    var perimetroTrianguloEquilatero;

	ladoTrianguloEquilatero =prompt("Ingresá la longitud de un lado del triángulo equilátero:");
    ladoTrianguloEquilateroParseado = parseInt(ladoTrianguloEquilatero);

    perimetroTrianguloEquilatero = ladoTrianguloEquilateroParseado * 3;

    alert("El perímetro del triángulo equilátero es: " + perimetroTrianguloEquilatero);
}