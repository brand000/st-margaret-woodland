var myTimeout;
var slideIndex = 1;


/* the part below is about the common functions which will be used in so many times*/
function setup(){
  document.getElementById("description1").style.display = "none";
  document.getElementById("description2").style.display = "none";
  document.getElementById("description3").style.display = "none";
  document.getElementById("detail_block").style.display = "none";
  document.getElementById("slideshow_imageA2").style.display = "none";
  document.getElementById("slideshow_imageB2").style.display = "none";
  document.getElementById("slideshow_imageC2").style.display = "none";
}

function timer(id){
  myTimeout = setTimeout(function(){invisible(id)}, 1000);
}

function description_cleaner(){
  const boxes = Array.from(document.getElementsByClassName("description_blocks"));
  boxes.forEach(box => {
    box.style.display = "none";
  });
}

function marker_color_cleaner(){
  const markers = Array.from(document.getElementsByClassName("bi bi-geo-alt-fill mywid"));
  markers.forEach(box => {
    box.style.color = "white";
  });
}

function invisible(id){
  document.getElementById(id).style.display = "none";
}

function visible(id){
  document.getElementById(id).style.display = "inline";
}








/* the part below is about the functions about marker and description parts*/
/* marker 1*/
function moveover_marker1(){
  let x = document.getElementById("marker1");
  x.classList.add("bounce");
  let y = document.getElementById("description1")?.id;
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker1(){
  let x = document.getElementById("marker1");
  x.classList.add("bounce");
  let y = document.getElementById("description1")?.id;
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

function slideCountA(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshowA(slideIndex);
}

function slideshowA(n){
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
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker2(){
  let x = document.getElementById("marker2");
  x.classList.add("bounce");
  let y = document.getElementById("description2")?.id;
  timer(y);
}

function moveover_description2(){
  clearTimeout(myTimeout);
  
}

function moveout_description2(){
  let x = document.getElementById("description2")?.id;
  invisible(x);
}

function slideCountB(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshowB(slideIndex);
  
}

function slideshowB(n){
    if(n == 1){
      document.getElementById("slideshow_imageB1").style.display="block";
      document.getElementById("slideshow_imageB2").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_imageB1").style.display="none";
      document.getElementById("slideshow_imageB2").style.display="block";
    }
}


/* marker 3*/
function moveover_marker3(){
  let x = document.getElementById("marker3");
  let y = document.getElementById("description3")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker3(){
  let x = document.getElementById("marker3");
  x.classList.add("bounce");
  let y = document.getElementById("description3")?.id;
  timer(y);
}

function moveover_description3(){
  clearTimeout(myTimeout);
  
}

function moveout_description3(){
  let x = document.getElementById("description3")?.id;
  invisible(x);
}

function slideCountC(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshowC(slideIndex);
  
}

function slideshowC(n){
    if(n == 1){
      document.getElementById("slideshow_imageC1").style.display="block";
      document.getElementById("slideshow_imageC2").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_imageC1").style.display="none";
      document.getElementById("slideshow_imageC2").style.display="block";
    }
}


















/* the part below is about the functions of detail block which is located on the left of  map*/



function detect_Click(event){
  if (event.target != document.getElementById("detail_block")){
    document.getElementById("detail_block").style.display = "none";
    marker_color_cleaner();
  } else{
   
  }
}

function marker1_click(){
  document.getElementById("detail_block").style.display = "inline";
  document.getElementById("picture_part").src="../resources/image/hazelnut tree1.jpg";
  document.getElementById("location_name").innerHTML = "Hazelnut tree";
  document.getElementById("introduction").innerHTML = "A Hazelnut tree is here!";
  marker_color_cleaner();
  document.getElementById("marker1").style.color = "red";
}

function marker2_click(){
  document.getElementById("detail_block").style.display = "inline";
  document.getElementById("picture_part").src="../resources/image/apple tree1.jpg";
  document.getElementById("location_name").innerHTML = "Big apple tree";
  document.getElementById("introduction").innerHTML = "A big apple tree is here!";
  marker_color_cleaner();
  document.getElementById("marker2").style.color = "red";
}

function marker3_click(){
  document.getElementById("detail_block").style.display = "inline";
  document.getElementById("picture_part").src="../resources/image/pear tree1.jpg";
  document.getElementById("location_name").innerHTML = "Pear tree";
  document.getElementById("introduction").innerHTML = "A Pear tree is here!";
  marker_color_cleaner();
  document.getElementById("marker3").style.color = "red";
}


































