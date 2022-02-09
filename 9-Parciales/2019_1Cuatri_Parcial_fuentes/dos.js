function mostrar()
{
    var nombreDeLaPrimerPersona;
    var nombreDeLaSegundaPersona;
    var pesoDeLaPrimerPersona;
    var pesoDeLaSegundaPersona;
    var pesoDeLaPrimerPersonaParseado;
    var pesoDeLaSegundaPersonaParseado;
    var sumaDePesosDeLasPersonas;
    var promedioDePesosDeLasPersonas;
    var mensajeAlert;

    mensajeAlert = "Ustedes se llaman ";

    nombreDeLaPrimerPersona = prompt("Por favor, ingresá el nombre de la primer persona:");
    mensajeAlert = mensajeAlert + nombreDeLaPrimerPersona + " y ";
    nombreDeLaSegundaPersona = prompt("Por favor, ingresá el nombre de la segunda persona:");
    mensajeAlert = mensajeAlert + nombreDeLaSegundaPersona + ". ";

    mensajeAlert = mensajeAlert + "Pesan ";
    pesoDeLaPrimerPersona = prompt("Por favor, ingresá el peso de la primer persona:");
    pesoDeLaPrimerPersonaParseado = parseInt(pesoDeLaPrimerPersona);
    mensajeAlert = mensajeAlert + pesoDeLaPrimerPersona + " y ";
    pesoDeLaSegundaPersona = prompt("Por favor, ingresá el peso de la segunda persona:");
    pesoDeLaSegundaPersonaParseado = parseInt(pesoDeLaSegundaPersona);
    mensajeAlert = mensajeAlert + pesoDeLaSegundaPersona + " kilos respectivamente. ";

    mensajeAlert = mensajeAlert + "Sumados son ";
    sumaDePesosDeLasPersonas = pesoDeLaPrimerPersonaParseado + pesoDeLaSegundaPersonaParseado;
    mensajeAlert = mensajeAlert + sumaDePesosDeLasPersonas + " kilos, ";
    mensajeAlert = mensajeAlert + "y el promedio de peso son ";
    promedioDePesosDeLasPersonas = sumaDePesosDeLasPersonas/2;
    mensajeAlert = mensajeAlert + promedioDePesosDeLasPersonas + " kilos.";

    alert(mensajeAlert);
}
