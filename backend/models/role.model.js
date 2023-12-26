/////////////////////////////////////
///// CONFIG DO BD DAS FUN��ES   /////
/////////////////////////////////////


module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("funcoes", {
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