import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectDate;
let dateNow = new Date();

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0];
    dateComparison(selectDate, dateNow);
  },
};
//   ------------------------------------
startBtn.addEventListener('click', startСountdown);


flatpickr('#datetime-picker', options);

function dateComparison(selected, now) {
  if (selected < now) {
    startBtn.disabled = true;
    alert('Please choose a date in the future');
  } else startBtn.disabled = false;
}



function startСountdown() {
  startBtn.disabled = true;
  setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      selectDate.getTime() - Date.now()
    );
    daysRef.textContent = pad(days);
    hoursRef.textContent = pad(hours);
    minutesRef.textContent = pad(minutes);
    secondsRef.textContent = pad(seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
