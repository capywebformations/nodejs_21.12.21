const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

server.get("/", (req, res) => {
    res.status(200);
    res.type('text/plain');
    res.end('Home !');
});

server.get("/posts", (req, res) => {
    res.status(200);
    res.type('text/plain');
    res.end('Articles !');
});

server.get("/posts/:id_post", (req, res) => {
    res.status(200);
    res.type('text/plain');
    res.end(`Article : ${req.params.id_post}`);
});

server.post("/posts", (req, res) => {
    res.status(201);
    res.type('text/plain');
    res.end('Article crée');
});


server.listen(port, hostname);