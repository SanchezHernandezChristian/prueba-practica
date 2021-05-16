const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("Obtener usuarios", async () => {
  const response = await api.get("/api/usuarios");
  expect(response.body).toHaveLength(response.body.length);
});

test("Crear usuario", async () => {
  const newusuario = {
    nombre: "Rafael",
    apellido: "Garcia",
    correo: "example19@gmail.com",
    password: "1233",
    rolId: 1,
    empresaId: 2,
  };
  await api
    .post("/api/usuarios")
    .send(newusuario)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/usuarios");
  const contents = response.body.map((usuario) => usuario.nombre);
  expect(contents).toContain(newusuario.nombre);
});

test("Modificar usuario", async () => {
  const newusuario = {
    apellido: "Hernandez",
  };
  var nombre = "Rafael";
  const response1 = await api.get("/api/usuarios");
  var id;
  for (var i in response1.body) {
    if (response1.body[i].nombre === nombre) {
      id = response1.body[i].id;
    }
  }

  await api
    .put(`/api/usuarios/${id}`)
    .send(newusuario)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/usuarios");
  const contents = response.body.map((usuario) => usuario.apellido);
  expect(contents).toContain(newusuario.apellido);
});

test("Eliminar usuario", async () => {
  var nombre = "Jordy";
  const response1 = await api.get("/api/usuarios");
  var id;
  for (var i in response1.body) {
    if (response1.body[i].nombre === nombre) {
      id = response1.body[i].id;
    }
  }

  await api
    .delete(`/api/usuarios/${id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
