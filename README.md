# Desenvolvimento Avançado com JavaScript ES6

Olá DEVs!

Show de bola, primeiro gostaria de parabenizar a [DIO](https://digitalinnovation.one/sign-up?ref=29NN0DXU33) por criar esse portal maravilhoso, uma idéia fantastica que pra mim esta ajudando muito a organizar meus estudos. Já na vibe dos BootCamps, Cursos e Aceleração aproveitei para escrever o meu primeiro artigo sobre o que entendi do curso de [Desenvolvimento Avançado com JavaScript ES6](https://web.digitalinnovation.one/course/desenvolvimento-avancado-com-javascript-es6/learning/75ee88ab-99f3-4ab8-8620-7efafcb26481/) parte integrante do BootCamp [GFT START_UNI 2021 #1](https://web.digitalinnovation.one/track/gft-start_uni-2021-1) e gostaria de contar com os feedbacks de todos vocês, fique a vontade de apontar possiveis correções no artigo ou dicas para que eu possa melhorar a cada artigo.

## Funções Avançadas do ES6

Agradecimento especial ao **Celso Henrique da Silva** (Front-End Chapter Lead - Easynvest) que trouxe este conteudo para ampliar nossos conhecimentos.

De modo geral, função é um "subprograma" que pode ser chamado a partir de um outro "subprograma" ou programa principal dependendo da forma e local onde foi declarada, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para ela, que são processados e geram um valor de retorno.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamados. Em resumo, elas são objetos Function.

1. Arrows Functions
2. Default Function Arguments
3. Enhanced Objects Literals

### Arrows Functions

Bom para falar sobre **Arrow Functions** terei que fazer uma breve introdução sobre as varias formas aceitas para se definir uma função no JavaScript.

1. Modo Padrão
```
function nome([param[, param[, ... param]]]) {
   <corpo da função>
}
```



## Estrutura básica dos testes usando "Mocha"

Crie uma pasta para o seu projeto, e inicie o aplicativo neste exemplo vamos o NODE e JS com ECMA 6;

```
c:\> mkdir aula-es6-avancado
c:\> cd aula-es6-avancado
c:\aula-es6-avancado\> npm init -y
```

### Instale o **MOCHA** como dependencia de desenvolvimento

```
c:\aula-es6-avancado\> npm i -D mocha
```
OU

```
c:\aula-es6-avancado\> npm i --save-dev mocha
```

### Altere o "package.json" para executar os testes escrito com  **mocha**.

```
.
.
 "scripts": {
    "test": "mocha"
  },
 .
 .
```

### Comando para executar os testes.

```
c:\aula-es6-avancado\> npm run test
```

calma ainda falta criar os nossos primeiros testes, isso pode ser feito mesmo antes de nem ter escrito nenhuma linha de código do nosso sistema.
