let drawCapitulosId;

function drawCapitulos(){
   drawCapitulosId =  window.requestAnimationFrame(drawCapitulos)
    ctx.clearRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);


}


