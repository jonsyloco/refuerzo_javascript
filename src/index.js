import axios from 'axios'

const apiKey = "7PfmRBImd4IbSfxCwqU2zzlJbPRROfQi";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});
