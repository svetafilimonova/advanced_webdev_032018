const slides = document.querySelectorAll('.works__item');
const next = document.querySelector('.slider__arrow-icon--right');
const previous = document.querySelector('.slider__arrow-icon--left');
const controls = document.querySelectorAll('.slider__arrow-icon');
const dots = document.querySelector('.nav-dots');
const slidesArr = Array.from(slides);
const dotsArr = [];



let currentSlide = 0;


function createDots () {
    
    for(let i=0; i< slidesArr.length; i++ ){
        const dot = document.createElement('li');
        dot.className = "nav-dots__item";
        dots.appendChild(dot);
        dotsArr.push(dot);
    }
    dotsArr[0].classList.add('nav-dots__item--active');
    console.log(dotsArr);

} 

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'works__item';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'works__item showing';

    let activeSlide = slidesArr.findIndex(function(elem, ind){
        return elem.classList.contains("showing");
    });
    
    for(let i = 0; i < dotsArr.length; i++) {
        dotsArr[i].classList.remove('nav-dots__item--active');
        dotsArr[activeSlide].classList.add("nav-dots__item--active");
    }
    
    

    console.log(dotsArr);

    console.log(activeSlide);



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
    if (slides.length){ // если на странице есть нужный html код
        createDots();
        setupListners();
        
    }
}

module.exports = sliderInit;