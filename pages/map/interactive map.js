function setup(){
  document.getElementById("description").style.visibility = "hidden";
  document.getElementById("detail_description").style.visibility = "hidden";
  console.log("visible");
}

function visible(){
  document.getElementById("description").style.visibility = "visible";
  console.log("visible");
  }   

function invisible(){
  document.getElementById("description").style.visibility = "hidden";
  console.log("hidden");
}


function detail_block(){
  document.getElementById("detail_description").style.visibility = "visible";
$(document).ready( function() {
  $('.some-class').on('click', slideonlyone('sms_box'));
  // OR //
  $('.some-class').click(slideonlyone('sms_box'));
});

}


