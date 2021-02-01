var classe = ["Camille","Cédric","Dimitri","Ingrid","Josse","Lucas","Moussa", "Nadia","Nawfal","Rim","Simon", "Sonia", "Vlad"];
var bouton_choix = document.querySelector("#choisir_qui");
var affichage_nom = document.querySelector("#choix_fait");
bouton_choix.onclick = choisir_quelquun;

function choisir_quelquun(){
	var index_choisi = Math.floor(Math.random() * classe.length);
	affichage_nom.innerHTML = classe[index_choisi];
}

