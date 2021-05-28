//AJAX Pulling the quote

$(document).ready(function(){

    $.ajax({
        url: 'https://quotes.rest/qod?language=en',
        method: 'GET',
        success: function(response){
            console.log(response);
            console.log(response.contents.quotes[0].author);
            let quote = response;
            let output = response.contents.quotes[0].quote + '<br /><span> - ' + response.contents.quotes[0].author + '</span>';
            
            $('#quote').html(output);
        }

    })
})

//JS displaying the quote on click

const qodBtn = $('#qod'); 

qodBtn.on('click', function() {
    console.log('QOD!');
    $('#qodSect').addClass('qodShow');
})