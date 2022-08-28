// Iniciando os Estudos - Primeiros Passos

// 1 - Primeio, é necessário iniciar um projeto Node com o comando:
// npm init -y (flag para fazer a criação automática do arquivo package.json)

// 2 - Em seguida nós precisamos instalar o pacote typescript com o comando:
// npm install typescript
// Obs.: Em um projeto TypeScript a boa prática é instalar o typescript como dependência de desenvolvimento:
// npm install -D typescript

// Este pacote nos dá o 'tsc' que é o transpilador TypeScript/JavaScript. Um transpilador tem a função de converter código de uma linguagem de alto nível em outra de alto nível, neste caso, o 'tsc' transpila códigos TS em códigos JS.
// O que define que um projeto é um projeto TypeScript é haver o arquivo de configuração 'tsconfig.json'.

// 3 - Podemos gerar um arquivo de configuração automáticamente com o comando:
// npx tsc --init

// Seguindo desta forma, para podermos testar nosso código, nós sempre teremos que transpilar nosso código feito em TS para que o Node possa rodar o código em JS, mas temos um pacote para resolver isto e tornar o desenvolvimento um pouco mais ágil, que é o pacote ts-node-dev.
// Para instalá-lo nós usamos o comando:
// npm install ts-node-dev

// Agora nós podemos executar nosso arquivo TypeScript sem precisar fazer a transpilação. Para isto, usamos o comando:
// npx ts-node-dev nomeDoArquivo.ts

function somar(num: number) {
  return num + 1;
}

console.log(somar(2));

