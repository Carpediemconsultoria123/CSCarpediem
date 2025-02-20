function doPost(e) {
    try {
        var sheet = SpreadsheetApp.openById("1nKHN3Y4idtoAN5Jb1hq11D8vH5Xx7TW7BFLsVMzJ0UE").getSheetByName("Formulário de Atendimento");
        var params = e.parameter;
        
        sheet.appendRow([
            params.status_atendimento, 
            params.data_solicitacao, 
            params.empresa, 
            params.gestor_atendido, 
            params.nivel_atencao,
            params.setor_responsavel,
            params.observacao,
            params.setor_responsavel (opcional¹),
            params.observacao¹,
            params.setor_responsavel (opcional²),
            params.observacao²,
            params.SLA_resposta,
            params.CS_responsavel
            // Adicione os outros campos conforme necessário
        ]);
        
        return ContentService.createTextOutput(JSON.stringify({ "status": "sucesso" })).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ "status": "erro", "mensagem": error.toString() })).setMimeType(ContentService.MimeType.JSON);
    }
}
