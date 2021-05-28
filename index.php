<?php 
    include('includes/nav.php');
    include('includes/modal.php');
?>

    <div class="sect" id="aboutContent">
        <div class="leftCol">
            <div id="image">
                <img id="selfie" src="img/portfoliobg.png" alt="A sepia colored picture of Stephanie Clinton.">
            </div>
        </div>
        <div class="rightCol">
            <h1>About</h1>
            <p>Stephanie Clinton is a twenty-six year-old from Birmingham, Alabama. After graduating Summa Cum Laude from Troy University in 2017 with a BS in Communications, she went back to her hometown of Hueytown, Alabama to work at Michael's Arts & Crafts Store. She is currently working for <a href="https://www.wholesaleaccessorymarket.com/">Wholesale Accessory Market</a> as a picking and receiving manager. Her interests are vast and include writing, coding, mixology, and graphic design. Stephanie is a <strong>jack of all trades: mastery in progress.</strong></p>
        </div>
    </div>

   <div id="resumeContent" class="center">
    <div class="mobileSect sect subSecTitle">
       <div class="horz">
           <hr /><hr />
       </div>
        <h1>Gallery</h1>
        <div class="horz">
            <hr /><hr />
        </div>
    </div>
        <!-- <h2 class="emptySpace">Coming Soon!</h2> -->
        <?php include('includes/slider.php'); ?>
    </div>

    <div id="social" class="center">
        <div class="mobileSect sect subSecTitle center">
            <div class="horz">
                <hr /><hr />
            </div>
            <h1>Around The Web</h1>
            <div class="horz">
                <hr /><hr />
            </div>
        </div>
        <div class="social-btns">
            <a href="https://codepen.io/sclint13" target="_blank"><div class="social-med"><i class="fab fa-codepen"></i></div></a>
            <a href="https://facebook.com/sclint" target="_blank"><div class="social-med"><i class="fab fa-facebook"></i></i></div></a>
            <a href="https://github.com/sclint13" target="_blank"><div class="social-med"><i class="fab fa-github"></i></div></a>
            <a href="https://www.linkedin.com/in/sclint13/" target="_blank"><div class="social-med"><i class="fab fa-linkedin"></i></div></a>
        </div>
    </div>

    <footer id="footer"><p></p></footer>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"></script>
<script src="js/modal.js"></script>
<script src="js/script.js"></script>
<script src="js/contactVal.js"></script>
<script src="js/slider.js?ver=1.1"></script>
</body>
</html>