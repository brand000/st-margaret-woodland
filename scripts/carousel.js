//carousel.js

function carousel()
{
  var i;
  var k;
  var slides = document.getElementsByClassName("question");
  var dots =document.getElementsByClassName("dot");
  var heads = document.getElementsByClassName("qnum");

  var modchange = document.getElementsByClassName("moreinfo");

  console.log(modchange);
  console.log(dots.length);
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
    
  }
  for(k=0;k<dots.length;k++){
    dots[k].style.backgroundColor="#bbb";
   }
  console.log("Executed")
  index++;
  if (index > slides.length) {index = 1}    
  slides[index-1].style.display = "block";  
  //setTimeout(carousel, 3000);
  console.log("changing");
  
  if((index>1) && (index<=6)){
    dots[index-2+(5*dex)].style.backgroundColor="black";
    heads[index-2].innerText="Question"+(index-1);
    dex++;
    if(dex > 4){
      dex =0;
    }
   }
   
   
   console.log("Then")
  if(index>=6){
    console.log("Here")
    modchange.style.display ="none";
    
  }
   
}
var index = 0;
var dex = 0;



