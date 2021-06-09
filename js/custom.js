let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + "px";
    wave2.style.backgroundPositionX = 300 + value * -4 + "px";
    wave3.style.backgroundPositionX = 200 + value * 2 + "px";
    wave4.style.backgroundPositionX = 100 + value * -2 + "px";
})

$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 550){
            $('#btp').fadeIn();
        }
        else{
            $('#btp').fadeOut();
        }

        // menu fix
        if (scrolling > 350){
            $('.menu').addClass('menu-fix');
        }
        else{
            $('.menu').removeClass('menu-fix');
        }

    });

    // back to top

    $('#btp').click(function(){
        $('html,body').animate({
            scrollTop : 0,
        },1000);
    });
});

