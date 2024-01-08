const faqVideo = document.querySelector('.faq-video'),
      dentaLink = document.querySelector('.denta__link'),
      faqs = document.querySelectorAll('.faq .faq__btn');


faqVideo.addEventListener('click', () => {
    dentaLink.classList.add('d-none')
});

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.parentElement.classList.toggle('showFaq')
    })
})