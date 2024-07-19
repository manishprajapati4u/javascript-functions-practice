document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
      function addElements(event) { 
          //ball
   const ball = document.createElement('div');
   ball.classList.add('ball');
   ball.style.left = `${event.clientX}px`;
   ball.style.top = `${event.clientY}px`;
   container.appendChild(ball);
   //arrow
   const arrow = document.createElement('div');
   arrow.classList.add('arrow');
   arrow.style.left = `${event.clientX}px`;
   arrow.style.top = `${event.clientY}px`;
   container.appendChild(arrow);
    //animation
    function move() {
       let pos = 0;
       let id = setInterval(frame, 5);
       function frame() {
           if (pos >= window.innerWidth) {
               clearInterval(id);
               arrow.remove();
               ball.remove();
              
           } else {
               pos += 5;
               arrow.style.left = pos + 'px';
           }
       }
   }
   move();
   
    }
   
   document.addEventListener('mousedown', function(event) {
     addElements(event);
     });
   });
 
