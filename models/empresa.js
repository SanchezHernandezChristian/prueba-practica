"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate({ Usuario }) {
      this.hasMany(Usuario, {
        foreignKey: "empresaId",
        as: "usuarios",
        onDelete: "cascade",
        hooks: true,
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }
  Empresa.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_legal: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      nombre_comercial: {
        type: DataTypes.STRING(300),
      },
      rfc: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
      },
      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "empresas",
      modelName: "Empresa",
      timestamps: false,
    }
  );
  return Empresa;
};
