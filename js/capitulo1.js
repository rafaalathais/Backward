const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//--------------------------------dialogo

const dialogos = [dialogo1, dialogo2, dialogo3, dialogo4, dialogo5, dialogo6, dialogo7]
let dialogoAtual = 0;
let dialogoAtivo = true;
let linhaAtual = 0


dialogos.forEach(dialogo => {dialogo.forEach(d => {
    d.lines = quebraTexto(ctx, d.texto, 370)})}); 

// avançar dialogos
function avancarDialogo(){
    const dialogo = dialogos[dialogoAtual]
    if (linhaAtual < dialogo.length - 1){
        linhaAtual++;
        } else {
            dialogoAtivo++;
            dialogoAtivo=true
            linhaAtual = 0
            if(dialogoAtual < dialogos.length){
               
                dialogoAtivo=false
            }
        }
       
};

            let res = 20
            function aumentarBarra(){
                if (res < 100){
                    res +=10
                    gsap.to('#barraPreta', {
                        width: res + '%',
                        duration: 0.3, 
                      
                    })
                }
            }
            window.addEventListener('keydown', (e) => {
                if (e.key === " " || e.keyCode === 32){
                    aumentarBarra();
                }})


//desenha capítulo no canvas
export function drawCapitulo1(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
  gsap.set('#overllapingDiv', {
       opacity: 1, 
        onComplete(){

            gsap.set('#teclaEnter', {
                opacity: 1,
                
            })
        }
        
    })
animateQuarto();
//animateCasa(); 

     //   if (keys.Enter.pressed  && dialogoAtivo){avancardialogo1();}

            window.addEventListener('keypress', (e) => {
                if (e.key === "Enter" && dialogoAtivo){ avancarDialogo();;}

                    if (e.key === "Enter" && dialogoAtivo && dialogoAtual === 0 && linhaAtual <= dialogos.length -  1){;
                        gsap.set('#teclaEnter', {
                              opacity: 0,
                              
                          })
                          gsap.set('#overllapingDiv', {
                              opacity:    1,
                              duration: 50,
                              onComplete(){
                                  gsap.to('#overllapingDiv', {
                                     opacity: 0,
                                     duration: 7,
                                     
                                 })}
                              })
                          
                          ;}
            })

         

//animateRua();

};


/*const foregroundImg = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    }, 
    image: quartoIMg
})*/


