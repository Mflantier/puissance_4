// JS pour la page de fin !

const monTitre = document.querySelector(".acceuil");

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    monTitre.style.color = bgColor;
}

setInterval(function () {
    random_bg_color();
}, 100);
