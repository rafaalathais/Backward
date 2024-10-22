const express = require('express')
const app = express()
const port = 300

app.use(express.jason())

app.post('/save', (req, res)=>{
    const playerData = req.body;
    console.log('salvandoprogresso', playerData)

    res.status(200).send({message: 'progresso slavo'})
})

app.get('/load/:playerId', (req,res)=>{
    const playerId = req.params.playerId;
    const playerData = {}

    res.status(200).send(playerData)
})

app.listen(port, () => {
    console.log(`servidor rodando na ${port}`)
})