// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= ${imageUrl}>
    `
};

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if ( !isNaN(testInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {

        alert("All fields are required!"); 

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {

        alert("Make sure to enter valid information for each field!");

    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {

        alert("Make sure to enter valid information for each field!");

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {

        list.style.visibility = "visible";
        pilotStatus.innerText = `Pilot ${pilot} is READY for launch.`
        copilotStatus.innerText = `Co-pilot ${copilot} is READY for launch.`
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        fuelStatus.innerText = "Fuel level too LOW for launch.";
        cargoStatus.innerText = "Cargo mass too HIGH for launch.";
        launchStatus.style.color = "red";

    } else if (fuelLevel < 10000 && cargoLevel < 10000) {

        list.style.visibility = "visible";
        pilotStatus.innerText = `Pilot ${pilot} is READY for launch.`
        copilotStatus.innerText = `Co-pilot ${copilot} is READY for launch.`
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        fuelStatus.innerText = "Fuel level too LOW for launch.";
        launchStatus.style.color = "red";

    } else if (cargoLevel > 10000 && fuelLevel > 10000) {

        list.style.visibility = "visible";
        pilotStatus.innerText = `Pilot ${pilot} is READY for launch.`
        copilotStatus.innerText = `Co-pilot ${copilot} is READY for launch.`
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        cargoStatus.innerText = "Cargo mass too high for launch.";
        launchStatus.style.color = "red";

    } else {

        list.style.visibility = "visible";
        pilotStatus.innerText = `Pilot ${pilot} is READY for launch.`
        copilotStatus.innerText = `Co-pilot ${copilot} is READY for launch.`
        launchStatus.innerText = "Shuttle Ready for Launch";
        fuelStatus.innerText = "Fuel level high enough for launch.";
        cargoStatus.innerText = "Cargo mass low enough for launch.";
        launchStatus.style.color = "green";

    };
};
           

async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

    return response.json();

        });

    return planetsReturned;
};

function pickPlanet(planets) {

    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];

};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
