const script_do_google = 'https://script.google.com/macros/s/AKfycbxz7SUjg8_WNj3izVvf9V6lvZrR6t7SwPGtBTkS7I6KUSGmZ2Tp97L75fH0iY9-N5d0ow/exec';
const dados_do_formulario = document.forms['formulario-atendimento'];

dados_do_formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(script_do_google, { 
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(dados_do_formulario))
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
