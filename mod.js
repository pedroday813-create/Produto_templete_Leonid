'use strict'

import { listaProdutos } from "./produtos.js"

function criarProduto(produto) {
    const produtoElement = document.createElement("div")
    produtoElement.className = "produto"

    const nomeElement = document.createElement("h2")
    nomeElement.textContent = produto.nome

    const descricaoElement = document.createElement("p")
    descricaoElement.textContent = produto.descricao

    const precoElement = document.createElement("p")
    precoElement.textContent = `R$ ${produto.preco.toFixed(2)}`

    const imagemElement = document.createElement("img")
    imagemElement.src = `./img/${produto.imagem}`
    imagemElement.alt = produto.nome

    const categoriaElement = document.createElement("p")
    categoriaElement.textContent = `Categoria: ${produto.categoria}`

    const classificacaoElement = document.createElement("p")
    classificacaoElement.textContent = `Classificação: ${produto.classificacao} estrelas`

    produtoElement.append(
        nomeElement,
        descricaoElement,
        precoElement,
        imagemElement,
        categoriaElement,
        classificacaoElement
    )

    return produtoElement
}

const produtosElement = listaProdutos.map(criarProduto)

document
    .getElementById("produtos-container")
    .append(...produtosElement)