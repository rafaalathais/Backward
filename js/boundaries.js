//colisões do quarto
let boundaries = []

const collisionsMapQuarto = [];
for (let i = 0; i < collisions.length; i+= 25){
    collisionsMapQuarto.push(collisions.slice(i, 25 + i))
}

const collisionsMapCorredor = [];
for (let i = 0; i < collisionsCor.length; i+= 37){
    collisionsMapCorredor.push(collisionsCor.slice(i,37 + i))
}

const offset = {
    x: -340,
    y: -460,
}

const offse = {
    x: -5,
    y: -170,
}

function desenhaBarreirasCasa(){
collisionsMapQuarto.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 6466)
        boundaries.push(
            new Boundary({
                position:{    
                    x: j *  Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
              }
            })
        )
    } )
})
}

function desenhaBarreirasCorredor(){
    collisionsMapCorredor.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 6716)
            boundaries.push(
                new Boundary({
                    position:{    
                        x: j *  Boundary.width + offse.x,
                        y: i * Boundary.height + offse.y
                  }
                })
            )
        } )
    })
    }


