const services = new Swiper('.swiper-services', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
      },
      576: {
          slidesPerView: 1.5,
          spaceBetween: 10,
      },
        768: {
            slidesPerView: 2.1,
        },
        992: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 2.8,
        },
    }
  });

  const team = new Swiper('.swiper-team', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    navigation: {
        nextEl: '.swiper-team-next',
        prevEl: '.swiper-team-prev',
      },
    breakpoints: {
      320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
      },
      420: {
          slidesPerView: 1.5,
          spaceBetween: 10,
      },
      576: {
          slidesPerView: 2,
      },
        768: {
            slidesPerView: 2.8,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
  });

