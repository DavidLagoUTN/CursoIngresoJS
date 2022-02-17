/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
            switch(contadorIntentos)
            {
                case 1:
                    alert("Usted es un Psíquico.");
                    break;
                case 2:
                    alert("Excelente percepción.");
                    break;
                case 3:
                    alert("Esto es suerte.");
                    break;
                case 4:
                    alert("Excelente técnica.");
                    break;
                case 5:
                    alert("Usted está en la media.");
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    alert("Falta técnica.");
                    break;
                default:
                    alert("Afortunado en el amor!!.");
                    break;

            }
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