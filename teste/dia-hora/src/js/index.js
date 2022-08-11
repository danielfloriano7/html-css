function dia() {
    var agora = new Date()
    var dias = agora.getDay()
    var data = agora.getDate()

    switch (dias) {
        case 0:
            res1.innerHTML = `Hoje é <strong>Domingo</strong>, dia ${data}`
            break
        case 1:
            res1.innerHTML = `Hoje é <strong>Segunda</strong>, dia ${data}`
            break
        case 2:
            res1.innerHTML = `Hoje é <strong>Terça</strong>, dia ${data}`
            break
        case 3:
            res1.innerHTML = `Hoje é <strong>Quarta</strong>, dia ${data}`
            break
        case 4:
            res1.innerHTML = `Hoje é <strong>Quinta</strong>, dia ${data}`
            break
        case 5:
            res1.innerHTML = `Hoje é <strong>Sexta</strong>, dia ${data}`
            break
        case 6:
            res1.innerHTML = `Hoje é <strong>Sábado</strong>, dia ${data}`
            break
    } 
}

function hora() {
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    
    if (horas < 10) {
        horas = "0" + horas
    }
    if (minutos < 10) {
        minutos = "0" + minutos
    }

    res2.innerHTML = (`Agora são <strong>${horas}:${minutos}</strong>`)
}
