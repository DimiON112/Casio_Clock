const timeElement = document.getElementById("display");
const dateElement = document.getElementById("date");

let setType = true;
let is24HourFormat = true;

document.getElementById("hr24").onclick = function()
{
    is24HourFormat = !is24HourFormat;
    updateTime();
}

function timeFormat(hours)
{
    if (is24HourFormat === true)
    {
        return hours.toString().padStart(2,'0');
    }
    else
    {
        const formattedHours = (hours % 12) || 12;
        return formattedHours.toString().padStart(2,'0');
    }
}

function updateTime()
{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${timeFormat(hours)} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')} | ${is24HourFormat ? '24H' : 'AM'}`
    timeElement.innerText=clockStr;
}

function updateDate()
{
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const dateStr =  `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year.toString().padStart(2)}`

    dateElement.innerText=dateStr;
}



updateTime();
const myInterval = setInterval(updateTime,1000);

updateDate();
setInterval(updateDate,1000);