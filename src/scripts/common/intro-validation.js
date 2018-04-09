const introValidation = (function () {

  return {

    init: function () {

      const introForm = document.querySelector('.auth-form');
      const login = document.getElementById('login');
      const password = document.getElementById('password');
      const submitBtn = document.querySelector('.auth-form__button-login');
      const parent = document.querySelector('.auth-form__row');
      
      
      
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
      
      
            function introValidation () {
              introForm.addEventListener('submit', function(e){
       
            resetError(login, login.closest(".auth-form__row"));
            if (!login.value) {
              e.preventDefault();
              showError(login, login.closest(".auth-form__row"), 'Введите логин');
            }
      
            resetError(password, password.closest(".auth-form__row"));
            if (!password.value) {
              e.preventDefault();
              showError(password, password.closest(".auth-form__row"), 'Введите пароль');
            }
      
      
      
          }, false);
        };
    }
  }
  
}());


module.exports = introValidation;