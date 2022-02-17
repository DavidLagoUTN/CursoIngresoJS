/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var numeroIngresadoParseado;

function comenzar()
{
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto = parseInt(Math.random()*100 +1);
    contadorIntentos = 0;
}

function verificar()
{
    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresadoParseado = parseInt(numeroIngresado);

    contadorIntentos += 1;

    switch(numeroIngresadoParseado)
    {
        case numeroSecreto:
            alert("Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos");
            break;
        
        default:
            if (numeroIngresadoParseado < numeroSecreto)
            {
                alert("Falta...");
            }
            else
            {
                alert("Se pasó...");
            }
            break;
    }
    document.getElementById("txtIdIntentos").value = contadorIntentos;
        
}