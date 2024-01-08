const username = document.getElementById('user-name'),
      userphone = document.getElementById('user-phone'),
      useremail = document.getElementById('user-email'),
      submitBtnForm = document.querySelector('.banner-form .form__btn'),
      popUpThanks = document.querySelector('.popUp-thanks');


// login
submitBtnForm.addEventListener('click', () => {
    checkInputsLogin()
    let successEmail = useremail.parentElement.children[2].classList,
        successName = username.parentElement.children[2].classList,
        successPass = userphone.parentElement.children[2].classList;
  
    if(successName == 'success' && successEmail == 'success' && successPass == 'success') {
    //   submitBtnForm.type = 'submit'  
        popUpThanks.classList.remove('d-none') ;
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }
  });
// login
  function checkInputsLogin() {
    const useremailValue = useremail.value.trim(),
          userphoneValue = userphone.value.trim(),
          usernameValue = username.value.trim();

    
    
    if(usernameValue === '') {
        setErrorFor(username, '1px solid #E47169')
      } else {
        setSuccesFor(username)
        username.parentElement.children[2].classList.add('success')
      }
  
    if(useremailValue === '') {
      setErrorFor(useremail, '1px solid #E47169')
    }
    else if(!isEmail(useremailValue)) {
      setErrorFor(regisEmail, '1px solid #E47169')
    }
     else {
      setSuccesFor(useremail)
      useremail.parentElement.children[2].classList.add('success')
    }
    
    if(userphoneValue === '') {
      setErrorFor(userphone, '1px solid #E47169')
    } else {
      setSuccesFor(userphone)
      userphone.parentElement.children[2].classList.add('success')
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

  username.addEventListener('keypress', () => {
    username.style.border = `1px solid #30BC57`;
  });

  // input mask
$("#user-phone").inputmask({"mask": "+7(999) 999-99-99"});