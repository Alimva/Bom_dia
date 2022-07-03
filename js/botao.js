function criar_botao (texto,caminho) {
    let botao = document.createElement("button")
    botao.classList.add ("botao_grande")
    botao.innerText = texto
    botao.onclick = () => {set_checkpoint(caminho)
    window.location = caminho}
    return botao
}