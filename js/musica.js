const Somimage = new Image();
Somimage.src = './img/pngsom.png';

const Somutimage = new Image();
Somutimage.src = './img/pngsomut.png';

const musica = {
    musicaFundoMenu: new Howl({
        src: ['audio/Midnight Schrodinger.mp3'],
        loop: true,
    }),
    musicaMenuCapitulos: new Howl({
      src: ['audio/Dancing with Depression.mp3'],
      loop: true
    })
}

const musicaCapUm = {
    musicaAnimateQuarto: new Howl({
        src: ['audio/Sleeping Night.mp3'],
        loop: true,
    }),
    musicaAnimateCasa: new Howl({
      src: ['audio/New Thoughts.mp3'],
      loop: true
    }),
    musicaAnimateCalcada: new Howl({
        src: ['audio/Walking Fast Like They.mp3'],
        loop: true
      }),
  
}

let somAtivo = false
let musicaAtual = null

function alterarMusica(tela) {
    if (musicaAtual) {
        musicaAtual.stop();  // Para a música da tela anterior
    }

    switch (tela) {
        case 'menu':
            musicaAtual = musica.musicaFundoMenu;
            break;
        case 'capitulos':
            musicaAtual = musica.musicaMenuCapitulos;
            break;
        case 'capitulo1':
            musicaAtual = musicaCapUm.musicaAnimateQuarto;
            break;
        default:
            musicaAtual = musica.musicaFundoMenu;
    }

    if (somAtivo) {
        musicaAtual.play();
    }
}


function controlarSom() {

    if(musicaAtual){
    if (somAtivo) {
        musicaAtual.pause();
    } else {
        musicaAtual.play();
    }
    somAtivo = !somAtivo; 
    }// Alterna o estado do som
}


function drawCaixaSom(){

   window.requestAnimationFrame(drawCaixaSom)

   if (somAtivo){
    ctx.drawImage(Somimage, 960,15,50,50)
   } else {
    ctx.drawImage(Somutimage, 960,15,50,50)
   }
}

function mudarMusica(musicatroca) {
    // Se já tiver uma música tocando, pare-a
    if (musicaAtual) {
        musicaAtual.stop();
    }
    // Inicie a nova música
    musicatroca.play();
    musicaAtual = musicatroca; // Atualize a música atual
}

canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect()
    const x = e.clientX - elRect.left
    const y = e.clientY - elRect.top

    if (x >= 960 && y >= 15 &&  x <= 1020 && y <= 60){
      
    
controlarSom()
        }
})



    