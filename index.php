<!DOCTYPE html>
<link rel="stylesheet" href="/styles/body.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="/styles/nav.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="/styles/header.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="/styles/footer.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="/styles/index.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script>
 function seniorFunction(){

var x = document.getElementById("senior").innerHTML;
document.getElementById('main-content').style.backgroundColor='black';
document.getElementById('card1').style.backgroundColor='black';
document.getElementById('card2').style.backgroundColor='black';
document.getElementById('card3').style.backgroundColor='black';
document.getElementById('main-content').style.color='yellow';
document.getElementById('main-content').style.fontSize = 'x-large';
if (x== "Senior Citizen Mode"){
document.getElementById("senior").innerHTML = "Normal View";
}
else {
window.location.reload();
}
}   
</script>
<script defer src="/scripts/main.js"></script>



<html lang="en">

<?php
session_start();
include 'common/head.html';
?>

<body>
    <header>
    <button id= "senior" onclick= "seniorFunction()" style= "padding: 10px; color: white; font-weight: bolder;
           font-size: large; border: none; background-color:MediumSeaGreen;">Senior Citizen Mode</button>

        <?php
        include 'common/menu.html';
        ?>
    </header>




    <div id= "main-content" class="main-content">

        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide" style="background-image: url(https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);">
                    <div class="swiper-text">
                        <h2>An exquisitely perserved experience</h2>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image: url(https://images.unsplash.com/photo-1427434991195-f42379e2139d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);">
                    <div class="swiper-text">
                        <h2>New friends await</h2>
                    </div>
                </div>
                <div class="swiper-slide" style="background-image: url(https://images.unsplash.com/photo-1649648439629-cab47849bb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80);">
                    <div class="swiper-text">
                        <h2>Uncover history</h2>
                    </div>
                </div>
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        <div class="about-container">
            <div class="about-title">
                <h1>EXPLORE THE OUTDOORS</h1>
            </div>
            <div class="about-section">
                <div class="burial-container">
                    <div class="burial-content">
                        <div class="burial-text">
                            The French Village Forest Preserve is located directly in a small community located in Saint Margaret's Bay. This conservation is home to the first green natural burial in all of Canada, this process is done without embalming and allowing nature to organically recycle the body. With it's impressive flora and flauna, spanning trees and remote location; it is truly one of a kind.
                            <a href="">LEARN MORE</a>
                        </div>


                        <div class="burial-photo">
                            <img src="https://www.coldstreamfarm.net/wp-content/uploads/2018/06/birch_yellow_fall_foliage_istock-504820895.jpg">
                        </div>
                    </div>

                </div>

            </div>
        </div>




        <div class="news-container">
            <div class="news-title">
                <h1>NEWS</h1>
            </div>
            <div class="news-section">
                <div id= "card1" class="card1">
                    <div class="card-image card-1"></div>
                    <h2>Deer does thing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <p>
                        <a href="">READ MORE</a>
                </div>
                <div id= "card2" class="card2">
                    <div class="card-image card-2"></div>
                    <h2>Storm does thing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <p>
                        <a href="">READ MORE</a>
                </div>
                <div id= "card3" class="card3">
                    <div class="card-image card-3"></div>
                    <h2>Coastal Birch!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <p>
                        <a href="">READ MORE</a>
                </div>
            </div>


        </div>

        <button onclick="topFunction()" id="topBtn" title="Go to top">Top</button>

        <footer>
            <?php
            include 'common/footer2.html';
            ?>
        </footer>
    </div>



</body>

</html>