/*
Bienvenidos (SOLO SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 ,
que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito
se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo
se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito
se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20% 
*/


function mostrar()
{
    var precioBaseDia;
    var cantidadDeDias;
    var cantidadDeDiasParseado;
    var porcentajeDeDescuento;
    var continenteAVisitar;
    var metodoDePago;
    var precioFinal;

    metodoDePago = prompt("Ingresá uno de los siguientes métodos de pago(sin espacios intermedios ni acentos):\n-Debito\n-MercadoPago\n-Efectivo\n-Otro");
    metodoDePago = metodoDePago.toLowerCase();

    precioBaseDia = 100;
    cantidadDeDias = prompt("Ingrese la cantidad de días:");
    cantidadDeDiasParseado = parseInt(cantidadDeDias);

    continenteAVisitar = document.getElementById("Marca").value;

    precioFinal = precioBaseDia * cantidadDeDiasParseado;

    switch(continenteAVisitar)
    {
        case "América":
            porcentajeDeDescuento = 50;
            switch (metodoDePago)
            {
                case "debito":
                    porcentajeDeDescuento += 10;
                    break;
            }
            break;

        case "África":
            porcentajeDeDescuento = 60;
            switch (metodoDePago)
            {
                case "efectivo":
                case "mercadopago":
                    porcentajeDeDescuento += 15;
                    break;
            }
            break;

        case "Europa":
            porcentajeDeDescuento = 20;
            switch (metodoDePago)
            {
                case "debito":
                    porcentajeDeDescuento += 15;
                    break;
                case "mercadopago":
                    porcentajeDeDescuento += 10;
                    break;
                default:
                    porcentajeDeDescuento += 5;
                    break;
            }
            break;
        default:
            porcentajeDeDescuento = -20;
            break;
    }

    precioFinal = precioFinal - porcentajeDeDescuento*precioFinal/100;

    alert("Su precio final para " + cantidadDeDiasParseado+ " días es de $" + precioFinal + " con un descuento del " + porcentajeDeDescuento + "% para el destino: " + continenteAVisitar);
}