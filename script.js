// Função para salvar feedbacks no localStorage
function salvarFeedback(dados) {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(dados);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
}

// Função para enviar feedback
function enviarFeedback(event) {
    event.preventDefault();
    const disciplina = document.getElementById("disciplinaFeedback").value;
    const avaliacao = document.getElementById("avaliacaoFeedback").value;
    const comentario = document.getElementById("comentarioFeedback").value;

    if (!avaliacao) {
        alert("Selecione uma avaliação!");
        return;
    }

    const feedback = { id: Date.now(), disciplina, avaliacao, comentario };
    salvarFeedback(feedback);

    alert("Feedback enviado com sucesso!");
    fecharTela('telaFeedback');
}

// Função para abrir relatório em nova janela
function abrirRelatorioFeedback() {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    let conteudoRelatorio = `
        <html>
        <head>
            <title>Relatório de Feedback</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
                th { background-color: #f4f4f4; }
            </style>
        </head>
        <body>
            <h2>Relatório de Feedback</h2>
            <table>
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>Avaliação</th>
                        <th>Comentário</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (feedbacks.length === 0) {
        conteudoRelatorio += `
                    <tr>
                        <td colspan="3">Nenhum feedback registrado.</td>
                    </tr>
        `;
    } else {
        feedbacks.forEach(feedback => {
            conteudoRelatorio += `
                <tr>
                    <td>${feedback.disciplina}</td>
                    <td>${feedback.avaliacao}</td>
                    <td>${feedback.comentario || "Sem comentário"}</td>
                </tr>
            `;
        });
    }

    conteudoRelatorio += `
                </tbody>
            </table>
        </body>
        </html>
    `;

    const novaJanela = window.open("", "_blank");
    novaJanela.document.write(conteudoRelatorio);
    novaJanela.document.close();
}

// Função para fechar telas
function fecharTela(telaId) {
    document.getElementById(telaId).style.display = 'none';
}

// Função para exibir uma tela
function exibirTela(telaId) {
    document.querySelectorAll('.telaCadastro').forEach(tela => tela.style.display = 'none');
    document.getElementById(telaId).style.display = 'block';
}
// Função para realizar o logout
function logout() {
    // Limpa os dados do localStorage
    localStorage.clear();
    
    // Redireciona o usuário para a página de login
    window.location.href = 'login.html'; // Substitua pelo caminho correto para sua página de login
}
