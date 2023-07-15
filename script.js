//pegando todos os input do tipo Number do DOM.

let cxcelsius = document.getElementById('cxcelsius');
let cxfahrenheit = document.getElementById('cxfahrenheit');
let cxkelvin = document.getElementById('cxkelvin');

//pegando todos os input do tipo Ranger do DOM.

let RAcelsius = document.getElementById('celsiusrange');
let RAfahrenheit = document.getElementById('rangefahren');
let RAkelvin = document.getElementById('rangekelvin');


//os valores que está em ranger sera passado para o number 

cxcelsius.value = RAcelsius.value;
cxfahrenheit.value = RAfahrenheit.value;
cxkelvin.value = RAkelvin.value;

/*Dentro de uma function que funcionarar como changer ou seja uma alto checagem sem precisar de aperta botão..

O objetivo desse porjeto é controlar a temperatura pelo ranger o numero que o ranger passar sera feito a converção de temperatura de Fahrenheit e Kelvin os valores será passado para os inputs do type number para que o usuario possa visualizar o valor.. valores passado pelo value do input number.*/



//calculando a temperatura de fahrenheit.

function calculoF(){
    let celsius_fahrenheit = (parseFloat(RAcelsius.value) * 9/5) + 32;
    cxfahrenheit.value = celsius_fahrenheit.toFixed(2);

    //adicionando o valor calculado tambem no Ranger.
    RAfahrenheit.value = celsius_fahrenheit;

}

//calculando a temperatura de Kelvin

function calculoK(){
    let celsius_Kelvin = parseFloat(RAcelsius.value) + 273.15;
    cxkelvin.value = celsius_Kelvin;

    //adicionando valor calculado no ranger.
    RAkelvin.value = celsius_Kelvin;
}

//function para atualizar o number do celsius.

function atualizarC(){
    cxcelsius.value = RAcelsius.value;
}

//atualizando o ranger ao mesmo tempo o number tambem se atualizará.

function atualizarF(){
    cxfahrenheit.value = RAfahrenheit.value;
}

function atualizarK(){
    cxkelvin.value = RAkelvin.value;
}

//todos os eventos estão escutando por event do javascript.

RAcelsius.addEventListener('change', calculoF)
RAcelsius.addEventListener('change', calculoK)
RAcelsius.addEventListener('change', atualizarC)

//atualizando os inputs.
RAkelvin.addEventListener('change', atualizarK);
RAfahrenheit.addEventListener('change', atualizarF)
