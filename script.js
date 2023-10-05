let menuVisible = false

// Funcion ocultar y mostrar menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu cuando selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Animacion a las barras
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("vb");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("proactividad");
        habilidades[9].classList.add("adaptacion");
        habilidades[10].classList.add("solidario");
        habilidades[11].classList.add("perseverancia");

    }
}

// detectar scrolling
window.onscroll = function(){
    efectoHabilidades();
}

// generar descarga de cv
        
    //Obtén una referencia al botón
    var btnDescargar = document.getElementById('descargarPdf');

        // Agrega un evento clic al botón
    btnDescargar.addEventListener('click', function() {
    
            // URL del archivo PDF que deseas descargar
       var pdfUrl = 'Fotos/CV_Tomas_Nadir.pdf';
        
            // Crea un elemento <a> para simular un clic en un enlace
        var a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'CV_Tomas_Nadir.pdf'; // Nombre con el que se descargará el archivo

            // Simula un clic en el enlace
         a.click();
    });