// JavaScript Document
//Defining Global Variables
	var currentScore = 0;
	var downloadTimer;
	var inter;
	var inter1;
	var inter5;
	var inter10;
	var death;
	var timeleft = 60;
	var saveScore = 0;
	var array;
	var coord1;
	var highScore = 0;
	var coords;
	var johncoin = 0;
	var highScore = 0;
	var interTime;
	var temp;
	var interval;
	var array;
	
function addScore11(){
	currentScore++;
	//adds one to the score
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("active1");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore11);
		array[i].setAttribute("class", "void");
		
		}
	}//end function
		
function	addScoreTime() {
	timeleft = timeleft + 2;
	//adds two seconds to the score
	document.getElementById("time").innerHTML = timeleft;
	array = document.getElementsByClassName("time");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScoreTime);
		array[i].setAttribute("class", "void");
		}
	}//end function
			
function addScore1(){
	currentScore++;
	//adds one to the score
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
		}
	}//end function
			
function addScore5(){
	currentScore = currentScore + 5;
	//adds 5 to the score
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("silver");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		}
	}//end function
	
function  addScore10() {
	
				currentScore = currentScore + 10;
		//adds ten to the score
				document.getElementById("score").innerHTML = currentScore;
				array = document.getElementsByClassName("gold");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore10);
		array[i].setAttribute("class", "void");
		}
	}//end function

function removeMoles5() {
	
//removes all +5 moles
	var array = document.getElementsByClassName("silver");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		
	}
}//end function

function deathScore(){
		alert("YOU HIT ERIN! YOU LOST!");
		//when you hit erin
		timeleft = 0;
		document.getElementById("start").disabled = false;
}//end function

function removeMoles1() {
//removes all +1 moles
	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
}//end function



function removeMoles10() {
	//removes all +10 moles
	array = document.getElementsByClassName("gold");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore10);
		array[i].setAttribute("class", "void");
		
	}
	}//end function
	
function removeMolesDeath() {
//removes all death moles
	array = document.getElementsByClassName("deathmole");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", deathScore);
		array[i].setAttribute("class", "void");
		
	}
}//end function

function removeMolesTime() {
	//removes all +time moles
		array = document.getElementsByClassName("time");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScoreTime);
		array[i].setAttribute("class", "void");
		}
	}//end function
	
function removeMoles11() {
	
//gets array of all +1 moles
	array = document.getElementsByClassName("active1");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore11);
		array[i].setAttribute("class", "void");	
		}
}//end function
	
function coord(){
	//finds random coord to place mole
		var randomPlaceX = Math.floor(Math.random()*3)+1;
		var randomPlaceY = Math.floor(Math.random()*5)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}//end function

function moveMoleAround11() {
	//makes a +1 mole
	coords = coord();
	//sets class
			document.getElementById(coords).setAttribute("class", "active1");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore11 );
			//removes +1 moles after a second
			setTimeout(removeMoles11, 2000);
}//end function

function moveMoleAround5() {
	//makes a +5 mole
	coords = coord();
	//sets class
			document.getElementById(coords).className="silver";
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore5 );
			//removes all +5 moles after 1 second
			setTimeout(removeMoles5, 1000);
}//end function



function moveMoleDeath() {
	//makes a death mole
	coords = coord();
	//sets class

			document.getElementById(coords).setAttribute("class", "deathmole");
//adds event listener
			document.getElementById(coords).addEventListener( "click", deathScore );
			//removes death moles after a second
			setTimeout(removeMolesDeath, 1000);
}//end function



function moveMoleAroundGold() {
	//makes a gold mole
	coords = coord();
	//sets class
			document.getElementById(coords).setAttribute("class", "gold");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore10 );
			//removes Gold moles after a 0.75 seconds
			setTimeout(removeMoles10, 750);
	}//end function
	
	
	
function moveMoleAroundTime() {
	//makes a time mole
	coords = coord();
	
	//sets class
			document.getElementById(coords).setAttribute("class", "time");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScoreTime );
			//removes +1 moles after a second
			setTimeout(removeMolesTime, 750);
}//end function




function moveMoleAround1() {
	//makes a +1 mole
	coords = coord();
	//sets class
			document.getElementById(coords).setAttribute("class", "active");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore1 );
			//removes +1 moles after a second
			setTimeout(removeMoles1, 2000);
}//end function



//starts Game
function start() {

width = 1;
	currentScore = 0;
	//Time Variable(45 Seconds)
//move();


	timeleft = 45;
		//intervals for moles to spawn
		var time = 2000;
	inter = setInterval(moveMoleAround1,1200);
	//interval = setInterval(getCoords, time);
	inter1 = setInterval(moveMoleAround11,1200);
	death = setInterval(moveMoleDeath,15000);
	inter5 = setInterval(moveMoleAround5, 5000);
	inter10 = setInterval(moveMoleAroundGold,10000);
	interTime = setInterval(moveMoleAroundTime,7000);
	var t=setInterval(countdown_timer, 10); 



//time for classic mode
	function countdown_timer()  {
		document.getElementById("time").innerHTML = timeleft.toFixed(2);
		timeleft = timeleft - 0.01;
		if(timeleft <= -0.01) {
			johncoin = currentScore + johncoin;
			time  = 0;
			width  = 0;
			//gives you points
			document.getElementById("johncoin").innerHTML = johncoin;
			//clears all intervals for spawning moles
			clearInterval(t);
			clearInterval(inter);
			clearInterval(inter1);
			clearInterval(inter5);
			clearInterval(inter10);
			clearInterval(death);
			clearInterval(interTime);
	
			alert("Time's Up!");
			document.getElementById("start").disabled = false;
		//makes HighScore
			if 	(currentScore > highScore){
				highScore = currentScore;
				document.getElementById("highScore").innerHTML = highScore;
				document.getElementById("johncoin").innerHTML = johncoin;
	currentScore = 0;
	}
	currentScore = 0;

	  }
	}

//disables the button after you click it
		setTimeout(disableButton,50);
} // end start function



//disabling button function
function disableButton()
{
	document.getElementById("start").disabled = true;
	
}//end function
	
	



//cookies
function saveCookies()	{
	var exdays= 100;
	highScore = saveScore + highScore;
	console.log("saving... highScore=" + highScore);
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "highScore=" + highScore + ";" + expires;
	document.cookie = "johncoin=" + johncoin + ";" + expires;
	console.log(document.cookie);
}//end function



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}//end function



function loadCookies() {
	highScore = Number(getCookie("highScore"));
	johncoin = Number(getCookie("johncoin"));
	document.getElementById("highScore").innerHTML = highScore;
	document.getElementById("johncoin").innerHTML = johncoin;
}
window.onload = function() {
	// load high score and johncoin
	loadCookies();
};//end function



function clearCookies(){
	var clear = confirm("Are you sure you want to delete your score?");
	if ( clear === true ) {
		document.cookie = "highScore=0";
		document.cookie = "joincoin=0";
		document.getElementById("highScore").innerHTML = highScore;
		document.getElementById("johncoin").innerHTML = johncoin;
	}
}//end function
if(timeleft <= 0){
	clearInterval(downloadTimer);
	var saveScore = currentScore;
	currentScore = 0;}
	
	
	
//Skin Changes and Buying Skins
	function skinChange(skin){
		document.getElementById("pagestyle").setAttribute("href", "SkinFiles/" + skin + ".css")
	}//end function