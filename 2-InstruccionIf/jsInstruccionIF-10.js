function mostrar()
{
	var numeroAleatorio;
	var numeroAleatorioParseado;

	numeroAleatorio = Math.random()*20 +1;
	numeroAleatorioParseado = parseInt(numeroAleatorio);

	if (numeroAleatorioParseado <11)
	{
		if (numeroAleatorioParseado <9)
		{
			if (numeroAleatorioParseado <4)
			{
				alert(numeroAleatorioParseado + " Vamos, la proxima se puede");
			}
			
			else
			{
				alert(numeroAleatorioParseado + " APROBÓ");
			}
		}
		else
		{
		alert(numeroAleatorioParseado + " EXCELENTE");
		}
	}

	
}