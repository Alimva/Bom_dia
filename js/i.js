let cont = 0 

const dialogos= ["bom dia","Boa tarde", "Boa noite","oioi","tchautchau"]

function passar_dia() {
    if(cont >= dialogos.length){
        document.querySelector ("#container").append(criar_botao("Ver depois","vam") )
        document.querySelector ("#container").append(criar_botao("Falar com o seu pai","vop"))
        
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


