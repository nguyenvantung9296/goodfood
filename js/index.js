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
//IMAGE
    var slideshow = document.getElementById('slideShow');
    var slides = slideshow.getElementsByTagName('img')
    var index = 0;
    
    function nextSlide(){
        slides[index].classList.remove('active-image');
        index = (index + 1) % slides.length
        slides[index].classList.add('active-image');
    }
    function backSlide(){
        slides[index].classList.remove('active-image');
        index = (index - 1 + slides.length) % slides.length
        slides[index].classList.add('active-image');
    }

//CONTENT   
    var slideshowText = document.getElementById('slideShowText');
    var slidesText = slideshowText.getElementsByClassName('flex__content')
    var i = 0;
    
    function nextSlideText(){
        slidesText[i].classList.remove('content--active');
        i = (i + 1) % slidesText.length
        slidesText[i].classList.add('content--active');
    }
    function backSlideText(){
        slidesText[i].classList.remove('content--active');
        i = (i - 1 + slidesText.length) % slidesText.length
        slidesText[i].classList.add('content--active');
    }