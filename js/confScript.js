function  calcular(tipo, valor) {
    if(tipo === 'valor'){
        document.getElementById('display').value += valor

    }
    if (tipo === 'acao'){
        if(valor === 'C') {
            document.getElementById('display').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('display').value += valor
        }
        if(valor === '='){
            var resultado = eval(document.getElementById('display').value)
            document.getElementById('display').value = resultado
        }
    }
}
