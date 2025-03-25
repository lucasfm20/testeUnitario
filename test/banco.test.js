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

  test("Saca", async () => {

    expect(conta.sacar(5)).toBe(5);


  });

  test("Transfere", async () => {

    const saldoInicialConta = conta.obterSaldo();
    const saldoInicialContaDestino = contaDestino.obterSaldo();


    conta.transferir(10, contaDestino);

    expect(conta.obterSaldo()).toBe(saldoInicialConta - 10);
    expect(contaDestino.obterSaldo()).toBe(saldoInicialContaDestino + 10);

  });

  test("Saldo", async () => {

    expect(conta.obterSaldo()).toBe(10);


  });

  test("Histórico", async () => {

    conta.depositar(50);


    const historicoEsperado = [
      { tipo: 'Depósito', valor: 50 }
    ];

    expect(conta.obterHistorico()).toEqual(historicoEsperado);

  });


  test("Limite de saque", async () => {

    conta.definirLimiteDeSaque(5)

    expect(conta.limiteDeSaque).toBe(5);

  });

  test("Verificar limite de saque", async () => {

    expect(conta.verificarLimiteDeSaque(5)).toBe(true);

  });

  test("Aplicar Juros", async () => {

    conta.aplicarJuros(50)

    expect(conta.obterSaldo()).toBe(15);

  });


  test("Pagar conta", async () => {

    conta.pagarConta(5, "teste")


    expect(conta.obterSaldo()).toBe(5);

  });


  test("Total depositado", async () => {

    conta.depositar(50);
    conta.sacar(20)




    expect(conta.obterTotalDepositado()).toEqual(50);


  });


  test("sacar erro", async () => {


    expect(() => conta.sacar(15)).toThrow();

  });


  test("Limite de Saque", async () => {
    conta.definirLimiteDeSaque(10)

    expect(() => conta.verificarLimiteDeSaque(20)).toThrow();

  });


});

