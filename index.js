let who=["My Brother ","Criminal ","Protester ","Bus Driver ","The doorman ","My Parrot "];
let action=["lost ","Stole ","Block ","Stop ","Block ", "Destroyed "];
let what=["Car keys ","My Backpak ","The Highway ","The Bus ","Acces ","My Laptop "];
let when=["Yesterday ","Today on traffic jam ","Watter Issues ","Gasoline Issues ","To the Building ","Today in the Morning "];



window.onload = function() {
	//init();
	let numAleatorio=getRandom();
	let numAleatorio1=getRandom();
	let numAleatorio2=getRandom();
	let numAleatorio3=getRandom();
	
	//let excuse=who.length
	
	 if( numAleatorio < who.length ){
	
		let numAleatoriot="Menor esta dentro del rango" + numAleatorio ; 
		let Arrayshowmesage=[who[numAleatorio],action[numAleatorio1],what[numAleatorio2],when[numAleatorio3]];
		let excuse=Arrayshowmesage.join('');
		document.getElementById("excusa").innerHTML=excuse;        
	 }else{
		 //let numAleatoriot="Mayor fuera del rango" + numAleatorio;
		  let numAleatoriot="Blackdown issues";
		  document.getElementById("excusa").innerHTML=numAleatoriot;
		  //let numAleatorio=getRandom();
	 }
	 
};
 function getRandom() {
	return Math.floor(Math.random()*10);
  }

