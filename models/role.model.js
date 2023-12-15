/////////////////////////////////////
///// CONFIG DO BD DAS FUNÇÕES   /////
/////////////////////////////////////


module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("funções", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};