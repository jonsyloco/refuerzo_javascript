const arreglo = [1,2,3,4];

arreglo.push(5);
console.log(arreglo);

//para rompler la referencia y crear un nuevo elemento en memoria
const arreglo2 = [... arreglo] //spret
arreglo2.push(6);
console.log(arreglo2);

//forma 2 de romper la referencia
const arreglo3 = arreglo.map(function(n) {
    return n;
});
arreglo3.push(7);
console.log(arreglo3);
