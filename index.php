<!DOCTYPE html>
<link rel="stylesheet" href="styles/body.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="styles/nav.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="styles/header.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="styles/footer.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="styles/index.css?v=<?php echo time(); ?>">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script defer src="scripts/main.js"></script>



<html lang="en">

<?php
session_start();
include 'common/head.html';
?>

<body>
    <header>
        <?php
        include 'common/menu.html';
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



            </div>

            <!-- swiper pagination buttons-->
            <div class="swiper-pagination"></div>

            <!-- swiper nav buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>

        <div class="centered">
            <p>Welcome to</p><br>
            <p>Saint Margaret's Bay Conservation Site</p>

            <button type="submit">SUBMIT</button>
        </div>

    </div>


    <!--div class=" main-content">
        <div class="info-text"></div>
        </div-->


    <?php
    include 'common/footer.html';
    ?>
</body>

</html>