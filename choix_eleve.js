var classe = ["Camille","Cédric","Dimitri","Ingrid","Josse","Lucas","Moussa", "Nadia","Nawfal","Rim","Simon", "Sonia", "Vlad"];
var classe_pas_encore_selectionne = [].concat(classe);
var bouton_choix = document.querySelector("#choisir_qui");
var affichage_nom = document.querySelector("#choix_fait");
bouton_choix.onclick = choisir_quelquun;

function choisir_quelquun(){
	var index_choisi = Math.floor(Math.random() * classe_pas_encore_selectionne.length);
	affichage_nom.innerHTML = classe_pas_encore_selectionne[index_choisi];
	var splice = classe_pas_encore_selectionne.splice(index_choisi,1);
	classe_pas_encore_selectionne.length == 0 ? classe_pas_encore_selectionne = [].concat(classe) :"";
}

var bouton_choix_stress = document.querySelector("#choisir_qui_stress");
var affichage_nom_stress = document.querySelector("#choix_fait_stress");
bouton_choix_stress.onclick = choisir_quelquun_stress;

function choisir_quelquun_stress(){
	var chargement_factice = document.querySelector("#chargement_factice");
	var points_grossissants = document.querySelectorAll(".spinner-grow");
	for(var index = 0; index <= 5; index++){
		setTimeout(function(){
		chargement_factice.innerHTML += '<div class="spinner-grow text-danger" style="width: 3rem; height: 3rem; animation-duration: 1s; animation-delay: 300ms;" role="status"></div>';
		}, 1000*index);
	} 
	setTimeout(function(){
		var index_choisi = Math.floor(Math.random() * classe_pas_encore_selectionne.length);
		affichage_nom_stress.innerHTML = classe_pas_encore_selectionne[index_choisi];
		chargement_factice.innerHTML = "";
		classe_pas_encore_selectionne.splice(index_choisi,1);
		classe_pas_encore_selectionne.length == 0 ? classe_pas_encore_selectionne = [].concat(classe):"";
		console.log(classe_pas_encore_selectionne);
	}, 6000);
}
