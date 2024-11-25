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
    static width = 54
    static height = 56
    constructor({position}){
        this.position = position;
        this.width = 55
        this.height = 55
    }

    drawBarreiras(){
        ctx.fillStyle= 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }//rgba(0, 0, 0, 0.0)
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