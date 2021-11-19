const persona = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    power: 'Dinero',
}

console.log(persona.name);
console.log(persona.age);
console.log(persona.codeName);

//power valor por defecto, en caso de que el objeto no tenga el item
const {name, age, codeName, power = 'No tiene poder'} = persona

console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

const createUser = (persona) => {
    let {name, age, power, codeName} = persona

    //opcion 1
    /* return {
        id: '23423',
        name: name,
        age: age,
        codeName: codeName,
        power: power,
    } */

    //opcion 2 -> cuando una variable se llama igual a una clave, solo se coloca una vez
     return {
        id: '23423',
        name,
        age,
        codeName,
        power,
    }
    
}

// colocando mas pequeña la funcion createUser
const createUser2 = ({name, age, power, codeName}) => ({ id: '23423',  name,  age,  codeName, power, })

console.log(
    createUser(persona)
);

console.log(
    createUser2(persona)
);