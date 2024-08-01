window.addEventListener("click", function(event){
    mousePos = {
        x: event.clientX,
        y: event.clientY
    };
   const el = document.createElement("div");
   el.classList.add("ball");
   el.style.left = mousePos.x - 35 + 'px';
   el.style.top = mousePos.y - 35 + 'px';
   this.document.body.appendChild(el);

   setTimeout(targetarrow, 10);

})

function targetarrow() {
  let id = null;
  const element = document.createElement("div");
  element.classList.add("arrow");
  element.style.top = mousePos.y - 35 + 'px';;
  const arrow = this.document.body.appendChild(element);
  let arrowPos = 0;

  clearInterval(id);
  id = setInterval(frame, 5);
  function frame(){
    if (arrowPos ==  mousePos.x - 35) {
      clearInterval(id);
    } else {
      arrowPos++; 
      arrow.style.left = arrowPos + 'px';
    }
   }

  // id = setInterval(() => {
  //   if (arrowPos == mousePos.x-35+'Px') {
  //     clearInterval(id);
  //   } else {
  //     arrowPos++; 
  //     arrow.style.left = mousePos.x;
  //   }
  // }, 10);
}


