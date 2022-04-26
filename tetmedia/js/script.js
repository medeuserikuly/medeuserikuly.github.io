  //плавный скролл
$('a[href^="#"').on('click', function() {
  let href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});

//slick slider
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    swipe: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
  });
});

//открыть и закрыть меню
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

  //модальное окно. закрыть и остановить (перезагрузить src айфрейма)
/*   $('.modal__close').on('click', function() {
    var leg=$('#iframe').attr("src");
    $('.overlay, #video-1, #video-2').fadeOut('slow');
    $('#iframe').attr("src",leg);
  }); */

//блок портфолио
$('.portfolio__img_1').on('click', function(){
    $('.overlay, #video-1').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-1').attr("src");
      $('.overlay, #video-1').fadeOut('slow');
      $('#iframe-1').attr("src",leg);
    });
  });

$('.portfolio__img_2').on('click', function(){
    $('.overlay, #video-2').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-2').attr("src");
      $('.overlay, #video-2').fadeOut('slow');
      $('#iframe-2').attr("src",leg);
    });
  });

  $('.portfolio__img_3').on('click', function(){
    $('.overlay, #video-3').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-3').attr("src");
      $('.overlay, #video-3').fadeOut('slow');
      $('#iframe-3').attr("src",leg);
    });
  });

  $('.portfolio__img_4').on('click', function(){
    $('.overlay, #video-4').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-4').attr("src");
      $('.overlay, #video-4').fadeOut('slow');
      $('#iframe-4').attr("src",leg);
    });
  });

  $('.portfolio__img_5').on('click', function(){
    $('.overlay, #video-5').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-5').attr("src");
      $('.overlay, #video-5').fadeOut('slow');
      $('#iframe-5').attr("src",leg);
    });
  });

  $('.portfolio__img_6').on('click', function(){
    $('.overlay, #video-6').fadeIn('slow');
    $('.modal__close').on('click', function() {
      var leg=$('#iframe-6').attr("src");
      $('.overlay, #video-6').fadeOut('slow');
      $('#iframe-6').attr("src",leg);
    });
  });


//маска номера телефона
$('input[name=phone]').mask("+7 (999) 999-99-99");

//отправка писем на сервер
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    /* $('.overlay, #thanks').fadeIn('slow'); */
    $('.contacts__btn').text('Отправлено');

    $('form').trigger('reset');
});
return false;
});

