var choixUtilisateur = 0;

var scoreUtilisateur = 1;
var scoreOrdinateur = 1;
var egalite = 1;

document.getElementById('pierre').addEventListener('click', function () {
    choixUtilisateur = 1;
    var choixOrdinateur = Math.random()*3;
    choixOrdinateur = Math.round(choixOrdinateur);
    if(choixOrdinateur === 2)
    {
        alert("Perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordi = " + scoreOrdinateur++
    }
    if ( choixOrdinateur === 3)
    {
        alert("Gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++
    }
    if (choixOrdinateur === 1)
    {
        alert("Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++
    }

});

document.getElementById('feuille').addEventListener('click', function () {
    choixUtilisateur = 2;
    var choixOrdinateur = Math.random()*3;
    choixOrdinateur = Math.round(choixOrdinateur);
    if(choixOrdinateur === 3)
    {
        alert("Perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordi = " + scoreOrdinateur++
    }
    if (choixOrdinateur === 1)
    {
        alert("Gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++
    }
    if (choixOrdinateur === 2)
    {
        alert("Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++
    }

});

document.getElementById('ciseaux').addEventListener('click', function () {
    choixUtilisateur = 3;
    var choixOrdinateur = Math.random()*3;
    choixOrdinateur = Math.round(choixOrdinateur);
    if(choixOrdinateur === 1)
    {
        alert("Perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordi = " + scoreOrdinateur++
    }
    if (choixOrdinateur === 2)
    {
        alert("Gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++
    }
    if (choixOrdinateur === 3)
    {
        alert("Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++
    }

});