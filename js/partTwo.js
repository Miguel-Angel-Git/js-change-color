

function cambioColor() {

    const parrafo = document.querySelector(".color");
    const colorActual = getComputedStyle(document.body).backgroundColor;

    if (colorActual === "rgb(255, 0, 0)") {
        document.body.style.backgroundColor = "darkblue";
        if (parrafo) parrafo.textContent = "darkblue";

    } else {
        document.body.style.backgroundColor = "red";
        if (parrafo) parrafo.textContent = "red";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector("button");
    boton.addEventListener("click", cambioColor);

});


