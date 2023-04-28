let paths = []
let drawFPS = 60;
let distancePerPoint = 0.5;
let borderColor = document.getElementById('color').innerHTML;
let length = 1;
let pathIndex = 0
let timer = setInterval(animation, 1000 / drawFPS);

document.querySelectorAll('svg').forEach(item => {
    for(let path of item.children) {
        paths.push(path);
    };
});

function animation() {
    if(paths[pathIndex]) {
        let pathLength = paths[pathIndex].getTotalLength();
        length += distancePerPoint;
        paths[pathIndex].style.stroke = borderColor;
        paths[pathIndex].style.strokeDasharray = [length + 1, pathLength].join(' ');

        if(length >= pathLength) {
            clearInterval(timer);
            setTimeout(() => {
                length = 1;
                timer = setInterval(animation, 1000 / drawFPS);
                pathIndex++;
            }, 300);
        };
    };
};