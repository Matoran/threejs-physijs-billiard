function createTable() {
    let width = 2.2;
    let height = 0.1;
    let depth = 1.1;
    let transparent = true;
    let friction = 0.5; // high friction
    let restitution = 0; // low restitution
    let ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(width, height, depth),
        Physijs.createMaterial(new THREE.MeshBasicMaterial({
                color: 0x005500,
                side: THREE.DoubleSide,
                transparent: transparent,
                opacity: 0
            }), friction,
            restitution),
        0
    );
    ground.position.set(0, .89, 0);
    scene.add(ground);

    for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
            let border = new Physijs.BoxMesh(
                new THREE.BoxGeometry(width / 2 - width / 12, height, height),
                Physijs.createMaterial(new THREE.MeshBasicMaterial({
                        color: 0x002200,
                        side: THREE.DoubleSide,
                        transparent: transparent,
                        opacity: 0
                    }), friction,
                    restitution),
                0
            );
            border.position.set(i * width / 4, 0.99, j * depth / 2 + height / 2 * j);
            scene.add(border);
        }
    }

    for (let i = -1; i <= 1; i += 2) {
        //internal head and tail collision
        let border = new Physijs.BoxMesh(
            new THREE.BoxGeometry(height, height, width / 2 - width / 12),
            Physijs.createMaterial(new THREE.MeshBasicMaterial({
                    color: 0x002200,
                    side: THREE.DoubleSide,
                    transparent: transparent,
                    opacity: 0
                }), friction,
                restitution),
            0
        );
        border.position.set(i * width / 2 + i * height / 2, 0.99, 0);
        scene.add(border);
        //external head and tail collision
        let externalBorder = new Physijs.BoxMesh(
            new THREE.BoxGeometry(height, height, width),
            Physijs.createMaterial(new THREE.MeshBasicMaterial({
                    color: 0x002200,
                    side: THREE.DoubleSide,
                    transparent: transparent,
                    opacity: 0
                }), friction,
                restitution),
            0
        );
        externalBorder.position.set(i * width / 2 + i * height * 1.3, 0.99, 0);
        scene.add(externalBorder);

        let externalBorder2 = new Physijs.BoxMesh(
            new THREE.BoxGeometry(width * 2, height, height),
            Physijs.createMaterial(new THREE.MeshBasicMaterial({
                    color: 0x002200,
                    side: THREE.DoubleSide,
                    transparent: transparent,
                    opacity: 0
                }), friction,
                restitution),
            0
        );
        externalBorder2.position.set(0, 0.99, i * depth / 2 * 1.3);
        scene.add(externalBorder2);
    }

}