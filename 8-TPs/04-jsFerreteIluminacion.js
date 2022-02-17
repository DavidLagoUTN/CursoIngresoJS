/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*
function CalcularPrecio () 
{
    var precioDeLamparita;
    var porcentajeDeDescuento;
    var cantidadDeLamparitas;
    var cantidadDeLamparitasParseada;
    var marcaDeLamparitas;
    var precioDeLamparitas;
    var precioFinal;
    var impuestoIngresosBrutos;

    precioDeLamparita = 35;
    cantidadDeLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparitasParseada = parseInt(cantidadDeLamparitas);
    marcaDeLamparitas = document.getElementById("Marca").value;

    if (cantidadDeLamparitasParseada >= 6)
    {
        porcentajeDeDescuento = 50;
    }
    else
    {
        if (cantidadDeLamparitasParseada == 5)
        {
            if (marcaDeLamparitas == "ArgentinaLuz")
            {
                porcentajeDeDescuento = 40;
            }
            else
            {
                porcentajeDeDescuento = 30;
            }
        }
        else
        {
            if (cantidadDeLamparitasParseada == 4)
            {
                if (marcaDeLamparitas == "ArgentinaLuz" || marcaDeLamparitas == "FelipeLamparas")
                {
                    porcentajeDeDescuento = 25;
                }
                else
                {
                    porcentajeDeDescuento = 20;
                }
            }
            else
            {
                if (cantidadDeLamparitasParseada == 3)
                {
                    if (marcaDeLamparitas == "ArgentinaLuz")
                    {
                        porcentajeDeDescuento = 15;
                    }
                    else
                    {
                        if (marcaDeLamparitas == "FelipeLamparas")
                        {
                            porcentajeDeDescuento = 10;
                        }
                        else
                        {
                            porcentajeDeDescuento = 5;
                        }
                    }
                }
                else
                {
                    porcentajeDeDescuento = 0;
                }
            }
        }
    }
    precioDeLamparitas = precioDeLamparita * cantidadDeLamparitasParseada;
    precioFinal = precioDeLamparitas - precioDeLamparitas * porcentajeDeDescuento /100;
    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó $"+ impuestoIngresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
*/
/*Por marcas:

function CalcularPrecio () 
{
    var precioDeLamparita;
    var porcentajeDeDescuento;
    var cantidadDeLamparitas;
    var cantidadDeLamparitasParseada;
    var marcaDeLamparitas;
    var precioDeLamparitas;
    var precioFinal;
    var impuestoIngresosBrutos;

    precioDeLamparita = 35;
    cantidadDeLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparitasParseada = parseInt(cantidadDeLamparitas);
    marcaDeLamparitas = document.getElementById("Marca").value;

    if (marcaDeLamparitas == "ArgentinaLuz")
    {
        if (cantidadDeLamparitasParseada >= 6)
        {
            porcentajeDeDescuento = 50;
        }
        else
        {
            if (cantidadDeLamparitasParseada == 5)
            {
                porcentajeDeDescuento = 40;
            }
            else
            {
                if (cantidadDeLamparitasParseada == 4)
                {
                    porcentajeDeDescuento = 25;
                }
                else
                {
                    if (cantidadDeLamparitasParseada == 3)
                    {
                        porcentajeDeDescuento = 15;
                    }
                    else
                    {
                        porcentajeDeDescuento = 0;
                    }
                }
            }
        }
    }
    else
    {
        if (marcaDeLamparitas == "FelipeLamparas")
        {
            if (cantidadDeLamparitasParseada >= 6)
            {
                porcentajeDeDescuento = 50;
            }
            else
            {
                if (cantidadDeLamparitasParseada == 5)
                {
                    porcentajeDeDescuento = 30;
                }
                else
                {
                    if (cantidadDeLamparitasParseada == 4)
                    {
                        porcentajeDeDescuento = 25;
                    }
                    else
                    {
                        if (cantidadDeLamparitasParseada == 3)
                        {
                            porcentajeDeDescuento = 10;
                        }
                        else
                        {
                            porcentajeDeDescuento = 0;
                        }
                    }
                }
            }
        }
        else
        {
            if (cantidadDeLamparitasParseada >= 6)
            {
                porcentajeDeDescuento = 50;
            }
            else
            {
                if (cantidadDeLamparitasParseada == 5)
                {
                    porcentajeDeDescuento = 30;
                }
                else
                {
                    if (cantidadDeLamparitasParseada == 4)
                    {
                        porcentajeDeDescuento = 20;
                    }
                    else
                    {
                        if (cantidadDeLamparitasParseada == 3)
                        {
                            porcentajeDeDescuento = 5;
                        }
                        else
                        {
                            porcentajeDeDescuento = 0;
                        }
                    }
                }
            }
        }
    }

    precioDeLamparitas = precioDeLamparita * cantidadDeLamparitasParseada;
    precioFinal = precioDeLamparitas - precioDeLamparitas * porcentajeDeDescuento /100;
    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó $"+ impuestoIngresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
*/


//Con Switch

/*
function CalcularPrecio () 
{
    var precioDeLamparita;
    var porcentajeDeDescuento;
    var cantidadDeLamparitas;
    var cantidadDeLamparitasParseada;
    var marcaDeLamparitas;
    var precioDeLamparitas;
    var precioFinal;
    var impuestoIngresosBrutos;

    precioDeLamparita = 35;
    cantidadDeLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparitasParseada = parseInt(cantidadDeLamparitas);
    marcaDeLamparitas = document.getElementById("Marca").value;

    switch (cantidadDeLamparitasParseada)
    {
        case 1:
        case 2:
            porcentajeDeDescuento = 0;
            break;
        case 3:
            switch(marcaDeLamparitas)
            {
                case "ArgentinaLuz":
                    porcentajeDeDescuento = 15;
                    break;
                case "FelipeLamparas":
                    porcentajeDeDescuento = 10;
                    break;
                default:
                    porcentajeDeDescuento = 5;
                    break;
            }
            break;
        case 4:
            switch(marcaDeLamparitas)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajeDeDescuento = 25;
                    break;
                default:
                    porcentajeDeDescuento = 20;
                    break;
            }
            break;
        case 5:
            switch(marcaDeLamparitas)
            {
                case "ArgentinaLuz":
                    porcentajeDeDescuento = 40;
                    break;
                default:
                    porcentajeDeDescuento = 30;
                    break;
            }
            break;
        default:
            porcentajeDeDescuento = 50;
            break;
    }
    precioDeLamparitas = precioDeLamparita * cantidadDeLamparitasParseada;
    precioFinal = precioDeLamparitas - precioDeLamparitas * porcentajeDeDescuento /100;
    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó $"+ impuestoIngresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
*/



/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca 
el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si
es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se
hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del
impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */



//switch + if


function CalcularPrecio () 
{
    var precioDeLamparita;
    var porcentajeDeDescuento;
    var cantidadDeLamparitas;
    var cantidadDeLamparitasParseada;
    var marcaDeLamparitas;
    var precioDeLamparitas;
    var precioFinal;
    var impuestoIngresosBrutos;

    precioDeLamparita = 35;
    cantidadDeLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparitasParseada = parseInt(cantidadDeLamparitas);
    marcaDeLamparitas = document.getElementById("Marca").value;

    switch (cantidadDeLamparitasParseada)
    {
        case 1:
        case 2:
            porcentajeDeDescuento = 0;
            break;
        case 3:
            if (marcaDeLamparitas == "ArgentinaLuz")
            {
                porcentajeDeDescuento = 15;
            }
            else
            {
                if (marcaDeLamparitas == "FelipeLamparas")
                {
                    porcentajeDeDescuento = 10;
                }
                else
                {
                    porcentajeDeDescuento = 5;
                }
            }
            break;
        case 4:
            if (marcaDeLamparitas == "ArgentinaLuz" || marcaDeLamparitas == "FelipeLamparas")
            {
                porcentajeDeDescuento = 25;
            }
            else
            {
                porcentajeDeDescuento = 20;
            }
            break;
        case 5:
            if (marcaDeLamparitas == "ArgentinaLuz")
            {
                porcentajeDeDescuento = 40;
            }
            else
            {
                porcentajeDeDescuento = 30;
            }
            break;
        default:
            porcentajeDeDescuento = 50;
            break;
    }
    precioDeLamparitas = precioDeLamparita * cantidadDeLamparitasParseada;
    precioFinal = precioDeLamparitas - precioDeLamparitas * porcentajeDeDescuento /100;
    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó $"+ impuestoIngresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}

