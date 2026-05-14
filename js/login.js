// Login e validação de formulário

function fazerLogin() {
  var email = document.getElementById("email").value.trim();
  var senha = document.getElementById("senha").value;
  var erroEmail = document.getElementById("erroEmail");
  var erroSenha = document.getElementById("erroSenha");

  // Limpa erros anteriores
  erroEmail.textContent = "";
  erroSenha.textContent = "";

  var valido = true;

  // Validação do e-mail
  if (email === "") {
    erroEmail.textContent = "Informe seu e-mail.";
    valido = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    erroEmail.textContent = "E-mail inválido.";
    valido = false;
  }

  // Validação da senha
  if (senha === "") {
    erroSenha.textContent = "Informe sua senha.";
    valido = false;
  } else if (senha.length < 6) {
    erroSenha.textContent = "A senha precisa ter pelo menos 6 caracteres.";
    valido = false;
  }

  if (!valido) return;

  // Verifica credenciais
  if (email === "demo@moodshot.com" && senha === "123456") {
    sessionStorage.setItem("usuario", "Usuário Demo");
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha incorretos.\n\nUse: demo@moodshot.com / 123456");
  }
}
