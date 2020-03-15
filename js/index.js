const display = document.querySelector('.display');


document.querySelectorAll('.digits button')
   .forEach( button => button.addEventListener('click' , digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}
document.querySelectorAll('.opers button')
   .forEach( button => button.addEventListener('click' , operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}