let cont = 0 

const dialogos= ["Além disso, só tem mais 3 dias de aula. Não vou tá perdendo nada importante se eu me atrasar.",
"Eu olho para o corredor e começo a caminhar. Eu olho pela janelinha na porta das salas procurando algum sinal de que essa é a sala do terceiro ano",
"Eu fico nessa por pelo menos uma hora sem encontrar a maldita sala",
"Se arrependiment matasse ... Eu devia ter procurado a Elisa",
"Eu vejo eu garoto saindo do banheiro no fundo do corredor e sorrio",
"Finalmente alguém que conhece essa joça!",
"Oi! Você sabe onde fica a sala do terceirão?",
"Sei.",
"Maravilha! Pode me mostrar onde fica?",
"Posso.",
"Ele começa a andar e eu sigo",
"Estranho... esse caminho tá levando para longe das salas. Será que eu errei o prédio?",
"Ele continua andando até chegarmos num canto escondido de um lindo jardim nos fundos da escola.",
"Eu vejo ele sentando em um banco e finalmente pergunto",
"É... Acho que essa não é a sala...",
"O quê que você acha? Isso parece uma sala de aula pra você?",
"Bem... Não.",
"Pois é. Você ser até meio lerda mas pelo menos não é uma asna.",
"As- Mas você que disse que ia me levar pra sala desgraça!",
"Eu nunca disse isso! Eu falei que eu PODIA te levar. Nunca falei que ia.",
"Então vá se lascar então idiota",
"Eu saio batendo o pé e soltando fumaça pelas ventas",
"E esse mal-educado ainda teve a cara de pau de ME chamar de asna. Asno é ele!",
"Felizmente achei um zelador que me levou até a sala",
"Eu fico mais irritada ainda quando percebo que era um lugar que eu passe mil vezes.",
"Entro no meio do jogo de STOP mais doido que eu já vi. Alunos berravam nomes de obras clássica,contas matemáticas e uma série criativa de palavrões na categoria 'Minha Sogra é'",
"Pelo menos uma dessas coisas era familiar...",
"Eu vejo a Elisa no fundo e sento do lado dela",
"Até o fim da aula eu batalho por pontos no 'Minha Sogra é' e pelas caras horrorizadas dos meus colegas eu tava pegando meio pesado.",
"Bom problema deles. Eu tenho muito ódio para destilar hoje, eles que se virem.",
"A Elisa ria tanto que mal conseguia responder",
"Quando a aula finalmente acabou ela vira para conversar",
"Vejo que você começou o dia com um humor incrível.",
"Nem me diga. Que diazinho bosta hein.",
"O que aconteceu contigo? Perdeu o ônibus.",
"Quem dera fosse. Só topei com o cara mais escroto da face da Terra.Acredita que ele não só me levou pro outro lado da escola dizendo que ia me trazer aqui, mas ele também teve a ousadia de me chamar de asna?",
"Interessante. Por acaso ele era ruivo?",
"Era sim. Por que?",
"Bom, ele soa como o Henri. Só tem uma pessoa gentil assim por aqui.",
"Bom então todo mundo deve ser melhor que aquele diabo",
"Claro que não. Eles só são ruins de um jeito diferente.",
"Saímos da sala e vejo um amontoado de pessoas na frente do quadro de avisos.",
"Gente é o quê lançaram as notas?",
"Improvável. Mas é possível que já estejam anunciando a festa das Princesas",
"Princesas? Que que isso a Disney?",
"Não S/N. Elas são as garotas mais ricas, bonitas e populares da escola. Todo ano elas fazem uma festa para celebrar o fim das aulas. É o maior evento do ano e deve estar acontecendo hoje.",
"A multidão se afasta o bastante para eu poder ver um poster com 'A Melhor Festa do Ano' escrito em letras garrafais",
"Nunca fui em uma festa do Ensino Médio que nem as de filme e essa é a oportunidade perfeita",
"Por outro lado, eu nunca fui fã de festas. Vai ser um saco ir lá só pra ficar num canto entediada e desconfortável",
" "]

function passar_dia() {
    if(cont == 25){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/sala_escola.jpeg"
    }
    if(cont == 41){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
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
    set_checkpoint("../R3/ipaf.html")
    window.location = "../R3/ipaf.html"
}

function escolha_2(){
    set_checkpoint("../R3/ipc.html")
    window.location = "../R3/ipc.html"

}