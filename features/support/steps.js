const { When, Then } = require("@cucumber/cucumber");
const pactum = require("pactum");

let spec = pactum.spec();

When("{string} y {string} empiezan una partida", async (jugador1, jugador2) => {
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
