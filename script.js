
/*EXO 1*/

 
/*console.log (prompt("Saissisez votre nom"));*/



/*var titre= document.querySelector('title');*/

/*console.log (document.getElementsByTagName ("title")[0].innerHTML);*/

/*document.querySelector("title")[0].innerHTML= (prompt('saisir un nom'));

console.log (titre.innerHTML);*/



/*EXO 2*/


var lien= document.getElementById('a1');
console.log(lien);/*pour tester*/
lien.onclick=function()
{document.querySelector('.container').style.visibility ='hidden'};



   var lien= document.getElementById('a2');
console.log(lien);/*pour tester*/
lien.onclick=function()
{document.querySelector('.container').style.visibility ='visible'};



/*EXO 3*/

var survole=document.querySelector('input');
var cache=document.querySelector('#saisir');

survole.addEventListener('mouseover',() => {
	saisir.classList.toggle('is-visible');
});



var avant=document.querySelector('#operateur');
var apres=document.querySelector('#idem');
console.log(apres);
avant.addEventListener('mouseover',() => {
	apres.classList.toggle('is-visible');
});


/*EXO 4*/

function ok (){

	document.getElementById("div1").innerHTML = '<img src="img1.jpg" style="width:700px;" onclick="inverse()"/>';
}


function inverse(){

	document.getElementById("div1").innerHTML = '<img src="img1.jpg" style="width:100px;" onclick="ok()"/>';
}