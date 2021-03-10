const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const express = require('express');
const path = require('path');
const BN = require('bignumber.js');

function getTokenImg(tokenid) {
    const bn = new BN(`0x${tokenid}`, 16);
    return `tokenid${parseInt(bn.mod(20), 10)+1}.png`;
}

const app = express();

app.get('/original/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/icons/original/${getTokenImg(req.params.tokenid)}`)));
app.get('/128/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/icons/128/${getTokenImg(req.params.tokenid)}`)));
app.get('/64/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/icons/64/${getTokenImg(req.params.tokenid)}`)));
app.get('/32/:tokenid.png', (req, res) => res.sendFile(path.join(`${__dirname}/icons/32/${getTokenImg(req.params.tokenid)}`)));

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT + '!');
});
