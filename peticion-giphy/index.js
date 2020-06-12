const axios = require("axios");
const texto = "gatitos";
const API_KEY = "OGX1QV0gNdeNbG34bh1WfUTnn0hQcl0a"

axios.get(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${API_KEY}&limit=6`)
.then(({data})=>{
    console.log(data.data);
})
.catch((error)=>{
    console.log(error)
})