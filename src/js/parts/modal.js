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