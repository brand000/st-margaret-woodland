var myTimeout;
var slideIndex = 1;


/* the part below is about the common functions which will be used in so many times*/
function setup(){
  description_cleaner();
  const image = Array.from(document.getElementsByClassName("second_image"));
  image.forEach(box => {
    box.style.display = "none";
  });
}

function timer(id){
  myTimeout = setTimeout(function(){invisible(id)}, 1000);
}

function description_cleaner(){
  const boxes = Array.from(document.getElementsByClassName("infowin"));
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





/* marker 2*/
function moveover_marker2(){
  let x = document.getElementById("marker2");
  x.classList.add("bounce");
  let y = document.getElementById("description2")?.id;
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
  slideIndex = 1;
}

function moveover_description2(){
  clearTimeout(myTimeout);
}

function moveout_description2(){
  let x = document.getElementById("description2")?.id;
  invisible(x);
}

function slideCount2(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow2(slideIndex);
}

function slideshow2(n){
    if(n == 1){
      document.getElementById("slideshow_image2A").style.display="block";
      document.getElementById("slideshow_image2B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image2A").style.display="none";
      document.getElementById("slideshow_image2B").style.display="block";
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

function slideCount3(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow3(slideIndex);
  
}

function slideshow3(n){
    if(n == 1){
      document.getElementById("slideshow_image3A").style.display="block";
      document.getElementById("slideshow_image3B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image3A").style.display="none";
      document.getElementById("slideshow_image3B").style.display="block";
    }
}



/* marker 4*/
function moveover_marker4(){
  let x = document.getElementById("marker4");
  let y = document.getElementById("description4")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker4(){
  let x = document.getElementById("marker4");
  x.classList.add("bounce");
  let y = document.getElementById("description4")?.id;
  timer(y);
}

function moveover_description4(){
  clearTimeout(myTimeout);
  
}

function moveout_description4(){
  let x = document.getElementById("description4")?.id;
  invisible(x);
}

function slideCount4(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow4(slideIndex);
  
}

function slideshow4(n){
    if(n == 1){
      document.getElementById("slideshow_image4A").style.display="block";
      document.getElementById("slideshow_image4B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image4A").style.display="none";
      document.getElementById("slideshow_image4B").style.display="block";
    }
}



/* marker 5*/
function moveover_marker5(){
  let x = document.getElementById("marker5");
  let y = document.getElementById("description5")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker5(){
  let x = document.getElementById("marker5");
  x.classList.add("bounce");
  let y = document.getElementById("description5")?.id;
  timer(y);
}

function moveover_description5(){
  clearTimeout(myTimeout);
  
}

function moveout_description5(){
  let x = document.getElementById("description5")?.id;
  invisible(x);
}

function slideCount5(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow5(slideIndex);
  
}

function slideshow5(n){
    if(n == 1){
      document.getElementById("slideshow_image5A").style.display="block";
      document.getElementById("slideshow_image5B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image5A").style.display="none";
      document.getElementById("slideshow_image5B").style.display="block";
    }
}




/* marker 6*/
function moveover_marker6(){
  let x = document.getElementById("marker6");
  let y = document.getElementById("description6")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker6(){
  let x = document.getElementById("marker6");
  x.classList.add("bounce");
  let y = document.getElementById("description6")?.id;
  timer(y);
}

function moveover_description6(){
  clearTimeout(myTimeout);
  
}

function moveout_description6(){
  let x = document.getElementById("description6")?.id;
  invisible(x);
}






/* marker 7*/
function moveover_marker7(){
  let x = document.getElementById("marker7");
  let y = document.getElementById("description7")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker7(){
  let x = document.getElementById("marker7");
  x.classList.add("bounce");
  let y = document.getElementById("description7")?.id;
  timer(y);
}

function moveover_description7(){
  clearTimeout(myTimeout);
  
}

function moveout_description7(){
  let x = document.getElementById("description7")?.id;
  invisible(x);
}

function slideCount7(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow7(slideIndex);
  
}

function slideshow7(n){
    if(n == 1){
      document.getElementById("slideshow_image7A").style.display="block";
      document.getElementById("slideshow_image7B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image7A").style.display="none";
      document.getElementById("slideshow_image7B").style.display="block";
    }
}




/* marker 8*/
function moveover_marker8(){
  let x = document.getElementById("marker8");
  let y = document.getElementById("description8")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker8(){
  let x = document.getElementById("marker8");
  x.classList.add("bounce");
  let y = document.getElementById("description8")?.id;
  timer(y);
}

function moveover_description8(){
  clearTimeout(myTimeout);
  
}

function moveout_description8(){
  let x = document.getElementById("description8")?.id;
  invisible(x);
}


/* marker 9*/
function moveover_marker9(){
  let x = document.getElementById("marker9");
  let y = document.getElementById("description9")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker9(){
  let x = document.getElementById("marker9");
  x.classList.add("bounce");
  let y = document.getElementById("description9")?.id;
  timer(y);
}

function moveover_description9(){
  clearTimeout(myTimeout);
  
}

function moveout_description9(){
  let x = document.getElementById("description9")?.id;
  invisible(x);
}

function slideCount9(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow9(slideIndex);
  
}

function slideshow9(n){
    if(n == 1){
      document.getElementById("slideshow_image9A").style.display="block";
      document.getElementById("slideshow_image9B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image9A").style.display="none";
      document.getElementById("slideshow_image9B").style.display="block";
    }
}





/* marker 11*/
function moveover_marker11(){
  let x = document.getElementById("marker11");
  let y = document.getElementById("description11")?.id;
  x.classList.add("bounce");
  setTimeout(function(){x.classList.remove("bounce")}, 500);
  description_cleaner();
  visible(y);
  clearTimeout(myTimeout);
}   


function moveout_marker11(){
  let x = document.getElementById("marker11");
  x.classList.add("bounce");
  let y = document.getElementById("description11")?.id;
  timer(y);
}

function moveover_description11(){
  clearTimeout(myTimeout);
  
}

function moveout_description11(){
  let x = document.getElementById("description11")?.id;
  invisible(x);
}

function slideCount11(n){
  slideIndex = slideIndex + n;
  if(slideIndex < 1){slideIndex = 2;}
  if(slideIndex > 2){slideIndex = 1;}
  console.log(slideIndex);
  slideshow11(slideIndex);
  
}

function slideshow11(n){
    if(n == 1){
      document.getElementById("slideshow_image11A").style.display="block";
      document.getElementById("slideshow_image11B").style.display="none";
    }else if(n == 2){
      document.getElementById("slideshow_image11A").style.display="none";
      document.getElementById("slideshow_image11B").style.display="block";
    }
}




/* the part below is about the functions of detail block which is located on the left of  map*/



function detect_Click(event){
  if (event.target != document.getElementById("detail_block")){
    document.getElementById("detail_block").style.width = "0px";
    marker_color_cleaner();
  } else{
   
  }
}

function empty_tips() {
  window.alert("No extra information for this location, try others!")
  }

function marker2_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/hazelnut tree1.jpg";
  document.getElementById("location_name").innerHTML = "Hazelnut tree";
  document.getElementById("introduction").innerHTML = "A Hazelnut tree is here!";
  marker_color_cleaner();
  document.getElementById("marker2").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}

function marker3_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/apple tree1.jpg";
  document.getElementById("location_name").innerHTML = "Big apple tree";
  document.getElementById("introduction").innerHTML = "A big apple tree is here!";
  marker_color_cleaner();
  document.getElementById("marker3").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}

function marker4_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/pear tree1.jpg";
  document.getElementById("location_name").innerHTML = "Pear tree";
  document.getElementById("introduction").innerHTML = "A Pear tree is here!";
  marker_color_cleaner();
  document.getElementById("marker4").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}

function marker5_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/Cherry-Honeysuckle Arch1.jpg";
  document.getElementById("location_name").innerHTML = "Cherry-Honeysuckle Arch";
  document.getElementById("introduction").innerHTML = "Cherry-Honeysuckle Arch is here!";
  marker_color_cleaner();
  document.getElementById("marker5").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}


function marker7_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/foundation1.jpg";
  document.getElementById("location_name").innerHTML = "Foundation";
  document.getElementById("introduction").innerHTML = "Foundation is here!";
  marker_color_cleaner();
  document.getElementById("marker7").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}


function marker9_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/biggrove1.jpg";
  document.getElementById("location_name").innerHTML = "Big Grove";
  document.getElementById("introduction").innerHTML = "You already entered the Big Grove!";
  marker_color_cleaner();
  document.getElementById("marker8").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}

function marker11_click(){
  document.getElementById("detail_block").style.width = "300px";
  document.getElementById("picture_part").src="../resources/image/apple tree1.jpg";
  document.getElementById("location_name").innerHTML = "Very big apple tree";
  document.getElementById("introduction").innerHTML = "A very very big apple tree, it is bigger than ever before!";
  marker_color_cleaner();
  document.getElementById("marker8").style.color = "red";
  document.getElementById("detail_block").scrollTop = 0;
}





