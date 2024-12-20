//--------------------------------dialogo
const dialogos = [dialogo1, dialogo2, dialogo3, dialogo4, dialogo5, dialogo6, dialogo7, 
                  dialogo8, dialogo9, dialogo10, dialogo11, dialogo12, dialogo13, dialogo14, dialogo15]
//const interacoes = [piabanheiro]
let dialogoAtual = 0;
let dialogoAtivo = true;
let linhaAtual = 0
let animacaoAtual;
let opcoes = [opcaoSairdeCasa[0], opcaoEntrarSala[0]]
let opacaoAtiva = false
let opcaoAtual = 0 
let infos = [infoPia,infoGeladeira, infoTvSala, infoMesaComer, infoPoltrona, infoQuadroCor]
let infoAtiva = false
let infoAtual = 0 
let capituloAtual = 'capitulo1'


dialogos.forEach(dialogo => {dialogo.forEach(d => {
    d.lines = quebraTexto(ctx, d.texto, 310)})});
    

// avançar dialogos
function avancarDialogo(){
    const dialogo = dialogos[dialogoAtual]
    if (linhaAtual < dialogo.length - 1){
        linhaAtual++
        } else {
            dialogoAtivo=true
            linhaAtual = 0
            if(dialogoAtual < dialogos.length - 1){
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



function drawCapitulo1(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    animateQuarto() 

  if (animacaoAtual === 'animateQuarto'){
    gsap.set('#overllapingDiv', {
       opacity: 1, 
        onComplete(){

            gsap.set('#teclaEnter', {
                opacity: 1,
                
            })
        }
        
    })}
     //   if (keys.Enter.pressed  && dialogoAtivo){avancardialogo1();}

            window.addEventListener('keypress', (e) => {
                if (e.key === "Enter" && dialogoAtivo){ avancarDialogo();;}

                if (e.key === "Enter" && infoAtiva){ infoAtiva = false}

                    if (e.key === "Enter" && dialogoAtivo && dialogoAtual === 0 && linhaAtual <= dialogos.length -  1 && animacaoAtual ==='animateQuarto'){;
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
};


/*const foregroundImg = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    }, 
    image: quartoIMg
})*/

// desenha dialogosssssssss
function drawDialogos(){

        //quadrado pret
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(50, 400, 920, 140);
    
        ctx.beginPath();
        ctx.strokeStyle = 'gold';
        ctx.strokeRect(50,400,920,140);
    
        // desenha texto falas
        ctx.font='14px dogicapixel';
        ctx.fillStyle='white';  
        const altura = 26;
    
           
        if (opacaoAtiva) {
            // Verifica se há opções válidas
            if (opcaoAtual >= 0 && opcaoAtual < opcoes.length) {
                const opcao = opcoes[opcaoAtual];
                ctx.fillText(opcao.texto, 200, 435); // Pergunta principal
                if (opcao.opcoes && Array.isArray(opcao.opcoes)) {
                    opcao.opcoes.forEach((opcao, index) => {
                        ctx.fillText(`${index + 1}: ${opcao.texto}`, 200, 465 + (index * altura));
                    });
                }
            return
        }
    }

        
    if (infoAtiva) {

        infos.forEach(info => {
            info.lines = quebraTexto(ctx, info.texto, 700); // Quebra o texto e armazena as linhas
        });

            const info = infos[infoAtual]
          // ctx.fillText(info.texto, 100, 465)
           
        
info.lines.forEach((line, index) => {
    ctx.fillText(line, 100, 435 + (index * altura)); // Desenha cada linha na posição adequada
});

           
}


if (dialogoAtivo){
           const dialogo = dialogos[dialogoAtual];
           const linha = dialogo[linhaAtual]

           if(linha.personagem === "Rick"){
            ctx.drawImage(rickImg, 60, 405, 130, 130);
        }else if(linha.personagem === "Juliana"){
            ctx.drawImage(juliImg, 60, 405, 130, 130);
        } else if(linha.personagem === "Regina"){
            ctx.drawImage(reginaImg, 60, 405, 130, 130);
        }else if(linha.personagem === "Duarte"){
            ctx.drawImage(duarteImg, 60, 405, 130, 130);
        }
    
          linha.lines.forEach((line, index) => {ctx.fillText(line, 200, 435 + (index * altura))}) 
          
        }     
        
}


//CENA 1 
function animateQuarto(){
    animacaoAtual = 'animateQuarto'

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
    ctx.font='14px dogicapixel';
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
                           desenhaBarreirasCasa()
                          animateCasa()
                          mudarMusica(musicaCapUm.musicaAnimateCasa)
                          player.moving = false
                          dialogoAtivo = true
                          dialogoAtual = 6
                          player.position.x = 730

                          gsap.to('#overllapingDiv', {
                            opacity:0,
                            duration: 1
                          })
                       }
                       
                   })}
                })
            
        }

    
    
};
// Configura as barreiras do mapa "Casa"


