const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 6466, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 6466, 0, 0, 6466, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 6466, 0, 0, 6466, 0, 6466, 0, 0, 6466, 6466, 6466, 0, 0, 0, 6466, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 6466, 0, 6466, 6466, 6466, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 6466, 6466, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 6466, 6466, 0, 0, 0,
    0, 0, 6466, 536877378, 6466, 6466, 6466, 6466, 6466, 0, 6466, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 0, 0,
    0, 0, 6466, 0, 6466, 6466, 0, 0, 0, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 6466, 0, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 6466, 6466, 6466, 0, 0, 0, 0,
    0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 6466, 6466, 0, 0, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 6466, 6466, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 6466, 6466, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 6466, 0, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0,
    0, 0, 0, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 0, 0, 0, 0, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6466, 6466, 6466, 6466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const collisionsCor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 6716, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 6716, 6716, 6716, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0, 6716, 6716, 6716, 6716, 0, 0, 0, 0, 0, 0,
        6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 0, 0, 0, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 0, 0, 0, 6716, 0, 0, 0, 6716, 6716, 6716, 6716, 6716, 6716,
        6716, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716,
        6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716,
        6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 6716, 6716,
        6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 0, 0, 0,
        6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 0, 0, 0, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 6716, 0, 0, 0,
        0, 6716, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6716, 6716, 6716, 6716, 6716, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
