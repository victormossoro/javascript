function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('fotos')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#25CED1'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FCAF58'
    } else {
        // Boa Noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#023436'
    }

}