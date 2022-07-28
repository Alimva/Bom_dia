let cont = 0 

const dialogos= ["Mas que droga é essa?",
"Eu sinto uma mão no meu ombro e me viro para ver um trio de garotas em roupas coloridas me olhando. Uma delas parece ser a lider do grupo e me dá um sorriso",
"Qual o seu nome?",
"... Me chame de S/N.",
"S/N. Por que você não para de mexer nas minhas luzes?",
"Quem disse que eu que mexi nelas? Qualquer um pode ter feito isso",
"Ela estica a mão e pega o meu celular. Ela é mais alta que eu e ele longe do meu alcance com facilidade",
"Com alguns toques na tela ela liga e desliga a luz.",
"Interessante... Como você fez isso?",
"... Eu mexi na sua Alexa. Os interruptores são todos touch e sabe... numa casa dessas seria estranho não ter uma Alexa.",
"Eu digo em uma voz baixa.",
"Agora você vai devolver o meu celular?",
"Talvez... Se você botar uma musica melhor na caixa de som.",
"Eu coloco uma playlist de melhores do verão assim que ela me devolve o celular e ela me dáum sorriso carinhoso",
"Perfeito. Sabe, você parece ser uma pessoa super interessante. Como eu ainda não te conheci?",
"Eu entrei na escola hoje",
"Hoje! Só poderia ser isso! Nós super devemos virar melhores amigas!",
"Meu nome é Regina George. Essa a minha direita é a Heather Duke e a minha esquerda é a Dionne Davenport.",
"Por que você não vem dançar com a gente? Quem sabe... Você pode acabar entrando mais exclusivo e poderoso dessa escola",
"Como assim?",
"Você pode virar alguém melhor. Uma pessoa forte.",
"Admirada",
"Temida",
"Você pode virar um Princesa"]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_2.html")
        window.location = "final_2.html"
    }

    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    console.log (dialogos [cont])

}