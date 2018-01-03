
function createTable(){
    let width = 2;
    let height = 0.1;
    let depth = 1;
    let ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(width, height, depth),
        Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0x005500, side: THREE.DoubleSide}), 0, 1),
        0
    );
    ground.position.set(0, -0.05, 0);
    scene.add(ground);

    for (let i = -1; i <= 1; i += 2){
        for (let j = -1; j <= 1; j += 2) {
            let border = new Physijs.BoxMesh(
                new THREE.BoxGeometry(width / 2 - width / 8, height, height),
                Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0x002200, side: THREE.DoubleSide}), 0, 1),
                0
            );
            border.position.set(i * width / 4, 0, j * depth / 2);
            scene.add(border);
        }
    }

    for (let i = -1; i <= 1; i += 2){
            let border = new Physijs.BoxMesh(
                new THREE.BoxGeometry(height, height, width / 2 - width / 8),
                Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0x002200, side: THREE.DoubleSide}), 0, 1),
                0
            );
            border.position.set(i * width / 2, 0, 0);
            scene.add(border);
    }

}