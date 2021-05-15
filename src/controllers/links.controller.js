import pool from "../database";

export const renderAddLink = (req, res) => {
  res.render("links/add");
};

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
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Te contactaremos pronto. Recolecta Pedida.');
    res.redirect('/links');
};

export const renderLinks = async (req, res) => {
  const links = await pool.query("SELECT * FROM links WHERE user_id = ?", [
    req.user.id,
  ]);
  res.render("links/list", { links });
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash("success", "Recolecta Eliminada");
  res.redirect("/links");
};

export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  console.log(links);
  res.render("links/edit", { link: links[0] });
};

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
  await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  req.flash("success", "Recolecta Actualizada");
  res.redirect("/links");
};