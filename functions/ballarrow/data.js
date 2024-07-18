let balls = [];

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
    
    balls.push(el);
    setTimeout(function() {
        targetarrow(mousePos, el, ballColor);
    }, 5);
});

function targetarrow(mousePos, ballElement, ballColor) {
    const element = document.createElement("div");
    element.classList.add("arrow");
    element.style.left = '0px';
    element.style.top = mousePos.y - 35 + 'px';
    document.body.appendChild(element);

    let arrowPos = 0;
    let id = setInterval(frame, 5);
    
    function frame() { 
        if (arrowPos >= mousePos.x - 100) {
            clearInterval(id);
            element.remove();
            ballElement.remove();
            displaySplatter(mousePos, ballColor);
        } else {
            arrowPos += 2; 
            element.style.left = arrowPos + 'px';
        }
    }  
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
    };

    document.body.appendChild(splatter);
    const audio = new Audio('file:///C:/xampp/htdocs/javascript-functions-practice/arrayfunction/audio/splash-01-35899.mp3');
    audio.play();
}
