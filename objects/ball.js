
function createBall(){
    let radius = 0.02;
    let width = 32;
    let height = 32;
    let ball = new Physijs.SphereMesh(
        new THREE.SphereGeometry(radius, width, height),
        Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide}), 0, 1),
    );
    ball.position.set(0, 0, 0);
    scene.add(ball);
    return ball;
}