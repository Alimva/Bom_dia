let cont = 0 

const dialogos= ["Na verdade, oficina é uma palavra meio forte",
"O espaço é uma casinha nos fundos do quintal que servia para guardar o equipamento de jardinagem na época em que a minha avó morava aqui",
"Mas desde que ela morreu o espaço virou o lugar onde meu pai cria as suas invenções",
"Quando eu estou quase na porta do quintal eu vejo meu pai no quarto dele",
"Mas algo está estranho. Ele está sentado na cama parecendo completamente arrasado",
"Pai? Tá tudo bem?",
"Ele leavanta a cabeça parecendo assustado",
"Filha você ainda está aqui? Você já devia ter ido para a escola",
"Eu só queria te ver antes de sair. Aconteceu alguma coisa?",
"O de sempre filha. O RastreadorUniversal-inator não funciona e depois do desastre dos espelhos para vampiro tem sido difícil achar um comprador",
"Eu discordo, adoro usar meu espelho-inator e teve um monte de garotas que compraram",
"Obrigada filha, mas vender espelhos para garotas adolescentes não paga as contas. Se as coisas continuarem assim vou ter que tomar medidas drásticas",
"Ai pai não exagera. Se você me deixasse fazer o marketing dos nossos espelhos a gente ia ficar nadando em dinheiro",
"Tudo bem filha você pode estar me-",
"Alguém bate na porta",
"Meu pai fica branco e se levanta correndo",
"Filha você tem que correr",
"Que? Por que pai? O que está acontecendo",
"Ele me arrasta na direção do quintal",
"O que eu mais temia.",
"Pai você se envolveu com agiota?!",
"Pior filha. Eu prometi o meu primogênito anos atrás em troca de conhecimento proibido",
"Concordamos que caso eu pague uma certa quantia você vai estar livre",
"Então paga logo!",
"Eu digo, correndo tão rápido quando eu posso até o muro no fundo do quintal",
"Por que minha vó inventou de ter um terreno tão grande?",
"Filha se eles te verem antes de eu terminar de pagar a minha dívida nós nunca mais nos veremos. Eu preciso que você fuja ouviu?",
"Eles quem?",
"Eu sinto uma mão no meu ombro",
"Jonas, querido! Viemos buscar nosso pagamento",
"Meu pai gagueja e tenta me puxar para longe da pessoa que me agarrou mas não consegue me mover nem um centímetro",
"Não,por favor! Eu tenho dinheiro! Largue a minha filha!",
"Mas a mão me segura com mais força e eu sinto mais quatro segurando os meus braços",
"Essa voz... Eu já ouvi ela antes",
"Eu penso atravês do medo frio que pesa o meu estômago",
"Não se preocupa, viu? A gente aceita ela. Melhor ainda: devolvemos tudo que você pagou até agora!",
"Meu corpo congela quando eu finalmente reconheço a voz",
"Se prepare garota, você acabou de adquirida por nós!",
"A Boy Band One Direction!"]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("main/R1/final_1.html")
        window.location = "main/R1/final_1.html"
    }

    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    console.log (dialogos [cont])

}