// saida casa 
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



const sair = {
    initiated: false
}
function colisoesQuadrados({quadrado1, quadrado2}){
    return (quadrado1.position.x + quadrado1.width >= quadrado2.position.x 
        && quadrado1.position.x <= quadrado2.position.x + quadrado2.width 
        && quadrado1.position.y <= quadrado2.position.y + quadrado2.height
        && quadrado1.position.y + quadrado1.height >= quadrado2.position.y)
}


//function animate(){dialogoCena2AndarCasa();const animateID = window.requestAnimationFrame(animate)}
let mapaAtual = null
let ativo = true

function carregarBarreiras() {
    // Verifica se o mapa mudou
    if (ativo && mapaAtual !== "casa") {
        mapaAtual = "casa";
        boundaries = []; // Limpa barreiras anteriores
        desenhaBarreirasCasa(); // Carrega barreiras da casa
    } else if (!ativo && mapaAtual !== "corredor") {
        mapaAtual = "corredor";
        boundaries = []; // Limpa barreiras anteriores
        desenhaBarreirasCorredor(); // Carrega barreiras do corredor
    }
}
//player.position.x = 730
function andaPersonagemJu(){

   const movables = [CasaFundo, ...boundaries, ...saidas];

   if (dialogoAtual=== 12){
    movables.push(playerDuarte, playerRick, playerRegina, EscolaFundo)
   }
    let moving = true;

    player.moving = false 

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

// ----------------------------------------------------- casa animação andando 
let escolhaListenerAtivo = false
let animateID;


function animateCasa(){
    ativo= true
    carregarBarreiras();
    animacaoAtual = 'animateCasa' 
     
   const animateID = window.requestAnimationFrame(animateCasa)

   ctx.clearRect(0,0, canvas.width, canvas.height);

   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   
//saidas.forEach((saida) => { saida.drawBarreiras() })

   CasaFundo.desenhaCoisas();
   dialogoAtual=6

   //boundaries.forEach((boundary) => { boundary.drawBarreiras() })
   player.desenhaCoisas();

   if (dialogoAtivo || infoAtiva){drawDialogos()}


    if (!dialogoAtivo && dialogoAtual === 6){

if (sair.initiated) return
    
if (keys.a.pressed || keys.ArrowDown.pressed){
    for (let i=0; i < saidas.length; i++){
        const saida = saidas[i]
        const OverlappingArea = (Math.min(player.position.x + player.width, saida.position.x + saida.width) - 
        Math.max(player.position.x, saida.position.x)) * 
        (Math.min(player.position.y + player.height, saida.position.y + saida.height) - Math.max(player.position.y, saida.position.y))
        if(colisoesQuadrados({
            quadrado1: player,
            quadrado2: saida
           }) && OverlappingArea < (player.width * player.height) / 2
           //&& Math.random() < 0.1
        ){
          console.log('sair de casa')
          //destiva a animação atual 
          window.cancelAnimationFrame(animateID)
          opacaoAtiva = true
          opcaoAtual = 0
          drawDialogos()

          //document.addEventListener('keydown', (event) => {
            if(!escolhaListenerAtivo) {
                const escolhaHandler = (event) => {
                if (event.key === '1') {
                    sair.initiated = true
                    opacaoAtiva = false
                    
                    window.cancelAnimationFrame(animateID)

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
                    }); 
                    document.removeEventListener('keydown', escolhaHandler)
                    escolhaListenerAtivo = false
    
                } else if (event.key === '2') {
                    opacaoAtiva = false

                    
                    window.requestAnimationFrame(animateCasa)
                    
                     // Jogador escolheu "Não"

                     document.removeEventListener('keydown', escolhaHandler)
                     escolhaListenerAtivo = false
                
                
            }
        }
        
       // });
               document.addEventListener('keydown', escolhaHandler);
              escolhaListenerAtivo = true
            }
          
          break
           }
        
    
}

    }
    andaPersonagemJu()

    


}
    console.log(CasaFundo.position.x + " e " + CasaFundo.position.y)
};


