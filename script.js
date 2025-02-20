const script_do_google = 'https://script.google.com/macros/s/AKfycbyTynnOqpxodXEY5Gs7p-02nezxYQcalpdPMD3TFRTwOJW2aDenCjw7Ij8roOXMJY5Epg/exec';
const dados_do_formulario = document.forms['formulario-atendimento'];

// Verifica se o formulário existe antes de adicionar o evento
if (dados_do_formulario) {
    dados_do_formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch(script_do_google, { 
            method: 'POST',
            body: new FormData(dados_do_formulario) 
        })
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            console.log("Resposta do servidor:", data);

            if (data.status === "sucesso") {
                alert('Dados enviados com sucesso!');
                dados_do_formulario.reset();
            } else {
                alert('Erro ao enviar os dados: ' + data.mensagem);
            }
        })
        .catch(error => {
            alert('Erro no envio dos dados! Verifique a conexão e tente novamente.');
            console.error('Erro no envio dos dados:', error);
        });
    });
} else {
    console.error("Erro: O formulário 'formulario-atendimento' não foi encontrado.");
}
