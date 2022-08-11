function saber() {
    var pais = document.querySelector('#pais').value
    var res = document.querySelector('#res')

    pais = pais.toLowerCase()

    if (pais == "brasil" || pais == "br") {
        res.innerHTML = 'Você é <strong>Brasileiro</strong>'
    } 
    else {
        res.innerHTML = ('Você é <strong>Estrangeiro</strong>')
    }
}