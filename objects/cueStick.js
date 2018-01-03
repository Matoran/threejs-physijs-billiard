
function createCueStick(){
    let radiusTop = 0.01;
    let radiusBottom = 0.02;
    let height = 1;
    let radialSegment = 32;
    /*let width = 0.1;
    let depth = 1;
    let cueStick = new Physijs.BoxMesh(
        new THREE.BoxGeometry(width, height, depth),
        Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0x005500, side: THREE.DoubleSide}), 0, 1),
        0
    );*/
    let geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegment);
    geometry.translate( 0, -height/2-0.025, 0 );
    let cueStick = new THREE.Mesh(
        geometry,
        Physijs.createMaterial(new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide}), 0, 1),
        0
    );
    cueStick.rotation.x = Math.PI / 2;
    cueStick.position.y = 0.02;

    scene.add(cueStick);
    return cueStick;
}