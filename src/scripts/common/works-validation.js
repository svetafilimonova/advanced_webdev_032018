
    const form = document.querySelector('.contact-form');
    // const inputsArr = form.querySelectorAll('.contact-form__input');
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("msg");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    function showError(elem, container, errorMessage) {
      elem.classList.add("error");
      var msgElem = document.createElement('div');
      msgElem.className = "comment__form-error";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(elem, container) {
      elem.classList.remove("error");
      if (container.lastChild.className == "comment__form-error") {
        container.removeChild(container.lastChild);
      }
    }


  function initValidation () {
    form.addEventListener('submit', function(e){

        
      resetError(name, name.parentNode);
      if (!name.value) {
        e.preventDefault();
        showError(name, name.parentNode, 'Введите имя');
      }

      resetError(email, email.parentNode);
      if (!email.value || !re.test(email.value)) {
        e.preventDefault();
        showError(email, email.parentNode, 'Введите корректный адрес электронной почты');
      }

      resetError(message, message.parentNode);
      if (!message.value) {
        e.preventDefault();
        showError(message, message.parentNode, 'Введите Ваше сообщение');
      }


    }, false);
  };
  

  module.exports = initValidation;


      