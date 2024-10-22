class Movimento{
 
    
} 

const andando = {
    toUp:{
       toUp: player.position.x +=3
    }
}
// teclas WASD e setinhas 
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    Enter:{
        pressed: false
    }
}

//avançando dialogos
window.addEventListener('keypress', (e) => {
    switch (e.key){
        case 'Enter':
            keys.Enter.pressed = true
        break
    }
})

// movimento boneco player keydown

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
        break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
        break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
        break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
        break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            lastKey = 'ArrowLeft'
        break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            lastKey = 'ArrowRight'
        break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            lastKey = 'ArrowUp'
        break
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            lastKey = 'ArrowDown'
        break
    }
})

// keyup - 
window.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = false
        break;
        case 'a':
            keys.a.pressed = false
        break;
        case 's':
            keys.s.pressed = false
        break;
        case 'd':
            keys.d.pressed = false
        break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
        break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
        break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
        break
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
        break
        
    }
})