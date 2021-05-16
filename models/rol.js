"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate({ Usuario }) {
      this.hasMany(Usuario, { foreignKey: "rolId", as: "usuarios" });
    }

    toJSON() {
      return { ...this.get() };
    }
  }
  Rol.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_rol: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "roles",
      modelName: "Rol",
      timestamps: false,
    }
  );
  return Rol;
};
