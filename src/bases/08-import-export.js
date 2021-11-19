import heroes from '../data/heroes'

const superHeros = heroes;

export const getHeroById = (id) =>{
    return superHeros.find(heroe => heroe.id === id);
}

export const getHerosByOwner = (owner) => {
    return superHeros.filter(heroes => heroes.owner === owner)
}
 