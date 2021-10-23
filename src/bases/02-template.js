const nombre = "jhonatan"
const apellido = "wagner"

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto);
console.log(`Resultado: ${ 1+ 1}`);

function getSaludo(nombreCompleto) {
    return nombreCompleto
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}` );