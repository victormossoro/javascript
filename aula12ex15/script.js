function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //id do texto Ano
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        //window.alert('Tudo ok!')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement("img")
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'menino-bebe.png')
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'garoto-jovem.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'homem-adulto.png')
        } else {
            // idoso
            img.setAttribute('src', 'homem-idoso.png')
        }

    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'menina-bebe.png')
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'garota-jovem.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else {
            // idoso
            img.setAttribute('src', 'mulher-idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)

    }
}

    //res.innerHTML = `Idade calculada: ${idade}`