const userCtrl = {};

//Validación del ingreso al perfil al iniciar sesion o al registrarse.
userCtrl.renderUserProfile = (req, res, next) => {
  res.render('profile');
}

module.exports = userCtrl;