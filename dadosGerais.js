const url = "https://raw.githubusercontent.com/DylanRX7xD/Projeto-Pesquisa-3B/refs/heads/main/Projeto-Futebol-3B-"  

async function visualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json
    const totalEntrevistados = (dados.esporte_norte)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico_texto')
    paragrafo.innerHTML = `Entrevistamos <span>${totalEntrevistados} milhão</span> de brasileiros para descobrir quais são os esportes mais praticados no país`
