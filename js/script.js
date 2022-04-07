$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>'
      });

    //   скрипт для табов
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    //   скрипт для подробнее и назад
    /* Первый вариант */
    /* $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    }); */

    /* оптимизированный вариант */
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
      
    //МОАДЛЬНЫЕ ОКНА
    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    //кнопка купить
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); //изменения названия пульсометров
        $('.overlay, #order').fadeIn('slow'); 
      });
    });

    //Валидация форм. Ошибки ввода

    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       email: true
    //     }
    //   },
    //   messages: {
    //     name: "Пожалуйста, введите имя",
    //     phone: "Пожалуйста, введите номер телефона",
    //     email: {
    //       required: "Пожадуйста, введите е-майл",
    //       email: "Неправильно введен адрес почты"
    //     }
    //   }
    // });
    // $('#order form').validate();

    //Оптимизированный вариант валидации
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите имя",
          phone: "Пожалуйста, введите номер телефона",
          email: {
            required: "Пожадуйста, введите е-майл",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    //маска номера телефона
    $('input[name=phone]').mask("+7 (999) 999-9999");

    //отправка писем на сервер
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });

    //Скритп для скроллинга вверх
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
    });

    //плавный скролл
    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });

  new WOW().init();
    
  });
      