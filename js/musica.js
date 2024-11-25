const Somimage = new Image();
Somimage.src = './img/pngsom.png';

const Somutimage = new Image();
Somutimage.src = './img/pngsomut.png';

const musica = {
    musicaFundoMenu: new Howl({
        src: ['audio/Midnight Schrodinger.mp3'],
        loop: true,
    }),
    musicaCapitulo1: new Howl({
      src: ['audio/Dancing with Depression.mp3'],
      loop: true
    })
}

let somAtivo = false

function drawCaixaSom(){

   window.requestAnimationFrame(drawCaixaSom)

   if (somAtivo){
    ctx.drawImage(Somimage, 960,15,50,50)
   } else {
    ctx.drawImage(Somutimage, 960,15,50,50)
   }
}

canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect()
    const x = e.clientX - elRect.left
    const y = e.clientY - elRect.top


if (x >= 960 && y >= 15 &&  x <= 1020 && y <= 60){
    if(!musica.musicaFundoMenu.playing()){
       somAtivo = true
        musica.musicaFundoMenu.play()
        console.log("tocando músoica")

    } else {
        somAtivo = false
        musica.musicaFundoMenu.pause()
    } 
}})



    