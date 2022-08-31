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
}

const contaA: Conta = new Conta({ nomeTitular: 'Monkey D. Luffy' });
const contaB: Conta = new Conta({ nomeTitular: 'Roronoa Zoro', saldo: 100 });

console.log(contaA);
console.log(contaB);
