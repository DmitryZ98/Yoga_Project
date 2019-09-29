require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let calc = require('./parts/cals');
    let form = require('./parts/form');
    let slider = require('./parts/slider');
    let tabs = require('./parts/tabs');
    let timer = require('./parts/timer');
    let modal = require('./parts/modal');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});