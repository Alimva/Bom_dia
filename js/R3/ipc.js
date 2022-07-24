let cont = 0 

const dialogos= [
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
    set_checkpoint("../R5/cap.html")
    window.location = "../R5/cap.html"
}

function escolha_2(){
    set_checkpoint("../R5/is.html")
    window.location = "../R5/is.html"

}