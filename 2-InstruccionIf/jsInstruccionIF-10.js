function mostrar()
{
	var numeroAleatorioEntreUnoYDiez;
	var numeroAleatorioEntreUnoYDiezParseado;

	numeroAleatorioEntreUnoYDiez = Math.random()*10 +1;
	numeroAleatorioEntreUnoYDiezParseado = parseInt(numeroAleatorioEntreUnoYDiez);

	if (numeroAleatorioEntreUnoYDiezParseado <9)
	{
		if (numeroAleatorioEntreUnoYDiezParseado <4)
		{
			alert(numeroAleatorioEntreUnoYDiezParseado + " Vamos, la proxima se puede");
		}
		else
		{
			alert(numeroAleatorioEntreUnoYDiezParseado + " APROBÓ");
		}
	}
	else
	{
		alert(numeroAleatorioEntreUnoYDiezParseado + " EXCELENTE");
	}

	
}