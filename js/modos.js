// Modos de câmera e simulação de captura

var modos = [
  {
    nome: "Alegria",
    legenda: "Esse sorriso não tem preço.",
    filtro: "Saturação alta, tons quentes"
  },
  {
    nome: "Calma",
    legenda: "Respira. Esse momento é seu.",
    filtro: "Tons frios, baixo contraste"
  },
  {
    nome: "Intensidade",
    legenda: "Você foi além do que imaginou.",
    filtro: "Alto contraste, nitidez máxima"
  },
  {
    nome: "Natureza",
    legenda: "Conexão com o que importa.",
    filtro: "Tons verdes, luz natural"
  },
  {
    nome: "Nostalgia",
    legenda: "Alguns momentos merecem ser eternos.",
    filtro: "Sépia, grain vintage"
  }
];

var modoSelecionado = null;

// Cria os cards dinamicamente
var grid = document.getElementById("modosGrid");

for (var i = 0; i < modos.length; i++) {
  var modo = modos[i];

  var card = document.createElement("div");
  card.className = "modo-card";
  card.setAttribute("data-index", i);

  // Nome do modo
  var nome = document.createElement("p");
  nome.className = "nome";
  nome.textContent = modo.nome;

  card.appendChild(nome);

  // Evento de clique
  card.addEventListener("click", function () {

    // Remove seleção anterior
    var todos = document.querySelectorAll(".modo-card");

    for (var j = 0; j < todos.length; j++) {
      todos[j].classList.remove("selecionado");
    }

    // Seleciona o card atual
    this.classList.add("selecionado");

    // Salva o modo selecionado
    modoSelecionado = modos[this.getAttribute("data-index")];
  });

  grid.appendChild(card);
}

// Função de captura
function capturarFoto() {

  if (!modoSelecionado) {
    alert("Selecione um modo antes de capturar!");
    return;
  }

  var confirma = confirm(
    "Capturar foto no modo " + modoSelecionado.nome + "?"
  );

  if (!confirma) {
    return;
  }

  var resultado = document.getElementById("resultado");

  resultado.style.display = "block";

  resultado.innerHTML =
    "<p><strong>Modo:</strong> " + modoSelecionado.nome + "</p>" +
    "<p><strong>Legenda gerada:</strong> " + modoSelecionado.legenda + "</p>" +
    "<p><strong>Filtros aplicados:</strong> " + modoSelecionado.filtro + "</p>";
}