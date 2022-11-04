window.addEventListener('load', function(){
let $input = document.getElementById('input');
let $mas = document.getElementById('mas');
let $menos = document.getElementById('menos');
let $por = document.getElementById('por');
let $division = document.getElementById('division');
let $igual = document.getElementById('igual');
let $uno = document.getElementById('uno');
let $numbers = document.querySelectorAll('.numbers')
let number = [];
function value(event){
    console.log(event.target.value);
}
for(let i = 0; i < $numbers.length; i++){
   number.push($numbers[i].value)
    console.log(number);
}
console.log(number);
number.addEventListener('click', value)




})