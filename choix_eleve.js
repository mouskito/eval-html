var classe = ["Camille","Cédric","Dimitri","Ingrid","Josse","Lucas","Moussa", "Nadia","Nawfal","Rim","Simon", "Sonia", "Vlad"];

var bouton_choix = document.querySelector("#choisir_qui");
var affichage_nom = document.querySelector("#choix_fait");
bouton_choix.onclick = choisir_quelquun;

function choisir_quelquun(){
	var index_choisi = Math.floor(Math.random() * classe.length);
	affichage_nom.innerHTML = classe[index_choisi];
}

var bouton_choix_stress = document.querySelector("#choisir_qui_stress");
var affichage_nom_stress = document.querySelector("#choix_fait_stress");
bouton_choix_stress.onclick = choisir_quelquun_stress;

function choisir_quelquun_stress(){
	var chargement_factice = document.querySelector("#chargement_factice");
	var points_grossissants = document.querySelectorAll(".spinner-grow");
	for(var index = 0; index <= 5; index++){
		setTimeout(function(){
		chargement_factice.innerHTML += '<div class="spinner-grow text-danger" style="width: 3rem; height: 3rem;" role="status"></div>';
		}, 1000*index);
	}
	setTimeout(function(){
		var index_choisi = Math.floor(Math.random() * classe.length);
		affichage_nom_stress.innerHTML = classe[index_choisi];
		chargement_factice.innerHTML = "";
	}, 6000);
}
