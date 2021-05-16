const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("Obtener empresas", async () => {
  const response = await api.get("/api/empresas");
  expect(response.body).toHaveLength(response.body.length);
});

test("Crear empresa", async () => {
  const newEmpresa = {
    nombre_legal: "Radiomóvil Dipsa, S.A. de C.V",
    nombre_comercial: "Telcel",
    rfc: "CNS901213D90",
    telefono: "5519534012",
    fecha_registro: new Date(),
  };
  await api
    .post("/api/empresas")
    .send(newEmpresa)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/empresas");
  const contents = response.body.map((empresa) => empresa.nombre_legal);
  expect(contents).toContain(newEmpresa.nombre_legal);
});

test("Modificar empresa", async () => {
  const newEmpresa = {
    nombre_comercial: "Sambors",
  };
  var nombre_legal = "Radiomóvil Dipsa, S.A. de C.V";
  const response1 = await api.get("/api/empresas");
  var id;
  for (var i in response1.body) {
    if (response1.body[i].nombre_legal === nombre_legal) {
      id = response1.body[i].id;
    }
  }

  await api
    .put(`/api/empresas/${id}`)
    .send(newEmpresa)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/empresas");
  const contents = response.body.map((empresa) => empresa.nombre_comercial);
  expect(contents).toContain(newEmpresa.nombre_comercial);
});

test("Eliminar empresa", async () => {
  var nombre_legal = "Radiomóvil Dipsa, S.A. de C.V";
  const response1 = await api.get("/api/empresas");
  var id;
  for (var i in response1.body) {
    if (response1.body[i].nombre_legal === nombre_legal) {
      id = response1.body[i].id;
    }
  }

  await api
    .delete(`/api/empresas/${id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
