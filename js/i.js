let cont = 0 

const dialogos= ["Desligo o meu alarme e me arrasto da minha cama.",
"Eu me arrumo na frente do meu espelho e coloco meu cabelo em um coque bagunçado",
"Eu arrumo minha mochila e olho para o meu relogio",
"É incrivel quanto tempo você economiza quando não gasta tempo fazendo a maquiagem",
"Quando eu vejo que está tudo certo, eu saio e vou para a sala.",
"Eu vejo a minha mãe relendo um dos seus cadernos",
"Bom dia, mãe!",
"Ela levanta a cabeça e sorri ao me ver",
"Bom dia, filha! Animada para o seu primeiro dia de aula na escola nova?",
"Animada pra que? Eu vou ter só dois dias de aula antes do ano acabar",
"Para com isso filha. Você está indo para a escola Amoris! É a primeira da família a pisar nessa escola",
"Mentira. A tia Renê tava lá antes de eu nascer",
"É diferente e você sabe. Ela trabalhava lá como faxineira, mas você vai para estudar",
"Você devia tá agradecendo os céus por conseguir uma bolsa maravilhosa dessas a tempo pro ENEM",
"Eu não teria esse problema se não fosse aquela maldita greve",
"Bom aí vou ter que concordar. Que hora ruim pra fazer greve hein?",
"Eu concordo com a cabeça e procuro o meu pai com os olhos",
"Estranho. Ele deve ter passado a noite na oficina dele",
"Eu deveria ver ele antes de sair. As costas dele vão piorar se ele passar mais uma noite dormindo na mesa",
"Mas... A escola é bem longe. Se eu não sair logo vou acabar me atrasando",
" "]

function passar_dia() {
    if(cont == 5){
        let bg = document.querySelector("#background img")
        bg.src = "../assets/img/sala.jpeg"
    }
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    //console.log (dialogos [cont])
    mostrar_escolha()
}

const e  = document.getElementById("escolha")

function mostrar_escolha(){
    console.log("chamo")
    if(cont == 21){
        console.log("tem q mudar")
        e.setAttribute("style", "display: blcok;")
        return
    } else if (e.style = "display: block;"){
        console.log("n muda nada")
        e.setAttribute("style", "display: none;")
    }
}

function escolha_1(){
    set_checkpoint("R1/vam.html")
    window.location = "R1/vam.html"
}

function escolha_2(){
    set_checkpoint("R1/vop.html")
    window.location = "R1/vop.html"

}

