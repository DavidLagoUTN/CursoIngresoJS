function mostrar()
{
	var numeroAleatorio;
	var numeroAleatorioParseado;

	numeroAleatorio = Math.random()*20 +1;
	numeroAleatorioParseado = parseInt(numeroAleatorio);

	if (numeroAleatorioParseado <11)
	{
		alert(numeroAleatorioParseado);
	}
}