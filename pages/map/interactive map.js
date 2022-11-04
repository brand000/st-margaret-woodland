function setup(){
  document.getElementById("description1").style.display = "none";
  document.getElementById("detail_description").style.display = "none";;
  console.log("visible");
}

function visible(){
  document.getElementById("description1").style.display = "inline";
  console.log("visible");
  }   

function invisible(){
  document.getElementById("description1").style.display = "none";
  console.log("hidden");
}


function detail_block(){
  document.getElementById("detail_description").style.display = "inline";
}


function detect_Click(event){
  if (event.target != document.getElementById("detail_description")){
    document.getElementById("detail_description").style.display = "none";
  } else{
   
  }
}
