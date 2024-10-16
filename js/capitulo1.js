import { collisions } from './colisoes.js';
import { dialogo1, quebraTexto, dialogo2} from './dialogos.js';
import { FundoQuarto, juliImg, quartoIMg, playerImgDown, playerImgRight, playerImgUp, playerImgLeft, vizinhancaImg, onibusImg } from './resources.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//--------------------------------dialogo
dialogo1.forEach(dialogo => {dialogo.lines = quebraTexto(ctx, dialogo.texto, 430)});

dialogo2.forEach(dialogo => {dialogo.lines = quebraTexto(ctx, dialogo.texto, 380)});

let dialogoAtual = 0;
let dialogoAtivo = true;

// avançar dialogo1
function avancardialogo1(){
if(dialogoAtual < dialogo1.length - 1){
    dialogoAtual++;
} else {
    dialogoAtivo = false;
    animate();
}
}



//desenha capítulo no canvas
export function drawCapitulo1(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
  LoopParte1();  

    canvas.addEventListener("click", function() {
       if(dialogoAtivo){
          avancardialogo1();
        }});
      
 //animate();
 // animateRua();

};

//desenha o dialogo1 inicio do jogo -> quarto
function dialogo1Cena1quarto(ctx){    

    if (dialogoAtivo){
        const dialogo = dialogo1[dialogoAtual];
    
        ctx.drawImage(FundoQuarto, 0, 0)
        
        //quadrado preto
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(50, 400, 920, 140);
    
        ctx.beginPath();
        ctx.strokeStyle = 'gold';
        ctx.strokeRect(50,400,920,140);

        // desenha texto falas
        ctx.font='12px dogicapixel';
        ctx.fillStyle=' white ';
        const altura = 26;

        dialogo.lines.forEach((line, index) => {
            ctx.fillText(line, 95, 435 + (index * altura))})   
    }   

      };
    
function LoopParte1(){
    dialogo1Cena1quarto(ctx);
    window.requestAnimationFrame(LoopParte1);   
};

//CENA 2  -> andando pela casa ---------------------------------------------------------------
const player = new Sprite({
    position:{
        x: canvas.width - 224 /4 / 4 ,
        y: canvas.height - 64 / 2 + 180
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

const offset = {
    x: -600,
    y: -400
}

const QuartoFundo = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    }, 
    image: quartoIMg
})

/*const foregroundImg = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    }, 
    image: quartoIMg
})*/



//colisões do quarto

const collisionsMapQuarto = [];
for (let i = 0; i < collisions.length; i+= 25){
    collisionsMapQuarto.push(collisions.slice(i, 25 + i))
}

const saidaMapCasa = [];
for (let i = 0; i < telanData.length; i+= 25){
    saidaMapCasa.push(telanData.slice(i, 25 + i))
}

const boundaries = []


collisionsMapQuarto.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7111)
        boundaries.push(
            new Boundary({
                position:{    
                    x: j *  Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
              }
            })
        )
    } )
})

const saidas = []

saidaMapCasa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7111)
        saidas.push(
            new Boundary({
                position:{    
                    x: j *  Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
              }
            })
        )
    } )
})
const movables = [QuartoFundo, ...boundaries, ...saidas];

function colisoesQuadrados({quadrado1, quadrado2}){
    return (quadrado1.position.x + quadrado1.width >= quadrado2.position.x 
        && quadrado1.position.x <= quadrado2.position.x + quadrado2.width 
        && quadrado1.position.y <= quadrado2.position.y + quadrado2.height
        && quadrado1.position.y + quadrado1.height >= quadrado2.position.y)
}

const sair = {
    initiated: false
}
//function animate(){dialogoCena2AndarCasa();const animateID = window.requestAnimationFrame(animate)}


