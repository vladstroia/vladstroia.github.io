document.addEventListener("keydown", keyDownTextField, false);

scor_rares = 0;
scor_vlad = 0;
meci_rares = 0;
meci_vlad = 0;

function verifica(){

	if((scor_vlad - scor_rares >= 2) && (scor_vlad >= 11)){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;	
  }	
    if((scor_rares - scor_vlad >= 2) && (scor_rares >= 11)){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;	
  }	
    if(scor_vlad == 6 && scor_rares == 0){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;	
	}
    if(scor_vlad == 9 && scor_rares == 1){
		scor_vlad=0;
		scor_rares=0;
		meci_vlad += 1;	
	}
    if(scor_vlad == 0 && scor_rares == 6){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;	
	}

    if(scor_vlad == 1 && scor_rares == 9){
		scor_vlad=0;
		scor_rares=0;
		meci_rares += 1;	
	}

}
function afiseaza(){

	document.getElementById("rares").innerText=scor_rares;
    document.getElementById("vlad").innerText=scor_vlad;
	document.getElementById("mrares").innerText=meci_rares;
    document.getElementById("mvlad").innerText=meci_vlad;
}

function WhichButton(event) {
  if(event.button == 0)
	scor_rares += 1;
  else
	scor_vlad += 1;
  verifica();
  afiseaza();

}

function keyDownTextField(e) {
  var keyCode = e.keyCode;
 if(keyCode==37 || keyCode==0) {//37 e pt sageata stange
	scor_rares += 1;
  } else 
	  if(keyCode==39 || keyCode==2){//sageata dreapta
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


