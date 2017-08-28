# Exercícios

Nestes exercícios vamos rever como funciona a metaprogramação através dos proxies.

## Exercício 1 - Praticamente um sósia
Diga, em poucas palavras, o são Proxies e o que é possível fazer com eles.
Objetos para utilizar metaprogramação(explicada na questão seguinte). Sendo possível alterar comportamentos de chamadas de metódos e atributos.

## Exercício 2 - Meta o quê?
Defina o que é metaprogramação e metaprogramas.
Metaprogramação é o conceito de construir um algoritmo que construa outros algotimos. Metaprogramas são programas que constroem outros programas com suas particularidades especificas

## Exercício 3 - Sorria, você está sendo filmado
Tomando como base o objeto `Livro` abaixo, crie um proxy que alerta no console sempre uma propriedade foi acessada. Não se esqueça de usar a trap do `get` para isso.

``` javascript
class Livro {
  constructor(titulo, autor) {
    this.titulo = 'ECMAScript 6 - Entre de cabeça no futuro do JavaScript';
    this.autor = 'Diego Martins de Pinho';
  }
}

let livro = new Livro()
let proxy = new Proxy(livro, {
  get(alvo, propriedade) {
    console.log(`Requisição da propriedade: ${propriedade}`)
    return alvo[propriedade]
  },
  set(alvo, propriedade, valor) {
    console.log(`Setando ${propriedade} com o valor: ${valor}`)
    alvo[propriedade] = valor
  }
})
```

## Exercício 4 - Aqui você não seta nada!
Utilizando o mesmo proxy do exercício anterior, faça com o que mesmo proxy também indique com uma mensagem no console sempre que um propriedade for setada no objeto.

## Exercício 5 - Só aceitamos dinheiro vivo
Considerando o objeto `Compras` a seguir, implemente um proxy que seja capaz de validar que o `valorPago` setado no objeto sempre deve ser maior que a propriedade `valorAPagar`. Caso isso não aconteça, lance uma exceção no console com a mensagem: "Valor insuficiente para pagar!".

``` javascript
class Compras {
  constructor(itens, valorAPagar, valorPago) {
    this.itens = itens;
    this.valorAPagar = valorAPagar;
    this.valorPago = valorPago;
  }
}

const carrinho = new Compras(['Doritos', 'Pringles', 'Fandangos'], 50.00, 25.00)
let proxyCarrinho = new Proxy(carrinho, {
  set(alvo, propriedade, valor) {
    if(propriedade == 'valorAPagar') {
      if(alvo['valorPago'] <= valor) {
        throw new Error('Valor insuficiente para pagar!')
      }
    }
    if(valor <= alvo['valorAPagar']) {
      throw new Error('Valor insuficiente para pagar!')
    }
    alvo[propriedade] = valor
  }
})
```

## Exercício 6 - Fim da farsa, Usurpadora!
Faça com que o proxy `usurpadora` seja desativado.

``` javascript
class PaolaBracho {
  constructor(dinheiro, marido) {
    this.dinheiro = 10000000;
    this.marido = 'Carlos Daniel Bracho';
  }
}

const usurpadora = {
  get(PaolaBracho, propriedade) {
    if(propriedade === 'dinheiro' || propriedade === 'marido') {
      console.log('A Usurpadora está atacando!');
    }
  }
}

const {proxy, revoke} = Proxy.revocable({}, usurpadora);
proxy.dinheiro; // A Usurpadora está atacando!
revoke()
proxy.marido

```
