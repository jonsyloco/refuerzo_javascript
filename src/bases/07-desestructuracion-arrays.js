const characters = ['Goku', 'Vegeta', 'Trunks'];

const goku = characters[0];
const vegueta = characters[1];
const trunks = characters[2];

console.log(goku, vegueta, trunks);
// desestruturar

const [g, v, t] = characters;
console.log(g,v,t);

// se puede omitir datos y dejar solo el que quiero
const [, , trunk] = characters;
const [, veg, ] = characters;

console.log(trunk);

const returnArray = ([letter, number]) => {
    return [letter, number];
}

const [letters, numbers] = returnArray(['ABC',123])
console.log(letters, numbers)
