// *для подключения других файлов js (убрать пробел между @ @)
@@include('slick.min.js')


// Burger меню
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


// Убирает placeholder при введении текста
$(document).ready(function () {
  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  $('input,textarea').blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
});



$(document).ready(function () {
  $('.programs__slider').slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false
  });
});

$(document).ready(function () {
  $('.certificate__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img src="img/certificate/prev-arrow.svg"  class="slick-prev" alt="">',
    nextArrow: '<img src="img/certificate/next-arrow.svg"  class="slick-next" alt="">',

  });
});