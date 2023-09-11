function getcurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay(); 
    return daysOfWeek[currentDayIndex];
}

const dayOfWeekElement = document.getElementById("dayOfWeek");
if (dayOfWeekElement) {
    dayOfWeekElement.textContent = "Today is " + getcurrentDayOfTheWeek();
}

function getcurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const seconds = currentDate.getUTCSeconds();
    return `${hours}:${minutes}:${seconds} UTC`;
}

const utcTimeElement = document.getElementById("utcTime");
if (utcTimeElement) {
    utcTimeElement.textContent = "Current UTC Time: " + getcurrentUTCTime();
    setInterval(function () {
        utcTimeElement.textContent = "Current UTC Time: " + getcurrentUTCTime();
    }, 1000);
}



