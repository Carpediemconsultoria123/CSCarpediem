const script_do_google = 'https://script.google.com/macros/s/AKfycbyTynnOqpxodXEY5Gs7p-02nezxYQcalpdPMD3TFRTwOJW2aDenCjw7Ij8roOXMJY5Epg/exec';
const dados_do_formulario = document.forms['formulario-atendimento'];

dados_do_formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(script_do_google, { 
        method: 'POST', 
        body: new FormData(dados_do_formulario)
    })
    .then(response => response.json()) 
    .then(data => {
        alert('Dados enviados com sucesso!');
        dados_do_formulario.reset();
    })
    .catch(error => {
        alert('Erro no envio dos dados!');
        console.error('Erro no envio dos dados:', error);
    });
});
