	//Flux normal Données Générale
var sav = [
	{"article" : "aaa"	, "quantite" : 15	},
	{"article" : "aaaaa", "quantite" : 26	},
	{"article" : "bbbbb", "quantite" : 25	},
	{"article" : "ccccc", "quantite" : 24 	},
	{"article" : "ddddd", "quantite" : 23	},
	{"article" : "eeeee", "quantite" : 22	},
	{"article" : "fffff", "quantite" : 21 	},
	{"article" : "ggggg", "quantite" : 20 	},
	{"article" : "hhhhh", "quantite" : 19	},
	{"article" : "iiiii", "quantite" : 18	},
	{"article" : "jjjjj", "quantite" : 17	},
	{"article" : "kkkkk", "quantite" : 16	},
	{"article" : "lllll", "quantite" : 15	},
	{"article" : "mmmmm", "quantite" : 14	},
	{"article" : "nnnnn", "quantite" : 13	},
	{"article" : "ooooo", "quantite" : 12	},
	{"article" : "ppppp", "quantite" : 11	},
	{"article" : "qqqqq", "quantite" : 10	},
	{"article" : "rrrrr", "quantite" : 9	},
	{"article" : "sssss", "quantite" : 8	},
	{"article" : "ttttt", "quantite" : 7	},
	{"article" : "uuuuu", "quantite" : 6	},
	{"article" : "vvvvv", "quantite" : 5	},
	{"article" : "wwwww", "quantite" : 4	},
	{"article" : "xxxxx", "quantite" : 3	},
	{"article" : "yyyyy", "quantite" : 2	},
	{"article" : "zzzzz", "quantite" : 1 	}
]
	//var js
var panier = [
	{"article" : "aaa"	, "quantite" : 15	},
	{"article" : "aaaaa", "quantite" : 26	},
	{"article" : "kkkkk", "quantite" : 16	},
	{"article" : "rrrrr", "quantite" : 9	},
	{"article" : "wwwww", "quantite" : 4	},
	{"article" : "zzzzz", "quantite" : 1 	}
]
var produits = [
	{
		"article": "aaa",
		"prix" : 15
	},
	{
		"article" : "aaaaa",
		"prix" : 1
	},
	{
		"article" : "bbbbb",
		"prix" : 2 
	},
	{
		"article" : "ccccc",
		"prix" : 3 
	},
	{
		"article" : "ddddd",
		"prix" : 4
	},
	{
		"article" : "eeeee",
		"prix" : 5 
	},
	{
		"article" : "fffff",
		"prix" : 6 
	},
	{
		"article" : "ggggg",
		"prix" : 7 
	},
	{
		"article" : "hhhhh",
		"prix" : 8
	},
	{
		"article" : "iiiii",
		"prix" : 9
	},
	{
		"article" : "jjjjj",
		"prix" : 10
	},
	{
		"article" : "kkkkk",
		"prix" : 11
	},
	{
		"article" : "lllll",
		"prix" : 12
	},
	{
		"article" : "mmmmm",
		"prix" : 13
	},
	{
		"article" : "nnnnn",
		"prix" : 14
	},
	{
		"article" : "ooooo",
		"prix" : 15
	},
	{
		"article" : "ppppp",
		"prix" : 16
	},
	{
		"article" : "qqqqq",
		"prix" : 17
	},
	{
		"article" : "rrrrr",
		"prix" : 18
	},
	{
		"article" : "sssss",
		"prix" : 19
	},
	{
		"article" : "ttttt",
		"prix" : 20
	},
	{
		"article" : "uuuuu",
		"prix" : 8 
	},
	{
		"article" : "vvvvv",
		"prix" : 7
	},
	{
		"article" : "wwwww",
		"prix" : 6
	},
	{
		"article" : "xxxxx",
		"prix" : 5
	},
	{
		"article" : "yyyyy",
		"prix" : 4 
	},
	{
		"article" : "zzzzz",
		"prix" : 3 
	}
]
var nom_article = "";
var prix_unitaire = 0;
var quantite = 0;
var nombre_article_different = 0;
var total_panier = 0;
var json = "prix_article_panier.json";
//-----------------------------------------------------------------------	
$(document).ready(function(){
		//id
	var html_panier = $("#total_panier");
	var bouton_ajout_article = $("#ajout_article");
	var tableau_articles = $("#tableau_articles");
		//Calculs
	nombre_article_different = panier.length;
		//Affichage Initial
	toggle_panier();


	//Events
	$(bouton_ajout_article).click(creer_formulaire);
	$(bouton_ajout_article).click(creer_formulaire);
	

//***************************************************************
		//Flux document ready


}) //Fin document ready
//***************************************************************
$(function(){ //pas ready = anonyme

}) //Fin anonyme
//***************************************************************
		//Functions
