const models = require("../../models/index");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const Usuarios = await models.Usuario.findAll();

    return res.json(Usuarios);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const Usuario = await models.Usuario.create(req.body);
    res.json(Usuario);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.put("/:UsuarioId", async (req, res) => {
  try {
    await models.Usuario.update(req.body, {
      where: { id: req.params.UsuarioId },
    });
    res.json({ success: "Se ha modificado exitosamente" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.delete("/:UsuarioId", async (req, res) => {
  try {
    await models.Usuario.destroy({
      where: {
        id: req.params.UsuarioId,
      },
    });
    res.json({ success: "Se ha eliminado exitosamente" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

module.exports = router;
