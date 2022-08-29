// Em TypeScript nós temos as 'Interfaces' que podem nos servir para criar e definir parâmetros para funções, por exemplo. As 'Interfaces' são como objetos. Veremos um exemplo a seguir.

interface IApresentation {
  name: string,
  born: number,
  profession?: string,
};

function apresentation({ name, born, profession }: IApresentation): string {
  const age: number = 2022 - born;

  if (profession) return `Meu nome é ${name}, eu tenho ${age} anos e sou ${profession}`;

  return `Meu nome é ${name}, eu tenho ${age} anos.`;
}

console.log(apresentation({ name: 'Ed', born: 1997 }));
