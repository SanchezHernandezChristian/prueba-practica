const models = require("../../models/index");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const empresas = await models.Empresa.findAll();

    return res.json(empresas);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const empresa = await models.Empresa.create(req.body);
    res.json(empresa);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.put("/:empresaId", async (req, res) => {
  try {
    await models.Empresa.update(req.body, {
      where: { id: req.params.empresaId },
    });
    res.json({ success: "Se ha modificado exitosamente" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

router.delete("/:empresaId", async (req, res) => {
  try {
    await models.Empresa.destroy({
      where: {
        id: req.params.empresaId,
      },
    });
    res.json({ success: "Se ha eliminado exitosamente" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Algo salió mal" });
  }
});

module.exports = router;
