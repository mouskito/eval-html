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
	donner_les_valeurs();

	//Events
	$(bouton_ajout_article).click(ajouter_au_panier(nom_article, quantite));
})//Fin document Ready
//--------------------------------------------------------------------------------------------
		//OK
function recherche_dans_tableau_html(nom_article){ 
	$(tableau_articles).each(function(index){
		if (($(tableau_articles)[index]).article == nom_article){return index;}
	});
	console.log("Article pas dans le panier");
}
function recherche_dans_liste(nom_article){ //GET !!!
	for (var position = 0; position < produits.length; position++){
		/*/$.get(json, function(data){
			console.log("get");
			if (data.produits[position].article == nom_article){
				console.log("if");
				return position;
			}
		})*/
		if (produits[position].article == nom_article){
			return position;
		}
	} 
	console.log("Article non disponible");
}
function recup_nom(position){ //GET !!!
	/*$.get(json, function(data, position){
		data.produits[position].article;
	})*/
	return produits[position].article;
}
function recup_prix(position){//GET !!!
	/*$.get(json, function(data, position){
		data.produits[position].prix;
	})*/
	return produits[position].prix;
}
function recup_infos(article){
	var position = recherche_dans_liste(article);
	nom_article = recup_nom(position);
	prix_unitaire = recup_prix(position);
}
function afficher_tableau_panier(){
	$(tableau_articles).each(function(index){
		afficher_1_ligne(index);
	})
}
function toggle_afficher_panier(){
	$("#tableau_panier").show();
	$("#total_panier").html("<h2> Prix Total du panier : <data></data> </h2>");
	afficher_tableau_panier();
}
function toggle_cacher_panier(){
	$("#tableau_panier").hide();
	$("#total_panier").html("<h2> Le panier est vide </h2>");
}
function toggle_panier(){
	nombre_article_different == 0 ? toggle_cacher_panier() : toggle_afficher_panier();
}
function ajouter_au_panier(){
	for(var index = 0; index<panier.length; index++){
		ajouter_1_ligne()
	}
}
function ajouter_1_ligne(){//version cell
	valeurs_1_ligne();
	var ligne = tableau_articles.insertRow(tableau_articles.length);
	var cell_nom_article = ligne.insertCell(0).innerHTML = nom_article;
	var cell_quantite = ligne.insertCell(1).innerHTML = quantite;
	var cell_prix_article = ligne.insertCell(2).innerHTML = prix_unitaire;
	var cell_plus = ligne.insertCell(3).innerHTML = prix_total_1_article = prix_unitaire * quantite;
	var cell_moins = ligne.insertCell(4).innerHTML = prix_total_1_article = prix_unitaire * quantite;
	var cell_prix_total = ligne.insertCell(5).innerHTML = prix_total_1_article = prix_unitaire * quantite;
}
function valeurs_1_ligne(){
	nom_article = panier[index].article;
	prix_unitaire = recup_prix(recherche_dans_liste(nom_article));
	quantite = panier[index].quantite;
	prix_total_1_article = prix_unitaire * quantite;
	ajouter_1_ligne();
}
function donner_les_valeurs(){
	for(var index = 0; index < nombre_article_different; index++){
		nom_article = panier[index].article;
		prix_unitaire = recup_prix(recherche_dans_liste(nom_article));
		quantite = panier[index].quantite;
		prix_total_1_article = prix_unitaire * quantite;
		ajouter_1_ligne();
	}
}

//--------------------------------------------------------------------------------------------
		//A Tester

//--------------------------------------------------------------------------------------------
		//A Faire

function calcul_1_ligne(){
	$.get(json, function(data){//GET !!!
		data.produits[position];

	})
}
function afficher_1_ligne(){

}


//-----------------------------------------------------------------------------
		//A Copier
function XXXXXXX(){

}
function ajax_brut_avec_commentaire(){
	$.ajax({
		//url: "1002bis.html",//ca marche mais pas comme ça
		url: $(this).attr("href"),//pour etre generique
		type: "GET", //car on reçoit depuis cette page//par défaut sur jQuery
		//type: "POST" //Si on envoie des données (formulaire par exemple)
		//data : nom_user//pour préciser des données, (utilisateur par exemple)
		dataType: "html",//Le type de données qu'on reçoit
		success: function(data){
			console.log(data);
		},
		error:function(status, text){
			console.log(status);
			console.log(text);
		}
	});
}