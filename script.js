const script_do_google = 'https://script.google.com/macros/s/AKfycbzpr2gZxR_tMf8b-PPT6pC8ytEwsQKQm_BsqJk-knIOMU1G6s7uy-hToIx1FPx0VazFFQ/exec';
const dados_do_formulario = document.forms['formulario-atendimento'];

dados_do_formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = {
        status_atendimento: dados_do_formulario.status_atendimento.value,
        data_solicitacao: dados_do_formulario.data_solicitacao.value,
        empresa: dados_do_formulario.empresa.value,
        gestor_atendido: dados_do_formulario.gestor_atendido.value,
        nivel_atencao: dados_do_formulario.nivel_atencao.value
    };

    fetch(script_do_google, { 
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json()) 
    .then(data => {
        console.log("Resposta do servidor:", data);
        alert('Dados enviados com sucesso!');
        dados_do_formulario.reset();
    })
    .catch(error => {
        alert('Erro no envio dos dados!');
        console.error('Erro no envio dos dados:', error);
    });
});
