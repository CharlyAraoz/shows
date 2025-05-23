// Datos de los shows
const shows = [
    {
        nombre: "Splash",
        descripcion: "Espectáculo con tambores, agua y efectos de luz.",
        imagen: "ss.jpg",
        tipo: "show-magico"
    },
    {
        nombre: "Lasermania",
        descripcion: "Experiencia futurista con láseres de alta potencia.",
        imagen: "lasermania.jpg",
        tipo: "show-tecnologico"
    },
    {
        nombre: "Defiesta",
        descripcion: "Fiesta interactiva con DJs en vivo y animación de público.",
        imagen: "defiesta.jpg",
        tipo: "show-musical-banda"
    },
    {
        nombre: "Notorious",
        descripcion: "Espectáculo de baile urbano con proyecciones audiovisuales.",
        imagen: "notorious.jpg",
        tipo: "show-musical-banda"
    },
    {
        nombre: "The Acá",
        descripcion: "Show de comedia musical con actores profesionales.",
        imagen: "the-aca.jpg",
        tipo: "show-musical-banda"
    },
    {
        nombre: "Bikelmania",
        descripcion: "Acrobacias extremas en bicicletas y motocicletas.",
        imagen: "bikelmania.jpg",
        tipo: "show-extremo"
    }
];

// Renderizar shows
function renderShows() {
    const grid = document.querySelector('.shows-grid');
    
    grid.innerHTML = shows.map(show => `
        <div class="show-card ${show.tipo}">
            <div class="show-img" style="background-image: url('assets/images/shows/${show.imagen}')"></div>
            <div class="show-content">
                <h3>${show.nombre}</h3>
                <p>${show.descripcion}</p>
                <button class="show-btn" data-show="${show.nombre}">Ver Detalles</button>
            </div>
        </div>
    `).join('');
}

// Modal para detalles (simplificado)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-btn')) {
        const showName = e.target.getAttribute('data-show');
        alert(`Redirigiendo a más información sobre ${showName}`);
        // En producción, usaría: window.location.href = `shows/${showName.toLowerCase()}.html`;
    }
});

// Validación de formulario
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    e.target.reset();
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderShows();
});
