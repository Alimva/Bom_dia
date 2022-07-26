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