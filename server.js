
const express = require('express')
const conexao = require('./database')

const app = express()
app.use(express.json())

const cors = require('cors');
app.use(cors({
  origin: '*'
}));



app.post('/save', (req, res)=>{
  console.log(req.body)

    const {position_x,
      position_y, 
      dialogoAtual, 
      capituloAtual, 
      linhaAtual, 
      dialogoAtivo,
       animacaoAtual, 
       dataSave}= req.body

       if (
        position_x == null || 
        position_y == null || 
        dialogoAtual == null || 
        capituloAtual == null || 
        linhaAtual == null || 
        dialogoAtivo == null || 
        animacaoAtual == null || 
        dataSave == null
    ) {
        return res.status(400).json({message: 'Dados inválidos ou incompletos'});
    }

    conexao.query('SELECT * FROM progresso WHERE id = 1', (erro, results) => {
        if (erro) {
          console.error('Erro ao consultar o banco de dados:', erro);  // Log de erro detalhado
        return res.status(500).json({ message: 'Erro ao consultar o banco de dados', error: erro });
        }
    
        console.log('Resultados da consulta:', results)

        if (results.length > 0) {
          // Atualizar o registro existente
          conexao.query(
            'UPDATE progresso SET position_x = ?, position_y = ?, dialogo_atual = ?, capitulo_atual = ?, linha_atual = ?, dialogo_ativo = ?, animacao_atual = ?, data_save = ? WHERE id = 1',
            [
              position_x,
              position_y,
              dialogoAtual,
              capituloAtual,
              linhaAtual,
              dialogoAtivo,
              animacaoAtual,
              dataSave
            ],
            (erro) => {
              if (erro) {
                return res.status(500).json({message:'Erro ao atualizar o estado do jogo'});
              }
              res.status(200).json({message: 'Progresso atualizado' });
            }
          );

          
        } else {
          // Inserir um novo registro
          conexao.query(
            'INSERT INTO progresso (position_x, position_y, dialogo_atual, capitulo_atual, linha_atual, dialogo_ativo, animacao_atual, data_save) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              position_x,
              position_y,
              dialogoAtual,
              capituloAtual,
              linhaAtual,
              dialogoAtivo,
              animacaoAtual,
              dataSave
            ],
            (erro) => {
              if (erro) {
                return res.status(500).json({message:'Erro ao salvar o estado do jogo'});
              }
              res.status(200).json({ message: 'Progresso salvo :)' });
            }
          );
        }
      });
})

app.get('/load', (req, res) => {
  conexao.query('SELECT * FROM progresso WHERE id = 1', (erro, results) => {
      if (erro) {
          return res.status(500).json({message:'Erro ao carregar o progresso'});
      }
      if (results.length === 0) {
          return res.status(404).json({message:'Nenhum progresso encontrado'});
      }
      res.json(results[0]);
  });
});

// Servidor ouvindo
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

app.get('/save', (req, res) => {
  res.send('Rota /save está funcionando, mas use POST para salvar os dados.');
});
