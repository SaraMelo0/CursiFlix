//Scrollbar

const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
    if(window.scrollY >=60){
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
})

// Linha de progresso

const progressBar = document.querySelector('.progress-bar');
const percentage = document.querySelector('.percentage');
let width = 0;

const updateProgressBar = () => {
    width += 10;
    progressBar.style.width = width + '%';
    percentage.textContent = width + '%';

    if (width < 20) {
        setTimeout(updateProgressBar, 1000);
    }
};

updateProgressBar();