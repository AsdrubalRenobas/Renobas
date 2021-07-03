//Sino esta logueado o cerro sesion, lo lleva al inicio sesion si clickea Atras o quiere entrar en el profile.
export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/signin");
};
