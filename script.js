// =====================
// CÓDIGO EXISTENTE
// =====================
let menuVisible = false;

function mostrarOcultarMenu() {
    document.getElementById("nav").classList.toggle("responsive");
    menuVisible = !menuVisible;
}

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.querySelectorAll(".progreso").forEach(el => el.classList.add(el.dataset.skill));
    }
}

window.addEventListener("scroll", efectoHabilidades);

document.addEventListener("DOMContentLoaded", () => {
    const btnDescargar = document.getElementById('descargarPdf');
    if (btnDescargar) {
        btnDescargar.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = 'https://nadirtomas.netlify.app/Fotos/CV_Tomas_Nadir.pdf';
            a.download = 'CV_Tomas_Nadir.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});


async function cargarProyectos() {
    try {
        const response = await fetch('projects.json');
        const proyectos = await response.json();
        const galeria = document.querySelector('.portfolio .galeria');
        galeria.innerHTML = '';
        proyectos.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('proyecto');
            card.innerHTML = `
                <img src="${p.image}" alt="${p.title}">
                <div class="overlay">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <a href="${p.link}" target="_blank">Ver Proyecto</a>
                </div>
            `;
            galeria.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando proyectos:", error);
    }
}

// =====================
// NUEVO CÓDIGO PARA FORMULARIO
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Evita recarga
            const data = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    const mensaje = document.getElementById("mensaje-exito");
                    if (mensaje) {
                        mensaje.style.display = "block";
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            }).catch(() => {
                alert("Ocurrió un error al enviar el mensaje.");
            });
        });
    }
});
