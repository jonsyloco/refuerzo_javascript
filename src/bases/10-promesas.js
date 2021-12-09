
import {getHeroById} from './bases/08-import-export'
console.log('Inicio');

new Promise ( (resolve, reject) => {
   console.log("cuerpo de la promesa");
   //resolve('Promesa resuelta');
   reject('Promersa con error')

})
.then((response) => {
    console.log(response);
})
.catch((response) => {
    console.log(response);
})
console.log('Inicio');

// EJEMPLO 2 EN PROMESAS
const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const hero = getHeroById(id);
            resolve(hero);
        }, 1000);
    });
}
getHeroByIdAsync(10)
.then((response) => {
    console.log(response);
});