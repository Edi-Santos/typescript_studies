// Interface para usar no construtor da classe Conta
interface IConta {
  nomeTitular: string;
  saldo?: number;
}

class Conta {
  private nomeTitular: string;
  private saldo: number;

  constructor({
    nomeTitular,
    // Chamando saldo e informando um valor default(padrão)
    saldo = 0,
  }: IConta) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;

    console.log('Bem vindo ao DIO Bank');
  }

  // Método - Uma função que acessa e/ou altera valores de variáveis presentes na Classe
  meuSaldo = (): void => console.log(`Olá, ${this.nomeTitular}! Seu saldo é de R$${this.saldo},00`);

  deposito = (value: number): void => {
    this.saldo += value;
    console.log(`Você depositou R$${value},00. Seu saldo atual é de R$${this.saldo},00`);
  }
}

const contaA: Conta = new Conta({ nomeTitular: 'Monkey D. Luffy' });
// const contaB: Conta = new Conta({ nomeTitular: 'Roronoa Zoro', saldo: 100 });

contaA.meuSaldo();
contaA.deposito(20);
contaA.deposito(20);

// console.log(contaB);
