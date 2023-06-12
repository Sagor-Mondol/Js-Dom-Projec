
var gallryInfo = document.querySelector('.gallery');
var bacBtn = document.querySelector('#backBtn');
var nexBtn = document.querySelector('#nextBtn');


gallryInfo.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    gallryInfo.scrollLeft += evt.deltaY;
    gallryInfo.style.scrollBehavior = 'auto';
} );

bacBtn.addEventListener('click', ()=> {
  gallryInfo.style.scrollBehavior = 'smooth';
  gallryInfo.scrollLeft -= 200;
});

nexBtn.addEventListener('click', ()=> {
  gallryInfo.style.scrollBehavior = 'smooth';
  gallryInfo.scrollLeft += 200;
});