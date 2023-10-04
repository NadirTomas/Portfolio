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