let cont = 0 

const dialogos= ["Ela sorri e segura a minha mão",
"Então vamos ao ponto de ônibus. Eu passo em casa rapidinho e depois iremos para a sua",
"Saímos da escola e chegamos bem a tempo de sentar no ônibus",
"Eu vejo ela puxando o celular e dou um sorriso",
"Lisa você ainda tá viciada em gacha",
"Vício é uma palavra muito forte",
"Lisa fala sério. Você me chamava para ir na sua casa farmar pra você linda",
"Você me deixava uma lista de coisas para fazer enquanto você estudava",
"Não minta S/N",
"Ué? Então pegou esse celular pra quê?",
"Eu quero ouvir música.",
"Com que fone? Você odeia usar fone no ônibus!",
"Eu - Eu mudei! Faz muito tempo que não andamos de ônibus juntas",
"Eu me estico e arranco o celular das mãos dela",
"Devolve!",
"Olha que lindo! Plano de fundo de genshin, pasta de jogos com não um, não dois mais três jogos que são claramente gachas!",
"Quem disse! Aquele é sobe teatro! E esse é de moda! E esse aqui é um dating sim!",
"Querida esses são gachas sim. Se eu abrir e não for eu te pago um lanche",
"... Precisa não",
"Ha! Não tem para onde fugir né?",
"Olha faz assim, eu paro de te zoar por enquanto e você lê um mangá que eu escolher",
"Vai ser Iruma-kun né?",
"Sim",
"...Tá",
"Descemo no ponto dela e eu espero ela descer com as coisas dela e vamos para a minha casa",
"Entãp, como vai a busca por aquele amigo dos seus pais?",
"O Eduardo? Tem ido como sempre foi sabe",
"Meu pai inventando coisa, minha mãe trabalhando que nem uma louca e nem sinal dele",
"S/N me diga, como era para o espelho-inator ajudar?Eu compreendo que o RastreadorUniversal-inator seria muito útil mas um espelho? ",
"Bom o espelho só reflete vampiros. Se ele refletir alguém vamos receber um sinal aqui junto com um vídeo do vampiro. Mas o lance é que ninguém quer comprar um espelho que não reflete",
"Mas meu pai não me escuta né. Eu falo que se a gente vendesse um espelho que mostra vampiros para garotas adolescentes, ia ser sucesso na certa",
"Bom ele teve muito talento na área de marketing. Mas eu sei que você faria um ótimo trabalho",
"Seguimos o ca"
" "]

function passar_dia() {
    if(cont == 10){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/quarto_garota.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
    }
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;

    mostrar_escolha()
}

const e  = document.getElementById("escolha")

function mostrar_escolha(){
    
    if(cont == dialogos.length){
        
        e.setAttribute("style", "display: blcok;")
        return
    } else if (e.style = "display: block;"){
       
        e.setAttribute("style", "display: none;")
    }
}

function escolha_1(){
    set_checkpoint("../R6/c.html")
    window.location = "../R6/c.html"
}

function escolha_2(){
    set_checkpoint("../R6/e.html")
    window.location = "../R6/e.html"

}