const esfera = document.getElementById('minhaEsfera');

function aplicarCorAleatoria() {
    // Gera 3 números aleatórios para o padrão RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const novaCor = `rgb(${r}, ${g}, ${b})`;

    // Atualiza o gradiente mantendo o ponto de luz branco
    esfera.style.background = `radial-gradient(circle at 65% 15%, white 1px, ${novaCor} 3%, #000 60%, ${novaCor} 100%)`;
}

// Ouve o evento de passar o mouse (mouseenter)
esfera.addEventListener('mouseenter', aplicarCorAleatoria);