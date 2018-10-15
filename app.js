const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const pionJaune = document.querySelectorAll ("div.pionJaune").value = 1;
const pionRouge = document.querySelectorAll ("div.pionRouge").value = 2;
let h1 = document.querySelector("#titre");
let col1 = document.querySelector("#colonne1");
let col2 = document.querySelector("#colonne2");
let col3 = document.querySelector("#colonne3");
let col4 = document.querySelector("#colonne4");
let col5 = document.querySelector("#colonne5");
let col6 = document.querySelector("#colonne6");
let col7 = document.querySelector("#colonne7");

let player = 1;

let i = 6;
let j = 6;
let k = 6;
let l = 6;
let m = 6;
let n = 6;
let o = 6;

function joueur () {
        if (player == 1) {
            player = 2;
            h1.innerHTML = "JOUEUR 2";
        } else {
            player = 1;
            h1.innerHTML = "JOUEUR 1";
        }
}

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
    horizontale()
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
    horizontale()
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
    horizontale()
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
    horizontale()
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
    horizontale()
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
    horizontale()
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
    horizontale()
})

function horizontale (){
    let count =  0;
for (let c = 1; c < 8; c++){
    count = (document.querySelector(".case"+c+"-6").id) == "pionJaune" ? count+1 : 0;
console.log(count)
    if (count >= 4) window.alert("Le jaune à gagné !");
    
}
}