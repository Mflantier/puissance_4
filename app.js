const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");

let col1 = document.querySelector("#colonne1");
let col2 = document.querySelector("#colonne2");
let col3 = document.querySelector("#colonne3");
let col4 = document.querySelector("#colonne4");
let col5 = document.querySelector("#colonne5");
let col6 = document.querySelector("#colonne6");
let col7 = document.querySelector("#colonne7");


btn1.addEventListener("click", function () {

    console.log(col1.value)
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col1.appendChild(newP);

})
btn2.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col2.appendChild(newP);
} else {
    window.alert("La Colonne 2 est déjà pleine !")
}
})
btn3.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col3.appendChild(newP);
} else {
    window.alert("La Colonne 3 est déjà pleine !")
}
})
btn4.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col4.appendChild(newP);
} else {
    window.alert("La Colonne 4 est déjà pleine !")
}
})
btn5.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col5.appendChild(newP);
} else {
    window.alert("La Colonne 5 est déjà pleine !")
}
})
btn6.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col6.appendChild(newP);
} else {
    window.alert("La Colonne 6 est déjà pleine !")
}
})
btn7.addEventListener("click", function () {
        let l = 0;
    l++
    if (l<=6){
    var newP = document.createElement('p');
    newP.id = 'pion';
    var texte = document.createTextNode("pion");
    newP.appendChild(texte);
    col7.appendChild(newP);
} else {
    window.alert("La Colonne 7 est déjà pleine !")
}
})