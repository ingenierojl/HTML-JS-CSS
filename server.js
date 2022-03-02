const express=require('express');
const bodyParser=require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', 
function(req, respoonse)
{   
    
    //console.log(req.body);
    //respoonse.send(req.headers);
    //console.log(req.headers);
    //respoonse.status("300").send();

    response.succes(req, respoonse, "LISTA DE MENSAJES");

});

router.post('/message',
function(req, respoonse)
{
    response.succes(req, respoonse, "LISTA DE MENSAJE ENVIADO");
});
router.delete('/',
function(req, respoonse)
{   
    console.log(req.body);
    console.log(req.query);
    respoonse.send('hola desde delete'+req.query.text);
    respoonse.status(201).send();
});

/*
app.use('/' , function(req, respoonse){

    respoonse.send('hola');
});
*/
app.use('/' , express.static('public'));
app.listen(3000, '192.168.43.127');
console.log('La aplicacion está escuchando....')
