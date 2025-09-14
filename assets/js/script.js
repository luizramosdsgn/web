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