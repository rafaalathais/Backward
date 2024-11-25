//colisões do quarto

const collisionsMapQuarto = [];
for (let i = 0; i < collisions.length; i+= 25){
    collisionsMapQuarto.push(collisions.slice(i, 25 + i))
}

const offset = {
    x: -340,
    y: -460,
}
const boundaries = []


collisionsMapQuarto.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 7111)
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