const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const startBtn = document.getElementById("startBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noMessage = document.getElementById("noMessage");

const messages = [
    "🤔 مطمئنی؟",
    "🥺 فکراتو بکن...",
    "💕 دکمه آره داره صدات میزنه!",
    "😅 هنوز روی نه اصرار داری؟",
    "🥹 فقط یه آره بگو..."
];

let noClick = 0;
let yesScale = 1;
let noScale = 1;

startBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

noBtn.addEventListener("click", () => {

    if(noClick < messages.length){
        noMessage.innerText = messages[noClick];
    }

    noClick++;

    yesScale += 0.15;
    noScale -= 0.12;
    console.log(yesScale, noScale);
    yesBtn.style.width = `${120 * yesScale}px`;
yesBtn.style.height = `${50 * yesScale}px`;
    if(noScale > 0.35){
        noBtn.style.width = `${120 * noScale}px`;
noBtn.style.height = `${50 * noScale}px`;
        noBtn.style.opacity = noScale;
    }else{
        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
    }

});
const page3 = document.getElementById("page3");

yesBtn.addEventListener("click", () => {

    page2.classList.remove("active");
    page3.classList.add("active");

});
const calendar = document.getElementById("calendar");
const dateInput = document.getElementById("dateInput");
const monthTitle = document.getElementById("monthTitle");
const days = document.getElementById("days");

const prevMonth = document.getElementById("prevMonth");
const Month = document.getElementById("nextMonth");
const months = [
"فروردین",
"اردیبهشت",
"خرداد",
"تیر",
"مرداد",
"شهریور",
"مهر",
"آبان",
"آذر",
"دی",
"بهمن",
"اسفند"
];
const monthDays = [
    31, // فروردین
    31, // اردیبهشت
    31, // خرداد
    31, // تیر
    31, // مرداد
    31, // شهریور
    30, // مهر
    30, // آبان
    30, // آذر
    30, // دی
    30, // بهمن
    29  // اسفند (فعلاً)
];

let currentMonth = 5;
let currentYear = 1405;
let selectedDay = null;
let selectedFoodName = "";
function drawCalendar(){

    monthTitle.innerText =
    months[currentMonth] + " " + currentYear;
const daysContainer = document.getElementById("days");
daysContainer.innerHTML = "";
// فاصله قبل از شروع ماه
let startDay = (currentMonth + currentYear) % 7;

for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    daysContainer.appendChild(empty);
}


const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
for (let i = 1; i <= monthDays[currentMonth]; i++) {
    const day = document.createElement("button");
    day.innerText = i;
    // بررسی تاریخ‌های گذشته
if (currentYear === 1405 && currentMonth === 5 && i < 5) {
    day.disabled = true;
    day.classList.add("disabled-day");
}
    // بررسی تاریخ‌های گذشته
if (currentYear === 1405 && currentMonth === 5 && i < 5) {
    day.disabled = true;
    day.classList.add("disabled-day");
}

   day.addEventListener("click", function () {

    const input = document.getElementById("dateInput");
    const cal = document.getElementById("calendar");

    input.value = monthNames[currentMonth] + " " + this.innerText + " " + currentYear;
    if(selectedDay){
    selectedDay.classList.remove("selected-day");
}

this.classList.add("selected-day");
selectedDay = this;
    cal.style.display = "none";

});

    daysContainer.appendChild(day);
}
}
drawCalendar();
dateInput.addEventListener("click", () => {
    if (calendar.style.display === "block") {
        calendar.style.display = "none";
    } else {
        calendar.style.display = "block";
    }
});


document.getElementById("prevMonth").addEventListener("click", () => {

    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    drawCalendar();

});


document.getElementById("nextMonth").addEventListener("click", () => {

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    drawCalendar();

});
const timeInput = document.getElementById("timeInput");
const timePicker = document.getElementById("timePicker");
const closeTimePicker = document.getElementById("closeTimePicker");
const confirmTime = document.getElementById("confirmTime");
timeInput.addEventListener("click", function (e) {

    e.preventDefault();

    timePicker.style.display = "flex";

});

closeTimePicker.addEventListener("click", function () {


});

const hourWheel = document.getElementById("hourWheel");
const minuteWheel = document.getElementById("minuteWheel");
let selectedHour = null;
let selectedHourValue = "00";
let selectedMinuteValue = "00";

for(let i = 0; i < 24; i++){

    const item = document.createElement("div");

    item.className = "wheel-item";

    item.innerText = i.toString().padStart(2,"0");

    item.addEventListener("click",function(){

        if(selectedHour){

            selectedHour.classList.remove("selected-hour");

        }

        this.classList.add("selected-hour");

        selectedHour = this;
        selectedHourValue = this.innerText;
timeInput.value = selectedHourValue + ":" + selectedMinuteValue;

    });

    hourWheel.appendChild(item);

}
let selectedMinute = null;

for(let i = 0; i < 60; i++){

    const item = document.createElement("div");

    item.className = "wheel-item";

    item.innerText = i.toString().padStart(2,"0");

    item.addEventListener("click",function(){

        if(selectedMinute){

            selectedMinute.classList.remove("selected-hour");

        }

        this.classList.add("selected-hour");

        selectedMinute = this;
        selectedMinuteValue = this.innerText;
timeInput.value = selectedHourValue + ":" + selectedMinuteValue;


    });

    minuteWheel.appendChild(item);

}
confirmTime.addEventListener("click", function(){

    timeInput.value = selectedHourValue + ":" + selectedMinuteValue;

    timePicker.style.display = "none";

});
const nextToFood = document.getElementById("nextToFood");

nextToFood.addEventListener("click", function(){

    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;


    if(date === ""){

        alert("لطفاً تاریخ را انتخاب کن 📅");
        return;

    }


    if(time === ""){

        alert("لطفاً ساعت را انتخاب کن 🕒");
        return;

    }


    page3.classList.remove("active");
    page4.classList.add("active");

});
const foodCards = document.querySelectorAll(".food-card");
const foodNextBtn = document.getElementById("foodNextBtn");
let selectedFood = null;

foodCards.forEach(card => {

    card.addEventListener("click", function(){

        if(selectedFood){

            selectedFood.classList.remove("selected");

        }

        this.classList.add("selected");

        selectedFood = this;
        selectedFoodName = this.querySelector("h3").innerText;
        foodNextBtn.disabled = false;
foodNextBtn.classList.add("active");

    });

});
foodNextBtn.addEventListener("click", function(){

    const finalInfo = document.getElementById("finalInfo");

    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;

    finalInfo.innerHTML =
    "📅 تاریخ: " + date +
    "<br><br>" +
    "🕒 ساعت: " + time +
    "<br><br>" +
    "🍽 غذا: " + selectedFoodName;

    page4.classList.remove("active");
    page5.classList.add("active");

    const message =
"💌 دعوت جدید\n\n" +
"📅 تاریخ: " + date + "\n" +
"🕒 ساعت: " + time + "\n" +
"🍽 غذا: " + selectedFoodName;


fetch("https://api.telegram.org/bot8717034225:AAGKbxTpCFmV-gtbiOl6Faj_2KPwbMT1_Kw/sendMessage", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        chat_id:"8079308517",
        text:message
    })
});

});