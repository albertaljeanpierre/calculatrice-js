
//définition des objets
var result = document.getElementById('result');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var num9 = document.getElementById('num9');
var num0 = document.getElementById('num0');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var less = document.getElementById('less');
var more = document.getElementById('more');
var ce = document.getElementById('ce');




//définition des fontions 

function reset() {

    result.value = '0';
}
function add(num) {
   
    if (result.value == 0) {
        var operante = '';
    } else {
        var operante = result.value;
    }
var newOperante = operante + num;
result.value = newOperante; 
}

//définition des évenement

ce.addEventListener('click', reset);
num9.addEventListener('click', function()  {
    add('9');
}
);
num8.addEventListener('click', function()  {
    add('8');
}
);
num7.addEventListener('click', function()  {
    add('7');
}
);
num6.addEventListener('click', function()  {
    add('6');
}
);
num5.addEventListener('click', function()  {
    add('5');
}
);
num4.addEventListener('click', function()  {
    add('4');
}
);
num3.addEventListener('click', function()  {
    add('3');
}
);
num2.addEventListener('click', function()  {
    add('2');
}
);
num1.addEventListener('click', function()  {
    add('1');
}
);
num0.addEventListener('click', function()  {
    add('0');
}
);

