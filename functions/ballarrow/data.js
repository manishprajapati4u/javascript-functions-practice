let targetQueue = [];
let isAnimating = false;

window.addEventListener("click", function(event) {
    let mousePos = {
        x: event.clientX,
        y: event.clientY
    };

    const el = document.createElement("div");
    el.classList.add("ball");
    el.style.left = mousePos.x - 35 + 'px';
    el.style.top = mousePos.y - 35 + 'px';
    document.body.appendChild(el);

    const ballColor = getRandomColor();
    el.style.backgroundColor = ballColor;

    targetQueue.push({ mousePos, ballElement: el, ballColor });

    if (!isAnimating) {
        moveToNextTarget();
    }
});

function moveToNextTarget() {
    if (targetQueue.length === 0) {
        isAnimating = false;
        return;
    }

    isAnimating = true;
    const arrow = createArrow();
    const target = targetQueue.shift();
    const { mousePos, ballElement, ballColor } = target;

    const arrowRect = arrow.getBoundingClientRect();
    const arrowWidth = arrowRect.width;
    const arrowHeight = arrowRect.height;

    // Calculate the center of the arrow
    const arrowCenterX = arrowRect.left + arrowWidth / 2;
    const arrowCenterY = arrowRect.top + arrowHeight / 2;

    const distanceX = mousePos.x - arrowCenterX;
    const distanceY = mousePos.y - arrowCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const duration = distance * 1.5; // Adjust speed as needed
    const startTime = performance.now();

    const distanceMultiplier = 0.9456; //for arrow position

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const t = Math.min(elapsedTime / duration, 1);

        const newX = arrowCenterX + distanceX * t - arrowWidth / 2;
        const newY = arrowCenterY + distanceY * t - arrowHeight / 2;

        arrow.style.left = newX + 'px';
        arrow.style.top = newY + 'px';

        const angle = Math.atan2(distanceY, distanceX) * 180 / Math.PI;
        arrow.style.transform = `rotate(${angle}deg)`;

        if (t < 1) {
            requestAnimationFrame(animate);
        } else {
            ballElement.remove();
            displaySplatter(mousePos, ballColor);
            moveToNextTarget(); // Move to the next target
        }
    }

    requestAnimationFrame(animate);
}

function createArrow() {
    let arrow = document.getElementById('arrow');
    if (!arrow) {
        arrow = document.createElement("div");
        arrow.id = 'arrow';
        arrow.classList.add("arrow");
        document.body.appendChild(arrow);
    }
    return arrow;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function displaySplatter(mousePos, color) {
    const splatter = document.createElement("div");
    splatter.classList.add("splatter");
    splatter.style.left = mousePos.x - 50 + 'px';
    splatter.style.top = mousePos.y - 50 + 'px';
    splatter.style.backgroundColor = color;

    const img = new Image();
    img.src = 'https://images.vexels.com/content/137968/preview/cartoon-stain-splatter-17b115.png';
    img.onload = function() {
        splatter.style.maskImage = `url(${img.src})`;
      //  splatter.style.webkitMaskImage = `url(${img.src})`; // For Safari
    };
    const audio = new Audio('file:///C:/xampp/htdocs/javascript-functions-practice/arrayfunction/audio/splash-01-35899.mp3');
    audio.play();

    document.body.appendChild(splatter);
}