"use strict"

const burgerBtn = document.querySelector('.main-header__burger-btn');

burgerBtn.addEventListener('click', (event)=>{
    burgerBtn.classList.toggle('main-header__burger-btn--active');
});