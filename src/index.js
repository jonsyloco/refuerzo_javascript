let firstName = "wagner";
let lastName;

console.log(`${firstName || 'No firstName'} ${lastName || 'No lastName'}`);

const active = false;

const mensaje = (active) ? "activo" : "falso";

console.log(mensaje);