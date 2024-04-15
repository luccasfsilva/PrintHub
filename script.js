document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    container.classList.add("show"); // Adiciona a classe "show" para fazer o container aparecer gradualmente
});

document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores do formulário
    var printType = document.getElementById("print-type").value;
    var quantity = document.getElementById("quantity").value;
    var deadline = document.getElementById("deadline").value;
    var comments = document.getElementById("comments").value;

    // Construir o corpo do e-mail
    var emailBody = "Tipo de Impressão: " + printType + "\n" +
                    "Quantidade: " + quantity + "\n" +
                    "Prazo de Entrega: " + deadline + "\n" +
                    "Comentários Adicionais: " + comments;

    // Enviar o e-mail usando Google Colab
    google.colab.kernel.invokeFunction('send_email', [emailBody], {});

    // Exibir uma mensagem de confirmação para o usuário
    alert("Pedido enviado com sucesso!");

    // Limpar o formulário após o envio
    document.getElementById("order-form").reset();
});
