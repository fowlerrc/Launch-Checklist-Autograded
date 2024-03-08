// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = ` 
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `
    // Here is the HTML formatting for our mission target div.
    /*
                
    */
}

function validateInput(testInput) {
    if (testInput.length > 0) {
        if (isNaN(testInput)) {
            return "Not a Number"
        } else {
            return "Is a Number"
        }
    } else {
        return "Empty"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        // alert("All Inputs Are Required")
    }
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        // alert("Pilot and Copilot Inputs CANNOT Be Numbers")
    }
    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        // alert("Fuel Levels and Cargo Levels MUST Be Numbers")
    }

    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargoStatus = document.getElementById("cargoStatus")
    const launchStatus = document.getElementById("launchStatus")

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    list.style.visibility = "hidden"

    fuelStatus.innerHTML = "Fuel level high enough for launch"
    cargoStatus.innerHTML = "Cargo mass low enough for launch"
    launchStatus.innerHTML = "Shuttle is Ready for Launch"
    launchStatus.style.color = "green"

    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red"
    }
     if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red"
    }

    list.style.visibility = "visible"
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = parseInt(Math.random()*planets.length)
    return planets[randomIndex]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;