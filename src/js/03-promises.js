import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
     e.preventDefault();
     let delay = Number(form.delay.value);
     let step =  Number(form.step.value);
     let amount = form.amount.value;

     for (let i = 1; i <=amount ; i += 1) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
     
        delay += step;
      }  

};

function createPromise(position, delay) {
  const el = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      
        resolve(el);
      } else {
   
        reject(el);
      }
    }, delay);
  });
};
