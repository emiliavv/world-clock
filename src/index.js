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
    let place = moment().tz(event.target.value)
    let clocks = document.querySelector(".clocks")
    clocks.innerHTML += `
    <div class="times">
            <div class="citie" id="paris">
            <div class="place">${event.target.value.replace("_", " ").split("/")[1]}</div>
            <div class="date">${place.format("dddd, Do MMM YYYY")}</div>
            <div class="time">${place.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
   `
}
let chooseCity = document.querySelector("#chooseCity")
chooseCity.addEventListener("change", addTimes)