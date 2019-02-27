#DOM: modifcation HTML par Javascript
Fonctionnalité 1: (première mofication)

quand un utilisateur clique sur le footer, le mot clique est afficher sur le console
 en utilisant  : addEventListener("click", function()) puis affiche le nimbre de click par la fonction alert

 code: fonctionnalité 1

let numberOfClick = 0;
let ClickFooter = document.querySelector("footer");
	
	ClickFooter.addEventListener("Click", ClickFooter.onclick = Clicktextfooter)
	
	function Clicktextfooter(){
		numberOfClick += 1;

		console.log(`click number ${numberOfClick}`);
		alert(`click number ${numberOfClick}`)
	}

FONCTIONNALITÉ 2

    quand un utilisateur fait un click sur l'icons contenant les trois bar horizontal,
    le code fait disparaitre la class collapse, et facons reversible avec une deuxième click
en voici le code:

	let target = document.querySelector("button.navbar-toggler")
	
	target.addEventListener("navbarHeader", target.onclick = navbarHeaderfunction)
	let menuStatus = false;

	function navbarHeaderfunction(){
		if (menuStatus == true){
			let navbarHeaderElement = document.querySelector("#navbarHeader");
			console.log(navbarHeaderElement.classList.toggle("collapse"));
			menuStatus = false;

		}
		else if(menuStatus == false){
			let navbarHeaderElement = document.querySelector("#navbarHeader");
			console.log(`${navbarHeaderElement.classList.toggle("collapse")}`);
			menuStatus = true;
		}
	}


FONCTIONNALITÉ 3:

si on clique sur le boutton edit du première card, le text vas se mettre en rouge de facon irreverssible:

FONCTIONNALITÉ 4:

si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre 
en vert. Si on re-clique dessus, il redevient comme avant ! C'est-à-dire en boire.

en voici le code:

	let checkEdit2 = document.querySelectorAll("button")[4];
	checkEdit2.addEventListener("colorGreen", checkEdit2.onclick = ChangeColorToGreenfunction)
	let menuColor = false;

	function ChangeColorToGreenfunction(){
		if (menuColor == false){
		let findCardText2 = document.querySelectorAll("p.card-text")[1];
		findCardText2.style.color = "green";
		menuColor = true;
								}
		else if (menuColor == true){
		let findCardText2 = document.querySelectorAll("p.card-text")[1];
		findCardText2.style.color = "black";
		menuColor = false;
		}
	}


FONCTIONNALITÉ 5:

si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la 
page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS et
c'est de façon reverssible.
Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

le code:

	let HeadernavBar = document.querySelector("header");
	HeadernavBar.addEventListener("colorGreen", HeadernavBar.ondblclick = ChangeCDN)
	let headerChange = false;
	function ChangeCDN(){
		if (headerChange == true){
		let cdn = document.querySelector("link");
		
		cdn .href= "";
		headerChange = false;
								}
		else if (headerChange == false){
		let cdn = document.querySelector("link");
		
		cdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
		headerChange = true;
		}
	}

FONCTIONNALITÉ 6:

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une
card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, 
l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent 
visibles. Cette fonction sera réversible : s'il repasse sa souris, la card red

ceci ne marche encor que sur la première card.

		let checkView1 = document.querySelectorAll("button")[1];
	checkView1.addEventListener("colorRed", checkView1.onmousemove = ChangeImgfunction)
		let topForManyChange = false;

	function ChangeImgfunction(){
		if (topForManyChange == false){		
		let img1 = document.getElementsByClassName("card-img-top")[0].setAttribute("style", "width: 20%;");
		let text0 = document.querySelectorAll("p.card-text")[0];
			text0.style.color = "white";
			topForManyChange = true;
		}
		else if (topForManyChange == true){	
		let img1 = document.getElementsByClassName("card-img-top")[0].setAttribute("style", "width: 100%;");
		let text0 = document.querySelectorAll("p.card-text")[0];
			text0.style.color = "black";
			topForManyChange = false;
		}
	}

Fonctionnalité 7 :

si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer
en premier (en haut à gauche

	let getFech = document.querySelectorAll("a.btn")[1];
	getFech.addEventListener("permuter", getFech.onclick = functionpermutation)
	function functionpermutation(){
		let album = document.querySelectorAll("div.container")[3];
		let card5 = document.getElementsByClassName("col-md-4")[5];
		album.insertBefore(card5, album.childNodes[0]);
	}

	
:) 
