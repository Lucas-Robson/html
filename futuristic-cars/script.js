let index = 0;
const imagens = document.querySelectorAll('.carousel-image');

function trocarImagem() {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
}

setInterval(trocarImagem, 4000); 
