function validarFormulario(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome === " " || email === " " || senha === " ") {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }
    alert("Cadastro realizado com sucesso!");

    document.getElementById("cadastroForm").reset();
    return true;
}