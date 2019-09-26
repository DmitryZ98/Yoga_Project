/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/cals.js":
/*!******************************!*\
  !*** ./src/js/parts/cals.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cals() {
    let persons = document.querySelectorAll('.counter-block-input')[0];//Получаем первый элемент(input)
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (personsSum == 0 || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (personsSum == 0 || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    
    place.addEventListener('change', function() {
        if (personsSum == 0 || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}


module.exports = cals;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
     
    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        input = form.getElementsByTagName ('input'),
        statusMessage = document.createElement('div');
         
     
        statusMessage.classList.add('status');
     
    function sendForm(elem){
     
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
        
            let formData = new FormData(elem);
        
        function postData() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.onreadystatechange = function () {
                    if(request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                request.send(formData); // Вот тут другое название переменной
            });
        }
            function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData (formData)
            .then (() => statusMessage.innerHTML = message.loading)
            .then (() => statusMessage.innerHTML = message.sucsess)
            .catch (() => statusMessage.innerHTML = message.failure)
            .then (clearInput);
        });
    }
    sendForm(form);
    sendForm(formDown);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let btnDescr = document.querySelectorAll('.description-btn');
    
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
});

//Открываем подробную информацию на каждом табе
    [].forEach.call(btnDescr,function(event){
        event.addEventListener('click',function(){
            overlay.style.display = "block";
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });
    });

}

module.exports  = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
        'use strict';
        let tab = document.querySelectorAll('.info-header-tab'),//Хранит псевдомассив наших табов
            info = document.querySelector('.info-header'),//Содержит список табов
            tabContent = document.querySelectorAll('.info-tabcontent');//Хранит контент табов
    
        //Функция,скрывающая табы через цикл
        function hideTabContent(a = 1) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent();
        
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    
        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
}


module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadLine = '2020-01-01';
    let descrTime = document.querySelector('.timer-action');
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);//секунды
        let minutes = Math.floor((t/1000/60) % 60);//минуты
        let hours = Math.floor((t / (1000 * 60 * 60)));//час
        // let month = Math.floor((t/1000/60) % 24);//месяц
        // let days = Math.floor((t / (1000 * 60 * 60 * 24)));//дни
        if(t < 0){
            let timerFinish = document.querySelector('.timer-finish');
            timerFinish.textContent = "Акция закончилась";
            return{
                'total': t,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            };
        } else {
            descrTime.textContent = "До Нового Года осталось!!!:";
        }
        return{
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            let timeInterval = setInterval(updateClock,1000);

            function updateClock(){
                let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if(hours.textContent < 10){
                    hours.textContent = '0' + t.hours;
                }
                if( minutes.textContent < 10){
                    minutes.textContent = '0' + t.minutes;
                }
                if(seconds.textContent < 10){
                    seconds.textContent = '0' + t.seconds;
                }
                if(t.total <= 0){
                    clearInterval(timeInterval);
                }
                
            }
    }
    setClock('timer',deadLine);

}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let calc = __webpack_require__(/*! ./parts/cals */ "./src/js/parts/cals.js");
    let form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
    let slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");
    let tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
    let timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
    let modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map