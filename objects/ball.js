function createBall(x, z, color) {
    let radius = 0.02;
    let width = 32;
    let height = 32;
    let ball = new Physijs.SphereMesh(
        new THREE.SphereGeometry(radius, width, height),
        Physijs.createMaterial(new THREE.MeshBasicMaterial({color: color, side: THREE.DoubleSide}), 0.2, 1),
    );
    ball.position.set(x, .9, z);
    scene.add(ball);
    return ball;
}

function createBalls(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (j <= i) {
                balls.push(createBall(0.5 + i * 0.05, j * 0.05 - i * 0.05 / 2, 0xff0000));
            }
        }
    }
}