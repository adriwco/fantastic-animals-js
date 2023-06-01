export default function teste1() {
  console.log("teste 1");
}


/*
Explicação que estava no script.js

// Sobre modules:
// modules são assíncrono, Strict mode e this fora de um objeto faz referência a undefined ao invés de window.
// assíncrono = carrega o que dá para carregar primeiro sem esperar outro carregar, mas executa na ordem.
// O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo. Por padrão todo module está no modo estrito.
import teste0001 from "./modules/teste1.js"
teste0001(); // console.log() = teste 1 | sem default = erro | nome da function pode ser diferente
import {teste2A, teste2B} from "./modules/teste2.js"
teste2A(); // console.log() = teste 2A | sem default = precisa de {} | nome da function não pode diferente
// pode mudar nome se... import {teste2A as novoNome} from "./modules/teste2.js"
teste2B() // console.log() = teste 2B
// O ideal é exportar apenas uma coisa, mas existe bibliotecas com varias funções de ajuda que acaba sendo exportado mais de uma função...
// Exportando sem saber os nomes...
import * as teste2 from "./modules/teste2.js"
teste2.teste2A(); // console.log() = teste 2A
teste2.teste2B(); // console.log() = teste 2B
/*
Exemplo Strict mode:
'use strict';
nome = 'Ford'; // erro, variável global
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
const arguments = 3.14; // escrever em palavra reservada
*/