//CENA 1  -> andando pela casa ---------------------------------------------------------------
function animateQuarto(){
   const animateQuartoId =  window.requestAnimationFrame(animateQuarto)

    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


   QuartoFundo.desenhaCoisas();

    //player Juliane
    player.desenhaCoisas();
    
    //foregound.desenhacoisas();
 
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    player.moving = false 
    player.move = true

     if (dialogoAtual === 3 && dialogoAtivo){
                ctx.drawImage(quartoJanelaImg,0,0)
            }  
       

    if(dialogoAtivo){

        //quadrado pret
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

       // ctx.fillText(linha, 230, 435)
       const dialogo = dialogos[dialogoAtual];
       const linha = dialogo[linhaAtual]

      linha.lines.forEach((line, index) => {ctx.fillText(line, 200, 435 + (index * altura))})  

    }  
       
     if (dialogoAtivo && player.move) return

     if(!dialogoAtivo && dialogoAtual === 0){
        if (player.position.x >= 590){
                player.image = player.sprites.left
                player.moving = true
                player.position.x -= 3 

        
        }  else if (player.position.x <= 590 && player.position.y <= 295 ){
            player.position.y += 3
                player.moving = true
                player.image = player.sprites.down

        }  else if (player.position.y >= 295 && player.position.x >= 310){
                player.image = player.sprites.left
                player.position.x -= 3
                player.moving = true

       } else if (player.position.x <= 310 && dialogoAtual === 0){
        player.image = player.sprites.up
  
        
            dialogoAtual = 1
            dialogoAtivo = true
        }  
      
    } if(!dialogoAtivo && dialogoAtual === 1){
        player.image = player.sprites.down
        dialogoAtual= 2
        dialogoAtivo =true

    } if(!dialogoAtivo && dialogoAtual === 2){
        if(player.position.x <= 500){
            player.position.x += 3
            player.image = player.sprites.right
            player.moving = true
            
        } if(player.position.x >= 470 )   {
              ctx.drawImage(quartoJanelaImg,0,0)       
                  dialogoAtual= 3
                  dialogoAtivo =true   
            } 

        } if(!dialogoAtivo && dialogoAtual === 3)    { 

        if(player.position.x <= 615)    {
            player.position.x +=3  
            player.image = player.sprites.right
            player.moving = true  

           // console.log(player.position.x, player.position.y)
                     
          }if(player.position.x >= 615 && player.position.y >= 255)    {
            player.image = player.sprites.up
            player.position.y -= 3
            player.moving = true
  
                     
          }if(player.position.x >= 615 && player.position.y <= 255)   {
            player.image = player.sprites.down
            
           dialogoAtual = 4
           dialogoAtivo = true   
                           
          } 

        } if(!dialogoAtivo && dialogoAtual === 4){
 

            gsap.set('#respira', {
                opacity: 1,
                
            })
            
            if (res == 100){
                dialogoAtual = 5
                dialogoAtivo = true

                gsap.set('#respira', {
                    opacity: 0,
                    
                })
            }

        }   if(!dialogoAtivo && dialogoAtual === 5){

            window.cancelAnimationFrame(animateQuartoId)

            gsap.to('#overllapingDiv', {
                opacity:    1,
                duration: 5,
                onComplete(){
                    gsap.to('#overllapingDiv', {
                       opacity: 1,
                       duration: 3,
                       onComplete(){
                          animateCasa()
                          dialogoAtivo = true
                          dialogoAtual =6

                          gsap.to('#overllapingDiv', {
                            opacity:0,
                            duration: 1
                          })
                       }
                       
                   })}
                })
            
        }

    
    
};


// sainda casa 

const saidaMapCasa = [];
for (let i = 0; i < telanData.length; i+= 25){
    saidaMapCasa.push(telanData.slice(i, 25 + i))
}

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

const movables = [CasaFundo, ...boundaries, ...saidas];

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


// ----------------------------------------------------- casa animação andando 
function animateCasa(){
   const animateID = window.requestAnimationFrame(animateCasa)

   ctx.clearRect(0,0, canvas.width, canvas.height);

   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   


//boundaries.forEach((boundary) => { boundary.drawBarreiras() })
//saidas.forEach((saida) => { saida.drawBarreiras() })


   CasaFundo.desenhaCoisas();


   player.desenhaCoisas();

    if(dialogoAtivo && dialogoAtual === 6){

        //quadrado pret
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

       // ctx.fillText(linha, 230, 435)
       const dialogo = dialogos[dialogoAtual];
       const linha = dialogo[linhaAtual]

      linha.lines.forEach((line, index) => {ctx.fillText(line, 200, 435 + (index * altura))})  

    }  

    if (!dialogoAtivo && dialogoAtual === 6 && player.position.x >= 615 && player.position.y <= 255){

    
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
          //  repeat: 1,
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

    }
       

};



//--------------------cena rua vizinhança juliana sai de casa 

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

   let move = false 
   playerJU2.move = true;
   playerRick.move = true
   onibus.move = true
   
   playerJU2.desenhaCoisas();
   playerRick.desenhaCoisas();

 if (playerJU2.move){
   playerJU2.image = playerJU2.sprites.right
   playerJU2.moving = true

   playerJU2.position.x += 3

 } 
 
 if(playerJU2.position.x >= 200 ){
    playerJU2.move = false;
    playerJU2.image = playerJU2.sprites.down
    playerJU2.moving = false

    playerRick.image = playerRick.sprites.right
    playerRick.moving = true
 
    playerRick.position.x += 3

}  

if(playerRick.position.x >= 100){
       playerRick.move = false;
         playerRick.image = playerRick.sprites.down
         playerRick.moving = false

         onibus.move= true
         onibus.position.x -= 3

         Backcreditos();

}
if(onibus.position.x <= 100){
    onibus.move = false

}


// desenha ratanaba 

//desenha onibus
//onibus.desenhaCoisa();

//Backcreditos()

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


     







   


