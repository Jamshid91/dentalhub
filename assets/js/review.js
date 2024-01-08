const review = new Swiper('.swiper-reviews', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    navigation: {
        nextEl: '.swiper-review-next',
        prevEl: '.swiper-review-prev',
      },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      576: {
          slidesPerView: 1.5,
          spaceBetween: 10,
      },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
    }
  });