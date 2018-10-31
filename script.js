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
        alert("L'ordinateur a fait feuille. Vous avez perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordinateur = " + scoreOrdinateur++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(paper).png">'
    }
    if ( choixOrdinateur === 3)
    {
        alert("L'ordinateur a fait ciseaux. Vous avez gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(scissors).png">'
    }
    if (choixOrdinateur === 1)
    {
        alert("L'ordinateur a fait pierre. Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(rock).png">'
    }

});

document.getElementById('feuille').addEventListener('click', function () {
    choixUtilisateur = 2;
    var choixOrdinateur = Math.random()*3;
    choixOrdinateur = Math.round(choixOrdinateur);
    if(choixOrdinateur === 3)
    {
        alert("L'ordinateur a fait ciseaux. Vous avez perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordinateur = " + scoreOrdinateur++;
        $document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(scissors).png">'
    }
    if (choixOrdinateur === 1)
    {
        alert("L'ordinateur a fait pierre. Vous avez gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(rock).png">'
    }
    if (choixOrdinateur === 2)
    {
        alert("L'ordinateur a fait feuille. Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(paper).png">'
    }

});

document.getElementById('ciseaux').addEventListener('click', function () {
    choixUtilisateur = 3;
    var choixOrdinateur = Math.random()*3;
    choixOrdinateur = Math.round(choixOrdinateur);
    if(choixOrdinateur === 1)
    {
        alert("L'ordinateur a fait pierre. Vous avez perdu");
        document.getElementById('ordi').innerHTML = "Score de l'ordinateur = " + scoreOrdinateur++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(rock).png">'
    }
    if (choixOrdinateur === 2)
    {
        alert("L'ordinateur a fait feuille. Vous avez gagné");
        document.getElementById('joueur').innerHTML = "Votre score = " + scoreUtilisateur++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(paper).png">'
    }
    if (choixOrdinateur === 3)
    {
        alert("L'ordinateur a fait ciseaux. Egalité");
        document.getElementById('egalite').innerHTML = "Egalité = " + egalite++;
        document.getElementById('chordi').innerHTML = '<img src="assets/img/Rock-paper-scissors_(scissors).png">'
    }

});