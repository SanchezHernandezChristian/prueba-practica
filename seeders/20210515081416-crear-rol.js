"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let listaRoles = [
      {
        nombre_rol: "admin",
      },
      {
        nombre_rol: "manager",
      },
      {
        nombre_rol: "accounting",
      },
      {
        nombre_rol: "employee",
      },
    ];
    await queryInterface.bulkInsert("roles", listaRoles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
