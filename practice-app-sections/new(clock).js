
// get current time
function clock() {
  const today = new Date();
 
  const hour = today.getHours(); // today.toLocaleString("default", { hour: "2-digit", hour12: true }).replace(/AM|PM/, ""); 
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let period = "AM";

  const dayName = today.toLocaleString("default", {weekday: "short"});

  document.querySelector(".hour")
    .innerHTML = hour;

  document.querySelector(".minute")
    .innerHTML = minute;

  document.querySelector(".second")
    .innerHTML = second;

  document.querySelector(".period")
    .innerHTML = period;

  document.querySelector(".day-name")
    .innerHTML = dayName;

// Add 0
if (hour < 10) {
  hour = "0" + hour;    
}

if (minute < 10) {
  minute = "0" + minute;
}

if (second < 10) {
  second = "0" + second;
}

// AM or PM

// if (hour >= 12) {
//    period = "PM";
// };

// Set the 12-hour format

 // hour = hour > 12 ? hour % 12 : hour;

};

// to update time ever 1s
const updateClock = setInterval(clock, 1000);

/* Get the date

const today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();

const dayName = today.toLocaleString("default", {weekday: "short"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".month")
  .innerHTML = monthName;

  document.querySelector(".day-name")
  .innerHTML = dayName;

  document.querySelector(".day-number")
  .innerHTML = dayNumber;

  document.querySelector(".year")
  .innerHTML = year;

*/