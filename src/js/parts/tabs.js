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