function animate(){
    const animateID = window.requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

   QuartoFundo.desenhaCoisas();


  boundaries.forEach((boundary) => { boundary.drawBarreiras() })
  saidas.forEach((saida) => { saida.drawBarreiras() })

    //player Juliane
    player.desenhaCoisas();
    //foregound.desenhacoisas();
  

    let moving = true;
    player.moving = false 

if (sair.initiated) return
    
if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed || keys.ArrowDown.pressed || keys.ArrowLeft.pressed || keys.ArrowRight.pressed || keys.ArrowUp.pressed){
    for (let i=0; i < saidas.length; i++){
        const saida = saidas[i]
        const OverlappingArea = (Math.min(player.position.x + player.width, saida.position.x + saida.width) - 
        Math.max(player.position.x, saida.position.x)) * 
        (Math.min(player.position.y + player.height, saida.position.y + saida.height) - Math.max(player.position.y, saida.position.y))
        if(colisoesQuadrados({
            quadrado1: player,
            quadrado2: saida
           }) && OverlappingArea > (player.width * player.height) / 2
           && Math.random() < 0.1
        ){
          console.log('sair de casa')
          //destiva a animação atual 
          window.cancelAnimationFrame(animateID)

          sair.initiated = true 
          gsap.to('#overllapingDiv', { // transição
            opacity: 1,
            repeat: 3,
            yoyo: true,
            duration: 0.4,
            onComplete(){
             gsap.to('#overllapingDiv', {
                opacity: 1,
                duration: 0.4,
                onComplete(){     
             /// sai de casa -> nova animação 
             animateRua() 
             gsap.to('#overllapingDiv', {
                opacity: 0,
                duration: 0.4,
            })
                }
             })
              
            }
        })
          break
           }
    }
}

    if (keys.w.pressed && lastKey === 'w' || keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        player.moving = true
        player.image = player.sprites.up

        for (let i=0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(colisoesQuadrados({
                quadrado1: player,
                quadrado2: {...boundary, position:{
                    x: boundary.position.x,
                    y: boundary.position.y + 3
                }}
               })){
              console.log('coliding')
              moving = false
              break
               }
        }
        if (moving)
        movables.forEach((movable) => {movable.position.y += 3})
        
    } else if(keys.a.pressed && lastKey === 'a' || keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
        player.moving = true
        player.image = player.sprites.left

        for (let i=0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(colisoesQuadrados({
                quadrado1: player,
                quadrado2: {...boundary, position:{
                    x: boundary.position.x + 3,
                    y: boundary.position.y
                }}
               })){
              moving = false
              break
               }
        }
        if (moving)
        movables.forEach((movable) => {movable.position.x += 3}) 
    
    }else if(keys.s.pressed && lastKey === 's' || keys.ArrowDown.pressed && lastKey === 'ArrowDown') {
        player.moving = true
        player.image = player.sprites.down

        for (let i=0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(colisoesQuadrados({
                quadrado1: player,
                quadrado2: {...boundary, position:{
                    x: boundary.position.x,
                    y: boundary.position.y - 3
                }}
               })){
              moving = false
              break
               }
        }
        if (moving)
        movables.forEach((movable) => {movable.position.y -= 3})
    
    }else if(keys.d.pressed && lastKey === 'd' || keys.ArrowRight.pressed && lastKey === 'ArrowRight'){
        player.moving = true
        player.image = player.sprites.right

        for (let i=0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if(colisoesQuadrados({
                quadrado1: player,
                quadrado2: {...boundary, position:{
                    x: boundary.position.x - 3,
                    y: boundary.position.y
                }}
               })){
              moving = false
              break
               }
        }
        if (moving)
        movables.forEach((movable) => {movable.position.x -= 3})}



    
        //quadrado preto
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(50, 400, 920, 140);

    ctx.beginPath();
    ctx.strokeStyle = 'gold';
    ctx.strokeRect(50,400,920,140);

    ctx.drawImage(juliImg, 60, 405, 130, 130);

    // desenha texto falas
    ctx.font='12px dogicapixel';
    ctx.fillStyle='white';  
    const altura = 26;

        const dialogo = dialogo2[dialogoAtual];
        dialogo.lines.forEach((line, index) => {
            ctx.fillText(line, 200, 435 + (index * altura))})   
        
};

//--------------------cena3 rua vizinhança juliana sai de casa 

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

playerJU2.move = true;

/*const playerRick = new Sprite({
    position:{
        x: 20,
        y: 800
    },
    image: playerRickImgDown,
    frames:{
        max: 4
    },
    sprites: {
        up: playerImgUp,
        left: playerImgLeft,
        down: playerImgDown,
        right: playerImgRight    
    }
})*/
function animateRua(){
    window.requestAnimationFrame(animateRua)
    

   ctx.clearRect(0,0, canvas.width, canvas.height);

  // ctx.drawImage(aaImg, 0, 0, 1024, 576);

  

   ctx.drawImage(vizinhancaImg, 0, -575, canvas.width, 576*2);

   
   playerJU2.desenhaCoisas();

 if (playerJU2.move){
   playerJU2.image = playerJU2.sprites.right
   playerJU2.moving = true

   playerJU2.position.x += 3
 }

   if(playerJU2.position.x >= 600){
    playerJU2.move = false;
    playerJU2.image = playerJU2.sprites.down
    playerJU2.moving = false

// desenha ratanaba 

//desenha onibus
//ctx.drawImage(onibusImg, 50, 330, 450, 254);

Backcreditos()

   } 



   
};
   


let cameraY = canvas.height - vizinhancaImg.height;
const cameraSpeed = 3

function Backcreditos(){

    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = '#0060de';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    cameraY += cameraSpeed

    if (cameraY < 0 ){
        cameraY = 0
    }

   ctx.drawImage(vizinhancaImg, 0, -575 + cameraY, canvas.width, 576*2);

if (cameraY < 0){
    window.requestAnimationFrame(Backcreditos)

}

gsap.to('#textocredito', {
    opacity: 1,
    repeat: 1,
    duration: 15,})

}


     







   


