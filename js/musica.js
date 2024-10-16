const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const Somimage = new Image();
Somimage.src = './img/pngsom.png';


let tocando = false;


function drawCaixaSomMutada(){
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(960, 15, 50, 50);

}
   

function LoopMusica(){

    loplopToca();

    canvas.addEventListener("click", function(event) {
        const x = event.offsetX;
        const y = event.offsetY;
    

    if (x >= 960 && y >= 15){
     ctx.clearRect(960,15, 50,50)
      loplopMute();
    }})

};


function loplopToca(){
    tocando == true;
    ctx.drawImage(Somimage, 960, 15);
    window.requestAnimationFrame(loplopToca);   
}

function loplopMute(){
    var musica;
    musica.pause();
    drawCaixaSomMutada();
    window.requestAnimationFrame(loplopMute);   
}



export {LoopMusica}



    