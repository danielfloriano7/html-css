function somar() {
    var tn1 = window.document.getElementById('txn1')
    var tn2 = window.document.querySelector('input#txn2')
  
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var res = document.getElementById('res')

    var c = document.querySelector('#conta')
    var conta = String(c.value)

    if (conta == '+') {
        var r = n1 + n2 
    }
    if (conta == '-') {
        var r = n1 - n2
    }
    if (conta == '*') {
        var r = n1 * n2
    }
    if (conta == '/') {
        var r = n1 / n2
    }
    
    res.innerHTML = `Resultado: <br> ${n1} ${conta} ${n2} é igual a <strong>${r}</strong>`
}