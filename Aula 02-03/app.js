import express from "express";

const app = express();

const port = 3000;

app.get('/ping', (req,res) => {
    console.log('Acessaram o ENDPOINT /ping, PING! |°  ')
    res.status(200).send('  °| PONG!')
})