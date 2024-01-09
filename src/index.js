setInterval(()=> {
let krakow = document.querySelector("#krakow")
let krakowDate = krakow.querySelector(".date")
let place1 = moment().tz("Poland")
krakowDate.innerHTML = place1.format("dddd, Do MMM YYYY")
krakowTime = krakow.querySelector(".time")
krakowTime.innerHTML = place1.format("h:mm:ss [<small>]A[</small>]")
let rome = document.querySelector("#rome")
let romeDate = rome.querySelector(".date")
let place2 = moment().tz("Europe/Rome")
romeDate.innerHTML = place2.format("dddd, Do MMM YYYY")
romeTime = rome.querySelector(".time")
romeTime.innerHTML = place2.format("h:mm:ss [<small>]A[</small>]")
}, 1000)


function addTimes(event) {
    if (event.target.value !== 'choose') {
        let selectedCity = event.target.value;
        if (selectedCity === "guess") {
            selectedCity = moment.tz.guess()
        }
        let place = moment().tz(selectedCity);
        let times = document.querySelector(".times")
        if (document.getElementById(`${selectedCity}`) === null) {
            times.innerHTML += `
                <div class="citie">
                <div class="button" id="button-${selectedCity}"><button>-</button></div>
                <div class="place">${selectedCity.replace("_", " ").split("/")[1]}, ${selectedCity.replace("_", " ").split("/")[0]}</div>
                <div class="date">${place.format("dddd, Do MMM YYYY")}</div>
                <div class="time" id="${selectedCity}">${place.format("h:mm:ss [<small>]A[</small>]")}</div>
            `
            setInterval(() => {
                let currentTime = moment().tz(selectedCity);
                document.getElementById(selectedCity).innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
                }, 1000);   
            }
    }
    let chooseCity = document.querySelector("#chooseCity")
    chooseCity.selectedIndex = 0;
}

let chooseCity = document.querySelector("#chooseCity")
chooseCity.addEventListener("change", addTimes)

function removeTime(event) {
    let selectedCity = event.target.parentElement.id.replace("button-", "");
    let clockToRemove = document.getElementById(selectedCity);
    clockToRemove.parentElement.remove();
}

let clocksContainer = document.querySelector(".clocks");
clocksContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        removeTime(event);
    }
});