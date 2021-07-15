function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('ano')
    var resultado = document.querySelector('div#resultado')
    if (formularioAno.value.lenght == 0 || Number(formularioAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10) {
                //crianca
                img.setAttribute('src', 'bebeH.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src','jovemH.png' )
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoH.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=10) {
                //crianca
                img.setAttribute('src', 'bebeM.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
     
}
