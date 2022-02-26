//>>>>>>>>>>>>>>>>>>EJERCICIOS SIMULACRO<<<<<<<<<<<<<<<<<<

/*
1. Se ingresan 5 importes, marca del producto y país de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su país
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.
*/

/*

function mostrar()
{
    var importeIngresado;
    var importeIngresadoParseado;
    var marcaProducto;
    var paisOrigen;
    var contador;
    var importeMin;
    var importeMinPais;
    var importeMax;
    var importeMaxMarca;
    var sumaImportes;
    var promedioImportes;
    var cantidadProductosChina;
    var descuentoImporteMax;
    var precioFinal;
    var mensajeAlert;

    contador = 0;
    sumaImportes = 0;
    promedioImportes = 0;
    cantidadProductosChina = 0;

    while (contador<5)
    {
        importeIngresado = prompt ("Ingrese un importe:");
        importeIngresadoParseado = parseInt(importeIngresado);

        while (isNaN(importeIngresadoParseado) || importeIngresadoParseado<0)
        {
            importeIngresado = prompt ("Error. Ingresaste: "+importeIngresado+", no es un número o es negativo. Ingrese un importe:");
            importeIngresadoParseado = parseInt(importeIngresado);
        }

        marcaProducto = prompt("Ingrese una marca:");
        paisOrigen = prompt("Ingrese el país de origen (China, Paraguay o Uruguay):");

        while (paisOrigen != "China" && paisOrigen != "Paraguay" && paisOrigen != "Uruguay")
        {
            paisOrigen = prompt("Error. Ingresaste: "+paisOrigen+", no es un país válido. Ingrese el país de origen (China, Paraguay o Uruguay):");
        }

        if (contador == 0 || importeIngresadoParseado < importeMin)
        {
            importeMin = importeIngresadoParseado;
            importeMinPais = paisOrigen;
        }
        if (contador == 0 || importeIngresadoParseado > importeMax)
        {
            importeMax = importeIngresadoParseado;
            importeMaxMarca = marcaProducto;
        }
        if (paisOrigen == "China")
        {
            cantidadProductosChina ++;
        }

        sumaImportes += importeIngresadoParseado;
        contador ++;
    }
    promedioImportes = sumaImportes / contador;
    descuentoImporteMax = importeMax *10/100;
    precioFinal = importeMax - descuentoImporteMax;

    mensajeAlert = "a)Importe mínimo: "+importeMin+" . País: "+importeMinPais;
    mensajeAlert += "\nb)Importe máximo: "+importeMax+" . Marca: "+marcaProducto;
    mensajeAlert += "\nc)Importe promedio: "+promedioImportes;
    if (cantidadProductosChina == 0)
    {
        mensajeAlert += "\nd)No se registraron productos de China.";
    }
    else
    {
        mensajeAlert += "\nd)Cantidad de productos de China: "+cantidadProductosChina;
    }
    mensajeAlert += "\ne) Del importe máximo: $"+importeMax+", se descuentan: $"+descuentoImporteMax+". El precio final es de: $"+precioFinal;

    alert(mensajeAlert);
}

*/









