<html>
	<?php
	include("./../../common/head.php");
	include("./../../")
	?>

<body class="body" onload="carousel()">
	<header>
			  <!--?php
			echo '<div style="display:none;">';
			echo '<h6 id="datetime">';
					  
						echo "It's ".date("i, F jS").".<br>";
						echo "Our time is ".date('g:ia').".";
						
          echo '</h6>';
			
			echo '</div>';
			
			?-->
	</header>




	  <main>
	    <div>
			  <article>
				  <h3>
					  Fun play of the Day
                 </h3>
					  
						 <p>
						   Whether you are a explorer or looking for a trip to relax and 
							 enjoy with no concerns there. We have got questions for you
							   
					   </p>
				   </article>
           <?php 
		    echo "
			<div id=\"ex1\" class=\"modal mod\">
			<p class=\"change\"><img src=\"./../../resources/image/poly.jpeg\" width=\"60px\" height=\"70px\" </p>
			<p class=\"txt\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<a href=\"./../../index.html#idburial\">Skip Quiz to Read More</a>
			<a href=\"#\" rel=\"modal:close\"><button type='button' style='background-color:black;color:grey;'>Close</button></a>
		    </div>
		    
		  <!-- Link to open the modal -->
		  <div class='moreinfo'><a href=\"#ex1\"  class='callmod' rel=\"modal:open\" role=\"button\"><img id=\"im\" src=\"./../../resources/image/info.jpeg\"></a></div>";
				
            include("./../../scripts/quiz.php");
			?>
			</div>
			
		</main>
		  <?php
			  include("common/footer.html"); 
			?>
			
		</body>
</html>