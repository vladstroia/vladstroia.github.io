"use strict"

document.addEventListener("keydown", keyDownTextField, false);
var x = document.getElementById("myAudio"); 

let scor_rares = 0;
let scor_vlad = 0;
let meci_rares = 0;
let meci_vlad = 0;
let serva = 0; // cine serveste; 0 daca serveste rares; 1 daca serveste vlad


function verifica(){

	if((scor_vlad - scor_rares >= 2) && (scor_vlad >= 11)){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;
		serva = 1;
  }	
    if((scor_rares - scor_vlad >= 2) && (scor_rares >= 11)){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;
		serva = 0;
  }	
    if(scor_vlad == 6 && scor_rares == 0){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;	
		serva = 1;
	}
    if(scor_vlad == 9 && scor_rares == 1){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;
		serva = 1;
	}
    if(scor_vlad == 0 && scor_rares == 6){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;
		serva = 0;
	}

    if(scor_vlad == 1 && scor_rares == 9){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;	
		serva = 0;
	}
	if(scor_rares >= 10 && scor_vlad >= 10)
		serva = Math.abs(serva-1)
	else
	    if((scor_vlad + scor_rares)%5 == 0 && scor_rares != 0 && scor_vlad != 0)
		    serva = Math.abs(serva-1)
    }
function afiseaza(){
	if(scor_rares >= 10 && scor_vlad >= 10){
		if(scor_rares > scor_vlad){
			document.getElementById("rares").innerText="Adv.";
			document.getElementById("vlad").innerText="-";
		}
        else{
			if(scor_vlad > scor_rares){
				document.getElementById("rares").innerText="-";
				document.getElementById("vlad").innerText="Adv.";
			}
			else{
				document.getElementById("rares").innerText="="
				document.getElementById("vlad").innerText="=";
		    }
		}
	}
	else{
		document.getElementById("rares").innerText=scor_rares;
		document.getElementById("vlad").innerText=scor_vlad;
	}
	
	document.getElementById("mrares").innerText=meci_rares;
    document.getElementById("mvlad").innerText=meci_vlad;
	if (serva == 0){
	  document.getElementById("rares").style.color = "red";
	  document.getElementById("vlad").style.color = "white";
	}
	else{
	  document.getElementById("rares").style.color = "white";
	  document.getElementById("vlad").style.color = "red";
	}


}

function WhichButton(event) {
  if(event.button == 0)
	scor_rares += 1;
  else
	if(event.button == 1||event.button == 2)
	  scor_vlad += 1;
  verifica();
  afiseaza();
  x.play()
}

function keyDownTextField(e) {
  var keyCode = e.keyCode;
 if(keyCode==37) {//37 e pt sageata stange
	scor_rares += 1;
  } else 
	  if(keyCode==39){//sageata dreapta
		  scor_vlad += 1;
	  }
	    else
		  if(keyCode==82){// pentru tasta "r"
		 	scor_vlad=0;
            scor_rares=0;
		    meci_vlad = 0;
			meci_rares = 0;
		  }
		  else
			if(keyCode==74){//pentru "j"
			  scor_rares -= 1;
			}
		  else
			if(keyCode==75){//pentru "k"
			  scor_vlad -= 1;
			}
	verifica();
	afiseaza();

}


