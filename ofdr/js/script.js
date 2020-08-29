// *для подключения других файлов js (убрать пробел между @ @)
// @ @include('name.js')


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
