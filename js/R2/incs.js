let cont = 0 

const dialogos= ["Felizmente, o caminho e bem sinalizado",
"Entre as placas indicando várias salas eu vejo uma com Conselho Estudantil escrito",
"Melhor ainda eu vejo a Elisa saindo da sala",
"Ela vira e me vê, abrindo um sorriso",
"Que bom te ver S/N. Pensei que eu tivesse perdido a chance de te dar as boas vindas mas que bom que a gente se encontrou.",
"Que bom mesmo Lisa, que eu tô completamente perdida nessa escola",
"Ela ri e segua a minha mão",
"Bom eu posso te guiar até a sala ... Que é bem na frente da sala do conselho.",
"Merda",
"A Elisa ri ainda mais quando vê a minha cara de frustada olhando a sala de aula.",
"Ela entra e sentamos uma do lado da outra pouco antes do professor chegar",
"Eu vejo ela puxando coisa da mochila, estojo, caderno, livro, todo o material do dia, e colocando tudo na sua mesa",
"Eu viro para ela com um sorrisinho",
"Elisa fala sério. Só tem mais uns três dias de aula, tá tirando isso tudo pra quê?",
"Você vai ver",
"Nessa hora eu vejo o professor chegando",
"Ele coloca um livro grosso na mesa e começa a anotar no quadro",
"Bom dia turma. Como hoje é o penúltimo dia de aula antes das provas, vamos fazer algo mais divertido",
"Ele começa a escrever uma tabela para recriarmos nos cadernos e jogarmos stop",
"Mas por algum motivo isso só deixou a turma mais tensa. Eu vejo alguns alunos puxando réguas, outros dicionários grossos e até um com uma calculadora científica",
"Que tipo de stop é esse?",
"Lembrem que como todo jogo de stop, esse também vale ponto. Que ganhar pelo meno uma vez leva um ponto para uma matéria da sua escolha",
"Ele se afasta do quadro e eu vejo as categorias: Literatura Clássica, Vencedores do prêmio Nobel, Integrais diferenciais com resposta, Palavras que foram mais utilizadas na era Vitoriana e Minha sogra é",
"... Em que buraco eu acabei de me meter?",
"5 Horas Depois",
"Me arrasto do terrível jogo stop sentindo como se um pedaço da minha alma tivesse morrido",
"Com muito esforço eu consegui alguns pontos, sorte que o professor não sabe o bastante sobre anime ou jogos. Consegui botar alguns nomes lá e fingi que eram obras obscuras que poucos conheciam",
"A Elisa ri da minha cara e eu mando um olhar fuzilante na direção dela",
"Eu vejo movimento ao redor do quadro de avisos com o canto do olho e viro para ver um grupo grande de alunos amontoado ao redor do quadro",
"Quando eu me aproximo eu vejo que é um poster com as palavras 'A Melhor Festa do Ano' escritas em letras garrafais",
"Então finalmente vai acontecer",
"Eu olho para ela confusa",
"Todo ano as princesas fazem uma festa incrível para celebrar o fim do semestre, parece que vai ser hoje",
"Princesas?",
"As três garotas mais ricas, bonitas e populares da escola",
"Eu olho para o poster pensativa. Podia ser divertido.",
"Nunca fui em uma festa do Ensino Médio que nem as de filme e essa é a oportunidade perfeita",
"Por outro lado, eu nunca fui fã de festas. Vai ser um saco ir lá só pra ficar num canto entediada e desconfortável",
" "]

function passar_dia() {
    if(cont == 11){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/sala_escola.png"
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
