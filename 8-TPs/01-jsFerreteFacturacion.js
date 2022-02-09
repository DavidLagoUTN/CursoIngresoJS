/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var primerPrecioParseado;
    var segundoPrecioParseado;
    var tercerPrecioParseado;
    var sumaPrecios;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecioParseado = parseInt(primerPrecio);
    segundoPrecioParseado = parseInt(segundoPrecio);
    tercerPrecioParseado = parseInt(tercerPrecio);
    sumaPrecios = primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado;

    alert("La suma es de " + sumaPrecios + " pesos");

}
function Promedio () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var primerPrecioParseado;
    var segundoPrecioParseado;
    var tercerPrecioParseado;
    var promedioPrecios;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecioParseado = parseInt(primerPrecio);
    segundoPrecioParseado = parseInt(segundoPrecio);
    tercerPrecioParseado = parseInt(tercerPrecio);
    promedioPrecios = (primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado)/3;

    alert("El promedio es de " + promedioPrecios + " pesos");
}
function PrecioFinal () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var primerPrecioParseado;
    var segundoPrecioParseado;
    var tercerPrecioParseado;
    var sumaPrecios;
    var sumaPreciosMasIva;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecioParseado = parseInt(primerPrecio);
    segundoPrecioParseado = parseInt(segundoPrecio);
    tercerPrecioParseado = parseInt(tercerPrecio);

    sumaPrecios = primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado;
    sumaPreciosMasIva = sumaPrecios + sumaPrecios*21/100;

    alert("La suma es de " + sumaPreciosMasIva + " pesos, con IVA del 21% incluído.");
}