$(document).ready(function () {


  // HEADER SLIDER
  $('.header-content_slider_wrap').slick({
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: $('.header-menu_wrap'),

  });
  // PRICE SLIDER
  $('.price-wrap_cards').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,

    responsive: [
      {
        breakpoint: 3199.98,
        settings: "unslick",
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
          variableWidth: true,
          infinite: false
        }
      },
    ]


  });
  $('.price-wrap_cards').slick('slickGoTo', 1);

  // GALLERY SLIDER
  $('.gallery-wrap_slider').on('init', function (event, slick) {
    $(this).append('<div class="slider-cou"><span id="carrent">01</span>/<span id="total">' + slick.slideCount + '</span></div>');
  });
  $('.gallery-wrap_slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="gallery_btn slick-prev"></button>',
    nextArrow: '<button type="button" class="gallery_btn slick-next"></button>',
    responsive: [
      {

        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
          variableWidth: true,
          arrows: false,

        }
      }
    ]
  });
  $('.gallery-wrap_slider')
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.slider-cou #carrent').html(currentSlide + 1);
      if (currentSlide < 9) {
        $(".slider-cou #carrent").prepend("0");
      }
    });

  //MENU
  let burg = $('.btn-menu');
  let close = $('.btn-close');
  let menu = $('.header-burg_menu')

  burg.on('click', function () {
    menu.css({ right: '0' })

  })
  close.on('click', function () {
    menu.css({ right: '-992px' })
  })
  // MENU

  // ACCORDEON
  $('.panel-heading').on('click', function () {
    $(this).siblings('.panel-content').toggleClass('active')
    $('.accordeon-overlay').show()
    $('.panel-subtitle').append($(this).text())
    return false;
  });
  $('.icon-minus').click(function () {
    $(this).closest('.panel-content').removeClass('active')
    $('.accordeon-overlay').hide();
    $('.panel-subtitle').text('')
  });

  // INPUT PHONE
  $("#phone").mask("8 (999) 999-99-99");
  $("#phone2").mask("8 (999) 999-99-99");


  // INPUT BORDER
  $("#name, #phone, #phone2, #name2").blur(function () {
    $(this).css("border", "#5C5C5C solid 1px")
  })

});


