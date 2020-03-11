const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.json());

app.get('/teste',(req, res) => {
	res.send("Oi teste "+req.query.id)});

app.post('/resposta',(req, res) => {
	res.send("Resposta:"+JSON.stringify(req.body))});
	

app.get('/',(req, res) => {
	res.send("Hello World")});

	app.listen(3001);
