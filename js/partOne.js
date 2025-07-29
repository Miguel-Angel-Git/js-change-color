

function cambioColor() {
    document.body.style.backgroundColor = "darkblue";
    const parrafo = document.querySelector(".color");

    parrafo.textContent = "darkblue";
}

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector("button");
    boton.addEventListener("click", cambioColor);

});


