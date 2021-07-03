const indexCtrl = {};
//Index en donde se carga toda la información de las vistas
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

module.exports = indexCtrl;
