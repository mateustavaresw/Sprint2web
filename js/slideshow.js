// Slideshow de imagens

var slideAtual = 0;
var slides = document.querySelectorAll(".slide");
var contador = document.getElementById("slideContador");

function mostrarSlide(indice) {
  // Remove a classe ativo de todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("ativo");
  }

  // Adiciona a classe ativo no slide atual
  slides[indice].classList.add("ativo");

  // Atualiza o contador
  contador.textContent = (indice + 1) + " / " + slides.length;
}

function slideProximo() {
  slideAtual = slideAtual + 1;
  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }
  mostrarSlide(slideAtual);
}

function slideAnterior() {
  slideAtual = slideAtual - 1;
  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }
  mostrarSlide(slideAtual);
}

// Autoplay a cada 3 segundos
setInterval(function() {
  slideProximo();
}, 3000);
