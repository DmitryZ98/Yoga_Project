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