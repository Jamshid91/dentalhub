review = new Swiper('.reviews-page .swiper-reviews', {
    loop: true,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-review-next',
      prevEl: '.swiper-review-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 4,
                fill: 'row'
              },
        },
      576: {
          slidesPerView: 2,
          grid: {
              rows: 2,
              fill: 'row'
            },
      },
  }
  });