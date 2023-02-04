
const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  btnStart.addEventListener('click', showRandomColor);
  btnStop.addEventListener('click', stopRandomColor);

   function  showRandomColor () {
    timerId = setInterval(() =>{
        const changeRandomColor = getRandomHexColor();
        bodyEl.style.backgroundColor = changeRandomColor; 
    }, 1000);
     
    if(stopRandomColor){
        btnStart.disabled = true;
        btnStop.disabled = false;
    };
};


 function stopRandomColor () {
  clearInterval(timerId);
  if(showRandomColor){
    btnStart.disabled = false;
    btnStop.disabled = true;
  }
};


 
 