const calDate = document.getElementById("cal-date");
const calDay = document.getElementById("cal-day");
const calMonth = document.getElementById("cal-month");
const calYear = document.getElementById("cal-year");

const today = new Date();

calDate.innerHTML = (today.getDate() < 10 ? "0" : "") today.getDate();
calDay.innerHTML = today.toLocaleString("default", {weekday: "long"});
calMonth.innerHTML = today.toLocaleString("default", {month: "long"});
calYear.innerHTML = today.getFullYear();