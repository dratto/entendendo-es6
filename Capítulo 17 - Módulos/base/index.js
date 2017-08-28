// desenvolva aqui seus códigos para os exercícios
import {nome, chave, url as link} from './src/config.js'
import Telefone from './src/classe.js'
import {printNoConsole} from './src/printer.js'

console.log(nome)
console.log(chave)
console.log(link)

let telefoneSemFio = new Telefone()
console.log(telefoneSemFio)


printNoConsole('Olá mundo')
