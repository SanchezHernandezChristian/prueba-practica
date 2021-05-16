"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Usuarios", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      correo: {
        type: Sequelize.STRING(101),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(101),
        allowNull: false,
      },
      fecha_ultimo_login: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Usuarios");
  },
};
