require('dotenv').config();
const express = require('express');
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Running on http://localhost:" + PORT+"/");
})

app.get("/", async (req,res) => {
    try{
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers")
        const data = response.data

        const sortedData = Object.values(data).sort((a,b) => b.volume - a.volume).slice(0,10)

        res.send(sortedData)
    } catch(e){
        console.log(e)
    }
})