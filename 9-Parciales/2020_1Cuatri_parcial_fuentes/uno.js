function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var precioProductoParseado;
	var cantidadDeUnidades;
	var cantidadDeUnidadesParseado;
	var marcaProducto;
	var fabricanteProducto;

	var banderaDelPrimerAlcohol = true;
	var cantidadUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var precioAlcoholMasBarato;
	var contadorProductos;

	var contadorJabones;
	var contadorAlcohol;
	var contadorBarbijo;

	var acumuladorJabones;
	var acumuladorAlcohol;
	var acumuladorBarbijo;

	var promedioCompraProductoMasUnidades;
	var mensajeAlert;


	contadorProductos = 0;

	contadorJabones = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;

	acumuladorJabones = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;

	while (contadorProductos <5)
	{
		contadorProductos ++;
		tipoProducto = prompt("Para el producto nro: "+contadorProductos+", ingresá el tipo de producto (barbijo, jabon o alcohol):");
		while (tipoProducto != "jabon" && tipoProducto != "barbijo" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error. el tipo que ingresaste: '"+tipoProducto+"' no es válido. Intentá nuevamente (barbijo, jabon o alcohol):");
		}

		precioProducto = prompt("Ingresá el precio del producto (entre 100 y 300 inclusive):");
		precioProductoParseado = parseInt(precioProducto);
		while (isNaN(precioProductoParseado) || precioProductoParseado<100 || precioProductoParseado>300)
		{
			precioProducto = prompt("Error. El precio que ingresaste: '"+precioProducto+"' no es válido. Intentá nuevamente (entre 100 y 300 inclusive):");
			precioProductoParseado = parseInt(precioProducto);
		}

		cantidadDeUnidades = prompt("Ingresá el número de unidades (más de 0 e inferior o igual a 1000):");
		cantidadDeUnidadesParseado = parseInt(cantidadDeUnidades);

		while (isNaN(cantidadDeUnidadesParseado) || cantidadDeUnidadesParseado<1 || cantidadDeUnidadesParseado>1000)
		{
			cantidadDeUnidades = prompt("Error. La cantidad que ingresaste: '"+ cantidadDeUnidades +"' no es válida. Intentá nuevamente (más de 0 e inferior o igual a 1000):");
			cantidadDeUnidadesParseado = parseInt(cantidadDeUnidades);
		}

		marcaProducto = prompt("Ingresá la marca del producto:");
		fabricanteProducto = prompt("Ingresá el fabricante del producto");


		switch(tipoProducto)
			{
				case "alcohol":
					if (banderaDelPrimerAlcohol)
					{
						cantidadUnidadesAlcoholMasBarato = cantidadDeUnidadesParseado;
						fabricanteAlcoholMasBarato = fabricanteProducto;
						precioAlcoholMasBarato = precioProductoParseado;
						banderaDelPrimerAlcohol = false;
					}
					else
					{
						if(precioProductoParseado<precioAlcoholMasBarato)
						{
							cantidadUnidadesAlcoholMasBarato = cantidadDeUnidadesParseado;
							fabricanteAlcoholMasBarato = fabricanteProducto;
							precioAlcoholMasBarato = precioProductoParseado;
						}
					}
					contadorAlcohol ++;
					acumuladorAlcohol += cantidadDeUnidadesParseado;
					break;
				case "barbijo":
					contadorBarbijo ++;
					acumuladorBarbijo += cantidadDeUnidadesParseado;
					break;
				case "jabon":
					contadorJabones ++;
					acumuladorJabones += cantidadDeUnidadesParseado;
					break;
			}

	}

	if (cantidadUnidadesAlcoholMasBarato != undefined)
	{
		mensajeAlert = "a)Cantidad de unidades del alcohol más barato: "+cantidadUnidadesAlcoholMasBarato+". Fabricante: "+fabricanteAlcoholMasBarato;
	}
	else
	{
		mensajeAlert = "a)No se realizó ninguna compra que incluya alcohol.";
	}
	mensajeAlert += "\nb)El promedio por compra de ";
	if (acumuladorAlcohol > acumuladorBarbijo)
	{
		if (acumuladorAlcohol > acumuladorJabones)
		{
			promedioCompraProductoMasUnidades = acumuladorAlcohol / contadorAlcohol;
			mensajeAlert += "alcohol ";
		}
		else
		{
			promedioCompraProductoMasUnidades = acumuladorJabones / contadorJabones;
			mensajeAlert += "jabon ";
		}
	}
	else
	{
		if (acumuladorBarbijo > acumuladorJabones)
		{
			promedioCompraProductoMasUnidades = acumuladorBarbijo / contadorBarbijo;
			mensajeAlert += "barbijo ";
		}
		else
		{
			promedioCompraProductoMasUnidades = acumuladorJabones / contadorJabones;
			mensajeAlert += "jabon ";
		}
	}

	mensajeAlert += "es de " + promedioCompraProductoMasUnidades + " unidades.";

	if (acumuladorJabones>0)
	{
		mensajeAlert += "\nc)Hay " +acumuladorJabones+" unidades de jabon en total disponibles.";
	}
	else
	{
		mensajeAlert += "\nc)No hay unidades de jabon disponibles.";
	}
	alert(mensajeAlert);
}