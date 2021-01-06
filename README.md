# Desenvolvimento Avançado com JavaScript ES6 - 1ª Parte

Olá DEVs!

Show de bola, primeiro gostaria de parabenizar a [DIO](https://digitalinnovation.one/sign-up?ref=29NN0DXU33) por criar esse portal maravilhoso, uma idéia fantastica que pra mim esta ajudando muito a organizar meus estudos. Já na vibe dos BootCamps, Cursos e Aceleração aproveitei para escrever o meu primeiro artigo sobre o que entendi do curso de [Desenvolvimento Avançado com JavaScript ES6](https://web.digitalinnovation.one/course/desenvolvimento-avancado-com-javascript-es6/learning/75ee88ab-99f3-4ab8-8620-7efafcb26481/) parte integrante do BootCamp [GFT START_UNI 2021 #1](https://web.digitalinnovation.one/track/gft-start_uni-2021-1) e gostaria de contar com os feedbacks de todos vocês, fique a vontade de apontar possiveis correções no artigo ou dicas para que eu possa melhorar a cada artigo.

## Funções Avançadas do ES6

Agradecimento especial ao **Celso Henrique da Silva** (Front-End Chapter Lead - Easynvest) que trouxe este conteudo para ampliar nossos conhecimentos.

De modo geral, função é um "subprograma" que pode ser chamado a partir de um outro "subprograma" ou programa principal dependendo da forma e local onde foi declarada, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para ela e que são processados e geram um valor de retorno.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamados. Em resumo, elas são objetos [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function) veja mais sobre o objeto function. 

### Definição de uma função

Esta é a forma padrão de definir uma função, tendo a palavra **function** seguida no **nome** da função que por sua vez por conter ou não parametros entre parenteses **( [param[, ... param]] )**

```
function nome([param[, param[, ... param]]]) {
   <corpo da função>
}
```
Como disse essa é a maneira padrão, porém esta longe de ser a unica, pois o JS assim como as demais linguagens de programação vivem em constante evolução. e vou destacar algumas outras formas de definir uma função até chegarmos as novos recursos disponibilizados no ECMA6 ou ECMA2015 que é considerada uma das versões que trouxe o maior de funcionalidades relevantes para o JavaScript.

As funções podem ser classificadas quanto a sua definição  :

1. Anônimas ou nomeadas
2. Ter ou não parametros
3. Com ou sem o uso de "return"
4. internas ou Externas, etc...

veja alguns exemplos de definição de funções em seus diversos tipos:

função não nomeada onde criamos um objeto **quadrado** que retorna o quadrado de seu argumento:
```
var quadrado = function(y) {
   return y * y;
};
```
a mesma função agora nomeada como **quadrado**
```
function quadrado(y) {
   return y * y;
};
```
a função a seguir foi definida sem parametros (255 é Max. de param.) e também pode ou não estar nomeada
```
function pi2() {
   return Math.pi() * Math.pi();
};
```
Sem retorno
```
function pi2Show() {
   console.log(pi2());
};
```
Existe diversas outras maneira de definir uma função: Callback de uma outra função, funções auto executaveis, como metodos de um objeto, etc...Vamos agora falar sobre as **Arrow Function** e alguns outros recursos aprimorados no ES6.

1. Arrows Functions
2. Default Function Arguments
3. Enhanced Objects Literals

### Arrows Functions

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio **this**, **arguments**, **super** ou **new.target**. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

#### Sintaxe Basica
expression sem as chaves equivale à { return expression; }

```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
```

Parênteses são opcionais quando só há um nome de parâmetro:
```
(singleParam) => { statements }
singleParam => { statements }
```

A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
```
() => { statements }
```
#### Sintaxe Avançada
// Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto:

```
params => ({foo: bar})
```
Parâmetros **rest** (rest parameters) e parâmetros padrões (default parameters) também são suportados
```
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
```

**Desestruturação** (destructuring) dentro da lista de parâmetros também é suportado
```
var soma = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
soma(); // 6
```
veja mais sobre [Desestruturação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


Um pouco mais sobre Arrow Functions, observe o array a baixo eveja como podemos manipular seu valores, com o uso ou não das arrow functions.

```
var array = [
  'Juntos',
  'Somos',
  'Mais',
  'Fortes'
];
```

O retorno da função a baixo será um array: [6, 5, 4, 6]
```
array.map(function(elemento) {
  return elemento.length;
});
```

Agora vamos reescrever a função como uma **Arrow Function**! e veja que o retorno será o mesmo: [6, 5, 4, 6]
```
array.map((array) => {
  return elemento.length;
});
```

Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros e o return assim usaremos cada vez menos código e retorno obtido será o mesmo: [6, 5, 4, 6]
```
array.map(elemento => elemento.length);
```
## Estrutura básica dos testes usando "Mocha"
```

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
