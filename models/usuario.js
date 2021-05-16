"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate({ Rol }) {
      this.belongsTo(Rol, {
        foreignKey: "rolId",
        as: "rol",
      });
    }
    static associate({ Empresa }) {
      this.belongsTo(Empresa, {
        foreignKey: "empresaId",
        as: "empresa",
      });
    }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING(101),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(101),
        allowNull: false,
      },
      fecha_ultimo_login: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "usuarios",
      modelName: "Usuario",
      timestamps: false,
      hooks: {
        beforeCreate: async (usuario) => {
          if (usuario.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            usuario.password = bcrypt.hashSync(usuario.password, salt);
          }
        },
        beforeUpdate: async (usuario) => {
          if (usuario.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            usuario.password = bcrypt.hashSync(usuario.password, salt);
          }
        },
      },
    }
  );
  return Usuario;
};