function creer_formulaire(){
	$("#div_formulaire").empty();

	var nouveau_formulaire = '<form id="formulaire_ajout" '; 
	nouveau_formulaire += 'class="d-flex flex-column align-items-center w-auto p-4">';			
	nouveau_formulaire += '<div class="mb-3 d-flex align-self-end">';				
	nouveau_formulaire += '<label class="form-label fs-5 me-3">Article:</label>';								
	nouveau_formulaire += '<input type="text" class="form-control w-auto" id="article" required></div>';			
	nouveau_formulaire += '<div class="mb-3 d-flex align-self-end ">';								
	nouveau_formulaire += '<label class="form-label fs-5 me-3">Quantite:</label>';						
	nouveau_formulaire += '<input type="number" class="form-control w-auto" id="quantite" value = "1"></div>';			
	nouveau_formulaire += '<button type="submit" class="btn btn-success w-25 mt-3" id="submit">';
	nouveau_formulaire += 'Ajouter</button>	</form>';
	nouveau_formulaire += '<div id="form_error" class="mb-3 text-center fs-3 bg-warning"></div>';

	$("#div_formulaire").append(nouveau_formulaire);
	$("#formulaire_ajout").submit(ajouter_au_panier);
}
function toggle_afficher_panier(){
	$("#tableau_panier").show();
	$("#total_panier").html("<h2> Prix Total du panier : <data></data>  €</h2>");
	afficher_tableau_panier();
}
function toggle_cacher_panier(){
	$("#tableau_panier").hide();
	$("#total_panier").html("<h2> Le panier est vide </h2>");
}
function toggle_panier(){
	nombre_article_different == 0 ? toggle_cacher_panier() : toggle_afficher_panier();
}
function afficher_tableau_panier(){
	$(tableau_articles).empty();
	$(panier).each(function(index){
		valeurs_1_ligne_panier(index)
		afficher_1_ligne();
	})
	afficher_prix_panier();
}
function afficher_1_ligne(){//version cell
	var ligne = tableau_articles.insertRow(tableau_articles.length);
	var cell_nom_article = ligne.insertCell(0).innerHTML = nom_article;
	var cell_prix_article = ligne.insertCell(1).innerHTML = prix_unitaire+ " €";
	var cell_quantite = ligne.insertCell(2);
	cell_quantite.innerHTML = quantite;
	$(cell_quantite).addClass("cellule_quantite");
	$(".cellule_quantite").bind("dblclick", quantite_manuelle);
	var cell_chang = ligne.insertCell(3).innerHTML = '<button class="btn btn-success bouton_plus">+</button><button class="btn btn-danger bouton_moins">-</button>';
	$(".bouton_plus").bind("click", ajouter_quantite);
	$(".bouton_moins").bind("click", enlever_quantite);
	var cell_prix_total = ligne.insertCell(4);
	cell_prix_total.innerHTML = prix_total_1_article = (prix_unitaire * quantite) + " €";
	$(cell_prix_total).addClass("prix_toto");
}
function valeurs_1_ligne_panier(index){
	nom_article = panier[index].article;
	prix_unitaire = recup_prix(recherche_dans_liste(nom_article));
	quantite = panier[index].quantite;
	prix_total_1_article = prix_unitaire * quantite;
}
function ajouter_quantite(){
	var tr_parent = $(this).parents("tr");
	var position = $(tableau_articles).children().index(tr_parent);
	panier[position].quantite++;
	afficher_tableau_panier();
}
function enlever_quantite(){
	var tr_parent = $(this).parents("tr");
	var position = $(tableau_articles).children().index(tr_parent);
	panier[position].quantite--;
	panier[position].quantite == 0 ? panier.splice(position,1): "";
	nombre_article_different = panier.length;
	toggle_panier();
}
function recherche_dans_liste(nom_article){ //GET !!!
	for (var index = 0; index < produits.length; index++){
		/*$.get(json, function(data){
			console.log("get");
			if (data.produits[index].article == nom_article){
				console.log("if");
				return position;
			}
		})*/
		if (produits[index].article == nom_article){
			return index;
		}
	} 
	$("#form_error").empty();
	$("#form_error").append("Nous n'avons pas cet article en stock");
	return -1;
}
function recherche_dans_panier(nom_article){ //GET !!!
	for (var index = 0; index < panier.length; index++){
		/*/$.get(json, function(data){
			console.log("get");
			if (data.panier[index].article == nom_article){
				console.log("if");
				return position;
			}
		})*/
		if (panier[index].article == nom_article){
			return index;
		}
	} 
	return -1;
}
function ajouter_au_panier(){
	var nom_recherche = $("input").first().val();
	var position = recherche_dans_liste(nom_recherche);
	if(position == -1){return false;}
	position = deja_dans_panier(nom_recherche);
	if(position != -1){return false;}
	var quantite_voulue = $("input").last().val();
	var nouvel_article = {article : nom_recherche, quantite : quantite_voulue };
	panier.push(nouvel_article);
	$(div_formulaire).empty();
	toggle_panier();
	event.preventDefault();
}
function deja_dans_panier(nom_article){ //GET !!!
	for (var index = 0; index < panier.length; index++){
		/*/$.get(json, function(data){
			console.log("get");
			if (data.panier[index].article == nom_article){
				console.log("if");
				return position;
			}
		})*/
		if (panier[index].article == nom_article){
			$("#form_error").empty();
			$("#form_error").append("Cet article est déjà dans le panier");
			console.log($(panier)[index]);
			var ligne = $(tableau_articles).children()[index];
			console.log(ligne);
			$(ligne).addClass("bg-warning");
			$(ligne).siblings().removeClass("bg-warning");
			return index;
		}
	} 
	$(tableau_articles).children().removeClass("bg-warning");
	return -1;
}
function afficher_prix_panier(){
	var prix_panier = 0;
	var tab = $(".prix_toto");
	$(tab).each(function(index){
		prix_panier += parseInt(tab[index].innerHTML);
	})
	$("#total_panier data").html(prix_panier);
}
function quantite_manuelle(){
	var position = recherche_dans_panier($(this).siblings().first().html());
	var valeur_actuelle = panier[position].quantite;
	$(this).html('<form id="form_quantite"><input type="number" class="form-control w-auto" id="quantite"></form>')
	var val_input = $("#quantite");
	val_input.val(valeur_actuelle);

	$("#form_quantite").submit(function(){
		if($(val_input).val() == ""){}
		else if($(val_input).val() == 0){
			panier.splice(position,1);
			nombre_article_different = panier.length;
			toggle_panier();
		}
		else{
			panier[position].quantite = parseInt($(val_input).val());
			afficher_tableau_panier();
		}
	})
}
//------------------------------------------------------------------
	//En cours
/*
function recup_nom(position){ //GET !!!
	$.get(json, function(data, position){
		data.produits[position].article;
	})
	//return produits[position].article;
}*/
function recup_prix(position){//GET !!!
	/*$.get(json, function(data, position){
		data.produits[position].prix;
	});*/
	return produits[position].prix;
}
//----------------------------------------------------
			//OBSOLETE


