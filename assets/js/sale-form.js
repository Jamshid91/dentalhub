const user_name = document.getElementById('user_name'),
      user_phone = document.getElementById('user_phone'),
      user_email = document.getElementById('user_email'),
      submitBtn_form = document.querySelector('.sale-form .form__btn')
      // popUpThanks = document.querySelector('.popUp-thanks')


// login
submitBtn_form.addEventListener('click', () => {
    checkInputsForm()
    let successEmail = user_email.parentElement.children[2].classList,
        successName = user_name.parentElement.children[2].classList,
        successPass = user_phone.parentElement.children[2].classList;
  
    if(successName == 'success' && successEmail == 'success' && successPass == 'success') {
    //   submitBtn_form.type = 'submit'  
        popUpThanks.classList.remove('d-none') ;
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }
  });
// login
  function checkInputsForm() {
    const user_emailValue = user_email.value.trim(),
          user_phoneValue = user_phone.value.trim(),
          user_nameValue = user_name.value.trim();

    
    
    if(user_nameValue === '') {
        setErrorFor(user_name, '1px solid #E47169')
      } else {
        setSuccesFor(user_name)
        user_name.parentElement.children[2].classList.add('success')
      }
  
    if(user_emailValue === '') {
      setErrorFor(user_email, '1px solid #E47169')
    }
    else if(!isEmail(user_emailValue)) {
      setErrorFor(regisEmail, '1px solid #E47169')
    }
     else {
      setSuccesFor(user_email)
      user_email.parentElement.children[2].classList.add('success')
    }
    
    if(user_phoneValue === '') {
      setErrorFor(user_phone, '1px solid #E47169')
    } else {
      setSuccesFor(user_phone)
      user_phone.parentElement.children[2].classList.add('success')
    }
  }

  function setErrorFor(input, border) {
    input.style.border = border
  }
  
  function setSuccesFor(input) {
    input.style.border = `1px solid #30BC57`;
  } 
    
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  user_name.addEventListener('keypress', () => {
    user_name.style.border = `1px solid #30BC57`;
  });

  // input mask
$("#user_phone").inputmask({"mask": "+7(999) 999-99-99"});