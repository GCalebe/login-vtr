// Criar Constantes
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

db.sequelize.sync();

app.use(cors(corsOptions));

// analisa solicita��es do tipo de conte�do - application/json
app.use(express.json());

// analisa solicita��es do tipo de conte�do - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Rota simples
app.get("/", (req, res) => {
    res.json({ message: "Funcionando." });
});

// Rotas
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// Setar porta e listen para os REQ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor est� rodando na porta: ${PORT}.`);
});