//interações com coisas na casa 
window.addEventListener('keypress', (e) => { 
    if (e.key === "l") {
        if (CasaFundo.position.x >= 220 && CasaFundo.position.y >= -470 && CasaFundo.position.x <= 295 && CasaFundo.position.y <= -410){
            infoAtiva = true
            infoAtual = 0
            
            
        }else if (CasaFundo.position.x >= 170 && CasaFundo.position.y >= -780 && CasaFundo.position.x <= 280 && CasaFundo.position.y <= -760){
            infoAtiva = true
            infoAtual = 1        
    }
}
});


let animateRuaId;
let desenhaplayers = true
function animateRua(){
     animacaoAtual = 'animateRua'

     animateRuaId = window.requestAnimationFrame(animateRua)
    

   ctx.clearRect(0,0, canvas.width, canvas.height);


   ctx.drawImage(vizinhancaImg, 0, -575, canvas.width, 576*2);


if(dialogoAtivo && dialogoAtual === 7){

    //quadrado pret
ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fillRect(50,15, 920, 140);

ctx.beginPath();
ctx.strokeStyle = 'gold';
ctx.strokeRect(50,15,920,140);

ctx.font='12px dogicapixel';
ctx.fillStyle='white';  
const altura = 26;

const dialogo = dialogos[dialogoAtual];
const linha = dialogo[linhaAtual]

    if(linha.personagem === "Rick"){
        ctx.drawImage(rickImg, 60, 20, 130, 130);
    }else if(linha.personagem === "Juliana"){
        ctx.drawImage(juliImg, 60, 20, 130, 130);
    }
  linha.lines.forEach((line, index) => {ctx.fillText(line, 200, 45 + (index * altura))})  

}

   playerJU2.move = true;

   if(desenhaplayers){
    playerJU2.desenhaCoisas();
   playerRick.desenhaCoisas();
   onibus.desenhaCoisa();
   }

 if (playerJU2.move && !playerRick.move  && playerJU2.position.x <=600){
  // dialogoAtivo = false
   playerJU2.image = playerJU2.sprites.right
   playerJU2.moving = true
   playerJU2.position.x += 3

 } 
 
 if(playerJU2.position.x >= 600 && playerRick.position.x <= 530){
    
    playerJU2.image = playerJU2.sprites.down
    playerJU2.moving = false

    playerRick.position.x += 3
    playerRick.image = playerRick.sprites.right
    playerRick.moving = true

    if(playerRick.position.x >= 530){
         
        playerRick.image = playerRick.sprites.down
        playerRick.moving = false
        dialogoAtual = 7
        dialogoAtivo = true
} 
}       
  if(!dialogoAtivo && dialogoAtual === 7){
         onibus.position.x -= 3
               
} 
if (onibus.position.x <= 400){
    
    desenhaplayers = false
    window.cancelAnimationFrame(animateRuaId)
    
    Backcreditos()
}
};
   


let cameraY = canvas.height - vizinhancaImg.height;
const cameraSpeed = 3
let BackcreditosId;
let Creditosanimatio = true
function Backcreditos(){ 
    
   

        BackcreditosId = window.requestAnimationFrame(Backcreditos)

    console.log("Executando Backcreditos")
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = '#0060de';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    cameraY += cameraSpeed

    if (cameraY < 0 ){
        cameraY = 0
    }

   ctx.drawImage(vizinhancaImg, 0, -575 + cameraY, canvas.width, 576*2);


if (Creditosanimatio){
    Creditosanimatio = false
gsap.to('#textocreditos', {
    opacity: 1,
    duration: 5,
    onComplete(){
        gsap.to('#textocreditos', {
            opacity: 0,
            duration: 0.5, 
            onComplete(){ 
                gsap.to('#overllapingDiv', {
                    opacity: 1,
                    duration: 2,  
                    onComplete(){    

                        window.cancelAnimationFrame(BackcreditosId)
                        
                                BackcreditosId = null 

                                        animacaoAtual = 'animateCalcada'
                                        reposicionaposicao()
                                        dialogoAtivo = true
                                        animateCalcada()
                                        mudarMusica(musicaCapUm.musicaAnimateCalcada)

                        gsap.to('#overllapingDiv', {
                            opacity: 0,
                            duration: 2,
                    
                        })
                    }
                })
            }
        })
    }
})
}
}


function reposicionaposicao(){

    
    playerRick.position.x = 0
    playerRick.position.y = 300

    playerJU2.position.x = 60
    playerJU2.position.y = 300

    playerRegina.position.x= -60
    playerRegina.position.y = 300

    playerDuarte.position.y = 300
    playerDuarte.position.x = 1100
    onibus.position.x = -5
    onibus.position.y = 245
    ativo = false
    
}

