const { When, Then } = require("@cucumber/cucumber");
const pactum = require("pactum");

let spec;

When("{string} y {string} empiezan una partida", async (jugador1, jugador2) => {
  spec = pactum.spec();
  await spec
    .put("http://localhost:8000/empezar")
    .withJson({
      jugadores: [jugador1, jugador2],
    })
    .toss();
  spec.response().should.have.status(200);
  spec
    .response()
    .should.have.headerContains("content-type", "application/json");
});

Then("le toca mover a {string}", function (string) {
  spec.response().should.have.json("turno", string);
});

Then("el tablero esta vacio", function () {
  spec.response().should.have.json("tablero", [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
});

When(
  "{string} marca la fila {int} y la columna {int}",
  async function (jugador, fila, columna) {
    spec = pactum.spec();
    await spec
      .put("http://localhost:8000/movimiento")
      .withJson({
        fila: fila - 1,
        columna: columna - 1,
      })
      .toss();
    spec.response().should.have.status(200);
    spec
      .response()
      .should.have.headerContains("content-type", "application/json");
  }
);

formatDataTable = (dataTable) => {
  return dataTable.rawTable.map((row) => {
    return row.map((cell) => {
      return cell === "" ? " " : cell;
    });
  });
};

Then("el tablero queda de la siguiente manera:", (dataTable) => {
  spec.response().should.have.json("tablero", formatDataTable(dataTable));
});
