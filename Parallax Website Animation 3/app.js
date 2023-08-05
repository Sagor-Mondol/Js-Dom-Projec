
const header = document.getElementById('header');
const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const btn = document.getElementById('btn');
const forest = document.getElementById('forest');
const rocks = document.getElementById('rocks');
const water = document.getElementById('water');

window.addEventListener('scroll', () =>{
    const value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
    
})