function sortearNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    if (isNaN(min) || isNaN(max) || min > max) {
        alert('Por favor, insira um intervalo válido.');
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').textContent = `Número sorteado: ${numeroSorteado}`;
}