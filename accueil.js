// const bouton = document.querySelector(".stylebutton");

// bouton.addEventListener("hover", (event) => {
//     console.log("test")
//     if (bouton.style.backgroundColor == "#478bf9") {
//         bouton.style.backgroundColor = "yellow"
//     }   
// })


// function changementcouleur(){
//     document.getElementById("niveau1").style.backgroundColor = "red";
//     if (document.getElementById("niveau1").style.backgroundColor = "red"){
//         document.getElementById("niveau1").style.backgroundColor = "yellow";

//     }
// 

// function changementCouleur(){
//     document.getElementById("niveau1").style.backgroundColor = "red";
//     document.getElementById("niveau1").style.backgroundColor = "yellow";
// }

// setInterval(function () {
//     changementCouleur();
//     console.log('prout')
// }, 3000);

var inter; 

function couleur1(){
    document.getElementById("niveau1").style.backgroundColor = "red";
}

function couleur2(){
    document.getElementById("niveau1").style.backgroundColor = "yellow";
}


function colorRandom(){
     inter = setInterval(function () {
        couleur1();
        setTimeout(function (){
            couleur2();
        },500);
    }, 1000);
}

function clearInter(){
    clearInterval(inter);
    document.getElementById("niveau1").style.backgroundColor = "#478bf9";
}

// ==========================================================================

function couleur1a(){
    document.getElementById("niveau2").style.backgroundColor = "red";
}

function couleur2a(){
    document.getElementById("niveau2").style.backgroundColor = "yellow";
}


function colorRandoma(){
     inter = setInterval(function () {
        couleur1a();
        setTimeout(function (){
            couleur2a();
        },500);
    }, 1000);
}

function clearIntera(){
    clearInterval(inter);
    document.getElementById("niveau2").style.backgroundColor = "#478bf9";
}

// ==========================================================================

function couleur1b(){
    document.getElementById("niveau3").style.backgroundColor = "red";
}

function couleur2b(){
    document.getElementById("niveau3").style.backgroundColor = "yellow";
}


function colorRandomb(){
     inter = setInterval(function () {
        couleur1b();
        setTimeout(function (){
            couleur2b();
        },500);
    }, 1000);
}

function clearInterb(){
    clearInterval(inter);
    document.getElementById("niveau3").style.backgroundColor = "#478bf9";
}