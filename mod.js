'use strict'

import { listaProdutos } from "./produtos.js"

function criarEstrelas(classificacao) {
    return "★".repeat(classificacao) + "☆".repeat(5 - classificacao)
}

function criarProduto(produto) {
    const produtoElement = document.createElement("div")
    produtoElement.className = "produto"

    const nomeElement = document.createElement("h2")
    nomeElement.textContent = produto.nome

    const descricaoElement = document.createElement("p")
    descricaoElement.textContent = produto.descricao

    const precoElement = document.createElement("p")
    precoElement.className = "preco"
    precoElement.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`

    const imagemElement = document.createElement("img")
    imagemElement.src = `./img/${produto.imagem}`
    imagemElement.alt = produto.nome

    const categoriaElement = document.createElement("p")
    categoriaElement.className = "categoria"
    categoriaElement.textContent = produto.categoria

    const classificacaoElement = document.createElement("p")
    classificacaoElement.className = "classificacao"
    classificacaoElement.textContent = `${criarEstrelas(produto.classificacao)} (${produto.classificacao}/5)`

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

document.getElementById("produtos-container").append(...produtosElement)