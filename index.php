<!DOCTYPE html>

<html lang="en">

<?php
  session_start();
  include 'common/head.html'; 
  ?>

<body>
    <header>
        <div class="header-container">
            <div class=" org-name">
                <a href="index.html">
                    St. Maragrets Bay Wodland Conservation
                </a>

            </div>
        </div>


        <?php 
        include 'common/menus.html'; 
        ?>

    </header>

    <div class=" slideshow-container">
        <!-- slider container -->
        <div class="swiper">
            <!-- slider wrapper -->
            <div class="swiper-wrapper">
                <!-- slider slides -->
                <div class="swiper-slide">
                    <img src="resources/image/img1.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="resources/image/img2.jpg" alt="" />
                </div>
                ...
            </div>

            <!-- swiper pagination buttons-->
            <div class="swiper-pagination"></div>

            <!-- swiper nav buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

    </div>

    <div class="main-content">
        <div class="info-text"></div>
    </div>

    <?php 
     include 'common/footer.html';  
    ?>
</body>

</html>