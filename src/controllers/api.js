const router = require("express").Router();

const apiEmpresa = require("./empresaController");
const apiUsuario = require("./usuarioController");
router.use("/empresas", apiEmpresa);
router.use("/usuarios", apiUsuario);

module.exports = router;
