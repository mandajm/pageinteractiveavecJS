let numberOfClick = 0;
let ClickFooter = document.querySelector("footer");
	
	ClickFooter.addEventListener("Click", ClickFooter.onclick = Clicktextfooter)
	
	function Clicktextfooter(){
		numberOfClick += 1;

		console.log(`click number ${numberOfClick}`);
		alert(`click number ${numberOfClick}`)
	}

	//*********************************************************************************************************************
	// chercher l'element contenant l'id navbarHeader
	//fonctionnalité 2
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
	//*********************************************************************************************************************
	//fonctionnalité 3
	// colorié en rouge le text de la premiere card de façon permanat
	let checkEdit1 = document.querySelectorAll("button")[2];
	checkEdit1.addEventListener("colorRed", checkEdit1.onclick = ChangeColorToRedfunction)
	function ChangeColorToRedfunction(){
		let findCardText1 = document.querySelectorAll("p.card-text")[0];
		findCardText1.style.color = "red";
	}
	//*********************************************************************************************************************
	//fonctionnalité 4
	// color en vert le text du deuxieme card de façon revesible

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

	//*********************************************************************************************************************
	//fonctionnalité 5
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


	//*********************************************************************************************************************
	//fonctionnalité 6
	//view
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

	//*********************************************************************************************************************
	//fonctionnalité 7
	//utiliser avec insert before


	let getFech = document.querySelectorAll("a.btn")[1];
	getFech.addEventListener("permuter", getFech.onclick = functionpermutation)
	function functionpermutation(){
		let album = document.querySelectorAll("div.container")[3];
		let card5 = document.getElementsByClassName("col-md-4")[5];
		album.insertBefore(card5, album.childNodes[0]);
	}

	