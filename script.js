// Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 45) + 1;

// Set the background image of the body
document.body.style.backgroundImage = `url("assets/wallpaper/${randomNum}.jpeg")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function updateBatteryIcon(batteryLevel) {
  const percentageElement = document.querySelector('.percentage');
  percentageElement.textContent = Math.round(batteryLevel); // Update the percentage text
}

function getBatteryStatus() {
  navigator.getBattery().then(function (battery) {
    const batteryLevel = battery.level * 100; // Get battery percentage (0-1 scale and convert to percentage)

    // Update the battery percentage text
    updateBatteryIcon(batteryLevel);
  });
}

// Call the function to get the battery status when the page loads
getBatteryStatus();

// Optionally, you can update the battery level periodically
setInterval(getBatteryStatus, 60000); // Update every minute

time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

function updateTime() {
  hour = (hour % 12) || 12; // Convert to 12-hour format
  minute = String(minute).padStart(2, '0'); // Add leading zero if minute is less than 10
  second = String(second).padStart(2, '0'); // Add leading zero if second is less than 10

  const clockElement = document.querySelector('.clock');
  clockElement.textContent = `${hour}:${minute}`; // Update the clock text
}

updateTime(); // Update the time when the page loads
setInterval(updateTime, 1000); // Update every second


// weather

// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const API_KEY = '67aa6ded13d0bfe242e33c585a2247b2';
const CITY = 'Dhaka';
let temp = "";
let condition = "";
let img = "";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

// Fetch weather data
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // Extract relevant data
    const weather = {
      temp: data.main.temp,
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      windSpeed: data.wind.speed
    };

    // Log results (or use in your app)
    temp = Math.floor(`${weather.temp}`);
    condition = weather.condition;
    weatherIcon = weather.icon;
    wind = weather.windSpeed;

    w = document.querySelectorAll(".weather-info *");
    w[1].textContent = temp + "°";
    w[2].src = weatherIcon;
    w[3].textContent = condition + " " + wind + "m/s";
  })
  .catch(error => console.error('Error fetching data:', error));


// fullScreen

document.getElementById('fullscreen-button').addEventListener('click', () => {
  const element = document.documentElement; // Targets the entire page
  const button = document.getElementById('fullscreen-button');

  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
    button.textContent = 'Close'; // Change button text
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    button.textContent = 'Fullscreen'; // Change button text back
  }
});


// Date 
let eDay = document.getElementById('c-day');
let eMon = document.getElementById('c-month');
let eDate = document.getElementById('c-date');

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = dayNames[time.getDay()];
let month = monthNames[time.getMonth()];
let date = time.getDate();

eDay.textContent = day;
eMon.textContent = month;
eDate.textContent = date;