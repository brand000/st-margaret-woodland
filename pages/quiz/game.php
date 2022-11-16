<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.google.com/specimen/Inter" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />


    <link rel="stylesheet" href="../../styles/body.css" />
    <link rel="stylesheet" href="../../styles/nav.css" />
    <link rel="stylesheet" href="../../styles/header.css" />
    <link rel="stylesheet" href="../../styles/footer.css" />
    <link rel="stylesheet" href="../../styles/index.css" />
    <link rel="stylesheet" href="./../../styles/my_css.css" />
    <link rel="stylesheet" href="../../styles/estore.css" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

    <script defer src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    
    <script defer src="scripts/main.js"></script>
    <script src="./../../scripts/carousel.js"></script>





    <title>St. Margeret's Bay Woodland Conservation</title>
</head>

<header>   
        <div class="header-container" style="height: 100px">
            <div class="org-name">
              <a class="org-logo" href="/index.html">
              <p><a href="../../index.html">French Village Forest <b>Conservation</b></a></p>
            </div>
            <div class="menu-btn">
              <div class="menu-btn_burger"></div>
              <div id="nav-bar" class="nav-bar">
                <nav>
                  <ul>
                    <li><a href="../../pages/about/about.html">About</a></li>
                    <li><a href="../../pages/ecosystem/ecosystem.html">Ecosystem</a></li>
                    <li><a href="../../pages/map/map.html">Map</a></li>
                    <li><a href="../../pages/burial/burial.html">Burial</a></li>
                    <li><a href="../../pages/quiz/game.php">Quiz</a></li>
                    <li><a href="../../pages/e-commerce/estore.html">Marketplace</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>


      <?php
			echo '<div style="display:none;">';
			echo '<h6 id="datetime">';
					  
						echo "It's ".date("i, F jS").".<br>";
						echo "Our time is ".date('g:ia').".";
						
          echo '</h6>';
			
			echo '</div>';
			
			?>

    </header>

<body class="bodyQuiz" onload="carousel()">


<div class="main-content">

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



    <footer class="section-p1" style="display:flex; justify-content: space-between;">
        <div class="col" style="width:25%">
          <h4>Contact Us</h4>
          <p>
            <strong>Address:</strong> 71 St Pauls Ln, French Village, NS B3Z 4E3
          </p>
          <p><strong>Phone:</strong> 111 222 333/ (+1) 444 555 666</p>
          <p><strong>Hours:</strong> 10:00 - 16:00; Mon - Sat</p>
        </div>

        <div class="col" style="width:25%">
          <h4>Useful Links</h4>
          <a href="#">Quiz</a>
          <a href="#">Sign-in</a>
          <a href="#">MarketPlace</a>
          <a href="#">Map</a>
        </div>

        <div class="col" style="width:25%">
          <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
        </div>

        <div class="copyright">
          <p>Ⓒ SMU Software Engineering Group F</p>
        </div>
      </footer>

</div>
    
</body>



</html>