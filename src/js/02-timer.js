
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const input = document.getElementById("datetime-picker");
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');

btnStart.disabled = true;
let timerId = null;
let selectData = null;

function addLeadingZero(value){
  return String(value).padStart(2,'0')
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    console.log(selectedDates[0]);
    console.log(options.defaultDate);

    
    if(selectedDates[0] < new Date()){
       btnStart.disabled = true;
   
       return  Notify.failure(' ❌ Please choose a date in the future!');
    
       }
   btnStart.disabled = false;
        selectData = new Date(selectedDates[0]);
      },
};

const timer = () => {
  const nowTime = new Date();
  console.log(nowTime);

  const timerTime = selectData.getTime() - nowTime.getTime();
  console.log(timerTime);
  const { days, hours, minutes, seconds } = convertMs(timerTime);
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  min.textContent = addLeadingZero(minutes);
  sec.textContent = addLeadingZero(seconds);

  if (
      day.textContent === '00' &&
      hour.textContent === '00' &&
      min.textContent === '00' &&
     sec.textContent === '00'
  ) {
      clearInterval(timerId);
  }
};


flatpickr( input, options);

 btnStart.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId);
  }
timer();
timerId = setInterval(timer, 1000);
btnStart.disabled = true;
});



function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};








