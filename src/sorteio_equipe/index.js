function sortearEquipes(){
    let equipes_Sorteadas = []

    let quantidade_Times = parseInt(document.getElementById("equipe").value);
    let quantidade_Jogadores_por_time = parseInt(document.getElementById("n-jgdrs").value);
    let nomes_jogadores = document.getElementById("nomes-jogadores").value
    let lista_Nomes = nomes_jogadores.split(",").map(nome => nome.trim()).filter(nome => nome !== "");
    
    if (lista_Nomes.length > quantidade_Jogadores_por_time*quantidade_Times) {
        window.alert("Limite de jogadores atingida!")
        return;
    }

    if (!quantidade_Times || !quantidade_Jogadores_por_time){
        window.alert("Valores não informados! informe valores possitivos")
        return;
    }
    
    if (quantidade_Times < 1 || quantidade_Jogadores_por_time < 1){
        window.alert("informe apenas números positivos!")
        return;
    }

    lista_de_index_sorteados = []
    for (const index in lista_Nomes) {
        do {
            index_sorteado = Math.floor(Math.random() * lista_Nomes.length)
            find_index = lista_de_index_sorteados.find((element) => element == index_sorteado)
        } while (find_index);
        lista_de_index_sorteados.push(index_sorteado)
    }

    lista_sorteada = []
    for (const index of lista_de_index_sorteados) {
        lista_sorteada.push(lista_Nomes[index])
    }
        
    texto = ""
    contagem = 0
    for (let index_Time = 0; index_Time < quantidade_Times; index_Time++) {
        texto = `${texto}\n\n time ${index_Time+1}`
            for (let index_jogadores = 0; index_jogadores < quantidade_Jogadores_por_time; index_jogadores++) {
                texto =  `${texto}\n ${index_jogadores+1} - ${lista_sorteada[contagem]}`
                contagem ++               
            }
    }

    console.log(texto);
    document.getElementById("resultado").innerText = "Divisão de equipes"
    document.getElementById("times").classList.add("eqp-sort")
    document.getElementById("times").innerText = texto

}