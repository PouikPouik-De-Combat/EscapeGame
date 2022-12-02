const express = require('express');

const app = express();
const pathHTML = "./www";
const PORT = 8081;


app.use("/",express.static(pathHTML));

app.get("./", (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	res.sendFile(__dirname + pathHTML +'/index.html');
});



app.listen(PORT, () => {
	console.log("Serveur listen on : "+PORT)
});