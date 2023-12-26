/////////////////////////////////////////////////////////
///// VERIFICAR INSCRI��O - nome e login duplicados /////
/////////////////////////////////////////////////////////




const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicate = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Erro! Nome j� existe!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Erro! email j� est� em uso!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Falha! Funcao nao existe! = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
}

const verifySignUp = {
  checkDuplicate: checkDuplicate,
};

module.exports = verifySignUp;