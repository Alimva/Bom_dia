let cont = 0 

const dialogos= ["Eu me vira para a Lisa",
"Olha se você tiver vontade de ir eu até considero ir contigo mas se não...",
"Não se preocupe. Você sabe que eu tenho mais coisas para fazer",
"Imagino",
"O plano deve ser estudar como sempre",
"Sabe S/N. Eu poderia ir contigo até a sua casa.",
"Sério? Mas Lisa o caminho não é meio fora de mão para você?",
"Só um pouquinho",
"Mentira. Ela mora no outro lado da cidade e precisaria de dois ônibus paa chegar em casa.",
"Seria melhor não fazer ela se deviar tanto do caminho dela",
"Claro que no pior dos casos ela sempe pode dormir na minha casa. Não é como se meus pais brigariam",
" "]

function passar_dia() {
    if(cont == 5){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_tarde.jpeg"
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
    set_checkpoint("../R5/cap.html")
    window.location = "../R5/cap.html"
}

function escolha_2(){
    set_checkpoint("../R5/is.html")
    window.location = "../R5/is.html"

}