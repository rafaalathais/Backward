const player = new Sprite({
    position:{
        x: canvas.width + 325,//canvas.width - 224 /4 / 4 
        y: canvas.height + 100 //canvas.height - 64 / 2 + 180
    },
    image: playerJuSprites.down,
    frames:{
        max: 4
    },
    sprites: {
        up: playerJuSprites.up,
        left: playerJuSprites.left,
        down: playerJuSprites.down,
        right: playerJuSprites.right 
    }
})

const QuartoFundo = new Sprite({
    position: {
        x:230, //offset.x
        y: 20,
    }, 
    image: quartoIMg
})

const CasaFundo = new Sprite({
    position: {
        x: -340, 
        y: -460,
    }, 
    image: CasaImg
})

const EscolaFundo = new Sprite({
    position: {
        x: 0, 
        y: -140,
    }, 
    image: corredorEscolaImg
})

const playerJU2 = new Sprite({
    position:{
        x: 0,
        y: 470
    },
    image: playerJuSprites.right,
    frames:{
        max: 4
    },
    sprites: {
        up: playerJuSprites.up,
        left: playerJuSprites.left,
        down: playerJuSprites.down,
        right: playerJuSprites.right  
    }
})

const playerRick = new Sprite({
    position:{
        x: -100,
        y: 470
    },
    image: playerRickSprites.down,
    frames:{
        max: 4
    },
    sprites: {
        up: playerRickSprites.up,
        left: playerRickSprites.left,
        down: playerRickSprites.down,
        right: playerRickSprites.right      
    }
})

const playerRegina = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    image: playerReginaSprites.down,
    frames:{
        max: 4
    },
    sprites: {
        up: playerReginaSprites.up,
        left: playerReginaSprites.left,
        down: playerReginaSprites.down,
        right: playerReginaSprites.right      
    }
})

const playerDuarte = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    image: playerDuarteSprites.down,
    frames:{
        max: 4
    },
    sprites: {
        up: playerDuarteSprites.up,
        left: playerDuarteSprites.left,
        down: playerDuarteSprites.down,
        right: playerDuarteSprites.right      
    }
})
const playerValmir = new Sprite({
    position:{
        x: 450,
        y: 115
    },
    image: playerValmirSprites.down,
    frames:{
        max: 4
    },
    sprites: {
        up: playerValmirSprites.up,
        left: playerValmirSprites.left,
        down: playerValmirSprites.down,
        right: playerValmirSprites.right      
    }
})

const onibus = new Coisa({
    position:{
        x: 1020,
        y: 420,
    }, 
    image: onibusImg,
    width: 400,
    height: 140
})