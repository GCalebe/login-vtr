// CRUD RES para teste.

exports.allAccess = (req, res) => {
    res.status(200).send("Conte�do P�blico.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Conte�do de User.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Conte�do de Admin.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Conte�do de Moderador.");
};