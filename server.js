const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.get(express.static('icons'));
// app.use('/', function(req,res){res.sendFile(path.join(__dirname+'/icons/index.html'));
// });
const server = http.createServer(app);

var tokenid = ['tokenid1.png', 'tokenid2.png', 'tokenid3.png', 'tokenid4.png', 'tokenid5.png', 'tokenid6.png', 'tokenid7.png', 'tokenid8.png', 'tokenid9.png', 'tokenid10.png',
               'tokenid11.png', 'tokenid12.png', 'tokenid13.png', 'tokenid14.png', 'tokenid15.png', 'tokenid16.png', 'tokenid17.png', 'tokenid18.png', 'tokenid19.png', 'tokenid20.png'];
var random = Math.floor(Math.random()*20);
app.get('/128/', function(req, res){res.sendFile(path.join(__dirname+'/icons/128/'+tokenid[random]));
});
// console.log(num, tokenid[random]);

server.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT + '!');
});