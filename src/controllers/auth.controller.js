//Autorizaciones para pasar de Vista de Anonimos a B Vista de Registro
const authCtrl = {};

const passport = require('passport');

authCtrl.renderSignUp = (req, res) => {
    res.render('auth/signup');
};

//Si no esta registrado lo lleva a Registrese
authCtrl.signUp = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
});

authCtrl.renderSignIn = (req, res, next) => {
    res.render('auth/signin');
};

//Si no cerro sesion o no esta registrado lo lleva a Inicio Sesion
authCtrl.signIn = passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
});


//cambio clave
authCtrl.renderChange = (req, res, next) => {
    res.render('auth/change');
};

authCtrl.ChangePass = passport.authenticate('local.change', {
    successRedirect: '/profile',
    failureRedirect: '/change',
    failureFlash: true
});

//Generar clave
authCtrl.renderRecover = (req, res, next) => {
    res.render('auth/recover');
};

authCtrl.recoPass = passport.authenticate('local.recover', {
    successRedirect: '/signin',
    failureRedirect: '/recover',
    failureFlash: true
});


//Pantalla principal
authCtrl.logout = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = authCtrl;
