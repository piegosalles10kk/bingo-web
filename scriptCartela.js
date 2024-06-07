// Arrays que representam as colunas do jogo de Bingo
const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13, 14, 15];
const I = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const N = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const G = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const O = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

//Matriz que agrupa as colunas no formato de Bingo
const bingo = [B, I, N, G, O];

// Função para gerar uma nova cartela de Bingo
function gerarCartela() {
    let cartela = [];  // Array para armazenar uma cartela gerada
    for (let i = 0; i < bingo.length; i++) {
        gerarColunaCartela(bingo[i], cartela);  // Gera uma coluna da cartela e a adiciona à cartela
    }
    return cartela;
}

// Função para gerar uma coluna de 5 números únicos retirados do array dado
function gerarColunaCartela(array, cartela) { 
    let coluna = [];
    for (let i = 0; i < 5; i++) {
        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * array.length);  // Sorteia um índice do array
        } while (coluna.includes(array[numeroSorteado])); // Evita números repetidos na coluna
        coluna.push(array[numeroSorteado]);  // Adiciona o número sorteado na coluna
    }
    cartela.push(coluna);  // Adiciona a coluna à cartela
}

// Função para preparar a cartela, incluindo a remoção do número do centro (N)
function cartelaPronta() {
    const cartela = gerarCartela();
    cartela[2].splice(2, 1);  // Remove o número do meio da coluna N, criando o espaço "FREE"
    return cartela;  // Retorna a cartela gerada
}


function exibirCartela() {
    const cartelaCompleta = cartelaPronta();

    for (let linha = 0; linha < cartelaCompleta.length; linha++) {
        for (let coluna = 0; coluna < cartelaCompleta[linha].length; coluna++) {
            const elemento = document.getElementById(`c${linha}${coluna}`);
            elemento.innerHTML = (cartelaCompleta[linha][coluna]);

        }
    }   
}

exibirCartela()

