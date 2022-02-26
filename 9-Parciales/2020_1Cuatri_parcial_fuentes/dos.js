/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validar("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro 
*/


function mostrar()
{
	var tipoProducto;
    var cantidadBolsas;
    var cantidadBolsasParseado;
    var precioBolsa;
    var precioBolsaParseado;
    var respuesta;
    var sumaCantidadBolsas;
    var sumaCompras;

    var cantidadBolsasArena;
    var cantidadBolsasCal;
    var cantidadBolsasCemento;
    var tipoConMasBolsas;

    var ArenaMasCara;
    var CalMasCara;
    var CementoMasCaro;
    var tipoMasCaro;

    var primerDescuento;
    var SegundoDescuento;

    primerDescuento = 15;
    SegundoDescuento = 25;
    descuentoAplicado = 0;
    sumaCantidadBolsas =0;
    sumaCompras = 0;

    respuesta = true;
    cantidadBolsasArena = 0;
    cantidadBolsasCal = 0;
    cantidadBolsasCemento = 0;
    
    ArenaMasCara = 0;
    CalMasCara = 0;
    CementoMasCaro = 0;
    

    while (respuesta)
    {
        tipoProducto = prompt("Ingrese el tipo de producto ('arena','cal','cemento')")

        while (tipoProducto!= "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
        {
            tipoProducto = prompt("Error. '"+tipoProducto+"' no es válido. Ingrese el tipo de producto ('arena','cal','cemento')")
        }

        cantidadBolsas = prompt("Ingrese la cantidad de bolsas para el producto:");
        cantidadBolsasParseado = parseInt(cantidadBolsas);

        while (isNaN(cantidadBolsasParseado) || cantidadBolsasParseado<0)
        {
            cantidadBolsas = prompt("Error '"+cantidadBolsas+"' no es válido. Ingrese la cantidad de bolsas para el producto (mayor a 0):");
            cantidadBolsasParseado = parseInt(cantidadBolsas);
        }

        precioBolsa = prompt("Ingrese el precio de las bolsas para el producto:");
        precioBolsaParseado = parseInt(precioBolsa);

        while (isNaN(precioBolsaParseado) || precioBolsaParseado<0)
        {
            precioBolsa = prompt("Error '"+precioBolsa+"' no es válido. Ingrese el precio de las bolsas para el producto (mayor a 0):");
            precioBolsaParseado = parseInt(precioBolsa);
        }

        sumaCantidadBolsas += cantidadBolsasParseado;
        alert(sumaCantidadBolsas);
        sumaCompras += precioBolsaParseado * cantidadBolsasParseado;

        switch(tipoProducto)
        {
            case "arena":
                cantidadBolsasArena += cantidadBolsasParseado;
                if (precioBolsaParseado > ArenaMasCara)
                {
                    ArenaMasCara = precioBolsaParseado;
                }
                break;
            case "cal":
                cantidadBolsasCal += cantidadBolsasParseado;
                if (precioBolsaParseado > CalMasCara)
                {
                    CalMasCara = precioBolsaParseado;
                }
                break;
            case "cemento":
                cantidadBolsasCemento += cantidadBolsasParseado;
                if (precioBolsaParseado > CementoMasCaro)
                {
                    CementoMasCaro = precioBolsaParseado;
                }
                break;
            
        }

        respuesta = confirm("Desea continuar?");
    }

    document.write("a)El importe total a pagar es de: $"+sumaCompras+".<br>")

    if (sumaCantidadBolsas>30)
    {
        descuentoAplicado = SegundoDescuento;
    }
    else
    {
        if (sumaCantidadBolsas>10)
        {   
            descuentoAplicado = primerDescuento;
        }
    }
    sumaCompras = sumaCompras - sumaCompras * descuentoAplicado/100;

    if (descuentoAplicado >0 )
    {
        document.write("b)El importe con un "+descuentoAplicado+"% de descuento aplicado es de: $"+sumaCompras+".<br>");
    }
    else
    {
        document.write("b)No se aplicará descuento .<br>"+sumaCompras);
    }


    if (cantidadBolsasArena> cantidadBolsasCal)
    {
        if (cantidadBolsasArena> cantidadBolsasCemento)
        {
            tipoConMasBolsas = "arena";
        }
        else
        {
            tipoConMasBolsas = "cemento";
        }
    }
    else
    {
        if (cantidadBolsasCal> cantidadBolsasCemento)
        {
            tipoConMasBolsas = "cal";
        }
        else
        {
            tipoConMasBolsas = "cemento";
        }
    }

    document.write("c)El tipo con más cantidad de bolsas es: "+tipoConMasBolsas+".<br>");

    if (ArenaMasCara> CalMasCara)
    {
        if (ArenaMasCara> CementoMasCaro)
        {
            tipoMasCaro = "arena";
        }
        else
        {
            tipoMasCaro = "cemento";
        }
    }
    else
    {
        if (CalMasCara> CementoMasCaro)
        {
            tipoMasCaro = "cal";
        }
        else
        {
            tipoMasCaro = "cemento";
        }
    }

    document.write("d)El tipo más caro es:"+tipoMasCaro+".")
}
