"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let listaEmpresas = [
      {
        nombre_legal: "Propimex S. de R.L. de C.V",
        nombre_comercial: "Coca cola",
        rfc: "PRO840423SG8",
        telefono: "5515195000",
        fecha_registro: new Date(),
      },
      {
        nombre_legal: "PEPSICO INTERNACIONAL MÉXICO, S DE R.L DE C.V",
        nombre_comercial: "Pepsi",
        rfc: "PIM001026NF2",
        telefono: "5515195012",
        fecha_registro: new Date(),
      },
    ];
    await queryInterface.bulkInsert("empresas", listaEmpresas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("empresas", null, {});
  },
};
