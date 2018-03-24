function showCueStick(show) {
    cueStick.children[0].material.opacity = show ? 100 : 0;
    cueStick.children[0].material.transparent = !show;
}

function placeCueStick(position){
    cueStick.position = position;
}