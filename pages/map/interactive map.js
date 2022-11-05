var myTimeout;

function setup(){
  document.getElementById("description1").style.display = "none";
  document.getElementById("detail_block").style.display = "none";;
}

function timer(id){
  myTimeout = setTimeout(function(){invisible(id)}, 1000);
  
}

function invisible(id){
  document.getElementById(id).style.display = "none";
}

function visible(id){
  document.getElementById(id).style.display = "inline";
}
/* the part above is about the common functions which will be used in so many times*/





function moveover_marker(){
  let x = document.getElementById("marker");
  let y = document.getElementById("description1")?.id;
  x.style.height = "25px";
  x.style.width = "25px";
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker(){
  let x = document.getElementById("marker");
  let y = document.getElementById("description1")?.id;
  x.style.height = "16px";
  x.style.width = "16px";
  timer(y);
}

function moveover_description(){
  clearTimeout(myTimeout);
  console.log("timer cancel");
}

function moveout_description(){
  let x = document.getElementById("description1")?.id;
  invisible(x);
}


/* the part above is about the functions about marker and description parts*/



function detail_block_call(){
  document.getElementById("detail_block").style.display = "inline";
  console.log("block expands");
}


function detect_Click(event){
  if (event.target != document.getElementById("detail_block")){
    document.getElementById("detail_block").style.display = "none";
  } else{
   
  }
}
>>>>>>> 3d8fd1dd9dcd55824158293afee0b6e5e82eaf7a

/* the part above is about the functions of detail block which is located on the left of  map*/












/* the part above is about the functions of detail block which is located on the left of  map*/











