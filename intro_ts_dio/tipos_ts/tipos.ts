// Em TypeScript, todos os tipois são subtipos de um tipo principal, o 'any'. Este tipo pode representar qualquer tipo de dado JavaScript. Em TypeScript nós temos os (subi)tipos primitivos, tipos de objeto ou parâmetros de tipo.
// Tipos primitivos são: string, number, boolean, void, null e undefined.

// string: conjunto de caracteres (definidos por aspas);
// number: tipo numérico
// boolean: verdadeiro ou falso
// void: tipo vazio (usado, por exemplo, em funções que não retornam valor nenhum)
// null: tipo nulo
// undefined: tipo indefinido

const text: string = 'Meu pastel é mais barato.';
const age: number = 25;
const developer: boolean = true;
const message = (): void => console.log('Eu prefiro morrer do que perder a vida.');
const nulo: null = null;
const indefinido: undefined = undefined;
