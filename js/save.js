function salvarProgresso(){

    const progresso = {
        dialogoAtual: dialogoAtual,
        capituloAtual: capituloAtual,
        linhaAtual: linhaAtual,
        position_x: player.position.x,  // Enviar posição separada
        position_y: player.position.y,  // Enviar posição separada
        dialogoAtivo: dialogoAtivo,
        animacaoAtual: animacaoAtual,
    dataSave: new Date().toISOString().replace('T', ' ').slice(0, 19)
    }

    console.log(progresso)

    fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progresso)
    })
    .then(async (response) => {
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Erro ao salvar o progresso');
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then((data) => {
        console.log('Progresso salvo com sucesso!', data);
        alert('Progresso salvo com sucesso!' + dataSave)
    })
    .catch((erro) => {
        console.error(erro.message);
    });

}

//carregar
function carregarProgresso() {
    fetch('http://localhost:3000/load')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o progresso');
            }
            return response.json();
        })
        .then((data) => {
            // Atualiza as variáveis do jogo com o progresso carregado
            player.position.x = data.position_x;
            player.position.y = data.position_y;
            dialogoAtual = data.dialogo_atual;
            linhaAtual = data.linha_atual;
            capituloAtual = data.capitulo_atual;
            dialogoAtivo = data.dialogo_ativo;
            animacaoAtual = data.animacao_atual;

            console.log('Progresso carregado com sucesso!');
        })
        .catch((erro) => {
            console.error(erro.message);
        });
}

