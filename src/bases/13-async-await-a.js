import axios from 'axios'

const apiKey = "7PfmRBImd4IbSfxCwqU2zzlJbPRROfQi";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});

//el async lo que hace es esperar el retorno de una promesa
//tambien se usa el await para esperar el retorno 

const miPromesa = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("tenemos un valor en la promesa");
            reject("tenemos un valor en la promesa");
        }, 1000)
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log("inicio");
        const respuesta = await miPromesa();
        console.log(respuesta);
        console.log("fin");
        return respuesta;
    } catch (error) {
        throw new("Fallo la promesa", error)
    }
}

medirTiempoAsync()
    .then(resp =>{
        console.log("success",resp);
    })
    .catch(err=>{
        console.log("error",err);
    })
/* como se puede apreciar en la consola, primero es el console.log
de inicio, seguido la espera de la respuesta de la miPromesa
y por ultimo el fin. Eso es lo que hace el async y el await
tampoco se necesita el .then a la hora de llamar miPromesa() */