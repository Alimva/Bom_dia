let cont = 0 

const dialogos= ["e ai","tudo bem"]

function passar_dia() {
    if(cont >= dialogos.length){
        set_checkpoint ("/main/vop/vop.html")
        window.location = "/main/vop/vop.html"
    }
    if(cont == 3){
        let bg = document.querySelector("#background img")
        bg.src = "../assets/img/sala.jpeg"
    }
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    console.log (dialogos [cont])

}