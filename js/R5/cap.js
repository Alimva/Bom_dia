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
"Seguimos o caminho colocando o assunto e dia",
"Ela me conta as histórias conselho estudantil e eu conto os dramas da minha escola antiga",
"Quando chegamos na minha casa já está escuro",
"Família! Cheguei!",
"Oi filha",
"Fala a minha mãe",
"A e olha quem veio!",
"Ela sorri quando vê a Elisa",
"A oi Lisa! Nossa faz muito tempo que você vem aqui.",
"É bom te ver também tia Bela",
"Eu vejo meu pai no sofá e vou lá dar um beijo nele",
"Oi pai!",
"Oi filha, nossa saiu e nem me deu tchau?",
"Você tava infurnado naquele laboratório. E também, se eu deorasse mais eu ia me atrasar",
"Bom no fim foi para a melhor mesmo",
"Boa noite tio Jonas.",
"Noite Lisa! Bom te ver.",
"O jantar já vai sair viu?",
"Você vai fazer o quê de janta pai?",
"Nada. Hoje vamos pedir pizza",
"Eu riu um pouco e vou com a Lisa para o meu quarto",
"Quando a gente entra a Elisa vai direto para a minha mesa tirando os livros e cadernos da mochila",
"Vai estudar Lisa?",
"Claro. Mas se quiser me ajudar...",
"Já sei passa o celular",
"Brigada! Lembra que só pode dar pull se eu deixar viu?",
"Claro claro. Pelo menos as história são legais",
"Eu fico na minha cama farmando enquanto ela estuda, quando a comida chega eu vejo pelo menos três resumos prontos",
"Claro que todos parecem ter saído direto do pinterest",
"Passamos a noite assim. Quando chega a hora de dormir dividimos a cama ",
"Boa noite, Lisa.Te vejo amanhã.",
"A Elisa segura a minha mão e sorri",
"Boa noite S/N",
"Acordo do lado dela e nos arrumamos juntas para a escola",
"Eu tinha esquecido quão fácil estar com ela. Parece certo. Ter ela do meu lado.",
"Mesmo que cada uma esteja fazendo a sua coisa, ainda me sinto feliz só por que ela está lá",
"Quando chegamos na escola eu vejo que todos os alunos parecem meio agitados",
"Grupiho andam carregando livros e resumos",
"Lisa o quê que tá acontecendo?",
"A sim. Hoje é o último dia antes das provas. A escola tem uma tradição de deixar o último dia sem nenhuma aula para os alunos exercitarem responsabilidade e disciplina",
"E por que tem tanta gnte aqui?",
"Falta nesse dia tira um ponto da média do aluno. ",
"... Que escola é essa?",
"Vai ser prova de quê?",
"Tudo",
"Bosta. Acho que não vou pro ENEM esse ano.",
"Não se preocupe S/N. Eu posso te ajudar. Eu já vou indo para a biblioteca, mas se quiser eu vou está lá para te ajudar",
"Eu vejo ela ir enquanto surto de leve sobre o tanto de coisa que eu vou ter que estudar",
"Se os jogos de STOP dessa escola já estranhos, eu nem quero imaginar como as provas vão ser",
"Eu escuto a porta abrindo atrás de mim e viro para ver um garoto ruivo entrando",
"Eu lembro da Elisa me falando sobre ele, Henri eu acho",
"Nem sei como ele está aqui a tanto tempo. Aparentemente, ele só aparece o bastante para não ser reprovado por falta, nunca foi visto com um livro e mesmo assim passa com notas decentes",
"Oi! Você é o Henri, né? Eu soube que você tem um jeito de estudar que faz com que você passe sem muito esforço",
"Poderia me dizer qual é?",
"Sim",
"...",
"E esse jeito é...?",
"Eu colo",
"eu vejo ele indo para a biblioteca em choque",
"Bom... É um jeito.",
"E agora?",
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