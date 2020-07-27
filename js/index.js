$(function(){
    $('.flex__menu, .fa-times').on('click',function(){
        $('nav').toggleClass('active');
        $('.flex__overlay ').toggleClass('flex__overlay--open');
    });

    $('.flex__overlay ').on('click',function(){
        $('nav').removeClass('active');
        $('this').removeClass('flex__overlay--open');
    });


});
//SECTION 3

$(function () {
        $(".menu__abum--filter").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $(".isotope--grid").isotope({ filter: filterValue });
            $(".menu__abum--filter span").removeClass("activex");
            $(this).addClass("activex");
            
        });
    })
