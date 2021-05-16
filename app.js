const express = require("express");
const mysql = require("mysql2");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const apiRouter = require("./src/controllers/api");

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

module.exports = app;
