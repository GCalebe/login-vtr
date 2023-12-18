/////////////////////////////////////////////////////////
///// VERIFICAR INSCRI��O - nome e login duplicados /////
/////////////////////////////////////////////////////////




const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrlogin = (req, res, next) => {
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

    // Login
    User.findOne({
      where: {
        login: req.body.login
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Erro! login j� est� em uso!"
        });
        return;
      }

      next();
    });
  });
};


const verifySignUp = {
  checkDuplicateUsernameOrlogin: checkDuplicateUsernameOrlogin,
};

module.exports = verifySignUp;