window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),//Хранит псевдомассив наших табов
        info = document.querySelector('.info-header'),//Содержит список табов
        tabContent = document.querySelectorAll('.info-tabcontent');//Хранит контент табов

    //Функция,скрывающая табы через цикл
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);//Передаём аргуемент(1) >> для скрытия остальных табов(кроме 1)
 
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

    //Создание таймера
    let deadLine = '2019-08-17';

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

 //Create Modal window
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

});

