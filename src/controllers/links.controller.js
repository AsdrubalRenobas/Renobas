import pool from "../database";
//Acción de base de datos
export const renderAddLink = (req, res) => {
  res.render("links/add");
};

//Inserción de los datos de cada recolecta.
export const addLink = async (req, res) => {
  const { title, encargado, tel, barrio, description } = req.body;
    const newLink = {
        title,
        encargado,
        tel,
        barrio,
        description,
        user_id: req.user.id
    };
    //Query para la inserción de los datos
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Te contactaremos pronto. Recolecta Pedida.');
    res.redirect('/links');
};
//Query para la vista de los datos, en la ventana de Links
export const renderLinks = async (req, res) => {
  const links = await pool.query("SELECT * FROM links WHERE user_id = ?", [
    req.user.id,
  ]);
  res.render("links/list", { links });
};

//Función para la Eliminación de los datos, de la recolecta que se selecciono
export const deleteLink = async (req, res) => {
  const { id } = req.params;
  //Query para la Eliminación de los datos, con el boton de Borrar
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash("success", "Recolecta Eliminada");
  res.redirect("/links");
};

//Función para la busqueda de la recolecta que se va a editar
export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  //Query para la busqueda de la recolecta que se va a editar
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  console.log(links);
  res.render("links/edit", { link: links[0] });
};
//Función para mostrar los datos que se van a editar en la vista de Edit
export const editLink = async (req, res) => {
  const { id } = req.params;
  const { title, encargado, tel, barrio, description } = req.body; 
    const newLink = {
        title,
        encargado,
        tel,
        barrio,
        description
    };
    //Query para la Edición de la recolecta que se encontro
  await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  req.flash("success", "Recolecta Actualizada");
  res.redirect("/links");
};