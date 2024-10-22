const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class sound {

    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
       this.sound.setAttribute("autoplay", "true");
       this.sound.setAttribute("loop", "true");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play(); 
        };
        this.pause = function () { 
            this.sound.currentTime = 0 
            this.sound.pause();
        };
    }
}     

class Sprite {
    constructor({position, image, frames = { max: 1}, sprites}){
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
    }

    desenhaCoisas(){
      //  ctx.drawImage(this.image, this.position.x, this.position.y)
        ctx.drawImage(
            this.image, 
            this.frames.val * this.width, 
            0, 
            this.image.width / this.frames.max, 
            this.image.height,
            this.position.x,
            this.position.y,
             this.image.width / this.frames.max, 
             this.image.height)

             if (!this.moving) return

             if (this.frames.max > 1){
                this.frames.elapsed++
             }

             if (this.frames.elapsed % 8 === 0)
             if (this.frames.val < this.frames.max - 1) this.frames.val++
             else this.frames.val = 0
    }
}

class Boundary{
    static width = 52.5
    static height = 52.5
    constructor({position}){
        this.position = position;
        this.width = 52.5
        this.height = 52.5
    }

    drawBarreiras(){
        ctx.fillStyle= 'rgba(0, 0, 0, 0.0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Layer{
    constructor(game, width, height, speedModifier, image){
        this.game= game;
        this.width = width;
        this.height = height;
        this.speed = 3;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0
        this.y = 0
    }
    drawVizinha(){
        this.x -= this.game.speed * this.speed
        ctx.drawImage(this.image,this.x,this.y, this.width, this.height)

    }
}

class BackCeu{
    constructor(game){
        this.game=game;
        this.width= 1024;
        this.height = 576;
        
    }
}

class Coisa {
    constructor({position, image, width, height}){
        this.position = position
        this.image = image
        this.width = width
        this.height = height
    
        this.moving = false
    }

    desenhaCoisa(){
        //  ctx.drawImage(this.image, this.position.x, this.position.y)
          ctx.drawImage(
              this.image, 
              this.position.x,
              this.position.y,
               this.width,
               this.height)
      }

    
}