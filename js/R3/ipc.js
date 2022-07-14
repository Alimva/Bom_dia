let cont = 0 

const dialogos= ["Desligo o meu alarme e me arrasto da minha cama.",
"Hoje vai ser meu primeiro dia na escola nova",
"Quem diria que a minha escola ia fechar dois dias antes do fim do semestre?",
"Como a escola não pode lançar um diploma para os alunos eu tive que correr para entrar em outra escola",
"Por sorte, a escola da mnha melhor amiga fez um sorteio de  bolsas e eu ganhei",
"Provavelmente gastei toda a minha sorte nesse sorteio",
"Mas isso não importa!",
"O que importa é que entrei para a super exclusiva escola Amoris!",
"Eu me arrumo na frente do espelho, coloco meu cabelo em um coque bagunçado e meus amados tênis all-star.",
"Quando eu termino de me arrumar eu vou para a sala",
"ola",
" "]

function passar_dia() {
    if(cont == 5){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_tarde.jpeg"
    }
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;

    mostrar_escolha()
}

const e  = document.getElementById("escolha")

function mostrar_escolha(){
    console.log("chamo")
    if(cont == 12){
        console.log("tem q mudar")
        e.setAttribute("style", "display: blcok;")
        return
    } else if (e.style = "display: block;"){
        console.log("n muda nada")
        e.setAttribute("style", "display: none;")
    }
}

function escolha_1(){
    set_checkpoint("R5/cap.html")
    window.location = "R5/cap.html"
}

function escolha_2(){
    set_checkpoint("R5/is.html")
    window.location = "R5/is.html"

}