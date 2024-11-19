function fazerLogin(event) {
    event.preventDefault();

    // Recuperar dados do formulário
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    // Validação simples
    if (email === "pablorobertoa@gmail.com" && senha === "123456") {
        alert("Login realizado com sucesso!");
        window.location.href = "file:///C:/feedback%20principal/principal/index.html"; // Redireciona para a página principal
    } else {
        const errorMessage = document.getElementById("error");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Email ou senha incorretos.";
    }
}
