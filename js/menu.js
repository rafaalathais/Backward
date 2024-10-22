const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export function drawMenu(){

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    

const image = new Image();
image.src = './img/fundopixilgih.png';
image.onload = () => {

    ctx.drawImage(image, 0,0)
    
}



/*canvas.addEventListener("mouseover", function(event) {
    const x = event.mouseX;
    const y = event.mouseY ;

    console.log(x, y)


if (x >= 437 && x <= 437 + 190 && y >= 258 && y <= 258 + 50){
    ctx.fillStyle = 'black'
    ctx.fillRect(437, 258, 190,50);
    
 } 
})*/
   
}

export function Mostrabotoes(mostra){
    if (mostra){
        menu.style.display= 'inline-block';
    }else{
        menu.style.display= 'none';
    }
    }

    

