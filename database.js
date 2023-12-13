var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-mongodb', { useNewUrlParser: true });
var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database conectado');
});
conn.on('disconnected', function () {
    console.log('database desconectado');
})
conn.on('error', console.error.bind(console, 'erro de conexão:'));
module.exports = conn;