/*
2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o María)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comisión por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendrá una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comisión será del 5%.

Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

/*

function mostrar()
{
    var nombreVendedor;
    var importeVenta;
    var importeVentaParseado;
    var comisionJuan;
    var cantidadVentasJuan;
    var importeTotalJuan;
    var comisionPedro;
    var cantidadVentasPedro;
    var importeTotalPedro;
    var comisionMaria;
    var cantidadVentasMaria;
    var importeTotalMaria;

    var vendedorMayorComision;

    var importeComision;
    var comisionPorcentajeMayor;
    var comisionPorcentajeBase;
    var respuesta;

    respuesta = true;

    cantidadVentasJuan = 0;
    importeTotalJuan = 0;
 
    cantidadVentasPedro = 0;
    importeTotalPedro = 0;

    cantidadVentasMaria = 0;
    importeTotalMaria = 0;

    comisionJuan = 0;
    comisionPedro = 0;
    comisionMaria = 0;

    importeComision = 500000;
    comisionPorcentajeMayor = 10;
    comisionPorcentajeBase = 5;

    while (respuesta)
    {
        nombreVendedor = prompt("Ingrese el nombre del vendedor (Juan, Pedro o Maria): ");
        while (nombreVendedor!= "Juan" && nombreVendedor!= "Pedro" && nombreVendedor != "Maria")
        {
            nombreVendedor = prompt("Error. "+nombreVendedor+" no está en la lista de vendedores. Ingrese el nombre del vendedor (Juan, Pedro o Maria): ");
        }

        importeVenta = prompt("Ingrese el importe de la venta (positivo y menor a 10000):");
        importeVentaParseado = parseInt(importeVenta);
        while (isNaN(importeVentaParseado) || importeVenta <1 || importeVenta >10000)
        {
            importeVenta = prompt("Error. "+importeVenta+" no es válido. Ingrese el importe de la venta (positivo y menor a 10000):");
            importeVentaParseado = parseInt(importeVenta);
        }

        switch(nombreVendedor)
        {
            case "Juan":
                cantidadVentasJuan ++;
                importeTotalJuan += importeVentaParseado;
                break;
            case "Pedro":
                cantidadVentasPedro ++;
                importeTotalPedro += importeVentaParseado;
                break;
            case "Maria":
                cantidadVentasMaria ++;
                importeTotalMaria += importeVentaParseado;
                break;
        }

        respuesta = confirm("Desea continuar?:");
    }

    if (importeTotalJuan>importeComision)
    {
        comisionJuan = importeTotalJuan * comisionPorcentajeMayor /100;
    }
    else
    {
        comisionJuan = importeTotalJuan * comisionPorcentajeBase /100;
    }

    if (importeTotalPedro>importeComision)
    {
        comisionPedro = importeTotalPedro * comisionPorcentajeMayor /100;
    }
    else
    {
        comisionPedro = importeTotalPedro * comisionPorcentajeBase /100;
    }

    if (importeTotalMaria>importeComision)
    {
        comisionMaria = importeTotalMaria * comisionPorcentajeMayor /100;
    }
    else
    {
        comisionMaria = importeTotalMaria * comisionPorcentajeBase /100;
    }


    document.write("a)Importe total de ventas, cantidad de ventas y comisión por vendedor:<br>");
    document.write("-Juan:<br>Importe: $"+importeTotalJuan+". Cantidad de ventas: "+cantidadVentasJuan+". Comisión: $"+comisionJuan+ ".<br>");
    document.write("-Pedro:<br>Importe: $"+importeTotalPedro+". Cantidad de ventas: "+cantidadVentasPedro+". Comisión: $"+comisionPedro+ ".<br>");
    document.write("-Maria:<br>Importe: $"+importeTotalMaria+". Cantidad de ventas: "+cantidadVentasMaria+". Comisión: $"+comisionMaria+ ".<br>");

    if (comisionJuan>comisionPedro)
    {
        if (comisionJuan>comisionMaria)
        {
            vendedorMayorComision = "Juan";
        }
        else
        {
            vendedorMayorComision = "Maria";
        }
    }
    else
    {
        if (comisionPedro>comisionMaria)
        {
            vendedorMayorComision = "Pedro";
        }
        else
        {
            vendedorMayorComision = "Maria";
        }
    }

    document.write("<br>b)"+vendedorMayorComision+" recaudó más dinero en comisiones.");
}
*/











/*
3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:

*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
*/


