const express = require('express');
var compression = require('compression')
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const api = require ('./server/routes/api');

app.use(compression())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/api',api)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

const port=process.env.port || 3000;
app.set('port',port);

const server= http.createServer(app)

server.listen(port,()=>console.log(`running in localhost port ; ${port}`));

