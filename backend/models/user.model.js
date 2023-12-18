/////////////////////////////////////
///// CONFIG DO BD DO USUÁRIO   /////
/////////////////////////////////////

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        ome: {
            type: Sequelize.STRING
        },
        perfil: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return User;
};