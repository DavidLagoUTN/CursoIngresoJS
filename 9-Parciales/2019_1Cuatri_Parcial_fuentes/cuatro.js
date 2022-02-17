function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var primerNumeroParseado;
    var segundoNumeroParseado;
    var resultado;

    primerNumero = prompt("Ingrese el primer número:");
    segundoNumero = prompt("Ingrese el segundo número");
    primerNumeroParseado = parseInt(primerNumero);
    segundoNumeroParseado = parseInt(segundoNumero);

    if (primerNumero == segundoNumero)
    {
        alert("Resultado: " + primerNumero + segundoNumero);
    }
    else
    {
        if (primerNumeroParseado > segundoNumeroParseado)
        {
            resultado = primerNumeroParseado - segundoNumeroParseado;
            if (resultado > 10)
            {
                alert("La resta es " + resultado + " y superó el 10.");
            }
        }
        else
        {
            resultado = primerNumeroParseado + segundoNumeroParseado;
        }
        alert("Resultado: " + resultado);
    }
}