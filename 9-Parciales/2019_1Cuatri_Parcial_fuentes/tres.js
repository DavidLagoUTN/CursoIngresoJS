function mostrar()
{
    var precio;
    var precioParseado;
    var porcentajeDeDescuento;
    var porcentajeDeDescuentoParseado;
    var precioFinal;

    precio = prompt("Ingresá el precio");
    precioParseado = parseInt(precio);

    porcentajeDeDescuento = prompt("Ingresá el porcentaje de descuento");
    porcentajeDeDescuentoParseado = parseInt(porcentajeDeDescuento);

    precioFinal = precioParseado - precioParseado * porcentajeDeDescuentoParseado / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
