$(function () {
  //Header
  $(".header__slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      '<button class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button class="slick-next"><img src="images/arrow-right.png" alt=""></button>',
  });
  //About Section
  $(".about__slider").slick({
    slidesToShow: 1,
    prevArrow:
      '<button class="slick-prev"><img src="images/arrow-left-black.png" alt=""></button>',
    nextArrow:
      '<button class="slick-next"><img src="images/arrow-right-black.png" alt=""></button>',
  });

  //Faqs Section
  $(".faqs__item-title").on("click", function () {
    $(".faqs__item").removeClass("faqs__item--active");
    $(this).parent().addClass("faqs__item--active");
  });

  $(".faqs__slider").slick({
    prevArrow:
      '<button class="slick-prev"><img src="images/arrow-left-black.png" alt=""></button>',
    nextArrow:
      '<button class="slick-next"><img src="images/arrow-right-black.png" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  //Reviews Section
  $(".reviews__items").slick({
    prevArrow:
      '<button class="slick-prev"><img src="images/arrow-left-black.png" alt=""></button>',
    nextArrow:
      '<button class="slick-next"><img src="images/arrow-right-black.png" alt=""></button>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //Routes Section
  $(".routes__items").slick({
    prevArrow:
      '<button class="slick-prev"><img src="images/arrow-left-black.png" alt=""></button>',
    nextArrow:
      '<button class="slick-next"><img src="images/arrow-right-black.png" alt=""></button>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  ///Burger Menu
  $(".menu-btn").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass("btn-open").toggleClass("btn-close");
  });

  $(".overlay").on("click", function () {
    $(".menu-btn").toggleClass("btn-open").toggleClass("btn-close");
  });

  $(".menu-mobile").on("click", function () {
    $(".overlay").fadeToggle(200);
    $(".menu-btn").toggleClass("btn-open").toggleClass("btn-close");
  });
});
