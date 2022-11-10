var myTimeout;
var slideIndex = 1;

function setup(){
  document.getElementById("description1").style.display = "none";
  document.getElementById("description2").style.display = "none";
  document.getElementById("detail_block").style.display = "none";
  document.getElementById("slideshow_imageA2").style.display = "none";
}

function timer(id){
  myTimeout = setTimeout(function(){invisible(id)}, 1000);
}

function description_cleaner(){
  document.getElementById("description1").style.display = "none";
  document.getElementById("description2").style.display = "none";
  /*$(document).ready(function(){
    $(".infowin").hide();
});*/

 /*var divsToHide = document.getElementsByClassName("classname"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    } */
}

function invisible(id){
  document.getElementById(id).style.display = "none";
}

function visible(id){
  document.getElementById(id).style.display = "inline";
}
/* the part above is about the common functions which will be used in so many times*/



/* marker 1*/
function moveover_marker1(){
  let x = document.getElementById("marker1");
  let y = document.getElementById("description1")?.id;
  description_cleaner();
  x.style.height = "25px";
  x.style.width = "25px";
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker1(){
  let x = document.getElementById("marker1");
  let y = document.getElementById("description1")?.id;
  x.style.height = "16px";
  x.style.width = "16px";
  timer(y);
  slideIndex = 1;
}

function moveover_description1(){
  clearTimeout(myTimeout);
}

function moveout_description1(){
  let x = document.getElementById("description1")?.id;
  invisible(x);
}

function slideCount(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow(slideIndex);
  
}

function slideshow(n){
    if(n == 1){
      document.getElementById("slideshow_imageA1").style.display="block";
      document.getElementById("slideshow_imageA2").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_imageA1").style.display="none";
      document.getElementById("slideshow_imageA2").style.display="block";
    }
}
   



/* marker 2*/
function moveover_marker2(){
  let x = document.getElementById("marker2");
  let y = document.getElementById("description2")?.id;
  description_cleaner();
  x.style.height = "25px";
  x.style.width = "25px";
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker2(){
  let x = document.getElementById("marker2");
  let y = document.getElementById("description2")?.id;
  
  x.style.height = "16px";
  x.style.width = "16px";
  timer(y);
}

function moveover_description2(){
  clearTimeout(myTimeout);
}

function moveout_description2(){
  let x = document.getElementById("description2")?.id;
  invisible(x);
}
/* the part above is about the functions about marker and description parts*/



function detail_block_call(){
  document.getElementById("detail_block").style.display = "inline";
  
}


function detect_Click(event){
  if (event.target != document.getElementById("detail_block")){
    document.getElementById("detail_block").style.display = "none";
  } else{
   
  }
}
/* the part above is about the functions of detail block which is located on the left of  map*/


























