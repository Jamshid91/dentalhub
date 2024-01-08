const menuBtn = document.querySelector('.menu-btn'),
      menu= document.querySelector('.menu'),
      body= document.querySelector('body')


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clickedBtn');
  menu.classList.toggle('d-none');
  body.classList.toggle('.bodyStopScroll')
});

window.addEventListener('click', (e) => {
  if(e.target == menu) {
    menuBtn.classList.toggle('clickedBtn');
    menu.classList.toggle('d-none');
    body.classList.toggle('.bodyStopScroll')
  }
})