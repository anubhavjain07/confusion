$(document).ready(function(){
    $('.carousel').carousel( { interval: 2000 } );
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');

        }
        else
        {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');

        }
        
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle');

    });

    $('#reserveTableButton').click(function(){
        $('#reserveTable').modal('toggle');
    });



    

});