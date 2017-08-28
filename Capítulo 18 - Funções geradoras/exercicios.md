# Exercícios

Nos exercícios a seguir iremos rever os principais aspectos das funções geradoras.

## Exercício 1 - O que é isso?
Em termos simples, explique o que são funções geradoras e como podemos identificá-las.
são funções que executam até determinados pontos que podem ser iterados. Uma função geradora possui um asterisco(*) após a palavra reservada function ou antes do nome da função

## Exercício 2 - Sinal de parada
Considere o trecho de código a seguir:
``` javascript
function* testeDeGeradores() {
  console.log('passei aqui!');
  yield 'fim do método';
}
```

Ao executar o método, a frase "passei aqui!" não é exibida no console como esperado. Por quê? O que é necessário fazer para que a mensagem seja exibida?

instanciar o objeto em uma variavel e invocar o metódo next().


## Exercício 3 - Corre Bolt! Corre!
Implemente uma função geradora chamada 'correBolt' que retorna para cada parada um checkpoint. Em cada checkpoint, deve ser impresso a mensagem: `Usain passou no Checkpoint X`, onde "X" indica o número do checkpoint. A função deve ter quatro paradas. Não se esqueça de invocar o método `next`.

``` javascript
  function* correBolt()
  {
      console.log('Usain passou no checkpoint 1')
      yield 'Checkpoint 1'
      console.log('Usain passou no checkpoint 2')
      yield 'Checkpoint 2'
      console.log('Usain passou no checkpoint 3')
      yield 'Checkpoint 3'
      console.log('Usain passou no checkpoint 4')
      yield 'Checkpoint 4'
  }

  let bolt = correBolt()
  for(let bolts of bolt) {
    console.log(bolt)
  }
```


## Exercício 4 - Temos que pegar!
Refatore o trecho de código a seguir utilizando todas as melhorias propostas pelo ES6 até então. Use obrigatoriamente funções geradoras.

``` javascript
function* temosQuePegar()
{
  console.log('Capturou o Pikachu')
  yield 'Capturou o primeiro pokemon'
  console.log('Capturou o Charmander')
  yield 'Capturou o segundo pokemon'
  console.log('Capturou o Caterpie')
  yield 'Capturou o terceiro pokemon'
}
let pokemons = temosQuePegar()
for(let pokemon of pokemons) {
  console.log(pokemon)
}
```

## Exercício 5 - Símbolos dizem até demais
Considere o seguinte objeto `equipe` representada pelo código que segue:
``` javascript
const equipe = {
  gerente: 'Gilberto',
  estagiario: 'Fernanda',
  senior: 'Paulo',
  pleno: 'Camila',
  junior: 'Adão'
}
```

Faça com que o objeto `equipe` se torne iterável em um laço de repetição do tipo `for...of`.

Exemplo:
``` javascript
for(let integrante of equipe) {
  console.log(integrante);
}

/*
Gilberto
Fernanda
Paulo
Camila
Adão
*/
```
