/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoRectangulo;
    var anchoRectangulo;
    var cantidadDeAlambre;
    var largoRectanguloParseado;
    var anchoRectanguloParseado;

    largoRectangulo = document.getElementById("txtIdLargo").value;
    anchoRectangulo = document.getElementById("txtIdAncho").value;

    largoRectanguloParseado = parseInt(largoRectangulo);
    anchoRectanguloParseado = parseInt(anchoRectangulo);

    cantidadDeAlambre = (largoRectanguloParseado * 2 + anchoRectanguloParseado * 2) * 3;
    alert("Se necesitan " + cantidadDeAlambre + " metros de alambre para el terreno rectangular de 3 hilos.");
}
function Circulo () 
{
    var radio;
    var cantidadDeAlambre;
    var radioParseado;

    radio = document.getElementById("txtIdRadio").value;

    radioParseado = parseInt(radio);

    cantidadDeAlambre = 2 * Math.PI * radioParseado * 3;
    alert("Se necesitan " + cantidadDeAlambre + " metros de alambre para el terreno circular de 3 hilos.");
}
function Materiales () 
{
    var largoRectangulo;
    var anchoRectangulo;
    var cantidadDeBolsasDeCemento;
    var cantidadDeBolsasDeCal;
    var largoRectanguloParseado;
    var anchoRectanguloParseado;

    largoRectangulo = document.getElementById("txtIdLargo").value;
    anchoRectangulo = document.getElementById("txtIdAncho").value;

    largoRectanguloParseado = parseInt(largoRectangulo);
    anchoRectanguloParseado = parseInt(anchoRectangulo);
    
    cantidadDeBolsasDeCemento = largoRectanguloParseado * anchoRectanguloParseado * 2;
    cantidadDeBolsasDeCal = largoRectanguloParseado * anchoRectanguloParseado * 3;

    alert("Se necesitan " + cantidadDeBolsasDeCemento + " bolsas de cemento y " + cantidadDeBolsasDeCal + " bolsas de cal, para el terreno rectangular.");
    
}