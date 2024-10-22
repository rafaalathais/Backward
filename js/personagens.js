const player = new Sprite({
    position:{
        x: canvas.width + 325,//canvas.width - 224 /4 / 4 
        y: canvas.height + 100 //canvas.height - 64 / 2 + 180
    },
    image: playerImgDown,
    frames:{
        max: 4
    },
    sprites: {
        up: playerImgUp,
        left: playerImgLeft,
        down: playerImgDown,
        right: playerImgRight    
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
        x: -320, 
        y: -400 ,
    }, 
    image: CasaImg
})

const playerJU2 = new Sprite({
    position:{
        x: 0,
        y: 470
    },
    image: playerImgRight,
    frames:{
        max: 4
    },
    sprites: {
        up: playerImgUp,
        left: playerImgLeft,
        down: playerImgDown,
        right: playerImgRight    
    }
})

const playerRick = new Sprite({
    position:{
        x: -100,
        y: 470
    },
    image: playerRickImgDown,
    frames:{
        max: 4
    },
    sprites: {
        up: playerRickImgUp,
        left: playerRickImgLeft,
        down: playerRickImgDown,
        right: playerRickImgRight    
    }
})

const onibus = new Coisa({
    position:{
        x: 1150,
        y: 420,
    }, 
    image: onibusImg,
    width: 400,
    height: 140
})