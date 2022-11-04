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
<<<<<<< HEAD
  document.getElementById("detail_description").style.visibility = "visible";
$(document).ready( function() {
  $('.some-class').on('click', slideonlyone('sms_box'));
  // OR //
  $('.some-class').click(slideonlyone('sms_box'));
});

}


=======
  document.getElementById("detail_description").style.display = "inline";
}


function detect_Click(event){
  if (event.target != document.getElementById("detail_description")){
    document.getElementById("detail_description").style.display = "none";
  } else{
   
  }
}
>>>>>>> 3d8fd1dd9dcd55824158293afee0b6e5e82eaf7a
