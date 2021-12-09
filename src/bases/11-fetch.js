const apiKey = "7PfmRBImd4IbSfxCwqU2zzlJbPRROfQi";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
fetch( url )
.then(response => {
    const responseFinal = response.json(); // toca hacer esto porque asi lo envia el fetch
    responseFinal.then(resp => {
        const {data} = resp
        const {url} = data.images.original;
        console.log("url", url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)

    });
    
})
.catch(err => {
    console.log("Error",err);
})