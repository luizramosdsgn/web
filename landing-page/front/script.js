// Toogle da Lua e do Sol

const iconMoon = document.querySelector('.iconMoon');
const iconSun = document.querySelector('.iconSun');

iconMoon.addEventListener('click', () => {

    iconMoon.classList.add('inativo');
    iconSun.classList.remove('inativo');
});

iconSun.addEventListener('click', () => {
  
    iconSun.classList.add('inativo');
    iconMoon.classList.remove('inativo');
});


// Hover nos cards de serviço

var cards = document.querySelectorAll('.servicescard');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    var flecha = card.querySelector('.flechaProjeto');
    var imagem = card.querySelector('.imageProjeto');

    if (flecha) flecha.style.opacity = 1;
    if (imagem) imagem.style.opacity = 1;
  });

  card.addEventListener('mouseleave', () => {
    var flecha = card.querySelector('.flechaProjeto');
    var imagem = card.querySelector('.imageProjeto');

    if (flecha) flecha.style.opacity = 0;
    if (imagem) imagem.style.opacity = 0;
  });
});