/////////////////////////////////////
///// CONFIG DO BD DAS FUN��ES   /////
/////////////////////////////////////


module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("fun��es", {
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