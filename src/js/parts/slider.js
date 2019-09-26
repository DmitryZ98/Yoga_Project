function slieder() {
let slideIndex = 1;//Парамтер текущего слайда
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');
    showSlides(slideIndex);

    //Функция показа слайдов
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = "block";//Первый слайд,т.к нумерация с 0
        dots[slideIndex - 1].classList.add('dot-active');
    }

    //Функция инкремента слайда(показ следующего)

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    //Функция определяющая текущий слайд
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click',function() {
        plusSlides(-1);
    });
    next.addEventListener('click',function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click',function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                 currentSlide(i);
            }
        }
    });
}
module.exports = slieder;