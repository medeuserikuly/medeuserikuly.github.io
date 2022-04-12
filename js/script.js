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


//блок портфолио
$('.portfolio__img_1').on('click', function(){
    $('.portfolio__img_1').fadeOut('slow');
  });

$('.portfolio__img_2').on('click', function(){
    $('.portfolio__img_2').fadeOut('slow');
  });

$('.portfolio__img_3').on('click', function(){
    $('.portfolio__img_3').fadeOut('slow');
  });
  
$('.portfolio__img_4').on('click', function(){
    $('.portfolio__img_4').fadeOut('slow');
  });

$('.portfolio__img_5').on('click', function(){
    $('.portfolio__img_5').fadeOut('slow');
  });

$('.portfolio__img_6').on('click', function(){
    $('.portfolio__img_6').fadeOut('slow');
  });


    //плавный скролл
$("a[href^=#]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

  //МОАДЛЬНЫЕ ОКНА
  $('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
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
    $('.overlay, #thanks').fadeIn('slow');

    $('form').trigger('reset');
});
return false;
});