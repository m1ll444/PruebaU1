// Variables globales
let secretNumber;
let attempts = 0;

/**
 * Inicializa el juego generando un número aleatorio y reseteando los intentos.
 */
function initializeGame() {
    // Genera un número entero aleatorio entre 1 y 100 (inclusive)
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '¡Juego iniciado! Adivina el número entre 1 y 100.';
    document.getElementById('guessInput').value = ''; // Limpia el input
    document.getElementById('guessInput').disabled = false;
    
    // Configura el botón para el juego normal
    const button = document.querySelector('button');
    button.textContent = 'Adivinar';
    button.onclick = checkGuess;
    button.disabled = false;

    console.log("Número Secreto (solo para debug): " + secretNumber); // Opcional: mostrarlo en consola
}

/**
 * Comprueba la adivinanza del usuario y proporciona retroalimentación.
 */
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    // Convierte el valor del input a entero
    const userGuess = parseInt(guessInput.value); 

    // Validación básica del input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = '❌ Por favor, ingresa un número válido entre 1 y 100.';
        return; // Detiene la función
    }

    // Incrementa el contador de intentos
    attempts++;

    // Lógica del juego
    if (userGuess === secretNumber) {
        // ¡Adivinanza correcta!
        feedback.textContent = `🎉 ¡Correcto! Lo adivinaste en ${attempts} intento(s). ¡Felicidades!`;
        
        // Deshabilita el input
        guessInput.disabled = true;
        
        // Configura el botón para reiniciar el juego
        const button = document.querySelector('button');
        button.textContent = 'Jugar de Nuevo';
        button.onclick = initializeGame; 
    } else if (userGuess < secretNumber) {
        // Demasiado bajo
        feedback.textContent = `⬇️ Demasiado bajo. Intenta de nuevo. (Intento #${attempts})`;
    } else {
        // Demasiado alto
        feedback.textContent = `⬆️ Demasiado alto. Intenta de nuevo. (Intento #${attempts})`;
    }
    
    // Limpia el input para la siguiente adivinanza y enfoca
    guessInput.value = '';
    guessInput.focus(); 
}

// 1. La página, al cargarse, debe generar un número entero aleatorio.
// Llama a la función de inicialización cuando el script se carga.
initializeGame();