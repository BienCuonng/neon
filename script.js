/* script.js */
const cursors = document.querySelectorAll('.cursor');
const trailCount = cursors.length;
let mouseX = 0, mouseY = 0;
const positions = Array(trailCount).fill({x: 0, y: 0});

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursors() {
    positions.push({x: mouseX, y: mouseY});
    positions.shift();
    
    cursors.forEach((cursor, index) => {
        cursor.style.left = positions[index].x + 'px';
        cursor.style.top = positions[index].y + 'px';
    });
    
    requestAnimationFrame(animateCursors);
}

animateCursors();
