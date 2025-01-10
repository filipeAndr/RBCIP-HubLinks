// Função para alterar o link
function alterarLink() {
    // Obter a data e hora atuais
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hora = agora.getHours();   // Hora atual

    // Selecionar o elemento do link
    const link = document.getElementById("meuLink");

    // Verificar dia e horário
    if ((diaSemana == 4) || (diaSemana == 5)) { // Quinta feira ou Sexta feira 
        link.href = "https://docs.google.com/forms/d/e/1FAIpQLScMa7x1JvlzTrC9e1_y99A754qzoLtUpim8wHlhqj3p1IF0PA/viewform?usp=sf_link";
        link.textContent = "Acessar";
    } else {
        link.href = "./paginaerro/link-indisponivel.html";
        link.textContent = "Acessar";
    }
}

// Chamar a função ao carregar a página
alterarLink();

// Opcional: Atualizar o link a cada minuto (caso a página fique aberta por muito tempo)
setInterval(alterarLink, 60000);