function reposicionaposicaodenv(){

    
        player.position.x = 100
        player.position.y = 330

        playerRick.position.x = 50
        playerRick.position.y = 420
        playerRick.image = playerRick.sprites.up
        playerRick.moving = false

        playerDuarte.position.y = 250
        playerDuarte.position.x = 55
        playerDuarte.moving = false
        playerDuarte.image = playerDuarte.sprites.down

        playerRegina.position.x= 105
        playerRegina.position.y = 410
        playerRegina.image = playerRegina.sprites.up
        playerRegina.moving = false

      //  movables.push(playerDuarte, playerRick, playerRegina, EscolaFundo)
}

let offsetX = 0
const velocidade = 2;
let desenhapersonagens = true
let animateCalcadaId;
function animateCalcada(){
    animacaoAtual = 'animateCalcada'
    
  animateCalcadaId =  window.requestAnimationFrame(animateCalcada)

    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height);
    
    ctx.drawImage(calcadaImg, offsetX, 170);
   ctx.drawImage(calcadaImg, offsetX + canvas.width, 170)

   if (offsetX <= -300) {
    offsetX = -300; 
  }


let desenhaOnibus = true
let andandocalcada = true
let andaRegina = true
let andaDuarte = true
let andaDuarteFrente= false

if (desenhapersonagens){
    playerRick.desenhaCoisas()
    playerJU2.desenhaCoisas()
    playerRegina.desenhaCoisas()
    playerDuarte.desenhaCoisas()
}


    if (desenhaOnibus){onibus.desenhaCoisa()}

    

    onibus.position.x -=3
    playerJU2.image = playerJU2.sprites.down


if(dialogoAtivo && onibus.position.x <= -501){drawDialogos()}

if(onibus.position.x <= -500 && playerJU2.position.x <= 60 && dialogoAtivo){
    dialogoAtivo= true
    dialogoAtual = 8
       
}  

 if (dialogoAtual === 8 && !dialogoAtivo){
    playerJU2.image = playerJU2.sprites.right
    playerJU2.moving = true

    playerRick.image = playerRick.sprites.right
    playerRick.moving = true

    if (andandocalcada){
        playerJU2.position.x +=3
        playerRick.position.x +=3

        offsetX -= velocidade
    }


    desenhaOnibus = false

    if (playerJU2.position.x >= 450 && playerRick.position.x >= 450){
        andandocalcada = false
        playerRick.moving = false
        playerJU2.moving = false
    
        playerJU2.image = playerJU2.sprites.down
        playerRick.image = playerRick.sprites.down
    
        dialogoAtivo = true
        dialogoAtual = 9
    } 

}
   if (!dialogoAtivo && dialogoAtual === 9){
    playerRegina.image = playerRegina.sprites.right
    playerRegina.moving = true

    if (andaRegina){playerRegina.position.x +=3}
   
    if(playerRegina.position.x >= 390){
        andaRegina = false
        playerRegina.moving = false
        playerRegina.image = playerRegina.sprites.down

        dialogoAtivo = true
        dialogoAtual = 10
    }

}  if (!dialogoAtivo && dialogoAtual === 10){
    playerDuarte.image = playerDuarte.sprites.left
    playerDuarte.moving = true
    if(andaDuarte){ playerDuarte.position.x -=3}

    if(playerDuarte.position.x <=570){
        andaDuarte = false
        playerDuarte.image = playerDuarte.sprites.down
        playerDuarte.moving=false
        dialogoAtivo = true
        dialogoAtual = 11
    
    }
} if (dialogoAtual === 11 && !dialogoAtivo){
    andandocalcada = true
    andaRegina = true
    andaDuarteFrente = true
    if (andaDuarteFrente){
        playerDuarte.position.x += 3
        playerDuarte.image = playerDuarte.sprites.right
        playerDuarte.moving = true
    }

    if (andaRegina){
        playerRegina.position.x +=3
        playerRegina.image = playerRegina.sprites.right
         playerRegina.moving = true
    }

    if (andandocalcada){
        playerJU2.position.x +=3
        playerRick.position.x +=3

    offsetX -= velocidade

    playerJU2.image = playerJU2.sprites.right
    playerJU2.moving = true

    playerRick.image = playerRick.sprites.right
    playerRick.moving = true
    }
    if(playerJU2.position.x >= 1300 && playerRegina.position.x >=1400){
        desenhapersonagens = false

        window.cancelAnimationFrame(animateCalcadaId)

        gsap.to('#overllapingDiv', {
            opacity: 1,
            duration: 3,
            onComplete(){
                reposicionaposicaodenv()
                animateCorredor()
                dialogoAtivo = true

                gsap.to('#overllapingDiv', {
                    opacity: 0,
                    duration: 3
                })
            }
        })
    }
}

} 

