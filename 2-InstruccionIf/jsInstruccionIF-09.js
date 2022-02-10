function mostrar()
{
	var numeroAleatorioEntreUnoYDiez;
	var numeroAleatorioEntreUnoYDiezParseado;

	numeroAleatorioEntreUnoYDiez = Math.random()*10 +1;
	numeroAleatorioEntreUnoYDiezParseado = parseInt(numeroAleatorioEntreUnoYDiez);

	alert(numeroAleatorioEntreUnoYDiezParseado);
}