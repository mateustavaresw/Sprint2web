// Verifica se o usuário está logado
var usuario = sessionStorage.getItem("usuario");

if (!usuario) {
  alert("Você precisa fazer login para acessar esta página.");
  window.location.href = "index.html";
}

// Exibe o nome do usuário no header
document.getElementById("nomeUsuario").textContent = "Olá, " + usuario + "!";

// Função de sair
function sair() {
  var confirma = confirm("Tem certeza que deseja sair?");
  if (confirma) {
    sessionStorage.removeItem("usuario");
    window.location.href = "index.html";
  }
}
