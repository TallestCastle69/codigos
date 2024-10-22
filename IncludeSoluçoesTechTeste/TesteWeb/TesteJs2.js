/*// Gerar número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber)
// Inicializar o número de tentativas como 0
let attempts = 0;

const btnReset = document.getElementById('reset')

btnReset.style.display = 'none';

function guessNumber() {
    // Obter o palpite do usuário
    const guess = parseInt(document.getElementById('guess').value);

    // Incrementar o número de tentativas
    attempts++;

    // Comparar o palpite com o número aleatório
    if (guess === randomNumber) {
        // Se o palpite for correto
        document.getElementById('feedback').innerHTML = `Parabéns! Você acertou o número em ${attempts} tentativas.`;

        btnReset.style.display = 'inline'
       

    } else if (guess < randomNumber) {
        // Se o palpite for muito baixo
        document.getElementById('feedback').innerHTML = 'Tente um número mais alto.';
    } else {
        // Se o palpite for muito alto
        document.getElementById('feedback').innerHTML = 'Tente um número mais baixo.';
    }
}


function resetBtn(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    guessNumber()
}*/

let randomNumber;
let attempts;



function startGame() {
    // Gerar número aleatório entre 1 e 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    // Inicializar o número de tentativas como 0
    attempts = 0;
    document.getElementById('feedback').innerHTML = '';

    console.log(randomNumber);
}



function guessNumber() {
    // Verifica se o jogo já começou
    if (typeof randomNumber === 'undefined') {
        startGame();
    }

    // Obter o palpite do usuário
    const guess = parseInt(document.getElementById('guess').value);

    // Incrementar o número de tentativas
    attempts++;

    // Comparar o palpite com o número aleatório
    if (guess === randomNumber) {
        // Se o palpite for correto
        document.getElementById('feedback').innerHTML = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
    } else if (guess < randomNumber) {
        // Se o palpite for muito baixo
        document.getElementById('feedback').innerHTML = 'Tente um número mais alto.';
    } else {
        // Se o palpite for muito alto
        document.getElementById('feedback').innerHTML = 'Tente um número mais baixo.';
    }
}

function resetGame() {
    // Reinicia o jogo
    startGame();
    document.getElementById('guess').value = ''; // Limpa o campo de entrada
}

// Iniciar o jogo quando a página carregar
window.onload = startGame;