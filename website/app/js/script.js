const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body= document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

   // console.log('opening hamburger');
   btnHamburger.addEventListener('click',function(){

    if(header.classList.contains('open')){// this can be done to close the hamburger menu  
       body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
element.classList.remove('fade-in');
element.classList.add('fade-out');
        });
    }
    else{
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
}
});