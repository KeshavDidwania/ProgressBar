const days = $(".days_left");
const progressBar = $(".progress");
const perce = $(".prog_percent")
const days_left = "";

let startDate = "09/18/2024";
let endDate = "12/31/2027";
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}/${day}/${year}`;

function daysBetween(day1,day2){
    let date1 = new Date(day1);
    let date2 = new Date(day2);

    let Difference_In_Time = date2.getTime() - date1.getTime();

    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    return(Difference_In_Days)
}
let totalDays = daysBetween(startDate,endDate);
let daysPassed = daysBetween(startDate,currentDate);

days.text(totalDays-daysPassed);
let percent = (daysPassed/totalDays)*100;
percent = Math.round(percent);
let widt = `${percent}%`;
progressBar.width(widt);
perce.text(widt);