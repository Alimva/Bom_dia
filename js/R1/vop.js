let cont = 0 

const dialogos= ["e ai","tudo bem"]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("./final_1.html")
        window.location = "./final_1.html"
    }

    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    console.log (dialogos [cont])

}