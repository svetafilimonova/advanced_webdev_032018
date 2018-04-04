var validations = {
    required: function(value){
      return value !== '';
    },
    email: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
  function validate() {
    var form = document.querySelector('.contact-form');
        inputsArr = form.querySelectorAll('.contact-form__input');
        errorMessage = document.querySelector(".comment__form-error");
        successMessage = document.querySelector(".comment__form-succsess");
    
    form.addEventListener('submit', function(e){
      var i = 0;
      while (i < inputsArr.length) {
        var attr = inputsArr[i].getAttribute('data-validation');
            rules = attr ? attr.split(' ') : '';
            currentInput = inputsArr[i];
            j = 0;
        while (j < rules.length) {
          if(!validations[rules[j]](inputsArr[i].value)) {
            e.preventDefault();
            
            errorMessage.className = "comment__form-error";
            errorMessage.innerHTML = "Пожалуйста заполните форму";
            currentInput.classList.add = "error";
            return false;
          }
          errorMessage.className = "comment__form-error hidden";
        //   parent.className = "field";
          j++;
        }
        i++;
      }
      e.preventDefault();
      successMessage.className = "comment__form-succsess";

    }, false)
  }
  

  module.exports = validate;