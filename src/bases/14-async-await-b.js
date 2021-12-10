import axios from "axios";
const apiKey = "7PfmRBImd4IbSfxCwqU2zzlJbPRROfQi";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});

const getImage = async ()=>{

    try {
        
        const respuesta = await giphyApi.get('/random');
        const {url} = respuesta.data.data.images.original;    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        return "ok"
    } catch (error) {
        console.log(error);
        throw 'Error en api'    
    }
}

getImage()
    .then(response=>{
        console.log(response);
    })
    .catch(err=>console.log("error en consumo de api",err))