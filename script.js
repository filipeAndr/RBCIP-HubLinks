// Função para alterar o link
function alterarLink() {
    // Obter a data e hora atuais
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hora = agora.getHours();   // Hora atual

    // Selecionar o elemento do link
    const link = document.getElementById("meuLink");

    // Verificar dia e horário
    if ((diaSemana === 4 && hora > 7) && (diaSemana === 4 && hora < 10)) { // Quinta feira, depois das 7h e antes das 10h
        link.href = "https://forms.gle/6EftgM4Dgr1kzTu38";
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