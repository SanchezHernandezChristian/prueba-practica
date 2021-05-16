"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Empresas", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_legal: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      nombre_comercial: {
        type: Sequelize.STRING(300),
      },
      rfc: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },
      fecha_registro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Empresas");
  },
};
