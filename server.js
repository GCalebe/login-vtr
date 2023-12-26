// Criar Constantes
const express = require("express");
const cors = require("cors");
const db = require("./backend/models");
const app = express();
const path = __dirname + '/backend/views/';
var corsOptions = {
    origin: "http://localhost:4200"
};

db.sequelize.sync({force: true}).then(() => {
  iniciar();
});
const Role = db.role;
function iniciar() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.use(cors(corsOptions));

// analisa solicita��es do tipo de conte�do - application/json
app.use(express.json());

// analisa solicita��es do tipo de conte�do - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Rota simples
app.get("/", (req, res) => {
    res.sendFile(path + "home.html");
});


// Rotas
require('./backend/routes/auth.routes')(app);
require('./backend/routes/user.routes')(app);


// Setar porta e listen para os REQ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor est� rodando na porta: ${PORT}.`);
});



// Constantes pro chat
let http = require ('http');
let server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);
// chat
io.on("conec��o", (socket) => {
    console.log("conectado");

    socket.on("nova-mensagem", (mensage) => {
        console.log(mensage);
        socket.emit("nova-mensagem", mensage);
    });
});

