setInterval(()=> {
let paris = document.querySelector("#paris")
let parisDate = paris.querySelector(".date")
let place1 = moment().tz("Europe/Paris")
parisDate.innerHTML = place1.format("dddd, Do MMM YYYY")
parisTime = paris.querySelector(".time")
parisTime.innerHTML = place1.format("h:mm:ss [<small>]A[</small>]")

let lisbon = document.querySelector("#lisbon")
let lisbonDate = lisbon.querySelector(".date")
let place2 = moment().tz("Europe/Lisbon")
lisbonDate.innerHTML = place2.format("dddd, Do MMM YYYY")
lisbonTime = lisbon.querySelector(".time")
lisbonTime.innerHTML = place2.format("h:mm:ss [<small>]A[</small>]")
}, 1000)


function addTimes(event) {
    let selectedCity = event.target.value;
    let place = moment().tz(selectedCity);
    let clocks = document.querySelector(".clocks")
    clocks.innerHTML += `
    <div class="times">
            <div class="citie">
            <div class="button"><button>-</button></div>
            <div class="place">${event.target.value.replace("_", " ").split("/")[1]}, ${event.target.value.replace("_", " ").split("/")[0]}</div>
            <div class="date">${place.format("dddd, Do MMM YYYY")}</div>
            <div class="time" id="${selectedCity}">${place.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
   `
    setInterval(() => {
        let currentTime = moment().tz(selectedCity);
        document.getElementById(selectedCity).innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
        }, 1000);
}
let c
hooseCity = document.querySelector("#chooseCity")
chooseCity.addEventListener("change", addTimes)