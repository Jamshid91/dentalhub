const company = new Swiper('.swiper-company', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-company-next',
        prevEl: '.swiper-company-prev',
      },
      pagination: {
        el: '.swiper-company-pagination',
        clickable: true,
      },
  });