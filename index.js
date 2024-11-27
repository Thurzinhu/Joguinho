const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send("Pagina do jogo");
});

app.get('/login', (req, res) => {
	res.send("Pagina de Login");
});

app.get('/register', (req, res) => {
	res.send("Pagina de registro");
});

app.get('/level/:level', (req, res) => {
	const levels = [
		{id: 1, answer: "push()"},
		{id: 2, answer: "at()"},
		{id: 3, answer: "shift()"},
	]

	const level = parseInt(req.params.level);
	if (level > levels.length || level < 0)
		res.send(`Level invalido`);

	res.json(levels[level]);
});

app.listen(PORT, () => console.log(`Sever rodando na porta: ${PORT}`));

