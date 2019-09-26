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