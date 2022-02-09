/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var fahrenheitParseado;
    var centigrados;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheitParseado = parseInt(fahrenheit);

    centigrados = (fahrenheitParseado - 32) /1.8 ;

    alert(fahrenheitParseado + " Fahrenheit son " + centigrados + " Centígrados." );

}

function CentigradosFahrenheit () 
{
	var centigrados;
    var centigradosParseado;
    var fahrenheit;

    centigrados = document.getElementById("txtIdTemperatura").value;

    centigradosParseado = parseInt(centigrados);

    fahrenheit = centigradosParseado * 1.8 +32

    alert(centigradosParseado + " Centígrados son " + fahrenheit + " Fahrenheit." );
}
