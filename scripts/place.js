const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© <span>${today.getFullYear()}✨mitchelle Madumere✨ Nigeria✨</span>`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;


const unit = "C";

const temperature = document.querySelector("#temperature");
const temp = 30;
temperature.innerHTML = `${temp}° ${unit}`;

const condition = document.querySelector("#condition");
condition.textContent = "Mostly Sunny";

const wind = document.getElementById("wind");
const wspeed = 6;
wind.innerHTML = `${wspeed} ${(unit=="C")?"mph":"kmh"}`;

const windchill = document.querySelector("#windchill");
if ((unit == "F" && (temp <= 50 && wspeed > 3)) || (unit == "C" && (temp <= 10 && wspeed > 4.8))) {
    const wchill = chill(temp, wspeed, unit)
    windchill.textContent = `${wchill.toFixed(1)}° ${unit}`;
} else {
    windchill.textContent = `N/A`;
}

function chill(temp, wspeed, unit) {
    if (unit == "C") {
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16);
    } else {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wspeed, 0.16) + 0.3965 * temp * Math.pow(wspeed, 0.16);
    }
}