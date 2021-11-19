const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 223423,
        lat: 14.2342,
        lng:15.23424,
    }

}

console.log(
    persona
);

const persona2 = persona // esta no es la manera correcta para hacer una copia de un objeto
persona2.nombre = "jhonatan"
console.log(persona,persona2); // al imprimi la modificacion tambien se altera el objeto persona1, porque fue pasado por referencia

/**manera de correcta de duplicar objetos sin referencia*/

const persona3 = {... persona}

persona3.nombre = "juan"

console.log(persona,persona2, persona3); // :)