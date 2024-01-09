setInterval(()=> {
let krakow = document.querySelector("#krakow")
let krakowDate = krakow.querySelector(".date")
let place = moment().tz("Poland")
krakowDate.innerHTML = place.format("dddd, Do MMM YYYY")
krakowTime = krakow.querySelector(".time")
krakowTime.innerHTML = place.format("h:mm:ss [<small>]A[</small>]")
}, 1000)


function addTimes(event) {
    let selectedCity = event.target.value;
    let place = moment().tz(selectedCity);
    let times = document.querySelector(".times")
    times.innerHTML += `
        <div class="citie">
        <div class="button" id="button-${selectedCity}"><button>-</button></div>
        <div class="place">${event.target.value.replace("_", " ").split("/")[1]}, ${event.target.value.replace("_", " ").split("/")[0]}</div>
        <div class="date">${place.format("dddd, Do MMM YYYY")}</div>
        <div class="time" id="${selectedCity}">${place.format("h:mm:ss [<small>]A[</small>]")}</div>
   `
    setInterval(() => {
        let currentTime = moment().tz(selectedCity);
        document.getElementById(selectedCity).innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
        }, 1000);
}

let chooseCity = document.querySelector("#chooseCity")
chooseCity.addEventListener("change", addTimes)

function removeTime(event) {
    let selectedCity = event.target.parentElement.id.replace("button-", "");
    let clockToRemove = document.getElementById(selectedCity);
    clockToRemove.parentElement.remove();
}

// Add the removeTime function to the click event of the button
let clocksContainer = document.querySelector(".clocks");
clocksContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        removeTime(event);
    }
});