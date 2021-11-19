function saludar(nombre) {
    return `Hola ${nombre} esta es un funcion normal`
}

const nombre = 'Jhonatan';

console.log(saludar(nombre));

const saludar2 = (nombre) => {
    return `Hola ${nombre} con funcion landa` 
}
console.log(saludar2(nombre));

// funciona landa mas reducida cuando se tiene un return unicamente

const saludar3 = (nombre) => `hola ${nombre} con funcion landa reducida`;
console.log(saludar3("pepe"))

const heroes = [
{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}];

//el some permite saber si existe un dato dentro del array
const existe = heroes.some( (heroe) => heroe.id == 3);

const heroe = heroes.find( (heroe) => heroe.id == 1);

console.log(existe);
console.log(heroe.name);

//para desestructurar un objeto seria asi

const {name, id} = heroes.find( (heroe) => heroe.id == 1); // se evita colocar el objeto heore.name -> por solo name
console.log(name);
