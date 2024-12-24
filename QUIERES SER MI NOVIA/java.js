// Botón "No"
const noButton = document.getElementById("no-button");

// Función para mover el botón "No"
function moveNoButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect("Todo bien");
    const maxX = containerRect.width - noButton.offsetWidth; // Ancho máximo
    const maxY = containerRect.height - noButton.offsetHeight; // Altura máxima

    // Generar nuevas posiciones aleatorias dentro del contenedor
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Evento para mover el botón "No" al pasar el cursor
noButton.addEventListener("mouseover", moveNoButton);

// Botón "Sí"
const yesButton = document.getElementById("yes-button");

// Función al hacer clic en "Sí"
function yesResponse() {
    const response = document.getElementById("response");
    response.textContent = "¡Tomaste una buena decisión!";
    response.style.color = "#4caf50";

    // Deshabilitar ambos botones después de elegir
    yesButton.disabled = true;
    noButton.disabled = true;

    // Cambiar estilos para evitar más interacción
    yesButton.style.opacity = 0.7;
    noButton.style.opacity = 0.7;
    yesButton.style.cursor = "default";
    noButton.style.cursor = "default";
}

// Evento para el botón "Sí"
yesButton.addEventListener("click", yesResponse);
