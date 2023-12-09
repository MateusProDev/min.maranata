// ação do formulario

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtém o valor do campo de e-mail
    var email = document.getElementById("email").value;
  
    // Configuração do endpoint do Getform.io
    var endpoint = "YOUR_FORM_ENDPOINT";
  
    // Envia os dados do formulário para o endpoint usando o Fetch API
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })
      .then(function(response) {
        // Exibe a mensagem de sucesso
        var successMessage = document.getElementById("success-message");
        successMessage.classList.remove("hidden");
      })
      .catch(function(error) {
        // Exibe mensagem de erro
        console.error("Erro ao enviar o e-mail:", error);
      });
  });
  // função secao que abre

function exibirConteudo() {
    var conteudo = document.getElementById("conteudo");
    if (conteudo.style.display === "none") {
      conteudo.style.display = "block";
    } else {
      conteudo.style.display = "none";
    }
  }