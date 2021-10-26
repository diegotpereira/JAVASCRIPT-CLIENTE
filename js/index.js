campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
    // document.querySelector('#desconto')
]

console.log(campos)

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault()

    var tr = document.createElement('tr')

    campos.forEach(function(campo) {

        var td = document.createElement('td')
        td.textContent = campo.value
        tr.appendChild(td)
    })

    // incluir tr na tabela

    // variavel volume
    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume)

    // Variavel desconto
    // var tdValorTotal = document.createElement('td')
    // tdValorTotal.textContent = parseFloat(campos[3].value * ('.tbody td').eq(3).text()) / 100
    // tr.appendChild(tdValorTotal)

    tbody.appendChild(tr)

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()

})