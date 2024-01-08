const selects = document.querySelectorAll('.form_select .select'),
      options = document.querySelectorAll('.form_select .options li'),
      doctor = document.querySelector('.popUp-registration .doctor_active'),
      service = document.querySelector('.popUp-registration .service_active'),
      date = document.querySelector('.popUp-registration .form-date'),
      time = document.querySelector('.popUp-registration .time_active'),
      submitBtn = document.querySelector('.popUp-registration .form-btn'),              
      popUpRegistration = document.querySelector('.popUp-registration'),              
      registrationBtn = document.querySelectorAll('.registration-btn'),
      popUp = document.querySelectorAll('.popUp'),
      popUpClose = document.querySelectorAll('.popUp-close'),
      popUpcall = document.querySelector('.popUp-call'),
      callBtn = document.querySelectorAll('.call-btn'),
      submitBtnCall = document.querySelector('.popUp-call .form-btn'),
      userName = document.querySelector('.popUp-call .form-name'),
      userPhone = document.querySelector('.popUp-call .form-phone')


registrationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpRegistration.classList.remove('d-none')
    });
});

callBtn.forEach(call => {
    call.addEventListener('click', () => {
        popUpcall.classList.remove('d-none')
    });
});

popUpClose.forEach(close => {
    close.addEventListener('click', () => {
      close.parentElement.classList.add('popUpHide')
      setTimeout(() => {
        close.parentElement.parentElement.classList.add('d-none')
        close.parentElement.classList.remove('popUpHide')
      }, 450);
    })
  })
  
  window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
      if(e.target == popup) {
        popup.children[0].classList.add('popUpHide')
        setTimeout(() => {
          popup.classList.add('d-none')
          popup.children[0].classList.remove('popUpHide')
        }, 450);
    }
    })
  });

selects.forEach(select => {
  select.addEventListener('click', () => {
    select.parentElement.classList.add('showOptions')
  })
});

options.forEach(option => {
  option.addEventListener('click', () => {
    option.parentElement.previousElementSibling.children[0].textContent = option.textContent;
    option.parentElement.parentElement.classList.remove('showOptions')
    option.parentElement.previousElementSibling.style.borderColor = '#43C56F'
  })
});

submitBtn.addEventListener('click', () => {
    successFunc();
    if(doctor.textContent != 'Выберите врача' &&
       service.textContent != 'Выберите услугу' &&
       date.value != '' &&
       time.textContent != 'Выбрать время'
    ) {
    popUpRegistration.children[0].classList.add('d-none')
    popUpRegistration.children[1].classList.remove('d-none');
    setTimeout(() => {
        window.location.reload()
    }, 2000);
    }
});

function successFunc() {
    if(doctor.textContent == 'Выберите врача') {
        doctor.parentElement.style.borderColor = 'tomato'
    } else {
        doctor.parentElement.style.borderColor = '#43C56F'
        doctor.nextElementSibling.classList.add('success')
    }

    if(service.textContent == 'Выберите услугу') {
        service.parentElement.style.borderColor = 'tomato'
    } else {
        service.parentElement.style.borderColor = '#43C56F'
        service.nextElementSibling.classList.add('success')
    }

    if(date.value == '') {
        date.style.borderColor = 'tomato'
    } else {
        date.style.borderColor = '#43C56F'
        date.nextElementSibling.classList.add('success')
    }

    if(time.textContent == 'Выбрать время') {
        time.parentElement.style.borderColor = 'tomato'
    } else {
        time.parentElement.style.borderColor = '#43C56F'
        time.nextElementSibling.classList.add('success')
    }
}

submitBtnCall.addEventListener('click', () => {
    successFuncCall();
    if(
       userName.value != '' &&
       userPhone.value != ''
    ) {
    popUpcall.children[0].classList.add('d-none')
    popUpcall.children[1].classList.remove('d-none');
    setTimeout(() => {
        window.location.reload()
    }, 2000);
    }
});

function successFuncCall() {
    if(userName.value == '') {
        userName.style.borderColor = 'tomato'
    } else {
        userName.style.borderColor = '#43C56F'
        userName.nextElementSibling.classList.add('success')
    }

    if(userPhone.value == '') {
        userPhone.style.borderColor = 'tomato'
    } else {
        userPhone.style.borderColor = '#43C56F'
        userPhone.nextElementSibling.classList.add('success')
    }
}

// input mask
$(".phone").inputmask({"mask": "+7(999) 999-99-99"});


