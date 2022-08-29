// Os parâmteros das funções também podem e devem ser tipadas

function calculator(sign: string, n1: number, n2: number) {
  const operation = sign === '+' && n1 + n2
    || sign === '-' && n1 - n2
    || sign === '*' && n1 * n2
    || sign === '/' && n1 / n2

  return operation;
}

console.log(calculator('/', 3, 5));
