# Desenvolvimento Avançado com JavaScript ES6

Bootcamp EFG 01/2021 - Curso de Desenvolvimento Avançado com JavaScript ES6

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
