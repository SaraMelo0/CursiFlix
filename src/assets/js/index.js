
//Scrollbar

const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
    if(window.scrollY >=100){
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
})


//Scroll suave de cima para baixo (clicar em ""Ver planos")

function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"});
}

document.querySelector("#btn").addEventListener("click", function(event){
    event.preventDefault()

    scrollTo(".plans");

    console.log("#btn");
}) 
// fim do scroll

//Scroll suave de cima para baixo (clicar em "Assinar")

function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"});
}

document.querySelector("#link").addEventListener("click", function(event){
    event.preventDefault()

    scrollTo(".plans");

    console.log("#link");
}) 
// fim do scroll


// Carrossel

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// número de cartas que cabem no carrossel de uma só vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insere cópias das primeiras carta no final do carrossel (rolagem infinita)
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insere cópias ds primeiras cartas no final do carrossel para rolagem infinita
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Role o carrossel na posição apropriada para ocultar os primeiros cartões duplicados no Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

//Adiciona ouvintes de eventos aos botões de seta para rolar o carrossel para a esquerda e para a direita
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Registra o cursor inicial e a posição de rolagem do carrossel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // se isDragging for falso retorne daqui
    //Atualiza a posição de rolagem do carrossel com base no movimento do cursor
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
        // se o carrossel estiver no início, vá até o final
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // se o carrossel estiver no final, rola até o início
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// fim do controle deslizate