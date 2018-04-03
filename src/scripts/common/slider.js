const slides = document.querySelectorAll('.works__item');
const next = document.querySelector('.slider__arrow-icon--right');
const previous = document.querySelector('.slider__arrow-icon--left');
const controls = document.querySelectorAll('.slider__arrow-icon');
const dots = document.querySelector('.nav-dots');
const dots = document.querySelector('.nav-dots');

let currentSlide = 0;

console.log(slides); 

// function createDots () {

//     const dot = document.createElement('li');
//     dot.className = "nav-dots__item";

//     Array.from(slides).forEach(function(elem,index) {
//             // dots.appendChild(dot);
//             console.log(elem);
//     });

//     slidesArr = Array.from(slides);

//     console.log(slidesArr);


//     console.log(slides); 
// } 

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'works__item';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'works__item showing';
}

// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
// function showButtons(){
//     for(var i=0; i<controls.length; i++){
//         controls[i].style.display = 'inline-block';
//     }
// }

// инициализация слайдера
function sliderInit(){
    if (slides.length !== 0){ // если на странице есть нужный html код
        setupListners();
        // showButtons();
        createDots ();
    }
}

module.exports = sliderInit;