/*
function mostrar()
{
    var contadorEmpleados;
    var nombreIngresado;
    var apellidoIngresado;
    var generoIngresado;
    var cantidadDeHijosIngresada;
    var cantidadDeHijosIngresadaParseada;

    var cantidadEmpleadosFemenino;
    var cantidadEmpleadosMasculino;
    var cantidadEmpleadosNoBinario;

    var porcentajeEmpleadosFemenino;
    var porcentajeEmpleadosMasculino;
    var porcentajeEmpleadosNoBinario;

    var banderaPrimerEmpleadoNoBinario;
    var nombreEmpleadoNoBinarioConMasHijos;
    var cantidadDeHijosEmpleadoNoBinario;

    var banderaPrimerEmpleadoSinHijos;
    var nombrePrimerEmpleadoSinHijos;
    var apellidoPrimerEmpleadoSinHijos;

    var conceptoAsignaciones;

    contadorEmpleados = 0;

    cantidadEmpleadosFemenino = 0;
    cantidadEmpleadosMasculino = 0;
    cantidadEmpleadosNoBinario = 0;

    banderaPrimerEmpleadoNoBinario = true;
    banderaPrimerEmpleadoSinHijos = true;

    conceptoAsignaciones = 0;

    while(contadorEmpleados<10)
    {
        nombreIngresado = prompt("Ingrese su nombre:");
        apellidoIngresado = prompt("Ingrese su apellido:");
        generoIngresado = prompt("Ingrese su género (Masculino, Femenino o No Binario):");
        while (generoIngresado!= "Masculino" && generoIngresado!= "Femenino" && generoIngresado!= "No Binario")
        {
            generoIngresado = prompt("Error. Ingrese un género válido (Masculino, Femenino o No Binario):");
        }

        cantidadDeHijosIngresada = prompt("Ingrese cantidad de hijos:");
        cantidadDeHijosIngresadaParseada = parseInt(cantidadDeHijosIngresada);
        while (isNaN(cantidadDeHijosIngresadaParseada))
        {
            cantidadDeHijosIngresada = prompt("Error. Ingrese cantidad de hijos (no negativo):");
            cantidadDeHijosIngresadaParseada = parseInt(cantidadDeHijosIngresada);
        }


        switch (cantidadDeHijosIngresadaParseada)
        {
            case 0:
                if (banderaPrimerEmpleadoSinHijos)
                {
                    nombrePrimerEmpleadoSinHijos = nombreIngresado;
                    apellidoPrimerEmpleadoSinHijos = apellidoIngresado;
                    banderaPrimerEmpleadoSinHijos = false;
                }
                break;
            case 1:
                conceptoAsignaciones += 5000;
                break;
            case 2:
                conceptoAsignaciones += 8000;
                break;
            default:
                conceptoAsignaciones += 10000;
                break;
        }

        switch(generoIngresado)
        {
            case "Masculino":
                cantidadEmpleadosMasculino ++;
                break;
            case "Femenino":
                cantidadEmpleadosFemenino ++;
                break;
            case "No Binario":
                cantidadEmpleadosNoBinario ++;
                if (banderaPrimerEmpleadoNoBinario || cantidadDeHijosIngresadaParseada>cantidadDeHijosEmpleadoNoBinario)
                {
                    cantidadDeHijosEmpleadoNoBinario = cantidadDeHijosIngresadaParseada;
                    nombreEmpleadoNoBinarioConMasHijos = nombreIngresado;
                    banderaPrimerEmpleadoNoBinario = false;
                }
                break;
        }
        contadorEmpleados ++;
    }

    porcentajeEmpleadosFemenino = cantidadEmpleadosFemenino *10;
    porcentajeEmpleadosMasculino = cantidadEmpleadosMasculino *10;
    porcentajeEmpleadosNoBinario = cantidadEmpleadosNoBinario *10;

    document.write("a)Porcentaje de empleados por cada genero:<br>")
    document.write("-Femeninos: "+porcentajeEmpleadosFemenino+"%.<br>");
    document.write("-Masculinos: "+porcentajeEmpleadosMasculino+"%.<br>");
    document.write("-No Binarios: "+porcentajeEmpleadosNoBinario+"%.<br>");

    document.write("<br>b)Empleado No Binario con más cantidad de hijos: "+nombreEmpleadoNoBinarioConMasHijos+"<br>");

    document.write("<br>c)Primer empleado sin hijos: "+nombrePrimerEmpleadoSinHijos+" "+apellidoPrimerEmpleadoSinHijos+"<br>");

    document.write("<br>d) Total de dinero que deberá pagar la PYME en concepto de asignaciones: $"+conceptoAsignaciones+".");

}

*/