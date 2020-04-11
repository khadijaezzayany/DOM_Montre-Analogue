// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector('#hour');
const AIGUILLEMIN = document.querySelector('#minute');
const AIGUILLESEC = document.querySelector('#second');

//Extraire l'heure actuel à l'aide de l'objet Date()

var date = new Date();
let sec = date.getSeconds();
let hr = date.getHours();
let min = date.getMinutes();

//Ajouter l'heure , minite , seconde  dans des varaiables

let degreSec = 6;
let degreMin = 1 / 10;
let degreHr = 1 / 120;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let posiSec = sec * degreSec;
let posiMin = (min * 60 + sec) * degreMin;
let posiHr = (hr * 3600 + min * 60 + sec) * degreHr;

// Déplacer les aiguilles
function demarrerLaMontre() {
	posiSec += degreSec;
	posiMin += degreMin;
	posiHr += degreHr;

	AIGUILLESEC.style.transform = `rotate(${posiSec}deg)`;
	AIGUILLEMIN.style.transform = `rotate(${posiMin}deg)`;
	AIGUILLEHR.style.transform = `rotate(${posiHr}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
