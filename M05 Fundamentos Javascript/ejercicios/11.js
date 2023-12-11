function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  // Crea un objeto Date con la fecha actual.
  const fechaActual = new Date();
  // Crea un objeto Date con la fecha de nacimiento.
  const fechaNac = new Date(fechaNacimiento);

  // Obtiene el año actual, el año de nacimiento y el mes y día actuales.
  const añoActual = fechaActual.getFullYear();
  const añoNacimiento = fechaNac.getFullYear();
  const mesActual = fechaActual.getMonth();
  const mesNacimiento = fechaNac.getMonth();
  const diaActual = fechaActual.getDate();
  const diaNacimiento = fechaNac.getDate();

  // Calcula la edad.
  let edad = añoActual - añoNacimiento;

  // Ajusta la edad si el cumpleaños aún no ha ocurrido este año.
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  // Retorna true si la edad es 18 o más.
  return edad >= 18;
}

module.exports = esMayorDeEdad;