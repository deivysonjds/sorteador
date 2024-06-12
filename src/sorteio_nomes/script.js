// Array global para armazenar os nomes sorteados
let nomesSorteados = [];

// Função para sortear nomes com repetição
function sortearNomes() {
    // Obtém o valor do textarea com o id "nomes"
    let nomes = document.getElementById("nomes").value;

    // Divide a string de nomes em um array, usando a vírgula como separador
    // Em seguida, remove espaços extras ao redor de cada nome e filtra elementos vazios
    let listaDeNomes = nomes.split(",").map(nome => nome.trim()).filter(nome => nome !== "");

    // Verifica se há pelo menos um nome na lista
    if (listaDeNomes.length === 0) {
        // Se não houver nomes, exibe uma mensagem de erro no parágrafo com o id "resultado"
        document.getElementById("resultado").innerText = "Por favor, insira pelo menos um nome.";
        return; // Encerra a função
    }

    // Sorteia um índice aleatório baseado no comprimento do array
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);

    // Seleciona o nome sorteado usando o índice aleatório
    let nomeSorteado = listaDeNomes[indiceAleatorio];

    // Exibe o nome sorteado no parágrafo com o id "resultado"
    document.getElementById("resultado").innerText = `Nome sorteado: ${nomeSorteado}`;
}

// Função para sortear nomes sem repetição
function sortearNomesSemRepetir() {
    // Obtém o valor do textarea com o id "nomes"
    let nomes = document.getElementById("nomes").value;

    // Divide a string de nomes em um array, usando a vírgula como separador
    // Em seguida, remove espaços extras ao redor de cada nome e filtra elementos vazios
    let listaDeNomes = nomes.split(",").map(nome => nome.trim()).filter(nome => nome !== "");

    // Remove os nomes já sorteados da lista
    listaDeNomes = listaDeNomes.filter(nome => !nomesSorteados.includes(nome));

    // Verifica se há nomes não sorteados restantes
    if (listaDeNomes.length === 0) {
        // Se não houver nomes não sorteados, exibe uma mensagem
        document.getElementById("resultado").innerText = "Todos os nomes já foram sorteados.";
        return; // Encerra a função
    }
    

    // Sorteia um índice aleatório baseado no comprimento do array de nomes não sorteados
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);

    // Seleciona o nome sorteado usando o índice aleatório
    let nomeSorteado = listaDeNomes[indiceAleatorio];

    // Adiciona o nome sorteado à lista de nomes sorteados
    nomesSorteados.push(nomeSorteado);

    // Exibe o nome sorteado no parágrafo com o id "resultado"
    document.getElementById("resultado").innerText = `Nome sorteado: ${nomeSorteado}`;
}