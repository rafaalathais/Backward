let drawMenuId;

function drawMenu(){
 
drawMenuId = window.requestAnimationFrame(drawMenu)

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    

const image = new Image();
image.src = './img/fundopixilgih.png';

    ctx.drawImage(image, 0,0)




   
}

function Mostrabotoes(mostra){
    if (mostra){
        menu.style.display= 'inline-block';
    }else{
        menu.style.display= 'none';
    }
    }

    const continuar = document.getElementById("continuar")

continuar.addEventListener('click', function(){
   carregarProgresso()
})

