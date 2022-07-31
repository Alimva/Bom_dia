let cont = 0 

const dialogos= [
" "]

function passar_dia() {
    if(cont == 10){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
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
    set_checkpoint("../R7/pce.html")
    window.location = "../R7/pce.html"
}

function escolha_2(){
    set_checkpoint("../R7/nv.html")
    window.location = "../R7/nv.html"

}