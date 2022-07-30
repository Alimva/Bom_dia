let cont = 0 

const dialogos= ["Então Henrique, veio na festa só pra ficar sentado que nem um emo no canto da sala é?",
"Ele olha para mim meio irritado",
"Meu nome não é Henrique",
"Ué? Então Henri é apelido de quê?",
"Não te interessa",
"Ele me olha mais um pouco",
"Você é...?",
"Sério? S/N? A gente conversou hoje",
"E eu deveria lembrar?",
"... Beleza então.Olha se você puder me levar para um lugar mais quieto eu ficaria agradecida?",
"Eu não ficaria com você nem se você fosse a última pessoa da Terra",
"Eca, não! Quem disse que eu iria querer ficar com uma alma sebosa como você",
"Então quer o que comigo?",
"Eu quero um alguém que me leve para um lugar mais quieto para eu poder ler um pouco",
"... Ok",
"Sério?!",
"Eu já estava saindo mesmo.",
"Ele me leva até a o quintal da casa onde um grupo mais quieto conversa",
"Quando saimos do barulho e vejo ele relaxando e respirando fundo como se tivessem tirado um peso das costas dele",
"Eu sento na grama e puxo o mue livro de novo",
"Você lê Dragões de Éter?",
"Eu tomo um susto quando ele fala e viro para olhar para ele",
"Ele tem um olhar interessado, animado até.",
"É a primeira vez que vejo ele com uma expressão diferente do seu olhar apático de sempre",
"Sim. É uma das minhas séries favoritas.",
"Ele senta do meu lado com um certo brilho no olhar",
"Você também tem raiva do que fizeram com a Maria?",
"Claro! Depois de tudo que ela passou, a Maria merecia o mundo e mais um pouco",
"Bom pelo menos é melhor do que o que fizeram com a Susana em Nárnia",
"Não é?",
"O assunto começa a fluir e eu perco a noção do tempo.",
"Quem diria que por baixo daquela cara de otário teria um nerd?",
"E um Nerd com muito bom gosto",
"O som de algo quebrando tira a minha atenção da conversa e eu viro para ver um barraco enorme acontecendo na sala",
"Parece que as k-papopers perderam a paciência e partiram para cima dos otakus",
"Gente o pau tá comendo lá dentro",
"Tá",
"E elas vão piorar mais ainda",
"Eu libero a caixa de som e pouco tempo depois a caixa de som toca Sentadona a todo volume",
"A briga fica cada vez maior e eu dou uma risada com caos que eu provoquei",
"Quando a briga começa a vir na nossa direção a gente corre para rua",
"Eu rio meio sem ar uando a gente para de correr",
"Não é ue valeu a pena vir nessa festa?",
"Henri me olha parecendo e o chato nem parece cansado",
"Foi ok.",
"Eu olho a hora no meu celular e vejo que já é quase 3 horas da manhã.",
"Tá tão tarde que nem vale a pena dormir. Vou chegar em casa bem a tempo de ir para a escola.",
"Vixe parece que eu perdi a hora",
"Já está bem tarde. Eu posso te levar em casa.",
"Com que carro colega?",
"Aquele ali",
"Ele aponta para um carro estacionado perto da entrada",
"E que carro. Eu posso não saber nada sobre o assunto mas eu sei que ele é caro",
"Caraca mano. Você é rico?",
"Ele faz que sim com a cabeça e abre a porta para mim.",
"Coloque o endereço no GPS",
"Eu coloco e ele começa a dirigir",
"Sabe tem uma coisa que tem me incomodado",
"Hum?",
"Se o seu nome não é Henrique então ele é só Henri?",
"Não",
"Ué?Então é Henri de quê?",
"Ele para e considera a respota por um bom tempo",
"Bom...é complicado",
"É coisa de família? Bom a minha também é... interessante",
"Como assim?",
"Eu conto se você me contar o seu nome",
"...Ok",
"meus pais brigam muito. Eles tiveram um casamento arranjado e nenhum dos dois tem qualquer interesse um no outro",
"Eles sempre tiveram amantes. Acho que sempre vão ter.",
"Mas por algum motivo um não aceita que o outro tenha um amante",
"É estranho mas eles ficam sempre se vigiando. Já vi meu pai mexendo no celular da minha mãe. Já vi ela contratando um detetive para seguir ele",
"Ok mas o que isso tem a ver com o seu nome",
"Bom a pior briga que eles tiveram até hoje foi no meu nascimento",
"Meu pai não estava lá na hora do parto em si e só chegou um pouco depois",
"Ele estava na casa de uma das suas amantes e correu para o hospital quando recebeu a notícia",
"Claro que a minha mãe estava furiosa. Ela pensou que sei lá. Um filho ia melhorar as coisas.",
"Ou melhor ainda: Fazer ele para de trair a minha mãe para ela poder trair ele em paz",
"Claro que isso não deu certo",
"Bom quando a enfermeira entrou na sala e perguntou o nome do bebe ela ouviu a minha mãe berrando 'Hein Ricardo?' com meu pai seguido de silêncio",
"... Ela já tinha ouvido muitos nomes estranhos então acho que ela não estranhou sabe?",
"Pera, pera. Não me diga que seu nome é-",
"Meu nome é Henricardo sim",
"Eu faço o meu melhor para segurar o riso mas ele me manda um olhar sério e isso é o bastante para eu rachar",
"Desculpa mano deculpa. Mas que diabos de enfermeira é essa cara?",
"Quem vê isso e fala sim esse é o nome desse bebê",
"Quando eu me controlo eu vejo que ele já parou o carro no endereço que eu botei",
"Você mora aqui?",
"Eu levanto o olhar para ver uma barraquinha de cachorro quente nomeio de uma pracinha",
"Claro que não. Mas eu tô com fome e você é rico então eu acho que dá pra gastar a sua gasolina sem peso na cosciência",
"Abusada",
"Mas olha quem tá se dando bem?",
"Nos fazemos o nosso pedido e sentamos em um dos banquinhos espalhados ao redor da barraca",
"Na nossa frente tem uma mesinha de criança tão alta quanto o banco",
"Sabe Henrique lá em casa a coisa é embolado de um jeito bem diferente",
"Bom acho melhor começar pelo que importa né?",
"Bom o meu pai é de uma familia meio... vamos dizer diferente",
"Ele é da cidade e antes de conhecer a minha mãe o seu melhor amigo era o Eduardo, o vizinho dele",
"As duas famílias era muito próximas então eles basicamente cresceram juntos",
"Quando a minha mãe se mudou eles tinham uns oito anos",
"Jonas, eduardo e Bela, os três eram simplesmente inseparáveis. Não dava para ver um sem os outros",
"Até o dia que o Eduardo fez 20 anos",
"Nesse dia o segredo da família dele acabou sendo revelado",
"O Eduardo era de uma família de vampiros",
"Logo ele também era vampiro",
"O lance é a que a família do meu pai tem um problema com vampiros",
"Tipo, uma rixa milenar entre os dois",
"A família do Eduardo foi obrigada a fugir da cidade e desde então eles procuram o Eduardo",
"Meu pai virou um inventor e passa todo o seu tempo criando invenções para tentar encontrar o Eduardo",
"Isso dá mais despesa que lucro então minha mãe tem que segurar as contas",
"E ela consegue fazer isso enquanto estuda medicina para poder trabalhar no hospital",
"Ou melhor, para roubar bolsa de sangue do hospital",
"E esse é o grande segredo da minha família!",
"Dramático",
"Bastante é",
"No tempo que levou para eu contar a história dos meus pais terminamos de comer e ele me deixa em casa",
"Bom... acho que nos vemos amanhã?",
"Quer dizer hoje né?",
"Se eu não dormi e acordei ainda não mudou a data",
"Ele sorri e vai embora",
"Mas que noite! Vou ter que me arrumar correndo para chegar a tempo na escola mas vai valer no fim valeu a pena",
"Mas mesmo assim não me arrependo de ter ido na festa",
"Foi divertido e acabei conhecendo alguém legal",
"O Henri acabou sendo bem mais do que eu esperava. Menos babaca e mais... interessante",
"Eu lembro do sorrisinho dele antes de ir e sinto meu rosto ficando vermelho",
"Sabe... Ele até que é bonito.",
"Sabe. Quando ele não age como um babaca",
"Mas lembrando do que ele me falou eu não consigo não perdoar ele pela primeira impressão terrível",
"Com uma família dessas eu também seria meio insuportável",
"As imagens da noite passada rodam na minha cabeça no caminho até a escola",
"Quando eu chego percebo que todos os alunos parecem agitados",
"Eu vejo a Elisa chegando e corro para o lado dela",
"Lisa o que aconteceu pra ta todo mundo tão agitado?",
"Você não sabe S/N? Amanhã vamos ter as provas de finais",
"Vixe mas já?!",
"Sim. E a tradição da escola é permitir que os alunos tenham o último dia livre de aula para se prepararem para as provas",
"E vai ser prova de quê?",
"Ela me manda um sorriso",
"Todas as matérias",
"Eu vejo a minha vida passar na frente dos meus olhos",
"Pois é acho que não vou passar",
"Claro que vai! Só precisa estudar. Se quiser ajuda venha me ver na biblioteca.",
"Eu vejo ela ir e escuto a porta se abrind atrás de mim",
"Viro para ver Henri entrando",
"Fala Henrique",
"Meu nome não é Henrique",
"Vai estudar para a prova de amanhã?",
"Não.",
"Ué? Veio fazer o quê então?",
"Arrumar cola",
"Sério?",
"Sim, se quiser vou estar na biblioteca",
"...Vixe e agora?",
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