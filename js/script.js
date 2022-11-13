$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
// =============== Слайдер ========================
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
// =============== Модальне окно ===================
$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});

// =========== Оставить заявку =================
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})
// ======== Галерея картинок =============
$(".gallery-list").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true
  }
});