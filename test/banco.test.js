const Banco = require("../src/banco");

describe("Testes da classe Banco", () => {
  let conta;

  beforeEach(() => {
    conta = new Banco('Yiro Prope', 10);
    contaDestino = new Banco('Lucas');
    contaDestino.saldo = 1000
  });

  test("Deposita", async () => {

    expect(conta.depositar(20)).toBe(30);


  });

 

});

