// Interface para usar no construtor da classe Conta
interface IConta {
  nomeTitular: string;
  saldo?: number;
}

class Conta {
  private nomeTitular: string;
  private saldo: number;

  constructor() {
    this.nomeTitular = 'Ed';
    this.saldo = 0;

    console.log('Bem vindo ao DIO Bank');
  }
}

const contaA: Conta = new Conta();
