/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado =prompt("Ingresá tu nombre");
	document.getElementById("txtIdNombre").value = nombreIngresado;
	alert(nombreIngresado);
}

