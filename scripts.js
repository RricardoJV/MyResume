let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Regresar al final si está en el inicio
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Volver al inicio si está al final
    }

    const offset = -currentIndex * (100 / totalItems); // Calcular el desplazamiento
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Iniciar el desplazamiento automático
setInterval(() => {
    moveCarousel(1);
}, 3000); // Cambia cada 3 segundos
