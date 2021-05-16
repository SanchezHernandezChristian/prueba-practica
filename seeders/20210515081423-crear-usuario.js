"use strict";
const models = require("./../models/index");
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let listaRoles = await models.Rol.findAll();
    let listaEmpresas = await models.Empresa.findAll();
    const salt = await bcrypt.genSaltSync(10, "a");
    let contraseña = bcrypt.hashSync("1234", salt);

    let listaUsuarios = [
      {
        nombre: "Christian",
        apellido: "Sanchez",
        correo: "example1@gmail.com",
        password: contraseña,
        rolId: listaRoles[0].id,
        empresaId: listaEmpresas[0].id,
      },
      {
        nombre: "Monserrat",
        apellido: "Villegas",
        correo: "example2@gmail.com",
        password: contraseña,
        rolId: listaRoles[1].id,
        empresaId: listaEmpresas[0].id,
      },
      {
        nombre: "Bruno",
        apellido: "Sanchez",
        correo: "example3@gmail.com",
        password: contraseña,
        rolId: listaRoles[2].id,
        empresaId: listaEmpresas[0].id,
      },

      {
        nombre: "Johan",
        apellido: "Hernandez",
        correo: "example9@gmail.com",
        password: contraseña,
        rolId: listaRoles[1].id,
        empresaId: listaEmpresas[1].id,
      },
      {
        nombre: "Jordy",
        apellido: "Juarez",
        correo: "example10@gmail.com",
        password: contraseña,
        rolId: listaRoles[3].id,
        empresaId: listaEmpresas[1].id,
      },
    ];

    await queryInterface.bulkInsert("usuarios", listaUsuarios, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
