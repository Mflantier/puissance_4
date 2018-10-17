const pionJaune = document.querySelectorAll("div.pionJaune").value = 1;
const pionRouge = document.querySelectorAll("div.pionRouge").value = 2;
let h1 = document.querySelector("#titre");
let col1 = document.querySelector("#colonne1");
let col2 = document.querySelector("#colonne2");
let col3 = document.querySelector("#colonne3");
let col4 = document.querySelector("#colonne4");
let col5 = document.querySelector("#colonne5");
let col6 = document.querySelector("#colonne6");
let col7 = document.querySelector("#colonne7");
let jpp = document.querySelector(".case");
let player = 1;
let btn1 = document.querySelector("#niveau1");
let i = 6;
let j = 6;
let k = 6;
let l = 6;
let m = 6;
let n = 6;
let o = 6;
console.log(btn1.value)
function joueur() {
    if (player == 1) {
        player = 2;
        h1.innerHTML = "<p class='joueur2'>JOUEUR 2</p>";
    } else {
        player = 1;
        h1.innerHTML = "<p class='joueur1'>JOUEUR 1</p>";
    }
}






// au click













col1.addEventListener("click", function () {
    if (i >= 1) {

        if (player == 1) {
            document.querySelector(".case1-" + i).id = "pionRouge";
            i--
        } else {
            document.querySelector(".case1-" + i).id = "pionJaune";
            i--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }

    vertiHori()
    diagonale()
    antiDiagonale()
})
col2.addEventListener("click", function () {

    if (j >= 1) {
        if (player == 1) {
            document.querySelector(".case2-" + j).id = "pionRouge";
            j--
        } else {
            document.querySelector(".case2-" + j).id = "pionJaune";
            j--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})
col3.addEventListener("click", function () {

    if (k >= 1) {
        if (player == 1) {
            document.querySelector(".case3-" + k).id = "pionRouge";
            k--
        } else {
            document.querySelector(".case3-" + k).id = "pionJaune";
            k--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})
col4.addEventListener("click", function () {

    if (l >= 1) {
        if (player == 1) {
            document.querySelector(".case4-" + l).id = "pionRouge";
            l--
        } else {
            document.querySelector(".case4-" + l).id = "pionJaune";
            l--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})
col5.addEventListener("click", function () {


    if (m >= 1) {
        if (player == 1) {
            document.querySelector(".case5-" + m).id = "pionRouge";
            m--
        } else {
            document.querySelector(".case5-" + m).id = "pionJaune";
            m--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})
col6.addEventListener("click", function () {

    if (n >= 1) {
        if (player == 1) {
            document.querySelector(".case6-" + n).id = "pionRouge";
            n--
        } else {
            document.querySelector(".case6-" + n).id = "pionJaune";
            n--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})
col7.addEventListener("click", function () {

    if (o >= 1) {
        if (player == 1) {
            document.querySelector(".case7-" + o).id = "pionRouge";
            o--
        } else {
            document.querySelector(".case7-" + o).id = "pionJaune";
            o--
        }
        joueur();
    } else {
        window.alert("Colonne pleine !")
    }
    vertiHori()
    diagonale()
    antiDiagonale()
})

function vertiHori() {
    let count = 0;
    for (let li = 1; li < 7; li++) {
        for (let co = 1; co < 8; co++) {
            count = (document.querySelector(".case" + co + "-" + li).id) == "pionJaune" ? count + 1 : 0;
            if (count >= 4) window.alert("Le jaune a gagné !");
        }
    }
    count = 0;
    for (let li = 1; li < 7; li++) {
        for (let co = 1; co < 8; co++) {
            count = (document.querySelector(".case" + co + "-" + li).id) == "pionRouge" ? count + 1 : 0
            if (count >= 4) window.alert("Le rouge a gagné !")
        }
    }
    count = 0;
    for (let co = 1; co < 8; co++) {
        for (let li = 1; li < 7; li++) {
            count = (document.querySelector(".case" + co + "-" + li).id) == "pionJaune" ? count + 1 : 0;
            if (count >= 4) window.alert("Le jaune a gagné !");
        }
    }
    count = 0;
    for (let co = 1; co < 8; co++) {
        for (let li = 1; li < 7; li++) {
            count = (document.querySelector(".case" + co + "-" + li).id) == "pionRouge" ? count + 1 : 0;
            if (count >= 4) window.alert("Le rouge a gagné !");
        }
    }
}



function antiDiagonale() {

    // =============================== VERIFICATION DE ROUGE =======================================================================================
    let count = 0;
    let y = 1;
    let x = 3;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }


    count = 0;
    y = 1;
    x = 2;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }


    count = 0;
    y = 1;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }



    count = 0;
    y = 2;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }


    count = 0;
    y = 3;
    x = 1;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }


    count = 0;
    y = 4;
    x = 1;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le rouge a gagné !");
    }

    // =============================== VERIFICATION DE JAUNE =======================================================================================

    count = 0;
    y = 1;
    x = 3;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }

    count = 0;
    y = 1;
    x = 2;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }

    count = 0;
    y = 1;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 2;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 3;
    x = 1;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }

    count = 0;
    y = 4;
    x = 1;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y++
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
}
function diagonale() {

    // =============================== VERIFICATION DE ROUGE =======================================================================================
    let count = 0;
    let y = 7;
    let x = 3;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }
    count = 0;
    y = 7;
    x = 2;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }
    count = 0;
    y = 7;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }
    count = 0;
    y = 6;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }
    count = 0;
    y = 5;
    x = 1;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }

    count = 0;
    y = 4;
    x = 1;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionRouge" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le rouge a gagné !");
    }

    // =============================== VERIFICATION DE JAUNE =======================================================================================
    count = 0;
    y = 7;
    x = 3;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 7;
    x = 2;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
  count = 0;
    y = 7;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 6;
    x = 1;
    for (let diag = 0; diag < 6; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 5;
    x = 1;
    for (let diag = 0; diag < 5; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count + 1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
    count = 0;
    y = 4;
    x = 1;
    for (let diag = 0; diag < 4; diag++) { // Diagonale case1-3 case 2-4 case 3-5 case4-6
        count = (document.querySelector(".case" + y + "-" + x).id) == "pionJaune" ? count+1 : 0;
        x++
        y--
        if (count >= 4) window.alert("Le jaune a gagné !");
    }
}