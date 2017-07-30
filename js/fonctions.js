
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
var calcul = document.getElementById('calcul');
var equal = document.getElementById('equal');
var operateur = ['+', '-', '*', '/'];
var clickOperator = false;





//définition des fontions 
// Effectue une remise à zéro de la derniére opérante écrite
function reset(valeur) {
    try {
        if (valeur === undefined) {
            throw new Error("Cette fonction demande un paramêtre obligatoire");
        }
    } catch (e) {
        console.log(e.name + ": " + e.message); // on passe les caractéristiques de l'exception à un gestionnaire d'erreur
        reset(null);
    }

    if (valeur !== 0) {
        result.value = valeur;
    } else if (valeur === null) {
        result.value = valeur;
        alert('null');
    } else {
        result.value = '0';
    }

    result.value = valeur;
}

// Ajoute un chiffre à l'opérante
function addNum(num) {
    if (result.value === '0') {
        var operante = '';
        var newOperante = operante + num;
        result.value = newOperante;
    } else if (clickOperator === true) { // si un operateur est sélectionner
        var operante = result.value;
        reset(null);
        result.value = num;
    } else {
        var operante = result.value;
        var newOperante = operante + num;
        result.value = newOperante;
    }

    clickOperator = false;
}

// Ajoute l'opérateur au calcul
function addOperante(operator) {
    var operante = result.value;
// insert les noeuds résultants dans le DOM à la position Juste à l'intérieur de l'élément, après son dernier enfant.
    calcul.insertAdjacentHTML('beforeend', operante + ' ' + operator);
}

// Effectue un calclul et affiche le resultat
function Calcul(operante = null) {
    // récupère le calcul sous forme d'une experssion se terminant par un operateur.
    var expressionOperator = calcul.textContent;
    if (operante !== null) { // pour optenir le calcule total
        var expression = expressionOperator + operante;
        var total = eval(expression);
        result.value = total;
    } else { // retourne un calcul partiel. 

        if (expressionOperator !== '') {
            // retire le dernier caractère l'opérateur
            var expression = expressionOperator.substr(0, expressionOperator.length - 1);
            var total = eval(expression);
            result.value = total;
        }

}

}

//définition des évenement

ce.addEventListener('click', function () {
    reset(0);
});
num9.addEventListener('click', function () {
    addNum('9');
}
);
num8.addEventListener('click', function () {
    addNum('8');
}
);
num7.addEventListener('click', function () {
    addNum('7');
}
);
num6.addEventListener('click', function () {
    addNum('6');
}
);
num5.addEventListener('click', function () {
    addNum('5');
}
);
num4.addEventListener('click', function () {
    addNum('4');
}
);
num3.addEventListener('click', function () {
    addNum('3');
}
);
num2.addEventListener('click', function () {
    addNum('2');
}
);
num1.addEventListener('click', function () {
    addNum('1');
}
);
num0.addEventListener('click', function () {
    addNum('0');
}
);
more.addEventListener('click', function () {
    addOperante('+');
    clickOperator = true;
    Calcul();
}
);
equal.addEventListener('click', function () {
    var operante = result.value;
    Calcul(operante);
    calcul.textContent = '';
    clickOperator = true;

}
);


