
 
  
  
  
  <div class="w3-panel">

          
					<?php 
					// This script file is used to deal with the retrieval of question data from 
//the data base and their functioning( By toufiq)


//create html buttons a choices for the given question
function createButtons($c, $a, $t, $d, $p2, $ar, $ind){
  
  $dis =$ar[$ind];
  
  $convert =intval($ind);
  
  $element =array_splice($ar,$convert-1,1);
  
  
  
  shuffle($ar);
  
  $im1=$ar[1];
  
  $im2=$ar[2];
  
  $button = array("<input class=$a type=\"button\" style=$dis id=$a name=\"button1\" value=$a onclick=set(this)>",
  "<input class=$a type=\"button\" style=$im1 id=$c name=\"button2\" value=$c onclick=set(this)>","<input class=$a type=\"button\" style=$im2
  id=$p2 value=$p2 onclick=set(this)>");
  shuffle($button); 
  echo "<div class ='question'>
        <div style='text-align:center'>
           <h2 class='qnum'>st</h1>
           <span class='dot'></span>
           <span class='dot'></span>
           <span class='dot'></span>
           <span class='dot'></span>
           <span class='dot'></span>
         </div>  
  <h1 class='qhead'>$t</h1>".$button[0].$button[1]."
    <div style=\"margin:10px;\">".
      $button[2]."
    </div>  
   </div>";

    // echo "<div class ='question w3-half'>
    //      <h1>$t</h1>
    //      <input class=$a type=\"button\" style=$d id=$a name=\"button1\" value=$a onclick=set(this)>
    //      <input class=$a type=\"button\" style=$d id=$c name=\"button2\" value=$c onclick=set(this)>
    //        <div style=\"margin-top:10px;\">
    //          <input class=$a type=\"button\" 
    //           style=\"background-image:url('resources/gear1.png');height:190px;width:450px; display:block;
    //           background-size:450px 190px; margin:auto; font-size:4em;\"
    //           id=$p2 value=$p2 onclick=set(this)>
    //        </div>  
    //       </div>";
         
     
         
}
# Function that retrieves data from the mongoDB database to make a question and
# returns the question 
function retrieve_question()
{
  $questions = file_get_contents($_SERVER['CONTEXT_DOCUMENT_ROOT']
              . "/Web"
              . "/resources/question.json");
    $quotes_data = json_decode($questions,true);


    $f = fopen($_SERVER['CONTEXT_DOCUMENT_ROOT']
              . "/Web"
              . "/resources/question.txt", "w");
    fwrite($f, date("l, F jS") . "\n");
    
    print_r(count($images));
    $random = array_rand($quotes_data,5);
    shuffle($random);
    $count = 0;
    foreach($random as $i){
    $text =$quotes_data[$i][1];
		$option1[$count] = $quotes_data[$i][0];
		$option2[$count] = $quotes_data[$i][2];
    $display[$count] = $quotes_data[$i][3];
    $option3[$count] = $quotes_data[$i][4];
    $option4[$count] = $quotes_data[$i][5];
    $images[$i]=$display[$count];
		//$GLOBALS["$option2"] = $option2;
		//createButtons($option1, $option2, $text, $display, $option3, $option4);
    
    $question_today =$text."\n"
    .$option1[$count]."\n"
    .$option2[$count]."\n"
    .$display[$count]."\n"
    .$option3[$count]."\n"
    .$option4[$count]."\n";
    
    fwrite($f, $question_today);
    $count++;
    }
    $count2=0;
    foreach($random as $key){
      
      createButtons($option1[$count2], $option2[$count], $text[$count], $display[$count], $option3[$count], $images, $key);
      $count2++;
    }
    fclose($f);

}


# If the question text exists, read data of today's question.
# This makes the question from already available data
if (file_exists($_SERVER['CONTEXT_DOCUMENT_ROOT']
              . "/Web"
              . "/resources/question.txt"))
{
    $f = fopen($_SERVER['CONTEXT_DOCUMENT_ROOT']
              . "/Web"
              . "/resources/question.txt", "r");
    $date = trim(fgets($f));
    
		# If the saved date in text file matches with current date use the available data in the file 
		# to make the same question
		# otherwise retrieve a new question by calling the retrieve function
    if ($date == date("l, F jS"))
    { 
      
      for($i = 0; $i<5; $i++){
        
        $op1[$i] = fgets($f, 5000);
        $op2[$i] = fgets($f, 2000);
				$op3[$i] = fgets($f, 2000);
        $disp[$i] = fgets($f, 5000);
        $op4[$i] = fgets($f, 2000);
        $op5[$i] = fgets($f, 2000);
        
        $k =$i+1;
        
        
        $img[$k]=$disp[$i];
				//createButtons( $op2, $op3, $op1, $disp, $op4, $op5);
        
      }
      fclose($f);
      
      for($j=0; $j<count($img); $j++){
        $inx=strval($j+1);
        
        createButtons( $op2[$j], $op3[$j], $op1[$j], $disp[$j], $op4[$j], $img, $inx);

      }
				//$GLOBALS["$i"]=$op2;
				
       
    }
    else
    {
      
        fclose($f);
        unlink($_SERVER['CONTEXT_DOCUMENT_ROOT']
              . "/Web"
              . "/resources/question.txt");
        echo retrieve_question();
    }
}
else
{
  
    echo retrieve_question();
}
?>				
          
          
        </div>

        <script defer>
        //This script sets up the AJAX infrastructure for 
        //requesting time updates from the server(time.php).
        //and to make the created buttons functionable
        //By Toufiq

        var counter =0;
        var request = null;
        function getCurrentTime()
        {
            request = new XMLHttpRequest();
            var url = "./../../scripts/time.php";
            request.open("GET", url, true);
            request.onreadystatechange = updatePage;
            request.send(null);
        }
        function updatePage()
        {
            if (request.readyState == 4)
            {
                var dateDisplay = document.getElementById("datetime");
                dateDisplay.innerHTML = request.responseText;
                console.log(request.responseText);
            }
        }
        getCurrentTime();
        setInterval('getCurrentTime()', 60000)
				
				// function get the current time from the sever
        function set(a) {
  let Obj = document.getElementsByClassName("qhead");
    console.log(Obj);
    if(a.value == a.className){
      
       if(a.value != "Play Quiz"){
        q = Obj[counter].cloneNode(true);
        q.setAttribute("class","null");
      l = s.appendChild(q); 
       g = s.appendChild(document.createElement("p"));
       
       g.setAttribute("class","right");
       
       g.innerText=a.value;
       counter++;
       }
       console.log(counter);
      carousel();
      if(counter == 5){
        openPopup();
      }
    }else{
     
       if(a.value != "Play Quiz"){
        y = Obj[counter].cloneNode(true);
        y.setAttribute("class","null");
        z = s.appendChild(y);
        x = s.appendChild(document.createElement("p"));
        x.setAttribute("class","wrong");
       
       x.innerText=a.value;
       counter++;
      }
      console.log(counter);
       carousel();
       if(counter == 5){
        openPopup();
      }

    }
    
 // result(arr);
  // a.addEventListener("blur", validate);
}

function validate() {
  console.log("Validation code is executing.");
}
let play = document.getElementsByClassName("question");
p = document.createElement("div");

play[0].parentElement.insertBefore(p,play[0]);
p.setAttribute("class","question");
p.classList.add("mystyle");
d = p.appendChild(document.createElement("div"));
d.style.height="120px";
c = d.appendChild(document.createElement("input"));
c.setAttribute("type","button");
c.setAttribute("value","Play Quiz");
c.setAttribute("class","Play Quiz");
c.setAttribute("onclick","set(this)");
c.style.margin="45px 125px";
c.style.width="200px";
c.style.display="block";
c.style.fontSize="x-large";
c.style.height="50px";
c.style.borderRadius="25px";
c.style.webkitTextFillColor="#32a2a8";

pa=document.createElement("div");
s = play[0].parentElement.appendChild(pa);
s.setAttribute("class","question");

function openPopup(){
  popup.classList.add('open-popup');
}

function closePopup(){
  popup.classList.remove('open-popup');
}

</script>
      
      