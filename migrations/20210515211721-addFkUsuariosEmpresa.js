"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Usuarios", // name of Source model
      "empresaId", // name of the key we're adding
      {
        type: Sequelize.INTEGER(11),
        references: {
          model: "Empresas", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Usuarios", // name of Source model
      "empresaId" // key we want to remove
    );
  },
};
