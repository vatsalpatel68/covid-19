const express = require("express");
const cors = require("cors");
const covid = require('novelcovid');

const app = express();
app.use(cors());

app.get("/",function(req,res){
 (async () => {
    let all = await covid.getAll();
    return res.end(`Cases: ${all.cases},Deaths: ${all.deaths},Recovered: ${all.recovered}`);
})()
})

app.get("/country",function(req,res){
    (async () => {
        // Specific Country
        let specificCountry = await covid.getCountry();
        return res.end(JSON.stringify(specificCountry));
        
        // Specific State
        //let specificState = await covid.getState();
        //return res.end(specificCountry);
     })();
})
app.listen(5000)