let cont = 0 

const dialogos= ["Eu viro para Elisa com um sorriso",
"Quer saber Lisa eu vou pra essa festa. Você vem?",
"Você sabe que eu tenho pouco interesse nesse tipo de atividade.",
"Sério? Mas tudo bem, eu te conto depois como foi",
"Então eu vou te ajudar a escolher uma roupa para ir para essa festa",
"Nos passamos a tarde juntas, conversando e escolhendo roupas",
"Elisa passou na casa dela no caminho da minha e pegou a necessaire de maquiagem dela",
"Ela não era nenhuma especialista mas qualquer coisa que ela fizesse ia ficar melhor do que se eu tentasse",
"Por fim finalmente estava pronta",
"Dei um beijo nos meus pais e a deixei a Lisa em casa",
"Estou pronta para curtir essa noite como se não tivesse amanhã!",
"2 Horas depois",
"... Eu gastei minha roupa boa com isso?",
"A festa é um caos. Cheia de gente bêbada fazendo besteira e cerveja barata. Honestamente eu esperava coisa melhor das garotas mais ricas da escola. Custava comprar uma coisa melhorzinha?",
"Mas só de olhar ao redor eu percebo que maior parte do dinheiro foi gasto em energético e vodka e o que sobrou em uma decoração impressionante",
"As caixas de som enormes são o centro de uma briga entre um funkeiro, uma fã de k-pop e um otaku para decidir que vai conectar o celular no buetooth.",
"Honestamente eu não sei quando tempo vai levar para essa briga deixar de ser verbal e começar a ser física",
"Pena. Nenhum deles vai conseguir usar a caixa de som.",
"Eu olho pro meu celular onde o meu Youtube mostra uma lista longa de músicas. Nela tem uma quantidade saudável de vídeos de funk,k-pop e opening de anime",
"A tensão crescente entre o trio é uma das coisas mais divertidas nessa festa",
"Infelizmente, preciso dar um tempo entre cada música especial que eu toco se não eles vão acabar percebendo que nenhum deles está controlando o som.",
"Isso me deixa com um bom tanto de tempo vago entre uma música e outra. Como era de se esperar eu fico cada vez mais entediada",
"Eu continuo sentada no meu cantinho do sofá, me afastando tanto quanto possível do casal se agarrando do meu lado, e olho de novo para o meu livro",
"As luzes coloridas podem ser até bonitas mas não dá para ler aqui. Isso pode ser ótimo para os outros aqui mas eu não sou como outras garotas",
"Eu olho para cima e vejo uma lâmpada bem em cima da minha cabeça.",
"Com alguns minutos mexendo no meu celular eu faço a Alexa da casa ligar a luz e volto para o meu livro",
"Infelizmente a luz apaga pouco depois. Eu olho ao meu redor mas não vejo ninguém perto ds interruptores do outro lado da sala",
"Mas que droga! Até mesmo a briga eminente entre o trio na frente da caixa de som está ficando entediante. Não posso nem ler em paz nessa festa?",
"Eu como me preparo para tentar ligar a luz de novo, mas do canto do meu olho eu vejo uma figura familiar. Eu jovem ruivo sentado em um canto parecendo mais entediado que eu",
"Bom falar com o chato do Henri vai ser mais divertido que ficar aqui plantada. Pelo menos nos 10 minutos entre o fim do Rap de anime tocando e a música do BTS pronta para tocar.",
"Se bem que qualqer coisa é melhor do que falar com aquele asno.",
" "]

function passar_dia() {
    if(cont == 6){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/quarto_S-N.jpg"
    }
    if(cont == 12){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/festa.jpg"
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
    set_checkpoint("../R4/dca.html")
    window.location = "../R4/dca.html"
}

function escolha_2(){
    set_checkpoint("../R4/fcobb.html")
    window.location = "../R4/fcobb.html"

}