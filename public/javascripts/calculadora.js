window.addEventListener('load', function(){
 let $buttons = document.querySelectorAll('.button__calculadora');
 let $answer = document.querySelector('.input__calculadora');
 let $result = document.querySelector('#igual');
 let $clear = document.querySelector('#clear')
 console.log($result);
 
 $buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        $answer.value += button.value
    })
 })

function evalResult(){
    $answer.value = eval($answer.value) //eval evalua una cuenta o concatena strings
}
function clearOutput(){
    $answer.value = ''
}

 $result.addEventListener('click', evalResult)
 $clear.addEventListener('click', clearOutput)

})