// Interface para usar no construtor da classe Conta
interface IConta {
  nomeTitular: string;
  saldo?: number;
}

class Conta {
  private nomeTitular: string;
  private saldo: number;
  private active: boolean = true;
  private statusConta: string = 'Ativo';

  constructor({
    nomeTitular,
    // Chamando saldo e informando um valor default(padrão)
    saldo = 0,
  }: IConta) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;

    console.log(`Bem vindo ao DIO Bank, ${this.nomeTitular}`);
  }

  // Método - Uma função que acessa e/ou altera valores de variáveis presentes na Classe
  meuSaldo = (): void => console.log(`Olá, ${this.nomeTitular}! Seu saldo é de R$${this.saldo},00`);

  deposito = (value: number): void => {
    this.saldo += value;
    console.log(`Você depositou R$${value},00. Seu saldo atual é de R$${this.saldo},00`);
  }

  saque = (value: number): void => {
    if (this.saldo >= value) {
      this.saldo -= value;
      return console.log(`Você sacou R$${value},00. Seu saldo atual é de R$${this.saldo},00`);
    }

    return console.log(`Saldo insuficiente. Você tentou sacar R$${value},00. Seu saldo atual é de R$${this.saldo},00`);
  };

  cancelarConta = (): void => {
    this.active = false;

    if (!this.active) this.statusConta = 'Desativado'

    console.log(`${this.nomeTitular}, você cancelou sua conta. Status da conta: ${this.statusConta}`)
  };
}

const contaA: Conta = new Conta({ nomeTitular: 'Monkey D. Luffy' });
// const contaB: Conta = new Conta({ nomeTitular: 'Roronoa Zoro', saldo: 100 });

contaA.meuSaldo();
contaA.deposito(20);
contaA.deposito(20);
contaA.saque(30);
contaA.saque(20);
contaA.cancelarConta();

// console.log(contaB);
