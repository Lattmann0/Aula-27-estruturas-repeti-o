//while
//do/while
//for

//Crie uma lista com cinco nomes usando um while

// while = enquanto (condição verdadeira) faça alguma coisa
let numeroDeVezes = 0
let lista = ['banana', 'maçã', 'kiwi', 'morangos', 'laranja']

while (numeroDeVezes < 5) {
    console.log("Passou aqui!")
    numeroDeVezes = numeroDeVezes + 1
}
// Matriz
let listaDeListas = [
    ['banana', 'maçã', 'kiwi', 'morangos', 'laranja']
    ['banana', 'maçã', 'kiwi', 'morangos', 'laranja']
    ['banana', 'maçã', 'kiwi', 'morangos', 'laranja']
    ['banana', 'maçã', 'kiwi', 'morangos', 'laranja']
]

// cria uma variavel de contador 
let posicao = 0
// cria uma lista nao ordenada 
const listaEmTela = document.createElement ("ol")

while (posicao < 5) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1

}

document.body.appendChild(listaEmTela)