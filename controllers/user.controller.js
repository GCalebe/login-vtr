// CRUD RES para teste.

exports.allAccess = (req, res) => {
    res.status(200).send("Conteúdo Público.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Conteúdo de User.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Conteúdo de Admin.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Conteúdo de Moderador.");
};