//desenhaBarreirasCorredor()
function reposicionaSala(){
    playerJU2.position.x = 280
 playerJU2.position.y = 500
 playerJU2.image = playerJU2.sprites.up
 playerJU2.moving = false
}

let animateCorredorId;
function animateCorredor(){
    ativo = false
    carregarBarreiras()
    animacaoAtual = 'animateCorredor'
    
 animateCorredorId = window.requestAnimationFrame(animateCorredor)

    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height);

    EscolaFundo.desenhaCoisas()
    playerDuarte.desenhaCoisas()
    player.desenhaCoisas()
    playerRick.desenhaCoisas()
    playerRegina.desenhaCoisas()

dialogoAtual = 12

if(infoAtiva){drawDialogos()}

    if(dialogoAtivo && dialogoAtual === 12){ 

        //quadrado pret
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(50,15, 920, 140);
    
    ctx.beginPath();
    ctx.strokeStyle = 'gold';
    ctx.strokeRect(50,15,920,140);
    
    ctx.font='12px dogicapixel';
    ctx.fillStyle='white';  
    const altura = 26;
    
    const dialogo = dialogos[dialogoAtual];
    const linha = dialogo[linhaAtual]
     if(linha.personagem === "Rick"){
            ctx.drawImage(rickImg, 60, 20, 130, 130);
        }else if(linha.personagem === "Juliana"){
            ctx.drawImage(juliImg, 60, 20, 130, 130);
        } else if(linha.personagem === "Regina"){
            ctx.drawImage(reginaImg, 60, 20, 130, 130);
        }else if(linha.personagem === "Duarte"){
            ctx.drawImage(duarteImg, 60, 20, 130, 130);
        }
    
      linha.lines.forEach((line, index) => {ctx.fillText(line, 200, 45 + (index * altura))})  
    
    } if (!dialogoAtivo && dialogoAtual === 12){

        andaPersonagemJu()
    }


//interações objetos no corrdor da escola

    if (EscolaFundo.position.x >= -910 && EscolaFundo.position.y >=-53 && EscolaFundo.position.x <= -870 && EscolaFundo.position.y <=-53 && keys.ArrowUp.pressed){
        opacaoAtiva = true
        opcaoAtual = 1
        drawDialogos()//12

        window.cancelAnimationFrame(animateCorredorId)
       /* window.addEventListener('keypress', (e) => {
            if (e.key === 120 || e.key === "x" && telaAtual==='capitulo1'){*/
        if(!escolhaListenerAtivo) {
            const escolhaHandler = (event) => {
            if (event.key === '1') {
                   
               window.cancelAnimationFrame(animateCorredorId)

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
                     reposicionaSala() 
                     animateSala() 
        
                     gsap.to('#overllapingDiv', {
                        opacity: 0,
                        duration: 0.4,
                    })
                        }
                     })
                      
                    }
                }); 
                document.removeEventListener('keydown', escolhaHandler)
                escolhaListenerAtivo = false

            } else if (event.key === '2') {
                opacaoAtiva = false
                
               window.requestAnimationFrame(animateCorredor)
                
                 // Jogador escolheu "Não"

                 document.removeEventListener('keydown', escolhaHandler)
                 escolhaListenerAtivo = false   
        }
    }
           document.addEventListener('keydown', escolhaHandler);
          escolhaListenerAtivo = true
        }
    }

    console.log(EscolaFundo.position.x + " e " + EscolaFundo.position.y)
 
}
window.addEventListener('keypress', (e) => { 
    if (e.key === "l") {
    if (EscolaFundo.position.x >=-820 && EscolaFundo.position.x <=-720 && EscolaFundo.position.y >=-80 && EscolaFundo.position.y <= -30){
            infoAtiva = true
            infoAtual = 5
      }
}
});
let animateSalaId;
function animateSala(){
    animacaoAtual = 'animateSala'

animateSalaId = window.requestAnimationFrame(animateSala)

ctx.clearRect(0,0, canvas.width, canvas.height);

ctx.fillStyle='black'
ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(salaAulaImg,100,-120);
    playerValmir.desenhaCoisas()
    playerJU2.desenhaCoisas()
}