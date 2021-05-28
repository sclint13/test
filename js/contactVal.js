$(function() {
    $("form").validate();
});

$("#contactFormSub").on("submit", function(e) {
    let dataString = $(this).serialize();
    // alert(dataString); return false;
    
    $.ajax({
        method: "POST",
        url: "./scripts/sendEmail.php",
        data: dataString,
        success: function() {
            $("#contactForm").hide();
            $(".modal-content").css("background-color", "var(--navHover)");
            $(".modal-content").html("<div class='email-contact-success'></div>");
            $(".email-contact-success")
            .html('<h2 id="emailSuccess">We\'ll be in touch!</h2>')
            .hide()
            .fadeIn(500, function() {
                $(".email-contact-success").append(
                    '<span><i class="fas fa-thumbs-up"></i></span>'
                );
            })
            .fadeOut(1800, function() {
                $("#modal").hide();
            })
            ;
            
        }
    });
        
    e.preventDefault();
})
    
    
    
    
    
    
    