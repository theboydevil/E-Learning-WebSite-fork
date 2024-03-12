const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    document.querySelector('#main').classList.toggle('no-scroll');
});